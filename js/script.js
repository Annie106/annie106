        (function() {
            // ==================== ★★★ 在这里修改你的博客内容 ★★★ ====================
            // 所有文章数据都集中在这个数组里，增删改都非常方便。
            const blogPosts = [{
                id: 11,
                pinned: false,
                title: '归宿里的两帧：和朋友拍的归宿照',
                date: '2026-10-18',
                excerpt: '我很少在游戏里拍照，不是不喜欢，是总觉得镜头里缺点什么...直到有人愿意站在里面，陪我一起等光。',
                tags: ['第五人格', '随笔', '社交'],
                featured: true,
                // 独立页面，作为文章正文内嵌展示（照片、排版都在这个文件里）
                embeddedPage: 'project_subpage/blog/manor_photo.html',
            }, {
                id: 8,
                pinned: true,
                title: '对朋友圈、抖音、QQ空间等互动的说明',
                date: '2026-10-04',
                excerpt: '如果你有对朋友圈、抖音、QQ空间等互动要求，请仔细阅读以下内容',
                tags: ['置顶','社交'],
                featured: true,
                content: `
                        <p>如题，本人不扩列，也不混圈</p>
                        <p>个人仅点赞感兴趣的朋友圈，其余一律鸟都不鸟。我不知道所谓的扩列规则、各种圈子的规则，你我有好友肯定不是扩列加的</p>
                        <p>所以，如果你对我有严格的很互动要求，可以选择屏蔽掉我</p>
                        <h2>所以有些人你是怎么想的，希望别再让我看到因为那些什么扩列规则来阴阳我的，那种请远离我，谢谢</h2>
                        <p>以下是AI帮我写的 嗯对</p>
                        <p>关于互动，我也没有义务对朋友圈、抖音一直互动。看到喜欢的会点赞，感兴趣的会评论，但不代表我要给每个人的每条动态捧场。社交应该是自发的，不是任务。我只互动自己喜欢的或感兴趣的。</p>
                        <h2>免责声明</h2>
                        <p>本文仅针对极个别群体，通常情况下，不会是你的。如果有任何不满，可以向我提出相关意见。</p>
                    `,
            }, {                
                id: 10,
                pinned: true,
                title: '使用、修改和部署这个博客的操作指南',
                date: '2026-10-16',
                excerpt: '从零开始构建个人博客的完整教程，包含配置、部署和进阶技巧',
                tags: ['教程', '指南', '置顶'],
                featured: true,
                embeddedPage: 'project_subpage/blog/guide.html',
            }, {
                id: 9,
                title: '直链下载',
                date: '2026-10-07',
                excerpt: '直链下载页面',
                tags: ['直链下载'],
                featured: false,
                embeddedPage: 'project_subpage/projects/download/index.html',
            }, {

                id: 7,
                // 这是置顶文章模板，直接修改下面的标题、摘要和正文即可
                pinned: false,
                title: '我的其它网站',
                date: '2026-09-23',
                excerpt: '有视频网站、直链下载站等',
                tags: ['网站'],  
                content: `
                        <p>视频站</p>
                        <p><a href="https://annie106.github.io/annie106/movie.html" target="_blank" rel="noopener noreferrer">https://annie106.github.io/annie106/movie.html</a></p>
                        <p>直链下载站</p>
                        <p><a href="https://annie106.github.io/annie106/project_subpage/projects/download/index.html" target="_blank" rel="noopener noreferrer">https://annie106.github.io/annie106/project_subpage/projects/download/index.html</a></p>
                        <h2>视频无法播放时 添加联系方式 备注来意</h2>
                        <p>联系方式在首页位置，点击图标即复制</p>
                    `,
            }, {
                id: 1,
                // 需要置顶时改为 true；取消置顶改为 false
                pinned: false,
                title: '设计的本质是减法',
                date: '2026-05-03',
                excerpt: '在信息过载的时代，好的设计不是增加更多元素，而是勇敢地移除一切不必要的部分。',
                tags: ['设计'],
                featured: true,
                content: `
                        <p>我们生活在一个信息极度膨胀的时代。每一天，成千上万的视觉信号争夺着我们的注意力。在这样的背景下，设计的责任不再是"填满空白"，而是<strong>创造呼吸的空间</strong>。</p>
                        <h2>少即是多</h2>
                        <p>Dieter Rams 的经典设计原则至今仍然适用。好的设计是尽可能少的设计。当你移除所有非必要元素后，剩下的就是核心价值。</p>
                        <blockquote>完美不在于无以复加，而在于无可删减。——圣埃克苏佩里</blockquote>
                        <p>在实践中，这意味着每一个像素、每一行文字、每一个交互都需要经过严格的审视：它真的有必要存在吗？</p>
                        <h2>留白的力量</h2>
                        <p>白色空间不是"空的"，它是承载内容的容器。恰当的留白让阅读变得轻松，让重点自然浮现。在纯白背景下，这种感受尤为强烈——内容仿佛悬浮于宁静之中。</p>
                        <p>这也是为什么这个博客选择了纯白背景。没有干扰，只有文字与你。</p>
                    `,
            }, {
                id: 2,
                title: '我的阅读工作流（2026版）',
                date: '2026-05-03',
                excerpt: '分享我如何用 Readwise + Obsidian 搭建知识内化系统，让阅读不止于浏览。',
                tags: ['阅读'],
                featured: true,
                content: `
                        <p>过去一年，我调整了阅读流程，目标是<strong>减少信息囤积，增加知识内化</strong>。以下是我的完整工作流。</p>
                        <h2>第一步：捕获</h2>
                        <p>使用 Readwise 自动同步所有高亮和批注。无论是 Kindle、Apple Books 还是网页文章，所有标注汇聚一处。</p>
                        <h2>第二步：回顾</h2>
                        <p>每天早晨花 8 分钟进行间隔重复回顾。Readwise 会推送 15 条过往高亮，这是知识留存率最高的环节。</p>
                        <h2>第三步：连接</h2>
                        <p>将触动我的高亮导入 Obsidian，用自己的话重写一遍，并链接到已有笔记。这才是真正的"内化"。</p>
                    `,
            }, {
                id: 3,
                title: '漫步西湖：关于水与时间的隐喻',
                date: '2026-05-03',
                excerpt: '一个秋日午后的湖边漫思，关于流动、静止与创造力的关系。',
                tags: ['随笔'],
                featured: false,
                content: `
                        <p>杭州的秋天来得温柔。西湖的水面在微风中泛起细密的纹理，像是时间本身的质地。</p>
                        <p>我常在这里散步。水从不着急，它有自己的节奏。这让我想到创造力——有时候，最好的想法并不是在键盘前产生的，而是在<strong>看似无所事事</strong>的时刻悄然浮现。</p>
                        <p>流动与静止并非对立。正如湖面，表面平静，深处却有暗流涌动。创作也是如此。</p>
                    `,
            }, {
                id: 4,
                title: '从零搭建现代个人网站指南',
                date: '2026-05-03',
                excerpt: '不需要框架，用纯 HTML/CSS/JS 打造一个快速、易维护的个人博客。',
                tags: ['前端'],
                featured: true,
                content: `
                        <p>很多人觉得建站必须用 React、Vue 或 Next.js。但其实，对于一个个人博客来说，<strong>纯静态方案</strong>往往是最优解。</p>
                        <h2>为什么选择纯 HTML？</h2>
                        <p>零依赖、加载极快、无需构建步骤。你只需要一个文本编辑器就能修改内容。部署到任何静态托管服务（如 Vercel、Netlify、GitHub Pages）都极其简单。</p>
                        <h2>内容管理</h2>
                        <p>像这个博客一样，把所有文章放在一个 JavaScript 数组里。修改文章就像编辑笔记一样直观。不需要 CMS，不需要数据库。</p>
                        <p>简单，是一种高级的复杂。</p>
                    `,
            }, {
                id: 5,
                title: '字体排印的微观美学',
                date: '2026-05-03',
                excerpt: '字间距、行高、字重——这些看不见的细节如何塑造阅读体验。',
                tags: ['字体排印'],
                featured: false,
                content: `
                        <p>字体排印（Typography）是设计的无声语言。读者可能永远不会注意到<code>line-height: 1.7</code>和<code>1.5</code>之间的区别，但他们的眼睛会感受到。</p>
                        <h2>行高与阅读舒适度</h2>
                        <p>对于中文正文，行高建议在 1.6 到 1.8 之间。过密会让文字拥挤不堪，过疏则失去连贯性。这个博客正文使用约 1.85 的行高，配合纯白背景，营造呼吸感。</p>
                        <h2>字体选择</h2>
                        <p>无衬线字体用于标题和导航，有衬线字体（宋体/Noto Serif SC）用于正文——这种搭配在中文排版中经典而优雅。</p>
                    `,
             }, {
                id: 6,
                isPublic: false, // 改为 true 即可重新开放
                title: '我也要做一个类似的个人博客',
                date: '2026-05-03',
                excerpt: '此文章提供博客服务 点击查看详情和服务价格',
                tags: ['服务'],
                featured: true,
                content: `
                        <p>关于价格：</p>
	        <p>28/季 88/年</p>
                        <h2>样式？</h2>
                        <p>可根据需求进行编写，可以有自己的域名</p>
                        <h2>已提供的服务</h2>
                        <p>已为一位客户提供服务</p>
                        <p>可以免费试用1个月 并提供9.9/季的限时福利</p>
                        <h2>提供服务的博客地址（已征求同意）</h2>
                        <p>https://annie106.github.io/myweb/</p>
                        <p>https://annie106.github.io/mayuwo/</p>
                    `,
            }, ];

            // ==================== 统一管理文章卡片的二级菜单 ====================
            // 使用文章 id 对应菜单项；未配置的文章默认显示“评论”入口。
            // type 可用 article（打开站内文章）、externalPage（打开文章的 externalPage）或 link（打开 url）。
            // 菜单项支持三种类型：

            // article：打开站内文章
            // link：打开指定网址或 HTML 页面
            // externalPage：打开该文章数据中的独立页面

            const articleMenus = {
                // 新增指南文章
                //10: [
                    //{ label: '返回文章列表', type: 'link', url: 'index.html#blog' },
                //],
            };

            // ==================== ★★★ 修改个人信息 ★★★ ====================
            const siteConfig = {
                authorName: 'Annie',              // 你的名字
                subtitle: '思考 · 记录 · 创造',
                bio: '敏感、真实、讨厌冷暴力与敷衍',
                location: '辽宁',
                occupation: '自由撰稿',
                blogStartYear: '2026',
                email: 'anniedv106@gmail.com',
                aboutText: `
                        <p>我是 Annie，一个用文字整理思绪的人。</p>
                        <p>这个博客是我记录阅读、成长和日常灵感的地方。相信简单的记录也可以汇聚成光。</p>
                    `,
            };

            // ==================== DOM 引用 ====================
            const $ = (sel) => document.querySelector(sel);
            const $$ = (sel) => document.querySelectorAll(sel);

            const navLinks = $('#navLinks');
            const mobileMenuBtn = $('#mobileMenuBtn');
            const homeLink = $('#homeLink');
            const viewHome = $('#view-home');
            const viewBlog = $('#view-blog');
            const viewMovie = $('#view-movie');
            const viewAbout = $('#view-about');
            const movieFrame = $('#movieFrame');
            const viewArticle = $('#view-article');
            const postsListHome = $('#postsListHome');
            const postsListBlog = $('#postsListBlog');
            const tagFilterHome = $('#tagFilterHome');
            const tagFilterBlog = $('#tagFilterBlog');
            const homeSearch = $('#homeSearch');
            const homeSearchToggle = $('#homeSearchToggle');
            const homeSearchInput = $('#homeSearchInput');
            const homeSearchClear = $('#homeSearchClear');
            const homeSearchStatus = $('#homeSearchStatus');
            const homeMore = $('.home-more');
            const homeSectionHeader = homeSearch ? homeSearch.closest('.section-header') : null;
            const homeSearchMobile = window.matchMedia('(max-width: 600px)');
            const articleTitle = $('#articleTitle');
            const articleMeta = $('#articleMeta');
            const articleContent = $('#articleContent');
            const articleUnavailableNotice = $('#articleUnavailableNotice');
            const articleUnavailableMount = $('#articleUnavailableMount');
            const embeddedArticleNormalMount = $('#embeddedArticleNormalMount');
            const embeddedPageFrame = $('#embeddedPageFrame');
            const embeddedArticleWrap = $('#embeddedArticleWrap');
            const backBtn = $('#backBtn');
            const backBtn2 = $('#backBtn2');
            const articleShare = $('#articleShare');
            const wechatShareGuide = $('#wechatShareGuide');
            const wechatShareGuideCopy = $('#wechatShareGuideCopy');
            const wechatShareGuideClose = $('#wechatShareGuideClose');

            let currentView = 'home';
            let activeTag = 'all';
            let currentArticleId = null;
            let embeddedPageObserver = null;
            let embeddedPageResizeHandler = null;
            let embeddedPageFallbackTimer = null;
            // 上一次量出的 iframe 高度：内容没变就不重复写 height，
            // 避免「改高度 → 触发 ResizeObserver → 再改高度」的循环
            let embeddedFrameHeight = 0;
            let articleReturnView = 'home';
            let articleReturnScroll = 0;
            // 搜索状态：是否处于展开态。当前关键词始终以输入框的值为准，
            // 不另存一份，避免两边不一致。
            let homeSearchOpen = false;
            let homeSearchKeyboardVisible = false;
            let homeSearchViewportHeight = 0;
            let homeSearchComposing = false;
            // 每次输入都清掉上一个定时器，只有停下来才真正渲染（防抖）
            let homeSearchTimer = null;
            let homeSearchStatusTimer = null;
            let homeSearchCloseTimer = null;
            // 搜索请求标识：异步回调回来时用它判断这次结果是不是已经过期
            let activeHomeSearchRequest = null;
            const HOME_SEARCH_DEBOUNCE = 320;
            // 检索动画至少显示这么久：搜索是本地瞬间完成的，
            // 不加下限会闪一下反而更廉价，也容易让人以为没反应
            const HOME_SEARCH_MIN_SPINNER = 380;
            let articleHistoryEntryActive = false;
            let returningFromArticleButton = false;
            const viewScrollPositions = { home: 0, blog: 0, movie: null, about: 0 };

            function centerMovieFrame(behavior = 'smooth') {
                const frameRect = movieFrame.getBoundingClientRect();
                const headerBottom = $('.site-header').getBoundingClientRect().bottom;
                const viewportHeight = window.visualViewport?.height || window.innerHeight;
                const visibleCenter = headerBottom + (viewportHeight - headerBottom) / 2;
                const targetTop = window.scrollY + frameRect.top + frameRect.height / 2 - visibleCenter;
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                const scrollTop = Math.max(0, Math.min(maxScroll, targetTop));
                window.scrollTo({ top: scrollTop, behavior });
                viewScrollPositions.movie = scrollTop;
            }

            function restoreViewScroll(viewName) {
                const scrollTop = viewScrollPositions[viewName] || 0;
                window.scrollTo({ top: scrollTop, behavior: 'instant' });
            }

            // ==================== 离开时的界面记忆 ====================
            // 点击文章跳到独立 HTML 页面后，返回本站时恢复离开时所在的界面：
            // 视图（首页 / 文章列表 / 文章详情 / 电影 / 关于）、当前标签、滚动位置。
            const VIEW_STATE_KEY = 'annie-view-state';
            const VALID_VIEWS = ['home', 'blog', 'movie', 'about', 'article'];

            function saveViewState() {
                if (!VALID_VIEWS.includes(currentView)) return;
                if (currentView !== 'article') {
                    viewScrollPositions[currentView] = window.scrollY;
                }
                try {
                    sessionStorage.setItem(VIEW_STATE_KEY, JSON.stringify({
                        view: currentView,
                        articleId: currentArticleId,
                        tag: activeTag,
                        scroll: window.scrollY,
                        scrollPositions: viewScrollPositions,
                        returnView: articleReturnView,
                        returnScroll: articleReturnScroll,
                    }));
                } catch (e) {}
            }

            function readViewState() {
                try {
                    const state = JSON.parse(sessionStorage.getItem(VIEW_STATE_KEY) || 'null');
                    return state && VALID_VIEWS.includes(state.view) ? state : null;
                } catch (e) {
                    return null;
                }
            }

            // ==================== 分享链接 ====================
            // 文章地址统一用 ?article=<id> 表示，这样复制出去的链接
            // 在别人的浏览器里也能直接打开对应文章（sessionStorage 只在本机有效）。
            const ARTICLE_PARAM = 'article';
            const VIEW_PARAM = 'view';

            function buildArticleUrl(id) {
                const url = new URL(window.location.href);
                url.searchParams.set(ARTICLE_PARAM, String(id));
                url.hash = '';
                return url.href;
            }

            // 读地址栏里的文章 id；没有或不是有效数字时返回 null
            function readArticleIdFromUrl() {
                try {
                    const raw = new URL(window.location.href).searchParams.get(ARTICLE_PARAM);
                    if (raw === null || raw === '') return null;
                    const id = parseInt(raw, 10);
                    return Number.isFinite(id) ? id : null;
                } catch (e) {
                    return null;
                }
            }

            // 把地址栏同步成当前状态：打开文章写入 ?article=id，返回时清掉。
            // 用 replaceState 而不是 pushState，避免污染历史记录
            //（文章的前进/后退由已有的 history.state 机制负责）。
            function syncUrlWithView() {
                const url = new URL(window.location.href);
                if (currentView === 'article' && currentArticleId !== null) {
                    url.searchParams.set(ARTICLE_PARAM, String(currentArticleId));
                } else {
                    url.searchParams.delete(ARTICLE_PARAM);
                }
                if (currentView === 'about') {
                    url.searchParams.set(VIEW_PARAM, 'about');
                } else {
                    url.searchParams.delete(VIEW_PARAM);
                }
                url.hash = '';
                const next = url.pathname + url.search;
                const current = window.location.pathname + window.location.search;
                if (next !== current) {
                    history.replaceState(history.state, '', next);
                }
            }

            // 顶部轻提示（复制成功等），样式复用 .site-toast
            let toastHideTimer = null;
            let toastCleanupTimer = null;
            function showToast(message) {
                const toast = document.getElementById('siteToast');
                const text = document.getElementById('siteToastText');
                if (!toast || !text) return;
                text.textContent = message;
                clearTimeout(toastHideTimer);
                clearTimeout(toastCleanupTimer);

                // 关键：先让元素变成 display:flex，并强制一次样式重算，
                // 把 opacity:0 变成"已经生效的起始状态"。
                // 否则 display:none → flex 和 opacity:0 → 1 会被合并进
                // 同一次样式计算，浏览器找不到起始值，过渡动画就被跳过
                //（表现就是第一次点「复制链接」时弹窗是硬闪出来的）。
                toast.hidden = false;
                void toast.offsetHeight;
                toast.classList.add('visible');

                toastHideTimer = setTimeout(() => {
                    toast.classList.remove('visible');
                    // 等淡出过渡走完再真正隐藏，否则会被 display:none 打断
                    toastCleanupTimer = setTimeout(() => { toast.hidden = true; }, 300);
                }, 3200);
            }

            // 把链接写入剪贴板。优先 Clipboard API，失败则退回 execCommand，
            // 两者都不行时用 prompt 让用户手动复制。
            function copyLink(url) {
                if (navigator.clipboard && window.isSecureContext) {
                    return navigator.clipboard.writeText(url).then(
                        () => true,
                        () => legacyCopy(url)
                    );
                }
                return Promise.resolve(legacyCopy(url));
            }

            function legacyCopy(url) {
                const textarea = document.createElement('textarea');
                textarea.value = url;
                textarea.setAttribute('readonly', '');
                textarea.style.position = 'fixed';
                textarea.style.top = '-9999px';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                let ok = false;
                try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
                document.body.removeChild(textarea);
                if (!ok) window.prompt('复制下面的链接分享给别人：', url);
                return ok;
            }

            // 复制文章链接（总是走复制，不弹系统分享面板）
            function copyArticleLink(post) {
                const url = buildArticleUrl(post.id);
                Promise.resolve(copyLink(url)).then(function () {
                    showToast('链接已复制，打开连接可查看此文章');
                });
            }

            // 是否在微信内置浏览器里打开。
            // 微信各端的 UA 都会追加自己的标记：iOS / Android / Windows / Mac /
            // 鸿蒙 NEXT 版都是 MicroMessenger，部分 Android 版本还会同时带
            // WeChat/arm64，企业微信带 wxwork。
            //
            // 鸿蒙 NEXT（HarmonyOS 5）的微信换成了 ArkWeb 内核，UA 里会出现
            // ArkWeb 标记，个别版本可能不再保留 MicroMessenger。这里做一层
            // 兜底：只要是 ArkWeb 内核的嵌入网页、又拿不到系统分享面板
            //（navigator.share 不可用），就按微信内处理，同样走
            //「复制链接 + 引导浮层」，至少不会点了没反应。
            //
            // 注意用 ArkWeb 而不是 OpenHarmony / HarmonyOS 作为判断依据：
            // 后两个标记在鸿蒙自带的华为浏览器里也有，会把普通浏览器误判成微信。
            //
            // 但光靠 ArkWeb 还不够：鸿蒙上的**华为浏览器**也是 ArkWeb 内核，
            // UA 同样带 ArkWeb、也没有 navigator.share，于是手机上用普通浏览器
            // 打开也会弹出「点右上角 ···」的引导浮层（华为/鸿蒙手机尤其常见）。
            // 所以这里再排除一批已知的普通浏览器 / App 内置浏览器标记，
            // 只有「ArkWeb 内核 + 不是这些浏览器 + 没有系统分享面板」才当微信。
            //
            // 其中 /Browser/ 是通用兜底：国内手机浏览器的 UA 基本都带 Browser
            // 字样（HuaweiBrowser / MiuiBrowser / VivoBrowser / OppoBrowser /
            // SamsungBrowser / UCBrowser / QQBrowser / baidubrowser…），
            // 而微信各端的 UA 都不带这个词。
            const NON_WECHAT_APP_BROWSER = /Browser|Quark|Firefox|FxiOS|CriOS|EdgiOS|OPR\/|Weibo|AlipayClient|DingTalk|aweme|BytedanceWebview|Xiaohongshu|NewsArticle/i;

            function isWeChatBrowser() {
                const ua = navigator.userAgent || '';
                if (/MicroMessenger|Weixin|wxwork/i.test(ua)) return true;
                // 微信注入的 JS 桥：有它就一定是微信（比 UA 更可靠）
                if (window.WeixinJSBridge || window.__wxjs_environment) return true;
                // 非 ArkWeb 内核：不可能是鸿蒙版微信
                if (!/ArkWeb/i.test(ua)) return false;
                // 已知的普通浏览器 / 其它 App 内置浏览器：不是微信
                if (NON_WECHAT_APP_BROWSER.test(ua)) return false;
                // 鸿蒙微信目前仍拿不到 navigator.share；能拿到就说明是普通浏览器
                return typeof navigator.share !== 'function';
            }

            // 微信内置浏览器既不支持 Web Share API，也没有让网页主动唤起
            // 「分享给朋友」面板的接口（官方 JS-SDK 也只能改分享卡片的标题/
            // 缩略图，不能代替用户点）。所以这里只能：先复制链接，
            // 再弹引导浮层指向分享入口，让用户自己完成分享。
            let wechatGuideHideTimer = null;

            // Windows / macOS 桌面版微信的分享入口在窗口左上角（「···」在左边），
            // 手机端（iOS / Android / 鸿蒙）才在右上角。这里按 UA 区分，
            // 把气泡和文案的指向一起换掉，避免桌面端点错方向。
            function isWeChatDesktop() {
                const ua = navigator.userAgent || '';
                // Windows 微信带 WindowsWechat，macOS 微信带 MacWechat
                if (/WindowsWechat|MacWechat/i.test(ua)) return true;
                // 兜底：UA 是桌面系统、又不是手机/平板，就按桌面端处理。
                // iPadOS 13+ 的 Safari 会伪装成 Macintosh（带 Mobile），
                // 所以 "Mobile" 也要算进移动端，否则 iPad 会被当成桌面微信。
                const isDesktopOS = /Windows NT|Macintosh|X11|Linux x86_64/i.test(ua);
                const isMobile = /Android|iPhone|iPad|iPod|Mobile|HarmonyOS|OpenHarmony|Tablet/i.test(ua);
                return isDesktopOS && !isMobile;
            }

            // 按平台切换引导浮层的指向：手机 → 右上角，桌面 → 左上角
            function applyWechatGuideDirection() {
                const desktop = isWeChatDesktop();
                const arrowText = $('#wechatShareGuideArrowText');
                const arrowIcon = $('#wechatShareGuideArrowIcon');
                const titleText = $('#wechatShareGuideTitleText');
                const arrow = $('#wechatShareGuideArrow');

                if (arrow) {
                    arrow.classList.toggle('is-left', desktop);
                }
                if (arrowText) {
                    arrowText.textContent = desktop ? '分享入口在左上角' : '分享入口在这里';
                }
                if (arrowIcon) {
                    arrowIcon.className = desktop
                        ? 'ri-arrow-left-up-line'
                        : 'ri-arrow-right-up-line';
                }
                if (titleText) {
                    titleText.textContent = desktop ? '点击左上角' : '点击右上角';
                }
                if (wechatShareGuide) {
                    wechatShareGuide.classList.toggle('is-desktop', desktop);
                }
            }

            function openWechatShareGuide() {
                if (!wechatShareGuide) return;
                clearTimeout(wechatGuideHideTimer);
                wechatShareGuide.hidden = false;
                applyWechatGuideDirection();
                document.documentElement.classList.add('wechat-guide-open');
                document.body.classList.add('wechat-guide-open');
                // 强制一次样式重算，否则 opacity 0 → 1 会被合并进同一次
                // 样式计算，淡入动画会被跳过（和 showToast 同样的坑）
                void wechatShareGuide.offsetHeight;
                wechatShareGuide.classList.add('visible');
                if (wechatShareGuideClose) wechatShareGuideClose.focus({ preventScroll: true });
            }

            function closeWechatShareGuide() {
                if (!wechatShareGuide || wechatShareGuide.hidden) return;
                wechatShareGuide.classList.remove('visible');
                document.documentElement.classList.remove('wechat-guide-open');
                document.body.classList.remove('wechat-guide-open');
                // 等淡出过渡走完再隐藏，否则会被 display:none 打断
                clearTimeout(wechatGuideHideTimer);
                wechatGuideHideTimer = setTimeout(function () {
                    wechatShareGuide.hidden = true;
                }, 240);
            }

            // 微信内分享：复制链接 + 引导浮层
            function shareInWeChat(post) {
                const url = buildArticleUrl(post.id);
                Promise.resolve(copyLink(url)).then(function (ok) {
                    openWechatShareGuide();
                    // 复制失败时不谎称「已复制」，浮层里还有「再次复制链接」可以补救
                    if (!ok) showToast('链接复制失败，可长按地址栏手动复制');
                });
            }

            // 分享文章：微信内走引导浮层，其它浏览器优先唤起系统分享面板；
            // 面板不可用、或被浏览器拒绝时，自动退回「复制链接」，
            // 避免点了没反应。用户主动取消（AbortError）则什么都不做。
            function shareArticle(post) {
                if (isWeChatBrowser()) {
                    shareInWeChat(post);
                    return;
                }
                const url = buildArticleUrl(post.id);
                if (typeof navigator.share === 'function') {
                    let settled = false;
                    try {
                        const result = navigator.share({ title: post.title, url: url });
                        if (result && typeof result.then === 'function') {
                            result.then(function () { settled = true; }, function (error) {
                                settled = true;
                                if (error && error.name === 'AbortError') return;
                                copyArticleLink(post);
                            });
                            return;
                        }
                        settled = true;
                    } catch (e) {
                        settled = true;
                    }
                    if (settled) return;
                }
                copyArticleLink(post);
            }

            function isArticlePublic(post) {
                return post.isPublic !== false;
            }

            function restoreViewState(state) {
                if (!state) return false;
                if (typeof state.returnView === 'string' && VALID_VIEWS.includes(state.returnView)) {
                    articleReturnView = state.returnView;
                }
                if (typeof state.returnScroll === 'number') articleReturnScroll = state.returnScroll;

                const post = state.view === 'article'
                    ? blogPosts.find(p => p.id === state.articleId)
                    : null;
                if (post && (!post.externalPage || post.embeddedPage || !isArticlePublic(post))) {
                    articleHistoryEntryActive = true;
                    renderArticle(post);
                    switchView('article');
                } else {
                    switchView(state.view === 'article' ? 'home' : state.view);
                }

                // switchView 会把上一个视图的滚动位置记成 0，这里用离开时的记录覆盖回来
                const savedScrolls = state.scrollPositions || {};
                Object.keys(viewScrollPositions).forEach(key => {
                    if (typeof savedScrolls[key] === 'number') viewScrollPositions[key] = savedScrolls[key];
                });

                if (typeof state.scroll === 'number' && state.scroll > 0) {
                    // 关掉浏览器自带的滚动还原，避免和这里的恢复互相打架
                    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
                    window.requestAnimationFrame(() => {
                        window.scrollTo({ top: state.scroll, behavior: 'instant' });
                    });
                }
                return true;
            }

            // 跳转到独立 HTML 页面 / 切到后台 / 关闭标签页之前记录界面状态
            window.addEventListener('pagehide', saveViewState);
            document.addEventListener('visibilitychange', function() {
                if (document.visibilityState === 'hidden') saveViewState();
            });

            function sizeMovieFrame() {
                if (currentView !== 'movie') return;
                if (window.innerWidth <= 700) {
                    const frameWidth = movieFrame.getBoundingClientRect().width;
                    movieFrame.style.height = `${Math.round(frameWidth * window.innerHeight / window.innerWidth)}px`;
                } else {
                    movieFrame.style.height = '';
                }
            }

            window.addEventListener('resize', function() {
                if (currentView !== 'movie') return;
                sizeMovieFrame();
                if (window.innerWidth <= 700) {
                    window.requestAnimationFrame(() => centerMovieFrame());
                }
            });

            movieFrame.addEventListener('load', function() {
                const movieDocument = movieFrame.contentDocument;
                if (!movieDocument) return;
                const handleFullscreenChange = function() {
                    if (movieDocument.fullscreenElement || movieDocument.webkitFullscreenElement) return;
                    if (currentView !== 'movie' || window.innerWidth > 700) return;
                    window.requestAnimationFrame(() => {
                        sizeMovieFrame();
                        centerMovieFrame();
                    });
                };
                movieDocument.addEventListener('fullscreenchange', handleFullscreenChange);
                movieDocument.addEventListener('webkitfullscreenchange', handleFullscreenChange);
                    movieDocument.querySelector('#player')?.addEventListener('webkitendfullscreen', handleFullscreenChange);
                movieDocument.querySelector('#player')?.addEventListener('webkitendfullscreen', handleFullscreenChange);
            });

            // ==================== 内嵌文章高度上报 ====================
            // 内嵌页面会把自己的内容高度 postMessage 上来，这里直接采用。
            // 比外层测量更可靠：内嵌页自己最清楚内容到哪里结束，不会把
            // 继承来的 body { min-height: 100vh } 也算成内容高度。
            window.addEventListener('message', function(event) {
                const data = event.data;
                if (!data || data.type !== 'annie-embedded-height') return;
                if (currentView !== 'article') return;
                const frameWindow = embeddedPageFrame.contentWindow;
                if (!frameWindow || event.source !== frameWindow) return;
                const height = Number(data.height);
                if (!isFinite(height) || height <= 0) return;
                const contentHeight = Math.ceil(height);
                // 和内层量到的一致就不再重复写 height，避免来回振荡
                if (contentHeight === embeddedFrameHeight) return;
                embeddedFrameHeight = contentHeight;
                embeddedPageFrame.style.height = `${contentHeight}px`;
                revealEmbeddedPage();
            });

            // ==================== 工具函数 ====================
            function getAllTags() {
                const tagSet = new Set();
                blogPosts.forEach(p => p.tags.forEach(t => tagSet.add(t)));
                return ['all', ...Array.from(tagSet)];
            }

            function escapeHtml(value) {
                return String(value).replace(/[&<>"']/g, character => ({
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;',
                    "'": '&#39;',
                })[character]);
            }

            // ==================== 首页文章搜索 ====================
            // 检索标题与摘要（副标题），标题命中优先；正文与标签不参与检索。
            const SEARCH_FIELD_LABELS = {
                title: '标题',
                excerpt: '副标题',
            };
            const SEARCH_FIELD_WEIGHT = {
                title: 100,
                excerpt: 40,
            };

            // 去掉首尾空白并把连续空白压成一个空格，
            // 这样输入法里的全角空格、换行也不会把关键词切碎
            function normalizeQuery(value) {
                return String(value == null ? '' : value).replace(/\s+/g, ' ').trim();
            }

            function normalizeText(value) {
                return String(value == null ? '' : value)
                    .replace(/<[^>]*>/g, ' ')
                    .replace(/&nbsp;/gi, ' ')
                    .replace(/\s+/g, ' ')
                    .toLowerCase();
            }

            // 拆关键词：空格分词 + 转小写。中文没有词边界，
            // 所以整串也会作为一个词保留，输入「第五人格 归宿」时两个词都要命中。
            function getKeywords(query) {
                return normalizeQuery(query)
                    .toLowerCase()
                    .split(' ')
                    .filter(Boolean);
            }

            // 只返回可搜索字段，避免正文或标签意外参与匹配。
            function getSearchableText(post) {
                return {
                    title: normalizeText(post.title),
                    excerpt: normalizeText(post.excerpt),
                };
            }

            function countHits(text, keywords) {
                let hits = 0;
                keywords.forEach(keyword => {
                    let from = 0;
                    while (true) {
                        const at = text.indexOf(keyword, from);
                        if (at === -1) break;
                        hits += 1;
                        from = at + keyword.length;
                    }
                });
                return hits;
            }

            // 哪些搜索字段命中了关键词，用于结果卡片上的匹配标记。
            function getMatchedFields(post, query) {
                const keywords = getKeywords(query);
                if (keywords.length === 0) return [];
                const text = getSearchableText(post);
                return ['title', 'excerpt']
                    .filter(field => keywords.some(keyword => text[field].includes(keyword)));
            }

            // 搜索并按匹配度排序。返回 [{ post, score, fields }]。
            function searchPosts(query) {
                const keywords = getKeywords(query);
                if (keywords.length === 0) return [];
                const results = [];
                blogPosts.forEach(post => {
                    const text = getSearchableText(post);
                    const wholeText = [text.title, text.excerpt].join(' ');
                    // 多关键词按「与」处理，允许分别命中标题和副标题。
                    if (!keywords.every(keyword => wholeText.includes(keyword))) return;

                    const fields = [];
                    Object.keys(SEARCH_FIELD_WEIGHT).forEach(field => {
                        if (keywords.some(keyword => text[field].includes(keyword))) fields.push(field);
                    });
                    const titleMatches = keywords.filter(keyword => text.title.includes(keyword)).length;
                    const titleHits = countHits(text.title, keywords);
                    const excerptHits = countHits(text.excerpt, keywords);
                    results.push({
                        post,
                        titleMatches,
                        titleHits,
                        excerptHits,
                        fields: fields.sort((a, b) => SEARCH_FIELD_WEIGHT[b] - SEARCH_FIELD_WEIGHT[a]),
                    });
                });

                results.sort((a, b) => {
                    if (b.titleMatches !== a.titleMatches) return b.titleMatches - a.titleMatches;
                    if (b.titleHits !== a.titleHits) return b.titleHits - a.titleHits;
                    if (b.excerptHits !== a.excerptHits) return b.excerptHits - a.excerptHits;
                    // 分数相同时置顶文章优先，再按 id 新的在前
                    const pinnedDiff = Number(Boolean(b.post.pinned)) - Number(Boolean(a.post.pinned));
                    return pinnedDiff !== 0 ? pinnedDiff : b.post.id - a.post.id;
                });
                return results;
            }

            // 把命中的关键词包成 <mark>。先转义再替换，
            // 这样用户输入 <script> 之类的字符不会变成真的标签。
            function highlightKeyword(value, query) {
                const text = String(value == null ? '' : value);
                const keywords = getKeywords(query);
                if (keywords.length === 0) return escapeHtml(text);
                const escaped = keywords
                    .map(keyword => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
                    .sort((a, b) => b.length - a.length);
                const pattern = new RegExp(`(${escaped.join('|')})`, 'gi');
                return escapeHtml(text).replace(pattern, '<mark class="search-hl">$1</mark>');
            }

            // 搜索期间顶替真实卡片的骨架屏，数量跟随当前网格列数，
            // 手机上只放两张，避免整屏都是灰条
            function renderSearchSkeletons(container, count) {
                if (!container) return;
                const isNarrow = window.matchMedia && window.matchMedia('(max-width: 760px)').matches;
                const total = isNarrow ? 2 : 4;
                const card = `
                    <div class="search-skeleton-card" aria-hidden="true">
                        <div class="sk-row"><span class="sk-tag"></span></div>
                        <span class="sk-line sk-title"></span>
                        <span class="sk-line"></span>
                        <span class="sk-line sk-short"></span>
                        <div class="sk-row sk-stat">
                            <span class="sk-pill"></span>
                            <span class="sk-pill"></span>
                            <span class="sk-pill"></span>
                        </div>
                    </div>`;
                container.innerHTML = card.repeat(Math.min(count || total, 6));
            }

            function renderTagPills(containerId) {
                const container = document.getElementById(containerId);
                if (!container) return;
                const tags = containerId === 'tagFilterHome'
                    ? ['all', '置顶', '社交', '阅读', '随笔']
                    : getAllTags();
                container.innerHTML = tags.map(t =>
                    `<span class="tag-pill${t === activeTag ? ' active' : ''}" data-tag="${t}">${t === 'all' ? '全部' : t}</span>`
                ).join('');
                container.querySelectorAll('.tag-pill').forEach(pill => {
                    pill.addEventListener('click', function() {
                        const tag = this.getAttribute('data-tag');
                        activeTag = tag;
                        renderTagPills('tagFilterHome');
                        renderTagPills('tagFilterBlog');
                        renderPostsList('postsListHome', true);
                        renderPostsList('postsListBlog', true);
                    });
                });
            }

            function getFilteredPosts() {
                const posts = activeTag === 'all'
                    ? [...blogPosts]
                    : blogPosts.filter(p => p.tags.includes(activeTag));
                return posts.sort((a, b) => Number(Boolean(b.pinned)) - Number(Boolean(a.pinned)));
            }

            function renderPostsList(containerId, animate = false, options = {}) {
                const container = document.getElementById(containerId);
                if (!container) return;
                // 带 query 时走搜索结果（按匹配度排序），否则按标签筛选
                const query = normalizeQuery(options.query);
                const posts = query
                    ? searchPosts(query).map(hit => hit.post)
                    : getFilteredPosts();
                if (posts.length === 0) {
                    container.innerHTML = query
                        ? `<p class="home-search-empty">没有找到与「${escapeHtml(query)}」相关的文章<br>换一个关键词试试吧</p>`
                        : '<p style="color:#999;text-align:center;padding:30px 0;">暂无文章</p>';
                    return;
                }
                container.innerHTML = posts.map(p => {
                    const firstTag = p.tags[0] || '文章';
                    const commentCount = 12 + (p.id % 9);
                    const likeCount = 7 + (p.id % 6);
                    // 搜索模式：命中的字段在标题下方用小标签标出来，
                    // 标题和副标题里的命中关键词高亮。
                    const hitFields = query ? getMatchedFields(p, query) : [];
                    const titleHtml = query ? highlightKeyword(p.title, query) : p.title;
                    const excerptHtml = query ? highlightKeyword(p.excerpt, query) : p.excerpt;
                    const hitChips = hitFields
                        .slice(0, 2)
                        .map(field => `<span class="tag tag-hit">${SEARCH_FIELD_LABELS[field] || '匹配'}</span>`)
                        .join('');
                // ================ 二级菜单默认选项 ================
                    // url 里可以用占位符：{id} 换成文章 id，{title} 换成文章标题。
                    // 「问题反馈」带上这两个参数，反馈页就知道是针对哪篇文章提的意见。
                    const menuItems = articleMenus[p.id] || [
                        { label: '复制文章链接', type: 'share' },
                        { label: '查看评论', type: 'link', url: 'project_subpage/blog/building.html' },
                        { label: '问题反馈', type: 'link', url: 'project_subpage/blog/feedback.html?article={id}&title={title}' },
                    ];
                    const menuLinks = menuItems.map(item => {
                        if (item.type === 'article') {
                            return `<button class="post-menu-item" type="button" role="menuitem" data-action="article"><i class="ri-article-line"></i>${escapeHtml(item.label)}</button>`;
                        }
                        // 分享：直接复制这篇文章的链接（?article=id）
                        if (item.type === 'share') {
                            return `<button class="post-menu-item" type="button" role="menuitem" data-action="share"><i class="ri-link"></i>${escapeHtml(item.label)}</button>`;
                        }
                        let url = item.type === 'externalPage' ? p.externalPage : item.url;
                        if (!url) return '';
                        // 替换 URL 模板中的占位符
                        url = url.replace(/{id}/g, p.id).replace(/{title}/g, encodeURIComponent(p.title));
                        const icon = item.type === 'externalPage' ? 'ri-external-link-line' : 'ri-arrow-up-right-line';
                        const target = new URL(url, window.location.href).origin === window.location.origin
                            ? ''
                            : ' target="_blank" rel="noopener noreferrer"';
                        return `<a class="post-menu-item" role="menuitem" href="${escapeHtml(url)}"${target}><i class="${icon}"></i>${escapeHtml(item.label)}</a>`;
                    }).join('');

                    return `
                        <article class="task post-card${animate ? ' post-card-enter' : ''}" data-article-id="${p.id}" draggable="true">
                            <div class="tags">
                                <div class="tags-left">
                                    ${p.pinned ? '<span class="tag tag-pinned" title="置顶"><i class="ri-pushpin-2-line"></i></span>' : ''}
                                    <span class="tag">${firstTag}</span>
                                    ${hitChips}
                                </div>
                                <button class="options" type="button" aria-label="更多选项" aria-haspopup="menu" aria-expanded="false">
                                    <svg xml:space="preserve" viewBox="0 0 41.915 41.916" xmlns="http://www.w3.org/2000/svg" id="Capa_1" version="1.1" fill="#000000" aria-hidden="true"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><g><g><path d="M11.214,20.956c0,3.091-2.509,5.589-5.607,5.589C2.51,26.544,0,24.046,0,20.956c0-3.082,2.511-5.585,5.607-5.585 C8.705,15.371,11.214,17.874,11.214,20.956z"></path><path d="M26.564,20.956c0,3.091-2.509,5.589-5.606,5.589c-3.097,0-5.607-2.498-5.607-5.589c0-3.082,2.511-5.585,5.607-5.585 C24.056,15.371,26.564,17.874,26.564,20.956z"></path><path d="M41.915,20.956c0,3.091-2.509,5.589-5.607,5.589c-3.097,0-5.606-2.498-5.606-5.589c0-3.082,2.511-5.585,5.606-5.585 C39.406,15.371,41.915,17.874,41.915,20.956z"></path></g></g></g></svg>
                                </button>
                                <div class="post-menu" role="menu" hidden>
                                    ${menuLinks}
                                </div>
                            </div>
                            <h3 class="task-title">${titleHtml}</h3>
                            <p>${excerptHtml}</p>
                            <div class="stats">
                                <div class="stats-main">
                                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path stroke-linecap="round" stroke-width="2" d="M12 8V12L15 15"></path><circle stroke-width="2" r="9" cy="12" cx="12"></circle></g></svg>${p.date}</div>
                                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M16 10H16.01M12 10H12.01M8 10H8.01M3 10C3 4.64706 5.11765 3 12 3C18.8824 3 21 4.64706 21 10C21 15.3529 18.8824 17 12 17C11.6592 17 11.3301 16.996 11.0124 16.9876L7 21V16.4939C4.0328 15.6692 3 13.7383 3 10Z"></path></g></svg>${commentCount}</div>
                                    <div><svg fill="#000000" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-2.5 0 32 32"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><g id="icomoon-ignore"></g><path fill="#000000" d="M0 10.284l0.505 0.36c0.089 0.064 0.92 0.621 2.604 0.621 0.27 0 0.55-0.015 0.836-0.044 3.752 4.346 6.411 7.472 7.060 8.299-1.227 2.735-1.42 5.808-0.537 8.686l0.256 0.834 7.63-7.631 8.309 8.309 0.742-0.742-8.309-8.309 7.631-7.631-0.834-0.255c-2.829-0.868-5.986-0.672-8.686 0.537-0.825-0.648-3.942-3.3-8.28-7.044 0.11-0.669 0.23-2.183-0.575-3.441l-0.352-0.549-8.001 8.001zM1.729 10.039l6.032-6.033c0.385 1.122 0.090 2.319 0.086 2.334l-0.080 0.314 0.245 0.214c7.409 6.398 8.631 7.39 8.992 7.546l-0.002 0.006 0.195 0.058 0.185-0.087c2.257-1.079 4.903-1.378 7.343-0.836l-13.482 13.481c-0.55-2.47-0.262-5.045 0.837-7.342l0.104-0.218-0.098-0.221-0.031 0.013c-0.322-0.632-1.831-2.38-7.498-8.944l-0.185-0.215-0.282 0.038c-0.338 0.045-0.668 0.069-0.981 0.069-0.595 0-1.053-0.083-1.38-0.176z"></path></g></svg>${likeCount}</div>
                                </div>
                            </div>
                        </article>
                    `;
                }).join('');
                container.querySelectorAll('.post-card').forEach(card => {
                    card.addEventListener('click', function(e) {
                        if (e.target.closest('.options, .post-menu')) return;
                        const id = parseInt(this.getAttribute('data-article-id'));
                        openArticle(id);
                    });
                    // 移动端按下卡片时的触感反馈。
                    // 只在自己写这个类时才缩小：点在三点按钮或菜单上时不缩小，
                    // 否则菜单一展开整张卡片会缩一下再弹回去，看起来像在跳动。
                    card.addEventListener('pointerdown', function(e) {
                        if (e.target.closest('.options, .post-menu')) return;
                        card.classList.add('is-pressed');
                    });
                    ['pointerup', 'pointercancel', 'pointerleave'].forEach(function(type) {
                        card.addEventListener(type, function() {
                            card.classList.remove('is-pressed');
                        });
                    });
                });
                container.querySelectorAll('.options').forEach(button => {
                    button.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const card = this.closest('.post-card');
                        const isOpen = !card.classList.contains('menu-open');
                        document.querySelectorAll('.post-card.menu-open').forEach(openCard => {
                            openCard.classList.remove('menu-open');
                            openCard.querySelector('.options').setAttribute('aria-expanded', 'false');
                            openCard.querySelector('.post-menu').hidden = true;
                        });
                        if (isOpen) {
                            card.classList.add('menu-open');
                            this.setAttribute('aria-expanded', 'true');
                            card.querySelector('.post-menu').hidden = false;
                        }
                    });
                });
                container.querySelectorAll('.post-menu [data-action="article"]').forEach(button => {
                    button.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const card = this.closest('.post-card');
                        card.classList.remove('menu-open');
                        card.querySelector('.options').setAttribute('aria-expanded', 'false');
                        card.querySelector('.post-menu').hidden = true;
                        openArticle(parseInt(card.getAttribute('data-article-id')));
                    });
                });
                container.querySelectorAll('.post-menu [data-action="share"]').forEach(button => {
                    button.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const card = this.closest('.post-card');
                        card.classList.remove('menu-open');
                        card.querySelector('.options').setAttribute('aria-expanded', 'false');
                        card.querySelector('.post-menu').hidden = true;
                        const post = blogPosts.find(item => item.id === parseInt(card.getAttribute('data-article-id'), 10));
                        // 菜单项写的是「复制链接」，就只复制，不弹系统分享面板
                        if (post) copyArticleLink(post);
                    });
                });
                container.querySelectorAll('.post-menu a').forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const card = this.closest('.post-card');
                        card.classList.remove('menu-open');
                        card.querySelector('.options').setAttribute('aria-expanded', 'false');
                        card.querySelector('.post-menu').hidden = true;
                        // 同标签页跳转到其它 HTML 页面时，先记住当前界面
                        if (this.target !== '_blank') saveViewState();
                    });
                });
            }

            // iframe 的普通导航（设置 src / 移除 src）都会往浏览器历史里塞记录，
            // 这些记录会占掉一次“返回”，导致返回首页要按两次，所以统一改用
            // location.replace() 切换内嵌页面：它只替换当前记录，不新增记录。
            function setFrameSource(frame, url) {
                const target = url ? new URL(url, window.location.href).href : 'about:blank';
                let current = '';
                try {
                    current = frame.contentWindow ? frame.contentWindow.location.href : '';
                } catch (error) {
                    current = frame.src || '';
                }
                if (current === target) return false;
                if (!url && current === 'about:blank') return false;
                try {
                    frame.contentWindow.location.replace(target);
                } catch (error) {
                    // 跨域页面读不到 location，只能退回直接设置 src
                    if (url) {
                        frame.src = url;
                    } else {
                        frame.removeAttribute('src');
                    }
                }
                return true;
            }

            // 内嵌页面就绪：收起加载动画，把内容淡入
            function revealEmbeddedPage() {
                clearTimeout(embeddedPageFallbackTimer);
                embeddedPageFallbackTimer = null;
                embeddedArticleWrap.classList.remove('is-loading');
                embeddedArticleWrap.classList.add('is-ready');
            }

            // 更新分享卡片元信息（og:title / og:description / og:image / og:url）。
            // 微信抓取的是「被分享的那个 URL」，而本站文章都是 index.html?article=N
            // 同一个页面靠 JS 换内容，微信不会执行 JS 后再抓，所以这里改 meta
            // 对微信无效、对支持动态渲染的抓取器（部分浏览器 / Slack 等）有效。
            // 保留它是为了：链接被其它平台抓取时标题能对上当前文章。
            function updateShareMeta(post) {
                const url = buildArticleUrl(post.id);
                const setMeta = (selector, attr, value) => {
                    const el = document.head.querySelector(selector);
                    if (el) el.setAttribute(attr, value);
                };
                const title = post.title || 'Annie · 个人博客';
                const desc = post.excerpt || '思考 · 记录 · 创造';
                setMeta('meta[property="og:title"]', 'content', title);
                setMeta('meta[property="og:description"]', 'content', desc);
                setMeta('meta[property="og:url"]', 'content', url);
                setMeta('meta[name="twitter:title"]', 'content', title);
                setMeta('meta[name="twitter:description"]', 'content', desc);
                // 浏览器标签页标题也一起换掉，复制链接时更清楚
                document.title = `${title}`;
            }

            function renderArticle(post) {
                currentArticleId = post.id;
                const isUnavailableArticle = !isArticlePublic(post);
                updateShareMeta(post);
                articleTitle.hidden = isUnavailableArticle;
                articleMeta.hidden = isUnavailableArticle;
                articleUnavailableNotice.hidden = !isUnavailableArticle;
                articleShare.hidden = isUnavailableArticle;
                articleTitle.textContent = post.title;
                articleMeta.innerHTML = isUnavailableArticle ? '' : `
                    <span><i class="ri-calendar-line"></i> ${post.date}</span>
                    ${post.tags.map(t => `<span class="post-tag">${t}</span>`).join(' ')}
                `;
                const embeddedPage = isUnavailableArticle
                    ? 'project_subpage/blog/article_unavailable.html'
                    : post.embeddedPage;
                const isEmbeddedPage = Boolean(embeddedPage);
                articleContent.hidden = isUnavailableArticle || isEmbeddedPage;
                embeddedArticleWrap.hidden = !isEmbeddedPage;
                const embeddedMount = isUnavailableArticle
                    ? articleUnavailableMount
                    : embeddedArticleNormalMount;
                if (embeddedArticleWrap.parentElement !== embeddedMount) {
                    embeddedMount.appendChild(embeddedArticleWrap);
                }
                embeddedPageFrame.title = isUnavailableArticle
                    ? '当前文章不对外开放'
                    : '文章内嵌页面';
                articleContent.innerHTML = isUnavailableArticle ? '' : (post.content || '');
                // 换了文章就重新开始量高度，否则会沿用上一篇记下的旧值
                embeddedFrameHeight = 0;
                if (embeddedPageObserver) {
                    embeddedPageObserver.disconnect();
                    embeddedPageObserver = null;
                }
                if (embeddedPageResizeHandler) {
                    window.removeEventListener('resize', embeddedPageResizeHandler);
                    embeddedPageResizeHandler = null;
                }
                if (isEmbeddedPage) {
                    // 开始加载：先显示加载动画，等页面就绪后再淡入内容
                    embeddedArticleWrap.classList.add('is-loading');
                    embeddedArticleWrap.classList.remove('is-ready');
                    clearTimeout(embeddedPageFallbackTimer);
                    embeddedPageFallbackTimer = setTimeout(revealEmbeddedPage, 10000);
                    embeddedPageFrame.onload = () => {
                        const embeddedWindow = embeddedPageFrame.contentWindow;
                        if (embeddedWindow) {
                            embeddedWindow.postMessage({
                                type: 'annie-theme',
                                theme: document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light',
                            }, '*');
                        }
                        let embeddedBody;
                        let embeddedRoot;
                        try {
                            const embeddedDocument = embeddedPageFrame.contentDocument;
                            if (!embeddedDocument || !embeddedDocument.body) {
                                throw new Error('加载失败');
                            }
                            embeddedBody = embeddedDocument.body;
                            embeddedRoot = embeddedDocument.documentElement;
                            // 高度由外层统一控制，关掉内嵌页面自己的根滚动条，
                            // 否则文章里会多出一条滚动条
                            embeddedRoot.style.overflow = 'hidden';
                            embeddedBody.style.overflow = 'hidden';
                            embeddedRoot.style.scrollbarWidth = 'none';
                        } catch (error) {
                            console.error('无法读取内嵌页面尺寸，将保留可滚动的视口高度。', error);
                            embeddedPageFrame.style.height = `${Math.max(window.innerHeight * 0.8, 600)}px`;
                            revealEmbeddedPage();
                            return;
                        }
                        // 量出内嵌页面里真正的内容底部。
                        // 不能直接用 body.scrollHeight：内嵌页面会继承站点的
                        // body { min-height: 100vh }，那个 100vh 是相对 iframe 自身高度的，
                        // 于是 iframe 会被自己撑住、永远收不回去，文章末尾就会多出一大块空白。
                        const measureContentHeight = () => {
                            const embeddedWindow = embeddedPageFrame.contentWindow;
                            const embeddedDocument = embeddedPageFrame.contentDocument;
                            if (!embeddedWindow || !embeddedDocument || !embeddedDocument.body) {
                                return embeddedBody.scrollHeight;
                            }
                            const scrollTop = embeddedWindow.scrollY
                                || embeddedDocument.documentElement.scrollTop
                                || 0;
                            let bottom = 0;
                            const nodes = embeddedDocument.body.querySelectorAll('*');
                            for (let i = 0; i < nodes.length; i += 1) {
                                const node = nodes[i];
                                const style = embeddedWindow.getComputedStyle(node);
                                if (style.display === 'none'
                                    || style.visibility === 'hidden'
                                    || style.position === 'fixed') {
                                    continue;
                                }
                                const rect = node.getBoundingClientRect();
                                if (rect.width === 0 && rect.height === 0) continue;
                                bottom = Math.max(bottom, rect.bottom + scrollTop);
                            }
                            // 兜底：一个元素都量不到时，退回文档自身高度
                            return bottom > 0 ? bottom : embeddedBody.scrollHeight;
                        };

                        const resizeFrame = () => {
                            window.requestAnimationFrame(() => {
                                // 只按下限 120px 兜底，保证 iframe 始终贴合真实内容，
                                // 底部不再出现大片空白。
                                // 不要再往量到的高度上加余量：内嵌页如果把自己的
                                // 高度当成 iframe 高度（比如还带着 100vh），多出的
                                // 几像素会被下一轮重新量进去，越滚越大。
                                const contentHeight = Math.max(Math.ceil(measureContentHeight()), 120);
                                if (contentHeight === embeddedFrameHeight) return;
                                embeddedFrameHeight = contentHeight;
                                embeddedPageFrame.style.height = `${contentHeight}px`;
                                revealEmbeddedPage();
                            });
                        };
                        resizeFrame();
                        if ('ResizeObserver' in window) {
                            embeddedPageObserver = new ResizeObserver(resizeFrame);
                            embeddedPageObserver.observe(embeddedBody);
                            embeddedPageObserver.observe(embeddedRoot);
                        }
                        embeddedPageResizeHandler = resizeFrame;
                        window.addEventListener('resize', embeddedPageResizeHandler);
                    };
                    if (!setFrameSource(embeddedPageFrame, embeddedPage) && embeddedPageFrame.contentWindow) {
                        // 已经停在这个内嵌页面上，补跑一次初始化
                        embeddedPageFrame.onload();
                    }
                } else {
                    embeddedPageFrame.onload = null;
                    clearTimeout(embeddedPageFallbackTimer);
                    embeddedPageFallbackTimer = null;
                    embeddedArticleWrap.classList.remove('is-loading', 'is-ready');
                    setFrameSource(embeddedPageFrame, null);
                }
            }

            // ==================== 首页搜索交互 ====================
            // 三种状态：收起（只有放大镜）、展开待输入、展开且有结果。
            // 结构上放大镜和输入框是同一行里的两个盒子，展开时一个收窄、
            // 一个变宽，所以不需要额外的浮层，手机上也不会盖住标题。

            function setHomeSearchStatus(html) {
                if (!homeSearchStatus) return;
                if (!html) {
                    homeSearchStatus.hidden = true;
                    homeSearchStatus.innerHTML = '';
                    return;
                }
                homeSearchStatus.hidden = false;
                homeSearchStatus.innerHTML = html;
            }

            // 输入框、清空按钮在收起时不可聚焦，避免 Tab 走进看不见的控件
            function syncHomeSearchControls() {
                const active = homeSearchOpen;
                if (homeSearchInput) homeSearchInput.tabIndex = active ? 0 : -1;
                if (homeSearchClear) homeSearchClear.tabIndex = active ? 0 : -1;
                if (homeSearchToggle) homeSearchToggle.setAttribute('aria-expanded', active ? 'true' : 'false');
            }

            function openHomeSearch(options = {}) {
                if (!homeSearch || homeSearchOpen) return;
                window.clearTimeout(homeSearchCloseTimer);
                homeSearchCloseTimer = null;
                homeSearchOpen = true;
                homeSearchKeyboardVisible = false;
                homeSearchViewportHeight = window.visualViewport?.height || window.innerHeight;
                homeSearch.classList.add('open');
                homeSectionHeader?.classList.add('is-searching');
                syncHomeSearchControls();
                if (options.focus !== false) {
                    // 等展开动画把宽度让出来再聚焦，否则 iOS 会在 0 宽的元素上
                    // 直接弹键盘、把页面顶上去。preventScroll 避免聚焦时页面跳动
                    window.setTimeout(() => {
                        if (homeSearchOpen) homeSearchInput?.focus({ preventScroll: true });
                    }, 120);
                }
            }

            function finishHomeSearchClose() {
                window.clearTimeout(homeSearchCloseTimer);
                homeSearchCloseTimer = null;
                if (homeSearchOpen) return;
                homeSectionHeader?.classList.remove('is-searching');
                renderPostsList('postsListHome');
                if (homeMore) homeMore.hidden = false;
            }

            // 清空并收起搜索，回到正常的文章列表
            function closeHomeSearch(options = {}) {
                if (!homeSearch) return;
                const wasOpen = homeSearchOpen;
                window.clearTimeout(homeSearchTimer);
                window.clearTimeout(homeSearchStatusTimer);
                homeSearchOpen = false;
                activeHomeSearchRequest = null;
                homeSearchKeyboardVisible = false;
                homeSearch.classList.remove('open');
                if (homeSearchInput) homeSearchInput.value = '';
                if (homeSearchClear) homeSearchClear.hidden = true;
                tagFilterHome?.classList.remove('is-muted');
                setHomeSearchStatus('');
                syncHomeSearchControls();
                if (wasOpen && homeSearchMobile.matches && homeSectionHeader?.classList.contains('is-searching')) {
                    homeSearchCloseTimer = window.setTimeout(finishHomeSearchClose, 280);
                } else {
                    finishHomeSearchClose();
                }
                if (options.blur !== false && document.activeElement === homeSearchInput) {
                    homeSearchInput.blur();
                }
            }

            homeSearch?.querySelector('.home-search-field')?.addEventListener('transitionend', function(e) {
                if (e.target === this && e.propertyName === 'width' && !homeSearchOpen) {
                    finishHomeSearchClose();
                }
            });

            // 展开搜索时先把结果收起来，给用户一个「现在开始搜」的明确起点
            function resetHomeSearchResults() {
                window.clearTimeout(homeSearchTimer);
                window.clearTimeout(homeSearchStatusTimer);
                activeHomeSearchRequest = null;
                if (homeSearchClear) homeSearchClear.hidden = true;
                setHomeSearchStatus('');
                tagFilterHome?.classList.remove('is-muted');
                renderPostsList('postsListHome');
                if (homeMore) homeMore.hidden = false;
            }

            // 带加载过渡的搜索：先给检索中的状态（转圈 + 骨架屏），
            // 满足最短展示时长后再把真实结果换进来。
            function runHomeSearch(rawQuery) {
                const query = normalizeQuery(rawQuery);
                window.clearTimeout(homeSearchTimer);
                window.clearTimeout(homeSearchStatusTimer);

                if (!query) {
                    activeHomeSearchRequest = null;
                    if (homeSearchClear) homeSearchClear.hidden = true;
                    tagFilterHome?.classList.remove('is-muted');
                    setHomeSearchStatus('');
                    renderPostsList('postsListHome');
                    if (homeMore) homeMore.hidden = false;
                    return;
                }

                // 记住这次请求，异步回调回来时如果关键词已经变了就丢掉结果
                const requestId = `${Date.now()}-${Math.random()}`;
                activeHomeSearchRequest = requestId;
                if (homeSearchClear) homeSearchClear.hidden = false;
                tagFilterHome?.classList.add('is-muted');
                if (homeMore) homeMore.hidden = true;
                // 先展示「检索中」：转圈文案 + 骨架屏，这是加载过渡里看得见的部分
                setHomeSearchStatus(
                    '<span class="home-loading-spinner" aria-hidden="true"></span><span>正在搜索文章…</span>'
                );
                renderSearchSkeletons(postsListHome);

                const finish = () => {
                    // 期间又输入了新的关键词，或者已经退出搜索：这次结果作废
                    if (activeHomeSearchRequest !== requestId || !homeSearchOpen) return;
                    const hits = searchPosts(query);
                    renderPostsList('postsListHome', true, { query });
                    // 结果条换成命中统计，和卡片一起出现，形成「加载完成」的落点
                    setHomeSearchStatus(
                        hits.length > 0
                            ? `<i class="ri-search-line" aria-hidden="true"></i><span>找到 <strong>${hits.length}</strong> 篇与「${escapeHtml(query)}」相关的文章</span>`
                            : `<i class="ri-emotion-sad-line" aria-hidden="true"></i><span>没有找到与「${escapeHtml(query)}」相关的文章</span>`
                    );
                };
                homeSearchStatusTimer = window.setTimeout(finish, HOME_SEARCH_MIN_SPINNER);
            }

            function scheduleHomeSearch(rawQuery) {
                const query = normalizeQuery(rawQuery);
                window.clearTimeout(homeSearchTimer);
                window.clearTimeout(homeSearchStatusTimer);
                activeHomeSearchRequest = null;

                if (!query) {
                    runHomeSearch('');
                    return;
                }

                if (homeSearchClear) homeSearchClear.hidden = false;
                setHomeSearchStatus('');
                homeSearchTimer = window.setTimeout(() => {
                    runHomeSearch(rawQuery);
                }, HOME_SEARCH_DEBOUNCE);
            }

            if (homeSearchToggle) {
                homeSearchToggle.addEventListener('click', function() {
                    if (homeSearchOpen) closeHomeSearch();
                    else {
                        resetHomeSearchResults();
                        openHomeSearch();
                    }
                });
            }

            if (homeSearchClear) {
                homeSearchClear.addEventListener('click', function() {
                    if (homeSearchInput) homeSearchInput.value = '';
                    resetHomeSearchResults();
                    homeSearchInput?.focus({ preventScroll: true });
                });
            }

            if (homeSearchInput) {
                homeSearchInput.addEventListener('compositionstart', function() {
                    homeSearchComposing = true;
                    window.clearTimeout(homeSearchTimer);
                    window.clearTimeout(homeSearchStatusTimer);
                    activeHomeSearchRequest = null;
                    setHomeSearchStatus('');
                });
                homeSearchInput.addEventListener('compositionend', function() {
                    homeSearchComposing = false;
                    scheduleHomeSearch(this.value);
                });
                homeSearchInput.addEventListener('input', function() {
                    if (!homeSearchComposing) scheduleHomeSearch(this.value);
                });
                homeSearchInput.addEventListener('focus', function() {
                    if (!homeSearchMobile.matches) return;
                    homeSearchViewportHeight = window.visualViewport?.height || window.innerHeight;
                    homeSearchKeyboardVisible = false;
                });
                homeSearchInput.addEventListener('blur', function() {
                    if (homeSearchOpen && homeSearchMobile.matches && !normalizeQuery(this.value)) {
                        closeHomeSearch();
                    }
                });
                // 回车立即完成当前查询，不必再等输入停顿。
                homeSearchInput.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') {
                        if (homeSearchComposing || e.isComposing) return;
                        e.preventDefault();
                        runHomeSearch(this.value);
                    } else if (e.key === 'Escape') {
                        e.stopPropagation();
                        if (this.value) {
                            this.value = '';
                            resetHomeSearchResults();
                        } else {
                            closeHomeSearch();
                        }
                    }
                });
            }

            if (window.visualViewport) {
                window.visualViewport.addEventListener('resize', function() {
                    if (!homeSearchOpen || !homeSearchMobile.matches ||
                        document.activeElement !== homeSearchInput) return;

                    const height = window.visualViewport.height;
                    if (height < homeSearchViewportHeight - 100) {
                        homeSearchKeyboardVisible = true;
                    } else if (homeSearchKeyboardVisible && height > homeSearchViewportHeight + 100) {
                        homeSearchKeyboardVisible = false;
                        if (!normalizeQuery(homeSearchInput?.value || '')) closeHomeSearch();
                    }
                    homeSearchViewportHeight = height;
                });
            }

            // 点了别处就收起：移动端把键盘让出来，桌面端回到干净列表。
            // 点搜索结果里的卡片不算「别处」，否则点文章时输入框会先收一下。
            document.addEventListener('pointerdown', function(e) {
                if (!homeSearchOpen) return;
                if (e.target.closest('#homeSearch')) return;
                if (e.target.closest('#postsListHome .post-card')) return;
                closeHomeSearch();
            });

            // 搜索框展开后切到别的视图（文章 / 电影 / 关于）就收起，
            // 免得再回首页时还留着一个半开的搜索框
            function dismissHomeSearchOnViewChange(viewName) {
                if (!homeSearchOpen) return;
                if (viewName === 'home') return;
                closeHomeSearch();
            }

            function openArticle(id) {
                const post = blogPosts.find(p => p.id === id);
                if (!post) return;
                if (isArticlePublic(post) && post.externalPage && !post.embeddedPage) {
                    // 记住当前界面，返回时才能回到原处
                    saveViewState();
                    window.location.href = post.externalPage;
                    return;
                }
                articleReturnView = currentView === 'article' ? 'home' : currentView;
                articleReturnScroll = window.scrollY;
                const viewStateSnapshot = {
                    view: currentView,
                    articleId: currentArticleId,
                    tag: activeTag,
                    scroll: articleReturnScroll,
                    scrollPositions: {
                        ...viewScrollPositions,
                        [currentView]: articleReturnScroll,
                    },
                    returnView: articleReturnView,
                    returnScroll: articleReturnScroll,
                };
                history.replaceState({ annieViewSnapshot: viewStateSnapshot }, '', window.location.href);
                const articleHistoryState = {
                    annieArticleId: post.id,
                    annieReturnView: articleReturnView,
                    annieReturnScroll: articleReturnScroll,
                };
                history.pushState(articleHistoryState, '', window.location.href);
                articleHistoryEntryActive = true;
                renderArticle(post);
                switchView('article');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            function switchView(viewName) {
                const previousView = currentView;
                // 离开首页时收起搜索框，回来时是干净的列表
                dismissHomeSearchOnViewChange(viewName);
                if (previousView !== 'article') {
                    viewScrollPositions[previousView] = window.scrollY;
                }
                currentView = viewName;
                [viewHome, viewBlog, viewMovie, viewAbout, viewArticle].forEach(v => {
                    v.style.display = 'none';
                    v.classList.remove('active-view');
                });
                viewArticle.classList.remove('active');

                if (previousView === 'movie' && viewName !== 'movie') {
                    setFrameSource(movieFrame, null);
                }

                if (viewName === 'home') {
                    viewHome.style.display = 'block';
                    viewHome.classList.add('active-view');
                } else if (viewName === 'blog') {
                    viewBlog.style.display = 'block';
                    viewBlog.classList.add('active-view');
                    renderPostsList('postsListBlog');
                    renderTagPills('tagFilterBlog');
                } else if (viewName === 'movie') {
                    viewMovie.style.display = 'block';
                    viewMovie.classList.add('active-view');
                    if (previousView !== 'movie') setFrameSource(movieFrame, 'movie.html');
                    sizeMovieFrame();
                    if (window.innerWidth <= 700) {
                        window.requestAnimationFrame(() => {
                            if (viewScrollPositions.movie === null) {
                                centerMovieFrame();
                            } else {
                                restoreViewScroll('movie');
                            }
                        });
                    }
                } else if (viewName === 'about') {
                    viewAbout.style.display = 'block';
                    viewAbout.classList.add('active-view');
                } else if (viewName === 'article') {
                    viewArticle.style.display = 'block';
                    viewArticle.classList.add('active');
                }

                if (viewName !== 'movie' && viewName !== 'article') {
                    window.requestAnimationFrame(() => {
                        restoreViewScroll(viewName);
                    });
                }

                $$('.nav-links a').forEach(link => link.classList.remove('active'));
                const navMap = { home: 'home', blog: 'blog', movie: 'movie', about: 'about', article: 'blog' };
                const activeNav = navMap[viewName] || 'home';
                const navLink = document.querySelector(`.nav-links a[data-nav="${activeNav}"]`);
                if (navLink) navLink.classList.add('active');

                navLinks.classList.remove('open');
                // 地址栏跟着视图走，分享出去的链接才能定位到具体文章
                syncUrlWithView();
            }

            // ==================== 事件绑定 ====================
            $$('.nav-links a').forEach(link => {
                link.addEventListener('click', function(e) {
                    const nav = this.getAttribute('data-nav');
                    if (!nav) return;
                    e.preventDefault();
                    if (nav === 'home') switchView('home');
                    if (nav === 'blog') switchView('blog');
                    if (nav === 'movie') switchView('movie');
                    if (nav === 'about') switchView('about');
                });
            });

            homeLink.addEventListener('click', function(e) {
                e.preventDefault();
                switchView('home');
            });

            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('open');
            });

            backBtn.addEventListener('click', function(e) {
                e.preventDefault();
                returnToArticlePosition();
            });
            backBtn2.addEventListener('click', function(e) {
                e.preventDefault();
                returnToArticlePosition();
            });

            // 文章页顶部的分享按钮
            if (articleShare) {
                articleShare.addEventListener('click', function() {
                    const post = blogPosts.find(item => item.id === currentArticleId);
                    if (post) shareArticle(post);
                });
            }

            // ==================== 微信分享引导浮层 ====================
            if (wechatShareGuide) {
                if (wechatShareGuideClose) {
                    wechatShareGuideClose.addEventListener('click', closeWechatShareGuide);
                }
                // 点遮罩空白处关闭；点浮层内容本身不关闭
                wechatShareGuide.addEventListener('click', function(e) {
                    if (e.target === wechatShareGuide) closeWechatShareGuide();
                });
                // 浮层里的「再次复制链接」：复制当前文章链接
                if (wechatShareGuideCopy) {
                    wechatShareGuideCopy.addEventListener('click', function() {
                        const post = blogPosts.find(item => item.id === currentArticleId);
                        if (!post) return;
                        const url = buildArticleUrl(post.id);
                        Promise.resolve(copyLink(url)).then(function(ok) {
                            showToast(ok ? '链接已复制，粘贴给好友即可' : '链接复制失败，可长按地址栏手动复制');
                        });
                    });
                }
            }

            // Esc 关闭引导浮层（桌面版微信 / 外接键盘时用得上）
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && wechatShareGuide && !wechatShareGuide.hidden) {
                    closeWechatShareGuide();
                }
            });

            function returnToArticlePosition() {
                if (history.state && history.state.annieArticleId === currentArticleId) {
                    returningFromArticleButton = true;
                    history.back();
                    return;
                }
                articleHistoryEntryActive = false;
                switchView(articleReturnView);
                window.requestAnimationFrame(() => {
                    window.scrollTo({ top: articleReturnScroll, behavior: 'smooth' });
                });
            }

            window.addEventListener('popstate', function(event) {
                const state = event.state;
                const viewSnapshot = state && state.annieViewSnapshot;
                if (viewSnapshot && VALID_VIEWS.includes(viewSnapshot.view)) {
                    if (typeof viewSnapshot.tag === 'string' && getAllTags().includes(viewSnapshot.tag)) {
                        activeTag = viewSnapshot.tag;
                    }
                    returningFromArticleButton = false;
                    articleHistoryEntryActive = false;
                    restoreViewState(viewSnapshot);
                    return;
                }

                const post = state && blogPosts.find(item => item.id === state.annieArticleId);
                if (post && (!post.externalPage || post.embeddedPage || !isArticlePublic(post))) {
                    articleHistoryEntryActive = true;
                    articleReturnView = typeof state.annieReturnView === 'string'
                        && ['home', 'blog', 'movie', 'about'].includes(state.annieReturnView)
                        ? state.annieReturnView
                        : 'home';
                    articleReturnScroll = typeof state.annieReturnScroll === 'number'
                        ? state.annieReturnScroll
                        : 0;
                    renderArticle(post);
                    switchView('article');
                    window.scrollTo({ top: 0, behavior: 'instant' });
                    return;
                }

                if (!articleHistoryEntryActive && currentView !== 'article') return;
                const returnView = articleReturnView;
                const returnScroll = articleReturnScroll;
                returningFromArticleButton = false;
                articleHistoryEntryActive = false;
                switchView(returnView);
                window.requestAnimationFrame(() => {
                    window.scrollTo({ top: returnScroll, behavior: 'instant' });
                });
            });

            document.addEventListener('click', function(e) {
                if (e.target.matches('[data-nav="blog"]') && e.target.closest('.tag-pill')) {
                    e.preventDefault();
                    switchView('blog');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });

            document.addEventListener('click', function(e) {
                if (!e.target.closest('.post-card.menu-open')) {
                    document.querySelectorAll('.post-card.menu-open').forEach(card => {
                        card.classList.remove('menu-open');
                        card.querySelector('.options').setAttribute('aria-expanded', 'false');
                        card.querySelector('.post-menu').hidden = true;
                    });
                }
                if (!e.target.closest('.site-header') && navLinks.classList.contains('open')) {
                    navLinks.classList.remove('open');
                }
            });

            document.addEventListener('keydown', function(e) {
                if (e.key !== 'Escape') return;
                const openCard = document.querySelector('.post-card.menu-open');
                if (!openCard) return;
                openCard.classList.remove('menu-open');
                openCard.querySelector('.options').setAttribute('aria-expanded', 'false');
                openCard.querySelector('.post-menu').hidden = true;
                openCard.querySelector('.options').focus();
            });

            // ==================== 初始化 ====================
            function init() {
                const savedState = readViewState();
                if (savedState && typeof savedState.tag === 'string' && getAllTags().includes(savedState.tag)) {
                    activeTag = savedState.tag;
                }
                renderTagPills('tagFilterHome');
                renderTagPills('tagFilterBlog');
                renderPostsList('postsListHome');
                renderPostsList('postsListBlog');

                // 优先处理地址栏里的文章参数：别人分享过来的链接
                // （...?article=3）要能直接打开那篇文章。
                const urlArticleId = readArticleIdFromUrl();
                const urlPost = urlArticleId === null
                    ? null
                    : blogPosts.find(p => p.id === urlArticleId);
                if (urlPost && (!urlPost.externalPage || urlPost.embeddedPage || !isArticlePublic(urlPost))) {
                    articleReturnView = 'home';
                    articleReturnScroll = 0;
                    // 直接进入的文章没有可回退的站内记录，标记为未激活，
                    // 这样点「返回」会走 switchView 而不是 history.back()
                    articleHistoryEntryActive = false;
                    renderArticle(urlPost);
                    switchView('article');
                    return;
                }
                // 链接里的 id 不存在（文章被删了、链接被改过）时，
                // 清掉参数并回到首页，避免地址栏留着一个无效值
                if (urlArticleId !== null && !urlPost) {
                    const clean = new URL(window.location.href);
                    clean.searchParams.delete(ARTICLE_PARAM);
                    clean.hash = '';
                    history.replaceState(history.state, '', clean.pathname + clean.search);
                }

                // 关于页面也可以通过 ?view=about 直接打开，不受本地界面记忆影响。
                if (new URL(window.location.href).searchParams.get(VIEW_PARAM) === 'about') {
                    switchView('about');
                    return;
                }

                // 从别的 HTML 页面返回时，回到离开时的界面
                if (!restoreViewState(savedState)) switchView('home');
            }

            init();

            console.log('✅ Annie 的个人博客已就绪！');
            console.log('📝 修改文章内容：编辑 blogPosts 数组');
            console.log('👤 修改个人信息：编辑 siteConfig 对象');
            console.log('🖼️ 修改头像：替换 .avatar 的 src 属性');
            console.log('🔗 修改社交链接：编辑 .social-links 中的 href');
        })();