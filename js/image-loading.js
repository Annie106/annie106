(function () {
    'use strict';

    if (window.AnnieImageLoading) return;

    var FAST_ACCESS_KEY = 'annie-manor-fast-last-access';
    var FAST_COOLDOWN_MS = 20000;
    var managedImages = new WeakSet();
    var slowPreviewImages = new WeakMap();
    var fastDecision = null;
    var storageName = 'localStorage';

    function log(message, url) {
        console.info('%c[图片加载] ' + message, 'color:#8a8a8a;', url || '');
    }

    function readLastFastAccess() {
        try {
            return Number(window.localStorage.getItem(FAST_ACCESS_KEY)) || 0;
        } catch (localError) {
            storageName = 'sessionStorage';
            try {
                return Number(window.sessionStorage.getItem(FAST_ACCESS_KEY)) || 0;
            } catch (sessionError) {
                storageName = 'memory';
                console.warn('[图片加载] 无法读取高速访问记录，将仅在当前页面限制访问。');
                return 0;
            }
        }
    }

    function rememberFastAccess() {
        var timestamp = String(Date.now());
        try {
            window.localStorage.setItem(FAST_ACCESS_KEY, timestamp);
            storageName = 'localStorage';
            return;
        } catch (localError) {
            storageName = 'sessionStorage';
        }
        try {
            window.sessionStorage.setItem(FAST_ACCESS_KEY, timestamp);
            return;
        } catch (sessionError) {
            storageName = 'memory';
            console.warn('[图片加载] 无法持久化高速访问记录，将仅在当前页面限制访问。');
        }
    }

    function shouldUseFast() {
        if (fastDecision !== null) return fastDecision;
        var lastAccess = readLastFastAccess();
        var age = Date.now() - lastAccess;
        fastDecision = !(lastAccess > 0 && age >= 0 && age < FAST_COOLDOWN_MS);
        log(
            fastDecision
                ? '最近 20 秒未访问高速链接，本次允许优先使用高速链接（存储：' + storageName + '）'
                : '最近 20 秒内访问过高速链接，本次使用慢速链接（存储：' + storageName + '）'
        );
        return fastDecision;
    }

    function installStyles(doc) {
        if (!doc.head || doc.getElementById('annie-image-loading-styles')) return;
        var style = doc.createElement('style');
        style.id = 'annie-image-loading-styles';
        style.textContent =
            '.annie-image-loading{' +
                'background-color:var(--annie-image-tone,#e8e4de);' +
                'background-size:cover;background-position:center;background-repeat:no-repeat;' +
                'filter:blur(20px);transform:scale(1.04);' +
            '}' +
            '@keyframes annie-image-reveal{' +
                'from{filter:blur(20px);transform:scale(1.04)}' +
                'to{filter:blur(0);transform:scale(1)}' +
            '}' +
            '.annie-image-revealing{' +
                'animation:annie-image-reveal .5s cubic-bezier(.22,.61,.36,1) both;' +
            '}' +
            '@media(prefers-reduced-motion:reduce){' +
                '.annie-image-revealing{animation:none}' +
            '}';
        doc.head.appendChild(style);
    }

    function startSlowPreview(img, slowSrc) {
        var existing = slowPreviewImages.get(img);
        if (existing) return existing;

        var doc = img.ownerDocument;
        var preview = doc.createElement('img');
        preview.decoding = 'async';
        if ('fetchPriority' in preview) preview.fetchPriority = 'low';
        preview.addEventListener('load', function () {
            log('慢速大图已在后台预加载完成', slowSrc);
        }, { once: true });
        preview.addEventListener('error', function () {
            log('慢速大图后台预加载失败', slowSrc);
        }, { once: true });
        slowPreviewImages.set(img, preview);
        preview.src = slowSrc;
        return preview;
    }

    function configurePlaceholder(img) {
        var tone = img.getAttribute('data-tone');
        var lqip = img.getAttribute('data-lqip');
        if (tone) img.style.setProperty('--annie-image-tone', tone);
        if (lqip) {
            img.style.backgroundImage = 'url("' + lqip.replace(/"/g, '\\"') + '")';
            img.style.backgroundSize = 'cover';
            img.style.backgroundPosition = 'center';
        }

        var frame = img.closest('.manor-shot');
        if (frame) {
            if (tone) frame.style.setProperty('--manor-tone', tone);
            if (lqip) frame.style.setProperty('--manor-lqip', 'url("' + lqip + '")');
        }
    }

    function settleImage(img, loaded, animate) {
        img.classList.remove('annie-image-loading');
        var frame = img.closest('.manor-shot');
        var reduceMotion = window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (loaded && animate && !reduceMotion) {
            var revealClass = frame ? 'is-revealing' : 'annie-image-revealing';
            img.classList.add(revealClass);
            img.addEventListener('animationend', function () {
                img.classList.remove(revealClass);
            }, { once: true });
            window.setTimeout(function () {
                img.classList.remove(revealClass);
            }, 600);
        } else {
            img.classList.remove('annie-image-revealing');
            img.classList.remove('is-revealing');
        }

        if (frame) {
            frame.classList.add('is-ready');
        }

        if (window.parent !== window) {
            window.parent.postMessage({
                type: 'annie-embedded-height',
                height: Math.ceil(
                    img.ownerDocument.body.getBoundingClientRect().bottom +
                    (img.ownerDocument.defaultView.scrollY || 0)
                )
            }, '*');
        }
    }

    function initializeImage(img) {
        if (managedImages.has(img) || img.classList.contains('avatar') ||
            img.id === 'manorLightboxImage' || img.closest('.manor-lightbox') ||
            img.closest('.manor-shot')) {
            return;
        }
        managedImages.add(img);

        var fastSrc = (img.getAttribute('data-fast-src') || '').trim();
        var slowSrc = (img.getAttribute('data-slow-src') || '').trim();
        var currentSrc = img.getAttribute('src') || '';
        if (!slowSrc && currentSrc) {
            slowSrc = currentSrc;
            if (fastSrc) img.setAttribute('data-slow-src', slowSrc);
        }
        if (!slowSrc && fastSrc) {
            console.warn('[图片加载] 配置了高速链接但缺少 data-slow-src，已跳过该图片。', fastSrc);
            return;
        }
        if (!slowSrc) return;

        configurePlaceholder(img);

        var useFast = Boolean(fastSrc && slowSrc && shouldUseFast());
        var selectedSrc = useFast ? fastSrc : slowSrc;
        var settled = false;

        if (useFast) {
            rememberFastAccess();
            img.setAttribute('data-fast-active', 'true');
        } else if (slowSrc) {
            img.removeAttribute('data-fast-active');
            img.setAttribute('data-slow-active', 'true');
        }

        img.addEventListener('load', function () {
            if (settled) return;
            settled = true;
            log(
                img.getAttribute('data-fast-active') === 'true'
                    ? '高速链接加载成功'
                    : '慢速链接加载成功',
                img.currentSrc || img.src
            );
            settleImage(img, true, true);
        });

        img.addEventListener('error', function () {
            if (img.getAttribute('data-fast-active') === 'true' && slowSrc) {
                img.removeAttribute('data-fast-active');
                img.setAttribute('data-slow-active', 'true');
                log('高速链接加载失败，回退到慢速链接', fastSrc);
                img.src = slowSrc;
                return;
            }
            if (settled) return;
            settled = true;
            img.setAttribute('data-load-failed', 'true');
            log('图片加载失败', img.currentSrc || img.src || selectedSrc);
            settleImage(img, false, false);
        });

        img.classList.add('annie-image-loading');
        if (selectedSrc && currentSrc !== selectedSrc) img.src = selectedSrc;

        if (img.complete && img.naturalWidth > 0) {
            settled = true;
            settleImage(img, true, false);
        } else if (img.complete && selectedSrc) {
            settled = true;
            img.setAttribute('data-load-failed', 'true');
            log('图片加载失败', selectedSrc);
            settleImage(img, false, false);
        }

        if (useFast) {
            var doc = img.ownerDocument;
            if ('IntersectionObserver' in doc.defaultView) {
                var observer = new doc.defaultView.IntersectionObserver(function (entries) {
                    if (!img.isConnected) {
                        observer.disconnect();
                        return;
                    }
                    if (!entries.some(function (entry) { return entry.isIntersecting; })) return;
                    observer.disconnect();
                    startSlowPreview(img, slowSrc);
                }, { rootMargin: '200px 0px' });
                observer.observe(img);
            } else {
                startSlowPreview(img, slowSrc);
            }
        }

        window.setTimeout(function () {
            if (settled) return;
            settled = true;
            settleImage(img, false, false);
        }, 2500);
    }

    function initialize(root) {
        var doc = root.nodeType === 9 ? root : root.ownerDocument;
        var childApi = doc.defaultView && doc.defaultView.AnnieImageLoading;
        if (childApi && childApi !== api) {
            childApi.initialize(root);
            return;
        }
        installStyles(doc);

        if (root.nodeType === 1 && root.matches('img')) initializeImage(root);
        root.querySelectorAll('img').forEach(initializeImage);

        if (doc.__annieImageLoadingObserver) return;
        var Observer = doc.defaultView.MutationObserver;
        if (!Observer || !doc.documentElement) return;
        doc.__annieImageLoadingObserver = new Observer(function (records) {
            records.forEach(function (record) {
                record.addedNodes.forEach(function (node) {
                    if (node.nodeType === 1) initialize(node);
                });
            });
        });
        doc.__annieImageLoadingObserver.observe(doc.documentElement, {
            childList: true,
            subtree: true
        });
    }

    var api = {
        initialize: initialize,
        getPreviewImage: function (img) {
            var slowSrc = (img.getAttribute('data-slow-src') || '').trim();
            if (!slowSrc) return null;
            return startSlowPreview(img, slowSrc);
        }
    };
    window.AnnieImageLoading = api;

    initialize(document);
})();
