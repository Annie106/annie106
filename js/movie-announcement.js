/* =========================================================
   电影板块 · 服务公告（movie-announcement.js）
   ---------------------------------------------------------
   要点：
   1. 电影模块（#movieFrame 里的 movie.html）一加载完就立刻出现，不留
      空档：播放器从进入文档起就 pointer-events:none，绕不过去也点不到
      视频列表。
   2. 不是全屏蒙层：只占导航栏下方的内容区域，顶部导航始终保持
      可见可点；卡片用站内的描边 + 小圆角，不加光晕/模糊/呼吸点。
   3. 不能关闭：没有关闭按钮，Esc、点空白都没反应，页面上也没有
      任何交互能把它收掉；只有切走电影视图才会隐藏，重新进入电影
      板块再提示一次。刷新博客前，它一直留在原处。
   4. 防删除：内容放在 Shadow DOM 里，站内 CSS / 插件改不到内部
      样式；MutationObserver 盯着 DOM，宿主被删立刻挂回去；
      400ms 巡检兜底，顺带修复被内联样式隐藏的情况。
   ========================================================= */
(function () {
    'use strict';

    if (window.__annieMovieNotice) return;
    window.__annieMovieNotice = true;

    var HOST_ID = 'movieServiceNotice';
    var SHOW_DELAY = 0;         // 模块加载完立刻出现，不再等 1 秒
    var GUARD_INTERVAL = 400;   // 反删除巡检间隔
    var READY_TIMEOUT = 5000;   // 等模块就绪的最长时间

    /* 宿主的几何样式：内联 + !important，外部样式表改不动。
       top 由 positionHost() 按导航栏实际高度单独写入。 */
    var MOUNT_STYLE = [
        'position:fixed!important',
        'left:0!important', 'right:0!important', 'bottom:0!important',
        'margin:0!important', 'padding:0!important', 'border:0!important',
        'background:transparent!important',
        /* 低于 .site-header 的 z-index(100)：万一几何算偏一两个像素，
           导航栏也永远压在这层之上 */
        'z-index:90!important',
        'display:block!important', 'visibility:visible!important', 'opacity:1!important',
        'pointer-events:auto!important',
        'transform:none!important', 'filter:none!important',
        'clip:auto!important', 'clip-path:none!important'
    ].join(';');

    var ANNOUNCE_CSS = [
        ':host{',
        '  display:block;',
        '  font-family:var(--font-sans,"PingFang SC","Noto Sans SC","Microsoft YaHei UI","Microsoft YaHei",sans-serif);',
        '  -webkit-font-smoothing:antialiased;',
        '  color:var(--color-text-primary,#1a1a1a);',
        '  text-align:left;',
        '}',
        /* Shadow DOM 里没有站内的全局重置，自己补一份 */
        '*,*::before,*::after{box-sizing:border-box}',
        /* 只覆盖正文那一列，两侧留白不挡；顶部导航在宿主上方，不受影响 */
        '.mn-layer{',
        '  position:absolute; inset:0;',
        '  max-width:var(--max-width,1080px); margin:0 auto;',
        '  display:flex; align-items:center; justify-content:center;',
        '  padding:20px;',
        '  background:rgba(15,17,21,.2);',
        '  border-radius:8px;',
        '}',
        '.mn-card{',
        '  width:min(400px,100%);',
        '  padding:20px 22px;',
        '  border:1px solid var(--color-border,#eaeaea);',
        '  border-radius:10px;',
        '  background:var(--color-bg,#fff);',
        '  color:var(--color-text-primary,#1a1a1a);',
        /* 只留一层贴地投影：贴边收紧，不做大范围灰雾 */
        '  box-shadow:',
        '    0 1px 2px rgba(16,24,40,.06),',
        '    0 4px 10px -6px rgba(16,24,40,.16);',
        '  opacity:0; transform:translateY(6px);',
        '  transition:opacity .2s ease, transform .24s ease;',
        '}',
        '.mn-layer.is-open .mn-card{opacity:1; transform:none}',
        '.mn-title{',
        '  margin:0 0 8px;',
        '  font-size:16px; font-weight:600; line-height:1.5;',
        '}',
        '.mn-desc{',
        '  margin:0;',
        '  font-size:13.5px; line-height:1.75;',
        '  color:var(--color-text-secondary,#6b6b6b);',
        '}',
        '.mn-desc strong{color:var(--color-text-primary,#1a1a1a); font-weight:600}',
        '.mn-meta{',
        '  margin:10px 0 0;',
        '  font-size:12px; line-height:1.6;',
        '  color:var(--color-text-tertiary,#999);',
        '}',
        '@media (max-width:520px){',
        '  .mn-layer{padding:16px; border-radius:0}',
        '  .mn-card{padding:18px}',
        '}',
        '@media (prefers-reduced-motion:reduce){',
        '  .mn-card{transition:none; transform:none}',
        '}'
    ].join('\n');

    var ANNOUNCE_HTML = [
        '<div class="mn-card" role="note">',
        '  <h2 class="mn-title">电影功能暂停服务</h2>',
        '  <p class="mn-desc"><strong>上游存储服务异常</strong>，正在紧急处理。修复完成前，电影板块不再提供播放服务。</p>',
        '  <p class="mn-meta">恢复时间待定 · 感谢理解</p>',
        '</div>'
    ].join('');

    var host = null;
    var shadow = null;
    var layer = null;
    var openState = false;
    var showTimer = 0;
    var guardTimer = 0;
    var observer = null;
    var viewObserver = null;
    var rafId = 0;

    /* ==================== 构建 ==================== */

    function buildHost() {
        host = document.createElement('div');
        host.id = HOST_ID;
        host.style.cssText = MOUNT_STYLE;
        shadow = host.attachShadow({ mode: 'open' });
        render();
    }

    /* 渲染/重建阴影内容：被清空时也能自己长回来 */
    function render() {
        if (!shadow) return;

        shadow.textContent = '';

        var style = document.createElement('style');
        style.textContent = ANNOUNCE_CSS;

        var wrap = document.createElement('div');
        wrap.className = 'mn-layer';
        wrap.innerHTML = ANNOUNCE_HTML;

        shadow.appendChild(style);
        shadow.appendChild(wrap);

        layer = wrap;
    }

    /* 按导航栏底边和电影视图的实际位置算宿主范围：
       导航永远露在外面，下方的页脚/留白也不会被一起压暗 */
    function positionHost() {
        if (!host) return;

        var top = 0;
        var header = document.querySelector('.site-header');
        if (header) {
            var headerRect = header.getBoundingClientRect();
            if (headerRect.height > 0) top = Math.round(headerRect.bottom + 10);
        }

        var bottom = 0;
        var view = document.getElementById('view-movie');
        if (view) {
            var viewRect = view.getBoundingClientRect();
            if (viewRect.height > 0) {
                top = Math.max(top, Math.round(viewRect.top));
                bottom = Math.max(0, Math.round(window.innerHeight - viewRect.bottom));
            }
        }

        // 视口太矮时至少留出导航的位置，不做负值裁切
        top = Math.max(0, Math.min(top, window.innerHeight - 120));

        host.style.setProperty('top', top + 'px', 'important');
        host.style.setProperty('bottom', bottom + 'px', 'important');
    }

    function ensureMounted() {
        if (!host) buildHost();

        var parent = document.body || document.documentElement;
        if (host.parentNode !== parent) parent.appendChild(host);

        // 内联样式被改掉（display:none / visibility:hidden 等）就写回去
        host.style.cssText = MOUNT_STYLE;
        positionHost();

        // 阴影内容被清空就重建
        if (!layer || !layer.isConnected || !shadow.querySelector('.mn-card')) render();

        // 重建后如果本该显示，把显示态补回来
        if (openState && layer && !layer.classList.contains('is-open')) {
            void layer.offsetWidth;
            layer.classList.add('is-open');
        }
    }

    /* ==================== 显示 / 隐藏 ==================== */

    function show() {
        if (openState || !isMovieViewActive()) return;

        ensureMounted();
        openState = true;
        startGuard();

        void layer.offsetWidth;
        layer.classList.add('is-open');
    }

    /* 页面上没有任何“关闭”入口；只有切走电影视图才会收起。
       直接摘节点、不走渐隐——否则切换后还会在新页面上留最多半秒的残影 */
    function hide() {
        if (!openState) return;
        openState = false;
        stopGuard();
        if (layer) layer.classList.remove('is-open');
        if (host && host.parentNode) host.parentNode.removeChild(host);
    }

    /* ==================== 防删除巡检 ==================== */

    function startGuard() {
        stopGuard();

        guardTimer = window.setInterval(function () {
            if (!openState) return;
            // 兜底：切走电影视图就收起
            if (!isMovieViewActive()) { hide(); return; }
            ensureMounted();
        }, GUARD_INTERVAL);

        if (window.MutationObserver) {
            observer = new MutationObserver(function () {
                if (!openState) return;
                if (host && host.isConnected && layer && layer.isConnected) return;
                ensureMounted();
            });
            observer.observe(document.documentElement, { childList: true, subtree: true });

            /* 切视图时 #view-movie 的 display 会在同一帧被改成 none，
               盯住这个属性就能在切换瞬间收走公告，不留渐隐残影 */
            var view = document.getElementById('view-movie');
            if (view) {
                viewObserver = new MutationObserver(function () {
                    if (openState && !isMovieViewActive()) hide();
                });
                viewObserver.observe(view, { attributes: true, attributeFilter: ['style', 'class'] });
            }
        }

        // 导航栏高度会随滚动/缩放变化（它是 sticky 的），顶边跟着重算
        window.addEventListener('resize', onViewportChange);
        window.addEventListener('scroll', onViewportChange, { passive: true });
    }

    function stopGuard() {
        window.clearInterval(guardTimer);
        guardTimer = 0;
        if (observer) { observer.disconnect(); observer = null; }
        if (viewObserver) { viewObserver.disconnect(); viewObserver = null; }
        window.removeEventListener('resize', onViewportChange);
        window.removeEventListener('scroll', onViewportChange);
        if (rafId) { window.cancelAnimationFrame(rafId); rafId = 0; }
    }

    function onViewportChange() {
        if (rafId) return;
        rafId = window.requestAnimationFrame(function () {
            rafId = 0;
            if (openState) positionHost();
        });
    }

    /* ==================== 时机：模块加载完成 + 1s ==================== */

    function isMovieViewActive() {
        var view = document.getElementById('view-movie');
        if (!view) return true;
        return view.style.display !== 'none';
    }

    function scheduleShow() {
        window.clearTimeout(showTimer);
        if (SHOW_DELAY > 0) {
            showTimer = window.setTimeout(show, SHOW_DELAY);
            return;
        }
        show();
    }

    /* 等 iframe 内部文档真正就绪（readyState=complete 且播放器节点存在） */
    function waitModuleReady(frame, done) {
        var started = Date.now();

        (function poll() {
            var doc = null;
            try { doc = frame.contentDocument; } catch (e) { doc = null; }

            var ready = false;
            if (doc && doc.readyState === 'complete') {
                ready = !!(doc.getElementById('player') || doc.getElementById('list'));
            }

            if (ready || Date.now() - started > READY_TIMEOUT) {
                done();
                return;
            }
            window.setTimeout(poll, 30);
        })();
    }

    /* 电影模块用的是 contentWindow.location.replace()，
       src 属性一直停在 about:blank，所以要从文档地址判断当前载入的是谁 */
    function frameUrl(frame) {
        try {
            var href = frame.contentWindow && frame.contentWindow.location.href;
            if (href && href !== 'about:blank') return href;
        } catch (e) {}
        try { return frame.getAttribute('src') || ''; } catch (e) { return ''; }
    }

    function arm() {
        var frame = document.getElementById('movieFrame');
        if (!frame) return;

        /* 电影服务已停用：从文档一进来就切断播放器的指针事件，
           这样「模块加载完成 → 公告出现」之间的任何一帧都点不到视频列表 */
        try { frame.style.pointerEvents = 'none'; } catch (e) {}

        var handledSrc = '';

        function onLoaded() {
            var src = frameUrl(frame);
            // about:blank / 卸载时的空载入不算，只认电影模块本身
            if (!/movie\.html/i.test(src)) { handledSrc = ''; return; }
            if (src === handledSrc) return;
            handledSrc = src;

            waitModuleReady(frame, scheduleShow);
        }

        frame.addEventListener('load', onLoaded);

        // 兜底：脚本可能晚于 iframe 的 load 落地
        if (/movie\.html/i.test(frameUrl(frame))) {
            var doc = null;
            try { doc = frame.contentDocument; } catch (e) { doc = null; }
            if (doc && doc.readyState === 'complete') onLoaded();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', arm, { once: true });
    } else {
        arm();
    }
})();
