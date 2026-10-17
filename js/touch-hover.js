/**
 * 触屏输入的悬停（:hover）状态修正
 *
 * 问题：在手机上点一下按钮，浏览器会把 :hover 一直"粘"在按钮上，
 * 按钮看起来就像一直按着没松开（常亮）。
 *
 * 光靠 CSS 的 @media (hover: none) 挡不住：iPad、部分安卓浏览器
 * 以及"桌面版网站"模式会报告 (hover: hover)，但用户其实是用手指点的，
 * 这时 :hover 照样会被粘住。
 *
 * 做法：用 JS 记录用户当前真实的输入方式——
 *   - 手指触摸（pointerdown 的 pointerType === 'touch'）→ 给 <html> 加 is-touch-input
 *   - 鼠标按下或移动（pointerType === 'mouse'）      → 去掉 is-touch-input
 * 然后 CSS 里把悬停样式写成 html:not(.is-touch-input) ...:hover，
 * 触屏反馈写成 html.is-touch-input ...:active。
 * 这样无论设备怎么报告 hover 能力，按钮都不会再常亮。
 */
(function () {
    var root = document.documentElement;
    var TOUCH_CLASS = 'is-touch-input';

    function setTouchInput(isTouch) {
        if (!root) return;
        if (isTouch) {
            if (!root.classList.contains(TOUCH_CLASS)) root.classList.add(TOUCH_CLASS);
        } else if (root.classList.contains(TOUCH_CLASS)) {
            root.classList.remove(TOUCH_CLASS);
        }
    }

    // 初始判断：主指针本来就不支持悬停的设备，直接按触屏处理，
    // 免得页面刚打开时先闪一下悬停样式。
    try {
        if (window.matchMedia && window.matchMedia('(hover: none)').matches) {
            setTouchInput(true);
        }
    } catch (e) {}

    if (window.PointerEvent) {
        window.addEventListener('pointerdown', function (event) {
            if (event.pointerType === 'touch') {
                setTouchInput(true);
            } else if (event.pointerType === 'mouse' || event.pointerType === 'pen') {
                setTouchInput(false);
            }
        }, true);

        // 鼠标真正移动时才恢复悬停效果（触屏设备不会产生 pointerType 为 mouse 的
        // pointermove，所以不会误把触屏状态去掉）。
        window.addEventListener('pointermove', function (event) {
            if (event.pointerType === 'mouse') setTouchInput(false);
        }, { capture: true, passive: true });
    } else {
        // 老浏览器兜底
        window.addEventListener('touchstart', function () {
            setTouchInput(true);
        }, { capture: true, passive: true });
        window.addEventListener('mousedown', function () {
            setTouchInput(false);
        }, true);
    }

    // iOS Safari 只在页面上存在 touchstart 监听时才会应用 :active 样式。
    // 这里挂一个空监听，保证触屏按下的反馈能正常显示。
    window.addEventListener('touchstart', function () {}, { capture: true, passive: true });

    // 输入设备能力变化时（比如 iPad 接上/拔掉鼠标）同步一次初始判断
    try {
        var hoverQuery = window.matchMedia('(hover: none)');
        var onChange = function (event) {
            if (event.matches) setTouchInput(true);
        };
        if (hoverQuery.addEventListener) hoverQuery.addEventListener('change', onChange);
        else if (hoverQuery.addListener) hoverQuery.addListener(onChange);
    } catch (e) {}
})();
