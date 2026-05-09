    function copyToClipboard(text, message) {
        // 方法一：现代浏览器 Clipboard API
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(() => {
                alert(message);
            }).catch(() => {
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
        try {
            document.execCommand('copy');
            alert(message);
        } catch (err) {
            alert('复制失败，请手动复制：' + text);
        }
        document.body.removeChild(textarea);
    }