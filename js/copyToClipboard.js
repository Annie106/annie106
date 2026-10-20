    // ==================== 复制提示 ====================
    // 复制成功 / 失败都用页面顶部的轻提示（.site-toast）显示，
    // 不再弹浏览器原生的 alert 对话框。
    //
    // 样式在 css/style.css 的「顶部轻提示」一节，和「链接已复制」
    // 那个提示完全一致：白底卡片、绿色链接图标、顶部居中、3.2 秒后淡出。
    //
    // 有些页面（比如按指南改出来的子页面）没有 #siteToast 节点，
    // 这里按需创建一个，保证 copyToClipboard() 在哪儿都能用。
    var copyToastTimer = null;
    var copyToastCleanupTimer = null;

    function ensureCopyToast() {
        var toast = document.getElementById('siteToast');
        if (toast) return toast;

        toast = document.createElement('div');
        toast.className = 'site-toast';
        toast.id = 'siteToast';
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        toast.hidden = true;

        var icon = document.createElement('i');
        icon.className = 'ri-link';
        icon.setAttribute('aria-hidden', 'true');

        var text = document.createElement('span');
        text.id = 'siteToastText';

        toast.appendChild(icon);
        toast.appendChild(text);
        document.body.appendChild(toast);
        return toast;
    }

    function showCopyToast(message, isError) {
        var toast = ensureCopyToast();
        var text = document.getElementById('siteToastText');
        if (!toast || !text) return;

        text.textContent = message;
        toast.classList.toggle('is-error', !!isError);

        clearTimeout(copyToastTimer);
        clearTimeout(copyToastCleanupTimer);

        // 先让元素变成 display:flex，并强制一次样式重算，
        // 否则 display:none → flex 和 opacity:0 → 1 会被合并进同一次
        // 样式计算，淡入动画就被跳过了（会硬闪出来）。
        toast.hidden = false;
        void toast.offsetHeight;
        toast.classList.add('visible');

        copyToastTimer = setTimeout(function () {
            toast.classList.remove('visible');
            // 等淡出过渡走完再真正隐藏，否则会被 display:none 打断
            copyToastCleanupTimer = setTimeout(function () {
                toast.hidden = true;
            }, 300);
        }, 3200);
    }

    function copyToClipboard(text, message) {
        // 方法一：现代浏览器 Clipboard API
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(function () {
                showCopyToast(message || '已复制', false);
            }).catch(function () {
                fallbackCopy(text, message);
            });
        } else {
            // 方法二：兼容老浏览器 / 非 HTTPS 环境
            fallbackCopy(text, message);
        }
    }

    function fallbackCopy(text, message) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();

        // execCommand 失败时不一定抛异常，可能只返回 false，
        // 两种都要当成失败，否则会误报「已复制」
        var ok = false;
        try {
            ok = document.execCommand('copy') !== false;
        } catch (err) {
            ok = false;
        }
        document.body.removeChild(textarea);

        if (ok) {
            showCopyToast(message || '已复制', false);
        } else {
            showCopyToast('复制失败，请手动复制：' + text, true);
        }
    }
