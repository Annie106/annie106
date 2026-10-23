        (function() {
            // ==================== ★★★ 在这里修改你的博客内容 ★★★ ====================
            // 所有文章数据都集中在这个数组里，增删改都非常方便。
            const blogPosts = [{
                id: 13,
                pinned: false,
                title: '六点五十的早自习，先给我演示一下怎么到',
                date: '2026-10-23',
                excerpt: '一小时的路程，六点五十之前到校。我提的是一道算术题，不是态度问题。',
                tags: ['随笔'],
                featured: true,
                content: `
                    <p>先交代我的情况：我不住校，家到学校通勤一小时。学校要求早自习 6:50 之前到校。翻译一下——我最晚 5:50 就得出门，每天早上不到六点就得起，比住校的同学起得还早。</p>
                    <p>我不是不来。我天天这么早起，图的就是赶上第一节课，一天没落下。我不服的，是「6:50 之前到」这条线本身。</p>
                    <h2>一、一小时的路上，怎么在六点五十之前到</h2>
                    <p>只有两种可能：把路程压缩成半小时，或者有车。</p>
                    <p>前者，请给我演示一下怎么压；后者，这个点没有车。起得再早也变不出车来——这不是态度问题，是物理问题。</p>
                    <h2>二、我不是本地的</h2>
                    <p>我不是本地的。这个时间点，除了我，还能有谁到？</p>
                    <p>拿「本地的」当理由，恰恰说明理由本身就站不住：本地不本地，跟六点五十能不能到，一点关系都没有。</p>
                    <h2>三、「班主任没有任何权力让学生早自习长期不来」</h2>
                    <p>好，权限我尊重，谁也别越权。但边界划完之后，方案呢？</p>
                    <p>第一节课前到校，算不算数？不算的话，6:50 到校要怎么实现？</p>
                    <p>「那我不管」——这句话说出口，这个位置到底是干什么用的？把问题原样退回给一个根本没有解的人，问题就消失了？</p>
                    <h2>四、我的诉求，两条，二选一</h2>
                    <p>一、允许我在第一节课前到校，早自习记缺席，我认。</p>
                    <p>二、学校给一个 6:50 前能到校的交通安排，哪怕只是一句「这个时段确实没车，允许你晚到」。</p>
                    <p>这两条都不难。难的是有没有人愿意承认：这条规定，有人真的做不到。</p>
                    <blockquote>我提的其实是一道算术题：一小时的路程，六点五十之前到，怎么办？谁答得上来谁答。答不上来，这条规定就该改。</blockquote>
                    <h2>原内容</h2>
                    <p><a class="gated-link" href="#">点击前往：获取原文下载方式</a></p>
                `,
            }, {
                id: 11,
                pinned: false,
                title: '归宿里的两帧：和朋友拍的归宿照',
                date: '2026-10-22',
                excerpt: '我很少在游戏里拍照，不是不喜欢，是总觉得镜头里缺点什么...直到有人愿意站在里面，陪我一起等光。',
                tags: ['第五人格', '随笔', '社交'],
                featured: true,
                // 独立页面，作为文章正文内嵌展示（照片、排版都在这个文件里）
                embeddedPage: 'project_subpage/blog/manor_photo.html',
            }, {
                id: 12,
                pinned: false,
                title: '霸道汤圆爱上我',
                date: '2026-10-22',
                excerpt: '它没有体温，却有脾气；它不会说话，却清楚我几点睡。一碗汤圆的入侵实录。',
                tags: ['随笔'],
                featured: true,
                content: `
                        <p>事情是从冬至那天开始的。</p>
                        <p>我从超市拎回一袋速冻汤圆，烧水、下锅，然后转身去回一条消息。等我想起来的时候，锅里已经浮起一颗格外圆、格外白的东西，正贴着锅沿，一动不动地等着我看它。</p>
                        <p>“水太沸了。”它说。</p>
                        <p>我承认我当时的第一反应是关火，第二反应才是——汤圆不会说话。</p>
                        <h2>一、它比我有规矩</h2>
                        <p>从那天起，我的生活被一颗汤圆接管了。</p>
                        <p>它没有手，却知道我几点睡；它没有眼睛，却清楚我又把早饭糊弄成了一杯咖啡。</p>
                        <p>“七点零三分，”它在我碗里说，“你已经三天没吃热的东西了。”</p>
                        <p>“你怎么什么都知道？”</p>
                        <p>“糯米做的，心细。”</p>
                        <h2>二、它也会吃醋</h2>
                        <p>冰箱里还剩半袋芝麻馅的。我随口夸了一句“还是芝麻的香”，锅里的水就莫名其妙地咕嘟了整整十分钟。</p>
                        <p>“你凭什么喜欢它？”它沉在碗底，语气很硬，“它连皮都煮破过一次。”</p>
                        <p>“那是你自己破的。”</p>
                        <p>它不说话了。汤面上慢慢浮起一层很淡的、像在赌气的白汽。</p>
                        <h2>三、后来我习惯了</h2>
                        <p>再后来，冬至过去了，元宵也过去了。冰箱清空那天，我站在灶台前发了很久的呆，最后把水烧开，往锅里只放了一颗。</p>
                        <p>水沸的时候，它慢吞吞地从锅底浮上来，照旧贴住锅沿。</p>
                        <p>“水太沸了。”它说。</p>
                        <p>“知道了。”我说。</p>
                        <blockquote>有些陪伴没有体温，但足以让一个冬天不至于太冷。</blockquote>
                        <p>——本文纯属虚构。如有雷同，可能是你家的汤圆也在开会。</p>
                    `,
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
                date: '2026-10-22',
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
            const searchOverlay = $('#searchOverlay');
            const searchBackdrop = $('#searchBackdrop');
            const searchPanel = $('#searchPanel');
            const searchInput = $('#searchInput');
            const searchClear = $('#searchClear');
            const searchSpinner = $('#searchSpinner');
            const searchMeta = $('#searchMeta');
            const searchBody = $('#searchBody');
            const searchSuggest = $('#searchSuggest');
            const searchResults = $('#searchResults');
            const searchClose = $('#searchClose');
            const searchBack = $('#searchBack');
            const searchHistoryBlock = $('#searchHistoryBlock');
            const searchHistoryChips = $('#searchHistoryChips');
            const searchHistoryClear = $('#searchHistoryClear');
            const searchTriggers = $$('[data-search-open]');
            const searchMobile = window.matchMedia('(max-width: 600px)');
            const searchDesktop = window.matchMedia('(min-width: 601px)');
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
            const articleFeedback = $('#articleFeedback');
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
            // ==================== 搜索状态 ====================
            // 当前关键词始终以输入框的值为准，不另存一份，避免两边不一致。
            let searchOpen = false;
            let searchComposing = false;
            // 每次输入都清掉上一个定时器，只有停下来才真正检索（防抖）
            let searchDebounceTimer = null;
            let searchPendingTimer = null;
            // 搜索请求标识：异步回调回来时用它判断这次结果是不是已经过期
            let searchRequestId = null;
            // 最近一次渲染出来的结果（用于 ↑↓ 选中和 Enter 打开）
            let searchHits = [];
            let searchActiveIndex = -1;
            // 打开搜索前的焦点，关闭时还回去
            let searchReturnFocus = null;
            // 键盘高度追踪：用 visualViewport 判断键盘是否弹起
            let searchViewportHeight = 0;
            let searchKeyboardVisible = false;
            // 搜索面板是否往历史里压了一条记录。
            // 打开搜索时压一条，手机的返回键 / 手势、浏览器的后退按钮
            // 就会先收起面板，而不是直接离开站点。
            let searchHistoryEntryActive = false;
            // 我们自己调用的 history.back() 会异步触发 popstate。
            // 这里记一个待忽略的次数，避免那次 popstate 被当成
            // 「用户按了返回」而多退一页（在文章页按 Ctrl+K 时尤其明显）。
            let searchPendingHistoryBack = 0;
            // 后退真正落地后要补做的收尾（比如重新同步地址栏）。
            // 退回到的那条历史记录带着旧 URL，而视图已经变了，
            // 不同步一次的话地址栏会和当前视图对不上。
            let searchHistoryBackCallback = null;
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

            // 把链接写入剪贴板。优先 Clipboard API，失败则退回 execCommand。
            // 两者都不行时返回 false，由调用方用页面提示告诉用户手动复制，
            // 不弹浏览器原生 prompt（会打断阅读，样式也跟站点不一致）。
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
                return ok;
            }

            // 复制文章链接（总是走复制，不弹系统分享面板）
            function copyArticleLink(post) {
                const url = buildArticleUrl(post.id);
                Promise.resolve(copyLink(url)).then(function (ok) {
                    // 失败时不再弹原生 prompt，统一用顶部轻提示告诉用户手动复制
                    showToast(ok
                        ? '链接已复制，打开连接可查看此文章'
                        : '复制失败，可长按地址栏手动复制');
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

            // ==================== 全站搜索：检索核心 ====================
            // 检索范围：标题、摘要、标签、正文（正文只用于排序与生成命中片段，
            // 不直接把整段正文塞进结果行，避免列表被长文撑开）。
            //
            // 打分是「字段权重 × 命中质量」的加法：
            //   - 整串出现在标题里（0 位置命中）权重最高，用户多半就是在找这篇；
            //   - 多个关键词全部命中 > 只命中一部分，命中全部关键词的会排在前面；
            //   - 标签命中给中等权重，让「按主题找」也能有结果；
            //   - 正文命中权重最低，只用于把相关文章捞出来并生成片段。
            const SEARCH_FIELD_LABELS = {
                title: '标题',
                excerpt: '摘要',
                tag: '标签',
                content: '正文',
            };
            const SEARCH_FIELD_WEIGHT = {
                title: 120,
                tag: 46,
                excerpt: 34,
                content: 12,
            };
            // 结果里最多展示多少条，避免一次性铺满一屏
            const SEARCH_RESULT_LIMIT = 24;
            // 输入停顿多久才真正检索。搜索本身是同步的，这个值只影响手感：
            // 太短会在中文输入法里频繁打断，太长会显得迟钝。
            const SEARCH_DEBOUNCE = 180;
            // 骨架屏至少停留的时间。检索是本地瞬时完成的，
            // 不留一点过渡会「闪一下」反而显得廉价，也会让人以为没响应。
            const SEARCH_MIN_PENDING = 240;
            const SEARCH_HISTORY_KEY = 'annie-search-history';
            const SEARCH_HISTORY_LIMIT = 6;

            // 去掉首尾空白并把连续空白压成一个空格，
            // 这样输入法里的全角空格、换行也不会把关键词切碎
            function normalizeQuery(value) {
                return String(value == null ? '' : value).replace(/\s+/g, ' ').trim();
            }

            // 把 HTML 正文压成纯文本：去标签、解常见实体、压空白、转小写。
            // 只用于检索和生成片段，不参与渲染。
            function normalizeText(value) {
                return String(value == null ? '' : value)
                    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ')
                    .replace(/<[^>]*>/g, ' ')
                    .replace(/&nbsp;/gi, ' ')
                    .replace(/&amp;/gi, '&')
                    .replace(/&lt;/gi, '<')
                    .replace(/&gt;/gi, '>')
                    .replace(/&quot;/gi, '"')
                    .replace(/&#39;/gi, "'")
                    .replace(/\s+/g, ' ')
                    .trim()
                    .toLowerCase();
            }

            // 拆关键词：空格分词 + 转小写。
            // 中文没有词边界，所以整串也会作为一个词保留，
            // 输入「第五人格 归宿」时两个词都要命中。
            function getKeywords(query) {
                return normalizeQuery(query)
                    .toLowerCase()
                    .split(' ')
                    .filter(Boolean);
            }

            // 每篇文章的检索缓存。正文正则去标签不算便宜，
            // 而文章数据在页面生命周期内不会变，算一次就够了。
            const searchIndexCache = new Map();

            function getSearchIndex(post) {
                const cached = searchIndexCache.get(post.id);
                if (cached && cached.source === post) return cached;
                const index = {
                    source: post,
                    title: normalizeText(post.title),
                    excerpt: normalizeText(post.excerpt),
                    tags: (post.tags || []).map(tag => normalizeText(tag)),
                    tagLine: (post.tags || []).map(tag => normalizeText(tag)).join(' '),
                    // 正文只在需要时才算：embeddedPage 是 iframe，
                    // 外站内容读不到，只能靠标题/摘要/标签匹配。
                    content: normalizeText(post.content),
                    date: String(post.date || ''),
                };
                searchIndexCache.set(post.id, index);
                return index;
            }

            function countHits(text, keywords) {
                if (!text) return 0;
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

            // 用「所有关键词都出现」做门槛，但允许分别落在不同字段。
            // 例如「阅读 工作流」：一个在标题、一个在摘要，也算命中。
            function matchesAllKeywords(index, keywords) {
                const haystack = `${index.title} ${index.excerpt} ${index.tagLine} ${index.content}`;
                return keywords.every(keyword => haystack.includes(keyword));
            }

            // 命中质量：0 位置命中（前缀）额外加权，整词等于字段内容再加权。
            function fieldScore(text, keywords, weight) {
                if (!text) return 0;
                let score = 0;
                keywords.forEach(keyword => {
                    const at = text.indexOf(keyword);
                    if (at === -1) return;
                    score += weight;
                    if (at === 0) score += weight * 0.55;
                    else if (/[\s，。、,.!?！？:：;；\-—]/.test(text.charAt(at - 1))) {
                        // 落在词边界上，比句中偶然出现更相关
                        score += weight * 0.2;
                    }
                    // 同一个词出现多次只给一点递减的加成，防止刷分
                    const extra = countHits(text, [keyword]) - 1;
                    if (extra > 0) score += Math.min(extra, 3) * weight * 0.08;
                });
                return score;
            }

            // 生成命中片段：优先取第一个关键词出现的位置，
            // 前后各截一段，让用户一眼看到「为什么这条被搜出来」。
            function buildSearchSnippet(index, keywords) {
                const source = index.content || index.excerpt;
                if (!source) return index.excerpt;
                const at = keywords
                    .map(keyword => source.indexOf(keyword))
                    .filter(pos => pos >= 0)
                    .sort((a, b) => a - b)[0];
                if (at == null || at < 0) return index.excerpt;
                // 正文里命中点可能离摘要很远，截 40 字上下文
                const start = Math.max(0, at - 26);
                const end = Math.min(source.length, at + 78);
                return `${start > 0 ? '…' : ''}${source.slice(start, end)}${end < source.length ? '…' : ''}`;
            }

            // 搜索并按相关度排序。返回 [{ post, score, fields, snippet }]。
            function searchPosts(query) {
                const keywords = getKeywords(query);
                if (keywords.length === 0) return [];
                const results = [];

                blogPosts.forEach(post => {
                    // 未开放的文章不出现在搜索结果里：
                    // 搜得到却点不进去，比搜不到更让人困惑。
                    if (!isArticlePublic(post)) return;
                    const index = getSearchIndex(post);
                    if (!matchesAllKeywords(index, keywords)) return;

                    const fields = [];
                    let score = 0;

                    const titleScore = fieldScore(index.title, keywords, SEARCH_FIELD_WEIGHT.title);
                    if (titleScore > 0) {
                        score += titleScore;
                        fields.push('title');
                    }
                    const tagScore = fieldScore(index.tagLine, keywords, SEARCH_FIELD_WEIGHT.tag);
                    if (tagScore > 0) {
                        score += tagScore;
                        fields.push('tag');
                    }
                    const excerptScore = fieldScore(index.excerpt, keywords, SEARCH_FIELD_WEIGHT.excerpt);
                    if (excerptScore > 0) {
                        score += excerptScore;
                        fields.push('excerpt');
                    }
                    const contentScore = fieldScore(index.content, keywords, SEARCH_FIELD_WEIGHT.content);
                    if (contentScore > 0) {
                        score += contentScore;
                        fields.push('content');
                    }

                    // 整串（含空格）在标题里原样出现，几乎可以肯定就是要找的那篇
                    const phrase = normalizeQuery(query).toLowerCase();
                    if (phrase.includes(' ') && index.title.includes(phrase)) score += 90;

                    // 命中的关键词个数：全中的排前面，部分命中的往后放
                    const hitKeywordCount = keywords.filter(keyword =>
                        `${index.title} ${index.excerpt} ${index.tagLine} ${index.content}`.includes(keyword)
                    ).length;
                    score += hitKeywordCount * 6;

                    results.push({
                        post,
                        score,
                        fields: fields.sort((a, b) => SEARCH_FIELD_WEIGHT[b] - SEARCH_FIELD_WEIGHT[a]),
                        snippet: buildSearchSnippet(index, keywords),
                    });
                });

                results.sort((a, b) => {
                    if (b.score !== a.score) return b.score - a.score;
                    // 分数相同：置顶优先，再按 id 新的在前
                    const pinnedDiff = Number(Boolean(b.post.pinned)) - Number(Boolean(a.post.pinned));
                    if (pinnedDiff !== 0) return pinnedDiff;
                    return b.post.id - a.post.id;
                });

                return results.slice(0, SEARCH_RESULT_LIMIT);
            }

            // 把命中的关键词包成 <mark>。先转义再替换，
            // 这样用户输入 <script> 之类的字符不会变成真的标签。
            function highlightKeyword(value, query, extraClass) {
                const text = String(value == null ? '' : value);
                const keywords = getKeywords(query);
                if (keywords.length === 0) return escapeHtml(text);
                const escaped = keywords
                    .map(keyword => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
                    .sort((a, b) => b.length - a.length);
                const pattern = new RegExp(`(${escaped.join('|')})`, 'gi');
                const cls = extraClass ? `search-hl ${extraClass}` : 'search-hl';
                return escapeHtml(text).replace(pattern, `<mark class="${cls}">$1</mark>`);
            }

            function renderTagPills(containerId) {
                const container = document.getElementById(containerId);
                if (!container) return;
                const tags = containerId === 'tagFilterHome'
                    ? ['all', '置顶', '社交', '随笔']
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
                // 标签数量和文字长度都变了，重新判断搜索入口放不放得下
                scheduleSearchTriggerFit();
            }

            // ==================== 搜索入口：空间自适应 ====================
            // 手机上搜索按钮带「搜索」两个字，但如果这一行已经放不下
            //（屏幕太窄，或者以后标签变多占满横向空间），就把文字收起来、
            // 只留放大镜，免得标题被挤得换行或文字被截成半截。
            //
            // 判断方式：把「标题 + 搜索按钮 + 标签行」按不换行时的自然宽度
            // 加起来，和整行可用宽度比。超过就加 is-tight。
            // 比写死屏宽可靠——标签数量、字号、屏幕宽度怎么变都能跟上。
            let searchTriggerFitTimer = null;
            let searchTriggerFitRaf = null;

            function isSearchTriggerRowTight(header) {
                if (!header) return false;
                const head = header.querySelector('.home-section-head');
                const trigger = header.querySelector('.search-trigger');
                const label = header.querySelector('.section-label');
                const tagFilter = header.querySelector('.tag-filter');
                if (!head || !trigger || !label) return false;

                // 先把可能残留的 is-tight 撤掉，才能量到「文字展开时」的真实宽度
                header.classList.remove('is-tight');

                const headStyle = window.getComputedStyle(head);
                const headerStyle = window.getComputedStyle(header);
                const gap = parseFloat(headerStyle.columnGap || headerStyle.gap) || 0;
                const headGap = parseFloat(headStyle.columnGap || headStyle.gap) || 0;

                // 标题 + 搜索按钮的自然宽度
                const naturalHeadWidth =
                    label.scrollWidth + headGap + trigger.scrollWidth;
                // 标签行不换行时的自然宽度
                const naturalTagsWidth = tagFilter ? getTagFilterNaturalWidth(tagFilter) : 0;

                // 整行可用宽度 = 自身内容宽度（不受 justify-content 影响）
                const available = header.clientWidth;

                const needed =
                    naturalHeadWidth + (naturalTagsWidth ? gap + naturalTagsWidth : 0);

                // 留 2px 余量，避开 sub-pixel 取整造成的误判
                if (needed > available + 2) return true;

                // 保险：如果实际渲染已经把标签行挤到了下一行
                //（两者不在一行），同样视为「放不下」，收起搜索文字。
                // 这样即使某处 CSS 没生效，也不会出现「标题一行、标签一行」。
                if (tagFilter) {
                    const headRect = head.getBoundingClientRect();
                    const tagRect = tagFilter.getBoundingClientRect();
                    if (tagRect.top >= headRect.bottom - 2) return true;
                }
                return false;
            }

            // 标签行如果允许换行，scrollWidth 拿不到「不换行时的宽度」，
            // 这里逐个子元素累加，得到真实的自然宽度。
            function getTagFilterNaturalWidth(tagFilter) {
                const gap = parseFloat(window.getComputedStyle(tagFilter).columnGap || '0') || 0;
                let width = 0;
                let count = 0;
                tagFilter.querySelectorAll('.tag-pill').forEach(pill => {
                    width += pill.getBoundingClientRect().width;
                    count += 1;
                });
                if (count > 1) width += gap * (count - 1);
                return width;
            }

            function applySearchTriggerFit() {
                // 只有手机布局才自动收文字；桌面本来就有键盘提示，宽度也够
                const isNarrow = window.matchMedia('(max-width: 600px)').matches;

                // 全部文章页在手机上允许换行（标题一行、标签一行），
                // 换行后第一行只剩「全部文章 + 搜索」，空间充足，
                // 不需要再收起搜索文字。把它从自适应逻辑里排除掉，
                // 同时清掉可能残留的 is-tight / 内联样式。
                const blogHeader = document.querySelector('#view-blog > .section-header');
                if (blogHeader) {
                    blogHeader.classList.remove('is-tight');
                    clearHeaderInlineFit(blogHeader);
                    // 桌面端：标签放不下时独占一行、左对齐标题，
                    // 放得下时紧跟标题靠右。用实测决定用哪种形态。
                    updateBlogTagWrap(blogHeader);
                }

                // 首页：始终不换行，空间不够时收起搜索文字
                const headers = document.querySelectorAll('#view-home > .section-header');
                headers.forEach(header => {
                    if (!isNarrow) {
                        header.classList.remove('is-tight');
                        clearHeaderInlineFit(header);
                        return;
                    }
                    // 视图隐藏时 clientWidth 是 0，量不出结果，跳过
                    if (!header.clientWidth) return;
                    const tight = isSearchTriggerRowTight(header);
                    header.classList.toggle('is-tight', tight);
                    // CSS 已经用 flex + margin-left:auto 做了对齐，
                    // 但部分内核（如鸿蒙微信的 ArkWeb）对 flex 自动外边距、
                    // flex-basis 的处理不一致，会出现「标签没贴右」。
                    // 这里再用实测宽度写一次内联样式兜底，跑在 CSS 之后，
                    // 优先级更高，能覆盖掉内核差异。
                    applyHeaderInlineFit(header);
                });
            }

            // 全部文章页（桌面端）的标签形态切换。
            // 标签是从所有文章收集的，数量不定：放得下就让它们紧跟标题靠右；
            // 放不下就整体落到第二行、从左边开始，和「全部文章」对齐——
            // 否则换行后那一坨标签会孤零零地缩在右边，看着和标题脱节。
            // 判断方式：把标题组和标签的自然宽度加起来，跟整行可用宽度比。
            function updateBlogTagWrap(header) {
                if (!header) return;
                // 只有桌面端才有两种形态；手机端 CSS 里已经固定成换行布局
                if (!window.matchMedia('(min-width: 601px)').matches) {
                    header.classList.remove('is-tag-wrap');
                    return;
                }
                const head = header.querySelector('.home-section-head');
                const tagFilter = header.querySelector('.tag-filter');
                if (!head || !tagFilter) return;
                if (!header.clientWidth) return;

                // 先复位，才能量到「标签按内容展开」时的自然宽度
                header.classList.remove('is-tag-wrap');

                const headerStyle = window.getComputedStyle(header);
                const gap = parseFloat(headerStyle.columnGap || headerStyle.gap) || 0;
                const headWidth = head.getBoundingClientRect().width;
                const tagsWidth = getTagFilterNaturalWidth(tagFilter);
                const needed = headWidth + gap + tagsWidth;

                // 留 2px 余量，避开 sub-pixel 取整造成的误判
                header.classList.toggle('is-tag-wrap', needed > header.clientWidth + 2);
            }

            // 实测后把标签行宽度钉死，并把它推到最右。
            // 放得下：宽度 = 内容宽度；放不下：宽度 = 剩余空间（内部横向滚动）。
            //
            // 关键：不依赖 CSS 的 margin-left: auto。
            // 部分内核（鸿蒙微信的 ArkWeb 等）对 flex 自动外边距支持不一致，            // 会出现「标签没贴右」。这里直接用计算出的像素值写死 margin-left，
            // 内联样式优先级最高，任何内核都会照做。
            function applyHeaderInlineFit(header) {
                const head = header.querySelector('.home-section-head');
                const tagFilter = header.querySelector('.tag-filter');
                if (!head || !tagFilter) return;

                // 先清掉上一次的内联宽度，否则会被上次的定宽裁剪，
                // 量出来的内容宽度是错的（越量越窄）
                tagFilter.style.width = '';
                tagFilter.style.marginLeft = '';

                const headerStyle = window.getComputedStyle(header);
                const gap = parseFloat(headerStyle.columnGap || headerStyle.gap) || 0;
                const avail = header.clientWidth;
                const headWidth = head.getBoundingClientRect().width;
                const contentWidth = getTagFilterNaturalWidth(tagFilter);
                // 标签行最多能用的宽度
                const remaining = Math.max(0, avail - headWidth - gap);
                const targetWidth = Math.min(contentWidth, remaining);
                // 放得下就推到最右；放不下就紧贴标题（宽度占满剩余）
                const marginLeft = Math.max(0, Math.round(avail - headWidth - gap - targetWidth));

                tagFilter.style.flex = '0 0 auto';
                tagFilter.style.width = `${Math.round(targetWidth)}px`;
                tagFilter.style.minWidth = '0';
                tagFilter.style.maxWidth = 'none';
                tagFilter.style.marginLeft = `${marginLeft}px`;
                tagFilter.style.marginRight = '0';
                tagFilter.style.overflowX = 'auto';
                tagFilter.style.overflowY = 'hidden';
            }

            function clearHeaderInlineFit(header) {
                const tagFilter = header.querySelector('.tag-filter');
                if (!tagFilter) return;
                tagFilter.style.flex = '';
                tagFilter.style.width = '';
                tagFilter.style.minWidth = '';
                tagFilter.style.maxWidth = '';
                tagFilter.style.marginLeft = '';
                tagFilter.style.marginRight = '';
                tagFilter.style.overflowX = '';
                tagFilter.style.overflowY = '';
            }

            function scheduleSearchTriggerFit() {
                window.clearTimeout(searchTriggerFitTimer);
                searchTriggerFitTimer = window.setTimeout(applySearchTriggerFit, 0);
            }

            function getFilteredPosts() {
                const posts = activeTag === 'all'
                    ? [...blogPosts]
                    : blogPosts.filter(p => p.tags.includes(activeTag));
                return posts.sort((a, b) => Number(Boolean(b.pinned)) - Number(Boolean(a.pinned)));
            }

            function renderPostsList(containerId, animate = false) {
                const container = document.getElementById(containerId);
                if (!container) return;
                const posts = getFilteredPosts();
                if (posts.length === 0) {
                    container.innerHTML = '<p style="color:#999;text-align:center;padding:30px 0;">暂无文章</p>';
                    return;
                }
                container.innerHTML = posts.map(p => {
                    const firstTag = p.tags[0] || '文章';
                    const commentCount = 12 + (p.id % 9);
                    const likeCount = 7 + (p.id % 6);
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
                                </div>
                                <button class="options" type="button" aria-label="更多选项" aria-haspopup="menu" aria-expanded="false">
                                    <svg xml:space="preserve" viewBox="0 0 41.915 41.916" xmlns="http://www.w3.org/2000/svg" id="Capa_1" version="1.1" fill="#000000" aria-hidden="true"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><g><g><path d="M11.214,20.956c0,3.091-2.509,5.589-5.607,5.589C2.51,26.544,0,24.046,0,20.956c0-3.082,2.511-5.585,5.607-5.585 C8.705,15.371,11.214,17.874,11.214,20.956z"></path><path d="M26.564,20.956c0,3.091-2.509,5.589-5.606,5.589c-3.097,0-5.607-2.498-5.607-5.589c0-3.082,2.511-5.585,5.607-5.585 C24.056,15.371,26.564,17.874,26.564,20.956z"></path><path d="M41.915,20.956c0,3.091-2.509,5.589-5.607,5.589c-3.097,0-5.606-2.498-5.606-5.589c0-3.082,2.511-5.585,5.606-5.585 C39.406,15.371,41.915,17.874,41.915,20.956z"></path></g></g></g></svg>
                                </button>
                                <div class="post-menu" role="menu" hidden>
                                    ${menuLinks}
                                </div>
                            </div>
                            <h3 class="task-title">${p.title}</h3>
                            <p>${p.excerpt}</p>
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

            /* ============================================================
               链接提示窗
               正文里给链接加 class="gated-link"、href 写 #，点它就弹这个窗：
                      <a class="gated-link" href="#">点击前往</a>
               窗里只有「前往 / 取消 / × / 点遮罩」，都只是关掉窗口：
               不做密码校验、不跳转，地址也不存在代码里。
               ============================================================ */
            let linkGateEls = null;
            function ensureLinkGate() {
                if (linkGateEls) return linkGateEls;
                const wrap = document.createElement('div');
                wrap.className = 'link-gate';
                wrap.hidden = true;
                wrap.innerHTML = [
                    '<div class="link-gate-backdrop" data-close></div>',
                    '<div class="link-gate-card" role="dialog" aria-modal="true" aria-labelledby="linkGateTitle">',
                    '<button type="button" class="link-gate-close" data-close aria-label="关闭">×</button>',
                    '<h2 class="link-gate-title" id="linkGateTitle">根据相关规定，链接已停止访问</h2>',
                    '<p class="link-gate-desc">点击任意处关闭</p>',
                    '</div>'
                ].join('');
                document.body.appendChild(wrap);
                const els = {
                    wrap: wrap
                };
                /* 「前往」「取消」「×」「点遮罩」都只是关掉窗口 */
                wrap.addEventListener('click', function (event) {
                    if (event.target.closest('[data-close]')) hideLinkGate();
                });
                document.addEventListener('keydown', function (event) {
                    if (event.key === 'Escape' && !wrap.hidden) hideLinkGate();
                });
                linkGateEls = els;
                return els;
            }

            function showLinkGate() {
                const els = ensureLinkGate();
                els.wrap.hidden = false;
            }

            function hideLinkGate() {
                if (!linkGateEls || linkGateEls.wrap.hidden) return;
                linkGateEls.wrap.hidden = true;
            }

            function renderArticle(post) {
                currentArticleId = post.id;
                const isUnavailableArticle = !isArticlePublic(post);
                updateShareMeta(post);
                articleTitle.hidden = isUnavailableArticle;
                articleMeta.hidden = isUnavailableArticle;
                articleUnavailableNotice.hidden = !isUnavailableArticle;
                articleShare.hidden = isUnavailableArticle;
                // 底部「问题反馈」入口：把当前文章带给反馈页（地址格式和卡片「⋯」菜单一致）
                if (articleFeedback) {
                    articleFeedback.href = 'project_subpage/blog/feedback.html?article='
                        + encodeURIComponent(post.id)
                        + '&title=' + encodeURIComponent(post.title || '');
                }
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
                if (window.AnnieImageLoading) {
                    window.AnnieImageLoading.initialize(articleContent);
                }
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
                            if (window.AnnieImageLoading) {
                                window.AnnieImageLoading.initialize(embeddedDocument);
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

                // 正文里标了 gated-link 的链接：点它弹出提示窗（不校验、不跳转）
                const gatedLinks = articleContent.querySelectorAll('a.gated-link');
                for (let i = 0; i < gatedLinks.length; i += 1) {
                    gatedLinks[i].addEventListener('click', function (event) {
                        event.preventDefault();
                        showLinkGate(post);
                    });
                }
            }

            // ==================== 全站搜索：交互 ====================
            // 结构：一层浮层（overlay）里放一块面板（panel）。
            // 桌面端是顶部居中的浮层，手机端是全屏面板。
            // 键盘避让靠 visualViewport：把可视高度写进 CSS 变量，
            // 面板整体缩短，输入框和结果始终留在键盘上方。

            // ---------- 最近搜索（存在本地，最多 6 条） ----------
            function readSearchHistory() {
                try {
                    const raw = JSON.parse(localStorage.getItem(SEARCH_HISTORY_KEY) || '[]');
                    if (!Array.isArray(raw)) return [];
                    return raw
                        .filter(item => typeof item === 'string')
                        .map(item => normalizeQuery(item))
                        .filter(Boolean)
                        .slice(0, SEARCH_HISTORY_LIMIT);
                } catch (e) {
                    return [];
                }
            }

            function writeSearchHistory(list) {
                try {
                    localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(list));
                } catch (e) {}
            }

            function rememberSearch(query) {
                const value = normalizeQuery(query);
                if (!value) return;
                const list = readSearchHistory().filter(item => item !== value);
                list.unshift(value);
                writeSearchHistory(list.slice(0, SEARCH_HISTORY_LIMIT));
            }

            function renderSearchHistory() {
                if (!searchHistoryChips || !searchHistoryBlock) return;
                const list = readSearchHistory();
                searchHistoryBlock.hidden = list.length === 0;
                searchHistoryChips.innerHTML = list.map(item => `
                    <button class="search-chip" type="button" data-search-history="${escapeHtml(item)}">
                        <i class="ri-history-line" aria-hidden="true"></i>${escapeHtml(item)}
                    </button>
                `).join('');
            }

            // ---------- 空状态：按标签 + 最近更新 + 快速前往 ----------
            // 渲染顺序不影响视觉顺序（视觉顺序由 index.html 的 DOM 决定），
            // 这里两块都是幂等的，先渲染谁都可以。
            function renderSearchSuggestions() {
                renderSearchRecent();
                renderSearchTagCloud();
            }

            // 标签网格：按出现次数排序，取前 8 个铺成两列卡片。
            // 每张卡右上角带文章数，点一下就把标签当关键词搜。
            function renderSearchTagCloud() {
                const cloud = document.getElementById('searchTagCloud');
                if (!cloud) return;
                const counter = new Map();
                blogPosts.forEach(post => {
                    if (!isArticlePublic(post)) return;
                    (post.tags || []).forEach(tag => {
                        counter.set(tag, (counter.get(tag) || 0) + 1);// 统计每个标签出现次数
                    });
                });
                const tags = Array.from(counter.entries()).sort((a, b) => {
                    if (b[1] !== a[1]) return b[1] - a[1];// 出现次数多的在前
                    return a[0].localeCompare(b[0], 'zh');    
                });
                if (!tags.length) {
                    cloud.innerHTML = '';
                    return;
                }
                const max = Math.max.apply(null, tags.map(entry => entry[1]));
                // 三列布局，6 个标签正好两行——比两列四行省下近一半高度，
                // 面板里还要放「最近更新」和「快速前往」，这块不能占太多
                cloud.innerHTML = tags.slice(0, 6).map(entry => {// 只取前 6 个
                    const [tag, count] = entry;
                    // 出现次数映射到 1~3 档，用来给字号/字重分层次
                    const weight = max <= 1 ? 1 : Math.min(3, Math.max(1, Math.ceil(count / max * 3)));
                    return `<button class="search-cloud-tag" type="button"
                                    data-search-tag="${escapeHtml(tag)}" data-weight="${weight}">
                        <span class="search-cloud-tag-name">${escapeHtml(tag)}</span>
                        <span class="search-cloud-count">${count}</span>
                    </button>`;
                }).join('');
            }
            // 最近更新：按日期倒序取最新的几篇，直接摊在搜索框下面。
            // 搜索面板空着的时候有个「可以点进去看看」的落点，
            // 手机上也不会只剩一大片空白。
            function renderSearchRecent() {
                const list = document.getElementById('searchRecentList');
                if (!list) return;
                const posts = blogPosts
                    .filter(post => isArticlePublic(post))
                    .sort((a, b) => {
                        // 先按日期倒序，同一天的按 id 新的在前
                        const dateDiff = String(b.date || '').localeCompare(String(a.date || ''));
                        return dateDiff !== 0 ? dateDiff : b.id - a.id;
                    })
                    .slice(0, 4);
                list.innerHTML = posts.map(post => {
                    const tag = post.tags && post.tags[0] ? ' · ' + escapeHtml(post.tags[0]) : '';
                    return `
                    <button class="search-recent-item" type="button" data-search-recent="${post.id}">
                        <span class="search-recent-dot" aria-hidden="true"></span>
                        <span class="search-recent-main">
                            <span class="search-recent-title">${escapeHtml(post.title)}</span>
                            <span class="search-recent-date">${escapeHtml(post.date || '')}${tag}</span>
                        </span>
                        <i class="ri-arrow-right-s-line search-recent-arrow" aria-hidden="true"></i>
                    </button>`;
                }).join('');
            }

            // ---------- 状态行 ----------
            function setSearchMeta(html) {
                if (!searchMeta) return;
                if (!html) {
                    searchMeta.innerHTML = '';
                    searchMeta.classList.add('is-empty');
                    return;
                }
                searchMeta.innerHTML = html;
                searchMeta.classList.remove('is-empty');
            }

            // ---------- 结果渲染 ----------
            function renderSearchSkeletons(count) {
                if (!searchResults) return;
                const total = Math.max(2, Math.min(count || 4, 6));
                const card = `
                    <div class="search-skeleton" aria-hidden="true">
                        <span class="sk-avatar"></span>
                        <span class="sk-lines">
                            <span class="sk-line sk-title"></span>
                            <span class="sk-line"></span>
                            <span class="sk-line sk-short"></span>
                        </span>
                    </div>`;
                searchResults.innerHTML = card.repeat(total);
                searchResults.hidden = false;
                if (searchSuggest) searchSuggest.hidden = true;
            }

            function setSearchActiveIndex(nextIndex, options = {}) {
                if (!searchResults) return;
                const items = searchResults.querySelectorAll('.search-result');
                if (!items.length) {
                    searchActiveIndex = -1;
                    if (searchInput) searchInput.setAttribute('aria-activedescendant', '');
                    return;
                }
                const max = items.length - 1;
                let index = nextIndex;
                if (index < 0) index = options.wrap ? max : 0;
                if (index > max) index = options.wrap ? 0 : max;
                searchActiveIndex = index;
                items.forEach((item, i) => {
                    const isActive = i === index;
                    item.classList.toggle('is-active', isActive);
                    // role=option 的选中态要跟着键盘走，读屏软件靠它念出当前项
                    item.setAttribute('aria-selected', isActive ? 'true' : 'false');
                });
                const active = items[index];
                if (active) {
                    if (searchInput) searchInput.setAttribute('aria-activedescendant', active.id);
                    // 只滚动容器内部，不牵动整个页面
                    const itemTop = active.offsetTop;
                    const itemBottom = itemTop + active.offsetHeight;
                    const viewTop = searchBody.scrollTop;
                    const viewBottom = viewTop + searchBody.clientHeight;
                    if (itemTop < viewTop) {
                        searchBody.scrollTo({ top: itemTop - 6, behavior: 'smooth' });
                    } else if (itemBottom > viewBottom) {
                        searchBody.scrollTo({ top: itemBottom - searchBody.clientHeight + 6, behavior: 'smooth' });
                    }
                }
            }

            function renderSearchResults(hits, query) {
                if (!searchResults) return;
                searchHits = hits;
                searchActiveIndex = -1;
                if (searchInput) searchInput.removeAttribute('aria-activedescendant');

                if (!hits.length) {
                    searchResults.innerHTML = `
                        <div class="search-empty">
                            <span class="search-empty-icon"><i class="ri-search-eye-line" aria-hidden="true"></i></span>
                            <p class="search-empty-title">没有找到与「${escapeHtml(query)}」相关的内容</p>
                            <p class="search-empty-desc">试试更短的关键词，或者从下面的标签里挑一个。</p>
                            <div class="search-empty-actions" id="searchEmptyActions"></div>
                        </div>`;
                    // 空结果时给一个「退一步」的出口：用更短的关键词再试
                    const actions = searchResults.querySelector('#searchEmptyActions');
                    const keywords = getKeywords(query);
                    const fallback = keywords.length > 1 ? keywords[0] : '';
                    if (actions) {
                        actions.innerHTML = fallback
                            ? `<button class="search-chip" type="button" data-search-suggest="${escapeHtml(fallback)}">
                                   <i class="ri-search-line" aria-hidden="true"></i>只搜「${escapeHtml(fallback)}」
                               </button>`
                            : '';
                    }
                    searchResults.hidden = false;
                    if (searchSuggest) searchSuggest.hidden = true;
                    return;
                }

                searchResults.innerHTML = hits.map((hit, index) => {
                    const post = hit.post;
                    const fields = hit.fields.slice(0, 3);
                    // 标签要和文章详情页完全一致：之前这里 slice(0, 2) 只取前两个，
                    // 「第五人格 / 随笔 / 社交」三标签的文章在搜索结果里会少一个，
                    // 看着就像标签对不上。这里改成全部展示（数量本身很少，
                    // 多一个也放得下，超长时由 .search-result-tags 自动换行）。
                    const keywords = getKeywords(query);
                    const tagChips = (post.tags || []).map(tag => {
                        const isHit = keywords.some(keyword => tag.toLowerCase().includes(keyword));
                        return `<span class="search-result-tag${isHit ? ' is-hit' : ''}">${escapeHtml(tag)}</span>`;
                    }).join('');
                    const hitChips = fields
                        .filter(field => field !== 'tag')
                        .map(field => `<span class="search-result-tag is-hit">${SEARCH_FIELD_LABELS[field] || '命中'}</span>`)
                        .join('');
                    const snippetSource = hit.snippet || post.excerpt || '';
                    return `
                        <button class="search-result" type="button" role="option"
                                id="searchResult${index}" data-search-result="${index}"
                                aria-selected="false" tabindex="-1"
                                style="--result-delay:${Math.min(index * 24, 168)}ms">
                            <span class="search-result-icon"><i class="ri-article-line" aria-hidden="true"></i></span>
                            <span class="search-result-main">
                                <span class="search-result-title">${highlightKeyword(post.title, query, 'is-title')}</span>
                                <span class="search-result-excerpt">${highlightKeyword(snippetSource, query)}</span>
                                <span class="search-result-tags">${hitChips}${tagChips}</span>
                            </span>
                            <i class="ri-arrow-right-line search-result-go" aria-hidden="true"></i>
                        </button>`;
                }).join('');

                searchResults.hidden = false;
                if (searchSuggest) searchSuggest.hidden = true;
                if (searchInput) searchInput.setAttribute('aria-expanded', 'true');
            }

            // ---------- 检索调度 ----------
            function clearSearchTimers() {
                window.clearTimeout(searchDebounceTimer);
                window.clearTimeout(searchPendingTimer);
                searchDebounceTimer = null;
                searchPendingTimer = null;
                searchRequestId = null;
            }

            function showSearchIdle() {
                searchHits = [];
                searchActiveIndex = -1;
                if (searchResults) {
                    searchResults.innerHTML = '';
                    searchResults.hidden = true;
                }
                if (searchSuggest) searchSuggest.hidden = false;
                if (searchSpinner) searchSpinner.hidden = true;
                if (searchClear) searchClear.hidden = !normalizeQuery(searchInput ? searchInput.value : '');
                if (searchInput) {
                    searchInput.setAttribute('aria-expanded', 'false');
                    searchInput.removeAttribute('aria-activedescendant');
                }
                renderSearchHistory();
                setSearchMeta('');
            }

            // 真正执行一次检索。先给「检索中」的骨架屏，
            // 满足最短停留时间后再把结果换进来，避免闪一下。
            function runSearch(rawQuery) {
                const query = normalizeQuery(rawQuery);
                clearSearchTimers();
                if (!query) {
                    showSearchIdle();
                    return;
                }

                const requestId = `${Date.now()}-${Math.random()}`;
                searchRequestId = requestId;
                // 检索期间用转圈替掉清空按钮：两个都显示会在右侧挤成一团
                if (searchClear) searchClear.hidden = true;
                if (searchSpinner) searchSpinner.hidden = false;
                renderSearchSkeletons(4);
                setSearchMeta('<i class="ri-loader-4-line" aria-hidden="true"></i><span>正在检索…</span>');

                const finish = () => {
                    // 期间又输入了新关键词，或已经关闭：这次结果作废
                    if (searchRequestId !== requestId || !searchOpen) return;
                    searchRequestId = null;
                    if (searchSpinner) searchSpinner.hidden = true;
                    if (searchClear) searchClear.hidden = !normalizeQuery(searchInput ? searchInput.value : '');
                    const hits = searchPosts(query);
                    renderSearchResults(hits, query);
                    setSearchMeta(
                        hits.length
                            ? `<i class="ri-search-line" aria-hidden="true"></i><span>找到 <strong>${hits.length}</strong> 篇与「${escapeHtml(query)}」相关的内容</span>`
                            : `<i class="ri-emotion-sad-line" aria-hidden="true"></i><span>没有找到与「${escapeHtml(query)}」相关的内容</span>`
                    );
                };
                searchPendingTimer = window.setTimeout(finish, SEARCH_MIN_PENDING);
            }

            function scheduleSearch(rawQuery) {
                const query = normalizeQuery(rawQuery);
                clearSearchTimers();
                if (!query) {
                    showSearchIdle();
                    return;
                }
                if (searchClear) searchClear.hidden = false;
                // 防抖期间不显示骨架屏，只有真正开始检索才显示，
                // 否则连续输入时会一直闪灰条
                searchDebounceTimer = window.setTimeout(() => {
                    runSearch(rawQuery);
                }, SEARCH_DEBOUNCE);
            }

            // ---------- 键盘避让 ----------
            // 把当前可视区高度写给面板。手机上键盘弹起时 visualViewport.height
            // 会变小，面板随之变矮，输入框和结果就不会被键盘盖住。
            function syncSearchViewport() {
                if (!searchOverlay) return;
                const vv = window.visualViewport;
                const height = Math.round(vv ? vv.height : window.innerHeight);
                searchOverlay.style.setProperty('--search-viewport-height', `${height}px`);
                if (!searchMobile.matches) {
                    // 桌面端不需要顶部偏移补偿，避免窗口缩放时留下空隙
                    searchOverlay.style.removeProperty('--search-viewport-offset');
                    return;
                }
                // iOS 在键盘弹起时会把可视区整体上移，这里把面板也上移同样的量，
                // 否则面板底部会露在键盘下方
                const offsetTop = vv ? Math.max(0, Math.round(vv.offsetTop)) : 0;
                searchOverlay.style.setProperty('--search-viewport-offset', `${offsetTop}px`);
            }

            function handleSearchViewportChange() {
                if (!searchOpen) return;
                const vv = window.visualViewport;
                const height = Math.round(vv ? vv.height : window.innerHeight);
                const previous = searchViewportHeight;
                searchViewportHeight = height;
                syncSearchViewport();
                if (!searchMobile.matches) return;
                // 键盘弹起后，如果当前滚动位置让输入框跑到了可视区上方，
                // 把结果区滚回顶部，保证输入框和第一条结果都在视野里
                if (previous && height < previous - 80) {
                    searchKeyboardVisible = true;
                    if (searchBody) searchBody.scrollTop = 0;
                } else if (searchKeyboardVisible && previous && height > previous + 80) {
                    searchKeyboardVisible = false;
                }
            }

            // ---------- 打开 / 关闭 ----------
            // 浮层打开时锁滚动会让页面宽度突然变宽（滚动条消失），
            // 这里补回同样的宽度，避免背景内容横向抖一下。
            function lockSearchScroll() {
                const root = document.documentElement;
                const scrollbarWidth = window.innerWidth - root.clientWidth;
                if (scrollbarWidth > 0) {
                    root.style.setProperty('--search-scrollbar-gap', `${scrollbarWidth}px`);
                } else {
                    root.style.removeProperty('--search-scrollbar-gap');
                }
                root.classList.add('search-open');
            }

            function unlockSearchScroll() {
                document.documentElement.classList.remove('search-open');
                document.documentElement.style.removeProperty('--search-scrollbar-gap');
            }

            // 把焦点困在面板里：Tab 走到最后一个可聚焦元素后回到第一个。
            // 浮层是 aria-modal，焦点跑到背后的页面上会让读屏软件念错内容。
            function trapSearchFocus(event) {
                if (event.key !== 'Tab' || !searchOpen || !searchPanel) return;
                const focusable = searchPanel.querySelectorAll(
                    'button:not([disabled]):not([hidden]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
                );
                const list = Array.prototype.filter.call(focusable, el =>
                    el.offsetParent !== null || el === document.activeElement
                );
                if (!list.length) return;
                const first = list[0];
                const last = list[list.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }

            function openSearch(options = {}) {
                if (!searchOverlay || searchOpen) return;
                searchOpen = true;
                searchViewportHeight = Math.round(
                    (window.visualViewport ? window.visualViewport.height : window.innerHeight)
                );
                syncSearchViewport();

                // 记住是哪个按钮打开的：关闭时把焦点还给它。
                // 用 document.activeElement 兜底——用键盘（Ctrl+K）打开时
                // 焦点可能还在 body 上，这时归还给触发按钮更合理。
                const opener = options.opener instanceof HTMLElement
                    ? options.opener
                    : (document.activeElement instanceof HTMLElement ? document.activeElement : null);
                searchReturnFocus = opener && opener !== document.body ? opener : null;
                searchOverlay.hidden = false;
                // 先让 display 生效再加强制重排，否则淡入动画会被合并跳过
                void searchOverlay.offsetHeight;
                searchOverlay.classList.add('is-open');
                lockSearchScroll();
                searchTriggers.forEach(btn => btn.setAttribute('aria-expanded', 'true'));

                // 往历史里压一条「搜索中」的记录：
                // 手机上按返回键 / 侧滑返回、桌面按后退，都会先收起面板，
                // 而不是直接离开站点。这一步放在 DOM 就绪之后，
                // 避免 pushState 抛错时面板已经打开、历史却没记录。
                if (options.pushHistory !== false && !searchHistoryEntryActive) {
                    try {
                        history.pushState(
                            Object.assign({}, history.state, { annieSearch: true }),
                            '',
                            window.location.href
                        );
                        searchHistoryEntryActive = true;
                    } catch (e) {
                        searchHistoryEntryActive = false;
                    }
                }

                if (options.query) {
                    if (searchInput) searchInput.value = options.query;
                    runSearch(options.query);
                } else {
                    showSearchIdle();
                }

                // 等面板动画把位置稳定下来再聚焦：在 0 宽/隐藏元素上聚焦
                // 会让 iOS 直接把键盘弹出来并把页面顶上去。
                // 手机端面板是 0.38s 的整块上滑，聚焦太早的话键盘会在
                // 滑动途中把可视区改矮，面板高度跟着跳一下，看着很别扭；
                // 所以等它基本滑到位（300ms）再弹键盘。
                window.setTimeout(() => {
                    if (!searchOpen) return;
                    if (searchInput) {
                        searchInput.focus({ preventScroll: true });
                        // 光标放到末尾，从入口带词进来时不用再点一下
                        const length = searchInput.value.length;
                        try {
                            searchInput.setSelectionRange(length, length);
                        } catch (e) {}
                    }
                }, searchMobile.matches ? 300 : 120);
            }

            // options:
            //   skipHistory  不碰历史（由调用方接管，比如打开文章时
            //                让 openArticle 的 replaceState 覆盖掉这条记录）
            //   fromHistory  这次关闭是浏览器返回触发的，历史里已经退回去了
            function closeSearch(options = {}) {
                if (!searchOverlay || !searchOpen) return;
                searchOpen = false;
                clearSearchTimers();
                searchKeyboardVisible = false;
                if (searchSpinner) searchSpinner.hidden = true;
                searchOverlay.classList.remove('is-open');
                unlockSearchScroll();
                searchTriggers.forEach(btn => btn.setAttribute('aria-expanded', 'false'));

                // 有搜索结果时把它记进「最近搜索」，下次打开能直接复用
                const query = normalizeQuery(searchInput ? searchInput.value : '');
                if (options.remember !== false && query && searchHits.length) {
                    rememberSearch(query);
                }

                // 把打开搜索时压进去的那条历史退掉。
                // 先清标记再 back()：back 是异步的，如果期间用户又打开了搜索，
                // 标记已经归零，不会出现「连退两条」把用户带出站点。
                // searchPendingHistoryBack 让随后到来的 popstate 知道
                // 「这次后退是我们自己发起的」，不要当成用户返回处理。
                if (searchHistoryEntryActive && options.skipHistory !== true && options.fromHistory !== true) {
                    searchHistoryEntryActive = false;
                    searchPendingHistoryBack += 1;
                    // 退回去的那条记录带的是打开搜索前的 URL。
                    // 期间视图可能已经变了（例如 Ctrl+K 打开搜索后又切到「电影」），
                    // 所以落地后再同步一次地址栏，别让 URL 和画面脱节。
                    searchHistoryBackCallback = function() {
                        syncUrlWithView();
                    };
                    try {
                        history.back();
                    } catch (e) {
                        searchPendingHistoryBack = Math.max(0, searchPendingHistoryBack - 1);
                        searchHistoryBackCallback = null;
                    }
                } else if (options.fromHistory === true) {
                    searchHistoryEntryActive = false;
                }

                // 等退场动画走完再真正隐藏。
                // 手机端面板退场是 0.26s 的整块下滑（见 style.css 里
                // .search-overlay:not(.is-open) .search-panel），
                // 等待时间必须比它长一点，否则动画还没滑完就被 display:none
                // 掐断，看起来是「啪」地消失而不是滑走。
                window.setTimeout(() => {
                    if (searchOpen) return;
                    if (searchOverlay) searchOverlay.hidden = true;
                    if (searchResults) {
                        searchResults.innerHTML = '';
                        searchResults.hidden = true;
                    }
                    if (searchInput) {
                        searchInput.value = '';
                        searchInput.setAttribute('aria-expanded', 'false');
                        searchInput.removeAttribute('aria-activedescendant');
                    }
                    if (searchClear) searchClear.hidden = true;
                    searchHits = [];
                    searchActiveIndex = -1;
                    setSearchMeta('');
                    if (searchSuggest) searchSuggest.hidden = false;
                }, searchMobile.matches ? 300 : 220);

                // 焦点还给打开搜索的那个按钮（如果它还在页面上）
                const returnFocus = searchReturnFocus;
                searchReturnFocus = null;
                if (options.restoreFocus !== false && returnFocus && document.contains(returnFocus)) {
                    window.setTimeout(() => {
                        if (!searchOpen) returnFocus.focus({ preventScroll: true });
                    }, 0);
                }
                if (searchInput && document.activeElement === searchInput) searchInput.blur();
            }

            // 打开某个搜索结果：先收起面板，再走正常的文章打开流程。
            // 这里不 back()：openArticle 会先 replaceState 把「搜索中」这条记录
            // 换成返回快照，再 pushState 文章记录。
            function activateSearchResult(index) {
                const hit = searchHits[index];
                if (!hit) return;
                const query = normalizeQuery(searchInput ? searchInput.value : '');
                rememberSearch(query);
                // 收起面板再去开文章。这里不需要记「搜索现场」：
                // 用户从文章返回时，期望的是回到「打开搜索之前的那一页」，
                // 而不是重新弹出搜索面板。所以只要把历史链收拾干净——
                // openArticle 会用 replaceState 把「搜索中」那条记录
                // 覆盖成返回快照，再 pushState 文章记录，于是返回时
                // 自然落在打开搜索前的页面。
                closeSearch({ remember: false, restoreFocus: false, skipHistory: true });
                // 那条「搜索中」的记录马上会被 openArticle 的 replaceState
                // 覆盖成返回快照，标记要一起清掉，否则之后关闭搜索会多退一页
                searchHistoryEntryActive = false;
                openArticle(hit.post.id);
            }

            // 按标签搜索：把标签当作关键词填进去
            function searchByTag(tag) {
                if (!searchInput) return;
                searchInput.value = tag;
                runSearch(tag);
                searchInput.focus({ preventScroll: true });
                const length = tag.length;
                try {
                    searchInput.setSelectionRange(length, length);
                } catch (e) {}
            }

            // ---------- 事件绑定 ----------
            searchTriggers.forEach(btn => {
                btn.addEventListener('click', function() {
                    if (searchOpen) closeSearch();
                    // 把触发按钮传进去，关闭时焦点才能准确还回来
                    else openSearch({ opener: btn });
                });
            });

            if (searchClose) {
                searchClose.addEventListener('click', function() {
                    closeSearch();
                });
            }

            // 面板左上角的「‹」：和系统返回键保持完全一致的两级行为——
            // 有关键词先清空回到空白搜索页，没关键词才收起面板。
            if (searchBack) {
                searchBack.addEventListener('click', function() {
                    if (normalizeQuery(searchInput ? searchInput.value : '')) {
                        if (searchInput) searchInput.value = '';
                        clearSearchTimers();
                        showSearchIdle();
                        if (searchInput) searchInput.focus({ preventScroll: true });
                        return;
                    }
                    closeSearch();
                });
            }

            if (searchBackdrop) {
                searchBackdrop.addEventListener('click', function() {
                    closeSearch();
                });
            }

            if (searchClear) {
                searchClear.addEventListener('click', function() {
                    if (searchInput) searchInput.value = '';
                    clearSearchTimers();
                    showSearchIdle();
                    searchInput?.focus({ preventScroll: true });
                });
            }

            if (searchHistoryClear) {
                searchHistoryClear.addEventListener('click', function() {
                    writeSearchHistory([]);
                    renderSearchHistory();
                    if (searchHistoryChips) searchHistoryChips.innerHTML = '';
                    if (searchHistoryBlock) searchHistoryBlock.hidden = true;
                });
            }

            if (searchInput) {
                // 中文输入法：合成期间不检索，否则每敲一个拼音都会闪一次骨架屏
                searchInput.addEventListener('compositionstart', function() {
                    searchComposing = true;
                    clearSearchTimers();
                });
                searchInput.addEventListener('compositionend', function() {
                    searchComposing = false;
                    scheduleSearch(this.value);
                });
                searchInput.addEventListener('input', function() {
                    if (!searchComposing) scheduleSearch(this.value);
                });

                // 键盘导航：↑↓ 选中，Enter 打开，Esc 逐级退出
                searchInput.addEventListener('keydown', function(e) {
                    if (e.isComposing || searchComposing) return;
                    const count = searchHits.length;
                    if (e.key === 'ArrowDown') {
                        if (!count) return;
                        e.preventDefault();
                        setSearchActiveIndex(searchActiveIndex + 1, { wrap: true });
                    } else if (e.key === 'ArrowUp') {
                        if (!count) return;
                        e.preventDefault();
                        setSearchActiveIndex(searchActiveIndex - 1, { wrap: true });
                    } else if (e.key === 'Enter') {
                        e.preventDefault();
                        // 回车：有选中项就打开选中项，否则立即完成当前检索
                        if (searchActiveIndex >= 0 && count) {
                            activateSearchResult(searchActiveIndex);
                        } else if (count === 1) {
                            activateSearchResult(0);
                        } else {
                            runSearch(this.value);
                        }
                    } else if (e.key === 'Escape') {
                        e.preventDefault();
                        e.stopPropagation();
                        if (this.value) {
                            this.value = '';
                            clearSearchTimers();
                            showSearchIdle();
                        } else {
                            closeSearch();
                        }
                    }
                });
            }

            // 结果区与空状态里的按钮都用事件委托，
            // 结果列表会被整块重绘，逐条绑事件既慢又容易漏
            if (searchBody) {
                searchBody.addEventListener('click', function(e) {
                    const result = e.target.closest('[data-search-result]');
                    if (result) {
                        activateSearchResult(parseInt(result.getAttribute('data-search-result'), 10));
                        return;
                    }
                    const history = e.target.closest('[data-search-history]');
                    if (history) {
                        const value = history.getAttribute('data-search-history');
                        if (searchInput) searchInput.value = value;
                        runSearch(value);
                        return;
                    }
                    const tag = e.target.closest('[data-search-tag]');
                    if (tag) {
                        searchByTag(tag.getAttribute('data-search-tag'));
                        return;
                    }
                    const suggest = e.target.closest('[data-search-suggest]');
                    if (suggest) {
                        const value = suggest.getAttribute('data-search-suggest');
                        if (searchInput) searchInput.value = value;
                        runSearch(value);
                        return;
                    }
                    const view = e.target.closest('[data-search-view]');
                    if (view) {
                        const target = view.getAttribute('data-search-view');
                        closeSearch({ restoreFocus: false });
                        switchView(target);
                        return;
                    }
                    // 「最近更新」里的文章：直接打开，和点搜索结果一样
                    const recent = e.target.closest('[data-search-recent]');
                    if (recent) {
                        const id = parseInt(recent.getAttribute('data-search-recent'), 10);
                        if (!Number.isFinite(id)) return;
                        closeSearch({ restoreFocus: false, skipHistory: true });
                        searchHistoryEntryActive = false;
                        openArticle(id);
                        return;
                    }
                    // 「全部文章」入口：收起面板并切到文章列表
                    if (e.target.closest('#searchRecentMore')) {
                        closeSearch({ restoreFocus: false });
                        switchView('blog');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                });

                // 鼠标移到某条结果上时同步选中态，键盘和鼠标不会各指一处
                searchBody.addEventListener('pointermove', function(e) {
                    if (!searchDesktop.matches) return;
                    const result = e.target.closest('[data-search-result]');
                    if (!result) return;
                    const index = parseInt(result.getAttribute('data-search-result'), 10);
                    if (index === searchActiveIndex) return;
                    setSearchActiveIndex(index);
                });
            }

            // 点击面板外面（桌面端的空白区域）关闭
            if (searchOverlay) {
                searchOverlay.addEventListener('pointerdown', function(e) {
                    if (e.target === searchOverlay) closeSearch();
                });
            }

            // 全局快捷键：Ctrl/⌘ + K 打开，/ 也可以（不在输入框里时）
            document.addEventListener('keydown', function(e) {
                if (searchOpen) trapSearchFocus(e);
                const isTyping = e.target instanceof HTMLElement && (
                    e.target.isContentEditable ||
                    /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)
                );
                if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
                    e.preventDefault();
                    if (searchOpen) closeSearch();
                    // 键盘打开时焦点可能停在 body 上，归还给当前视图的入口按钮
                    else openSearch({ opener: document.querySelector('.view.active-view [data-search-open]') });
                    return;
                }
                if (e.key === '/' && !isTyping && !searchOpen && !e.ctrlKey && !e.metaKey && !e.altKey) {
                    e.preventDefault();
                    openSearch({ opener: document.querySelector('.view.active-view [data-search-open]') });
                    return;
                }
                if (e.key === 'Escape' && searchOpen) {
                    closeSearch();
                }
            });

            // 键盘弹起 / 收起、横竖屏切换时重新量可视高度
            if (window.visualViewport) {
                window.visualViewport.addEventListener('resize', handleSearchViewportChange);
                window.visualViewport.addEventListener('scroll', function() {
                    if (!searchOpen || !searchMobile.matches) return;
                    syncSearchViewport();
                });
            }
            /* 搜索入口自适应：窗口尺寸变化或旋转屏幕时重新测量 */
            window.addEventListener('resize', function() {
                scheduleSearchTriggerFit();
                if (!searchOpen) return;
                searchViewportHeight = Math.round(
                    (window.visualViewport ? window.visualViewport.height : window.innerHeight)
                );
                syncSearchViewport();
            });
            /* 字体加载完成后文字宽度会变，重新量一次 */
            if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(scheduleSearchTriggerFit).catch(function() {});
            }
            /* 横屏 / 竖屏切换时面板形态会变，重新算一次 */
            if (searchMobile.addEventListener) {
                searchMobile.addEventListener('change', function() {
                    scheduleSearchTriggerFit();
                    if (!searchOpen) return;
                    syncSearchViewport();
                });
            }
            // 切到后台再回来时，键盘状态可能已经变了，重新量一次
            document.addEventListener('visibilitychange', function() {
                if (document.visibilityState === 'visible' && searchOpen) syncSearchViewport();
            });

            // 离开首页 / 切视图时收起搜索，避免再回来时还留着一层浮层
            function dismissSearchOnViewChange(viewName) {
                if (!searchOpen) return;
                closeSearch({ restoreFocus: false });
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
                // 切到别的视图时收起搜索浮层，回来时是干净的页面
                dismissSearchOnViewChange(viewName);
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
                    // 首页重新显示，尺寸要等到下一帧才准
                    scheduleSearchTriggerFit();
                } else if (viewName === 'blog') {
                    viewBlog.style.display = 'block';
                    viewBlog.classList.add('active-view');
                    renderPostsList('postsListBlog');
                    renderTagPills('tagFilterBlog');
                    scheduleSearchTriggerFit();
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

            // 文章列表页标题旁的「首页」按钮：回到首页并滚到顶部。
            // 用事件委托，以后别的视图想加同样的入口不用重复绑事件。
            document.addEventListener('click', function(e) {
                const btn = e.target.closest('[data-goto-home]');
                if (!btn) return;
                e.preventDefault();
                switchView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
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

                // 这次 popstate 是我们自己调用 history.back() 引起的
                // （收起搜索时退掉那条记录），页面状态不用动。
                if (searchPendingHistoryBack > 0) {
                    searchPendingHistoryBack -= 1;
                    const afterBack = searchHistoryBackCallback;
                    searchHistoryBackCallback = null;
                    if (afterBack) afterBack();
                    return;
                }

                // 用户按了返回键 / 侧滑返回。
                // 搜索面板开着时，返回键分两级处理：
                //   1) 输入框里有内容 → 只清空关键词，回到空白搜索页
                //      （最近搜索 / 按标签 / 最近更新 那套推荐），面板不关；
                //   2) 输入框已经空了 → 收起面板，回到原页面。
                // 这样和 Esc 的行为一致，也符合「返回上一层」的直觉：
                // 有关键词时上一层是空搜索页，没关键词时上一层才是页面。
                if (searchOpen) {
                    const typed = normalizeQuery(searchInput ? searchInput.value : '');
                    if (typed) {
                        // 清空输入和结果，但保留面板与历史记录：
                        // 用户再按一次返回才会真的关掉面板
                        if (searchInput) searchInput.value = '';
                        clearSearchTimers();
                        showSearchIdle();
                        if (searchInput) searchInput.focus({ preventScroll: true });
                        return;
                    }
                    closeSearch({ fromHistory: true });
                    return;
                }

                // 历史记录已经退到「搜索之前」，但面板还留着标记
                //（比如用户连按两次返回），把标记清掉，避免之后误触发 back()
                if (searchHistoryEntryActive) {
                    searchHistoryEntryActive = false;
                }

                // 用「前进」回到那条搜索记录：面板早就关了，
                // 这里什么都不做，别拿它去还原某个旧视图
                if (state && state.annieSearch === true) return;

                const viewSnapshot = state && state.annieViewSnapshot;
                if (viewSnapshot && VALID_VIEWS.includes(viewSnapshot.view)) {
                    if (typeof viewSnapshot.tag === 'string' && getAllTags().includes(viewSnapshot.tag)) {
                        activeTag = viewSnapshot.tag;
                    }
                    returningFromArticleButton = false;
                    articleHistoryEntryActive = false;
                    // 从「搜索结果打开的文章」返回时会走到这里
                    //（openArticle 把搜索那条记录 replaceState 成了快照）。
                    // 直接还原打开搜索前的那一页即可，不重新弹搜索面板。
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
                // 搜索面板的初始内容：最近搜索 + 标签入口
                renderSearchSuggestions();
                renderSearchHistory();

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
            // console.log('📝 修改文章内容：编辑 blogPosts 数组');
            // console.log('👤 修改个人信息：编辑 siteConfig 对象');
            // console.log('🖼️ 修改头像：替换 .avatar 的 src 属性');
            // console.log('🔗 修改社交链接：编辑 .social-links 中的 href');
        })();
