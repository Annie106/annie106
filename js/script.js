        (function() {
            // ==================== ★★★ 在这里修改你的博客内容 ★★★ ====================
            // 所有文章数据都集中在这个数组里，增删改都非常方便。
            const blogPosts = [{
                id: 7,
                // 这是置顶文章模板，直接修改下面的标题、摘要和正文即可
                pinned: true,
                title: '我的其它网站',
                date: '2026-09-23',
                excerpt: '有视频网站、直链下载站等',
                tags: ['置顶'],
                content: `
                        <p>视频站</p>
                        <p>https://annie106.github.io/video</p>
                        <p>直链下载站</p>
                        <p>https://annie106.github.io/Studio</p>
                        <h2>视频无法播放时 添加联系方式 备注来意</h2>
                        <p>联系方式在“联系客服”下方的图标 点击即复制相关信息</p>
                    `,
            }, {
                id: 1,
                // 需要置顶时改为 true；取消置顶改为 false
                pinned: false,
                title: '设计的本质是减法',
                date: '2026-05-03',
                excerpt: '在信息过载的时代，好的设计不是增加更多元素，而是勇敢地移除一切不必要的部分。',
                tags: ['设计', '极简主义'],
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
                tags: ['工具', '阅读', '生产力'],
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
                tags: ['随笔', '生活'],
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
                tags: ['技术', '教程', '前端'],
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
                tags: ['设计', '字体排印'],
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
                title: '我也要做一个类似的个人博客',
                date: '2026-05-03',
                excerpt: '此文章提供博客服务 点击查看详情和服务价格',
                tags: ['服务', '个人博客', ],
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
            const viewAbout = $('#view-about');
            const viewArticle = $('#view-article');
            const postsListHome = $('#postsListHome');
            const postsListBlog = $('#postsListBlog');
            const tagFilterHome = $('#tagFilterHome');
            const tagFilterBlog = $('#tagFilterBlog');
            const articleTitle = $('#articleTitle');
            const articleMeta = $('#articleMeta');
            const articleContent = $('#articleContent');
            const backBtn = $('#backBtn');
            const backBtn2 = $('#backBtn2');

            let currentView = 'home';
            let activeTag = 'all';
            let currentArticleId = null;
            let articleReturnView = 'home';
            let articleReturnScroll = 0;

            // ==================== 工具函数 ====================
            function getAllTags() {
                const tagSet = new Set();
                blogPosts.forEach(p => p.tags.forEach(t => tagSet.add(t)));
                return ['all', ...Array.from(tagSet)];
            }

            function renderTagPills(containerId) {
                const container = document.getElementById(containerId);
                if (!container) return;
                const tags = getAllTags();
                container.innerHTML = tags.map(t =>
                    `<span class="tag-pill${t === activeTag ? ' active' : ''}" data-tag="${t}">${t === 'all' ? '全部' : t}</span>`
                ).join('');
                container.querySelectorAll('.tag-pill').forEach(pill => {
                    pill.addEventListener('click', function() {
                        const tag = this.getAttribute('data-tag');
                        activeTag = tag;
                        renderTagPills('tagFilterHome');
                        renderTagPills('tagFilterBlog');
                        renderPostsList('postsListHome');
                        renderPostsList('postsListBlog');
                    });
                });
            }

            function getFilteredPosts() {
                const posts = activeTag === 'all'
                    ? [...blogPosts]
                    : blogPosts.filter(p => p.tags.includes(activeTag));
                return posts.sort((a, b) => Number(Boolean(b.pinned)) - Number(Boolean(a.pinned)));
            }

            function renderPostsList(containerId) {
                const container = document.getElementById(containerId);
                if (!container) return;
                const posts = getFilteredPosts();
                if (posts.length === 0) {
                    container.innerHTML =
                        '<p style="color:#999;text-align:center;padding:30px 0;">暂无文章</p>';
                    return;
                }
                container.innerHTML = posts.map(p => {
                    const firstTag = p.tags[0] || '文章';
                    const commentCount = 12 + (p.id % 9);
                    const likeCount = 7 + (p.id % 6);
                    const viewCount = 18 + (p.id * 5);

                    return `
                        <article class="task post-card" data-article-id="${p.id}" draggable="true">
                            <div class="tags">
                                <div class="tags-left">
                                    ${p.pinned ? '<span class="tag tag-pinned" title="置顶"><i class="ri-pushpin-2-line"></i></span>' : ''}
                                    <span class="tag">${firstTag}</span>
                                </div>
                                <button class="options" type="button" aria-label="更多选项">
                                    <svg xml:space="preserve" viewBox="0 0 41.915 41.916" xmlns="http://www.w3.org/2000/svg" id="Capa_1" version="1.1" fill="#000000" aria-hidden="true"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><g><g><path d="M11.214,20.956c0,3.091-2.509,5.589-5.607,5.589C2.51,26.544,0,24.046,0,20.956c0-3.082,2.511-5.585,5.607-5.585 C8.705,15.371,11.214,17.874,11.214,20.956z"></path><path d="M26.564,20.956c0,3.091-2.509,5.589-5.606,5.589c-3.097,0-5.607-2.498-5.607-5.589c0-3.082,2.511-5.585,5.607-5.585 C24.056,15.371,26.564,17.874,26.564,20.956z"></path><path d="M41.915,20.956c0,3.091-2.509,5.589-5.607,5.589c-3.097,0-5.606-2.498-5.606-5.589c0-3.082,2.511-5.585,5.606-5.585 C39.406,15.371,41.915,17.874,41.915,20.956z"></path></g></g></g></svg>
                                </button>
                            </div>
                            <h3 class="task-title">${p.title}</h3>
                            <p>${p.excerpt}</p>
                            <div class="stats">
                                <div class="stats-main">
                                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path stroke-linecap="round" stroke-width="2" d="M12 8V12L15 15"></path><circle stroke-width="2" r="9" cy="12" cx="12"></circle></g></svg>${p.date}</div>
                                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M16 10H16.01M12 10H12.01M8 10H8.01M3 10C3 4.64706 5.11765 3 12 3C18.8824 3 21 4.64706 21 10C21 15.3529 18.8824 17 12 17C11.6592 17 11.3301 16.996 11.0124 16.9876L7 21V16.4939C4.0328 15.6692 3 13.7383 3 10Z"></path></g></svg>${commentCount}</div>
                                    <div><svg fill="#000000" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-2.5 0 32 32"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><g id="icomoon-ignore"></g><path fill="#000000" d="M0 10.284l0.505 0.36c0.089 0.064 0.92 0.621 2.604 0.621 0.27 0 0.55-0.015 0.836-0.044 3.752 4.346 6.411 7.472 7.060 8.299-1.227 2.735-1.42 5.808-0.537 8.686l0.256 0.834 7.63-7.631 8.309 8.309 0.742-0.742-8.309-8.309 7.631-7.631-0.834-0.255c-2.829-0.868-5.986-0.672-8.686 0.537-0.825-0.648-3.942-3.3-8.28-7.044 0.11-0.669 0.23-2.183-0.575-3.441l-0.352-0.549-8.001 8.001zM1.729 10.039l6.032-6.033c0.385 1.122 0.090 2.319 0.086 2.334l-0.080 0.314 0.245 0.214c7.409 6.398 8.631 7.39 8.992 7.546l-0.002 0.006 0.195 0.058 0.185-0.087c2.257-1.079 4.903-1.378 7.343-0.836l-13.482 13.481c-0.55-2.47-0.262-5.045 0.837-7.342l0.104-0.218-0.098-0.221-0.031 0.013c-0.322-0.632-1.831-2.38-7.498-8.944l-0.185-0.215-0.282 0.038c-0.338 0.045-0.668 0.069-0.981 0.069-0.595 0-1.053-0.083-1.38-0.176z"></path></g></svg>${likeCount}</div>
                                </div>
                                <div class="viewer">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path stroke-width="2" stroke="#ffffff" d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"></path><path stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"></path></g></svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path stroke-width="2" stroke="#ffffff" d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"></path><path stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"></path></g></svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path stroke-width="2" stroke="#ffffff" d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"></path><path stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"></path></g></svg></span>
                                    <span>+${viewCount}</span>
                                </div>
                            </div>
                        </article>
                    `;
                }).join('');
                container.querySelectorAll('.post-card').forEach(card => {
                    card.addEventListener('click', function() {
                        const id = parseInt(this.getAttribute('data-article-id'));
                        openArticle(id);
                    });
                });
                container.querySelectorAll('.options').forEach(button => {
                    button.addEventListener('click', function(e) {
                        e.stopPropagation();
                    });
                });
            }

            function openArticle(id) {
                const post = blogPosts.find(p => p.id === id);
                if (!post) return;
                articleReturnView = currentView === 'article' ? 'home' : currentView;
                articleReturnScroll = window.scrollY;
                currentArticleId = id;
                articleTitle.textContent = post.title;
                articleMeta.innerHTML = `
                    <span><i class="ri-calendar-line"></i> ${post.date}</span>
                    <span>${post.tags.map(t => `<span class="post-tag">${t}</span>`).join(' ')}</span>
                `;
                articleContent.innerHTML = post.content;
                switchView('article');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            function switchView(viewName) {
                currentView = viewName;
                [viewHome, viewBlog, viewAbout, viewArticle].forEach(v => {
                    v.style.display = 'none';
                    v.classList.remove('active-view');
                });
                viewArticle.classList.remove('active');

                if (viewName === 'home') {
                    viewHome.style.display = 'block';
                    viewHome.classList.add('active-view');
                } else if (viewName === 'blog') {
                    viewBlog.style.display = 'block';
                    viewBlog.classList.add('active-view');
                    renderPostsList('postsListBlog');
                    renderTagPills('tagFilterBlog');
                } else if (viewName === 'about') {
                    viewAbout.style.display = 'block';
                    viewAbout.classList.add('active-view');
                } else if (viewName === 'article') {
                    viewArticle.style.display = 'block';
                    viewArticle.classList.add('active');
                }

                $$('.nav-links a').forEach(link => link.classList.remove('active'));
                const navMap = { home: 'home', blog: 'blog', about: 'about', article: 'blog' };
                const activeNav = navMap[viewName] || 'home';
                const navLink = document.querySelector(`.nav-links a[data-nav="${activeNav}"]`);
                if (navLink) navLink.classList.add('active');

                navLinks.classList.remove('open');
            }

            // ==================== 事件绑定 ====================
            $$('.nav-links a').forEach(link => {
                link.addEventListener('click', function(e) {
                    const nav = this.getAttribute('data-nav');
                    if (!nav) return;
                    e.preventDefault();
                    if (nav === 'home') switchView('home');
                    if (nav === 'blog') switchView('blog');
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

            function returnToArticlePosition() {
                switchView(articleReturnView);
                window.requestAnimationFrame(() => {
                    window.scrollTo({ top: articleReturnScroll, behavior: 'smooth' });
                });
            }

            document.addEventListener('click', function(e) {
                if (e.target.matches('[data-nav="blog"]') && e.target.closest('.tag-pill')) {
                    e.preventDefault();
                    switchView('blog');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });

            document.addEventListener('click', function(e) {
                if (!e.target.closest('.site-header') && navLinks.classList.contains('open')) {
                    navLinks.classList.remove('open');
                }
            });

            // ==================== 初始化 ====================
            function init() {
                renderTagPills('tagFilterHome');
                renderTagPills('tagFilterBlog');
                renderPostsList('postsListHome');
                renderPostsList('postsListBlog');
                switchView('home');
            }

            init();

            console.log('✅ Annie 的个人博客已就绪！');
            console.log('📝 修改文章内容：编辑 blogPosts 数组');
            console.log('👤 修改个人信息：编辑 siteConfig 对象');
            console.log('🖼️ 修改头像：替换 .avatar 的 src 属性');
            console.log('🔗 修改社交链接：编辑 .social-links 中的 href');
        })();