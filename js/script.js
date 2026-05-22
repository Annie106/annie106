        (function() {
            // ==================== ★★★ 在这里修改你的博客内容 ★★★ ====================
            // 所有文章数据都集中在这个数组里，增删改都非常方便。
            const blogPosts = [{
                id: 1,
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
                if (activeTag === 'all') return [...blogPosts];
                return blogPosts.filter(p => p.tags.includes(activeTag));
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
                container.innerHTML = posts.map(p => `
                    <div class="post-card" data-article-id="${p.id}">
                        <span class="post-date">${p.date}</span>
                        <h3 class="post-title">${p.title}</h3>
                        <p class="post-excerpt">${p.excerpt}</p>
                        <div class="post-tags-row">
                            ${p.tags.map(t => `<span class="post-tag">${t}</span>`).join('')}
                        </div>
                    </div>
                `).join('');
                container.querySelectorAll('.post-card').forEach(card => {
                    card.addEventListener('click', function() {
                        const id = parseInt(this.getAttribute('data-article-id'));
                        openArticle(id);
                    });
                });
            }

            function openArticle(id) {
                const post = blogPosts.find(p => p.id === id);
                if (!post) return;
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
            switchView('home');  // 改动1
            window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            backBtn2.addEventListener('click', function(e) {
                e.preventDefault();
                switchView('home');  // 改动1
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

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