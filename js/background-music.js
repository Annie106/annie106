// ==================== 后台音乐播放 ====================
(function() {
    // 音乐列表 - 可以在这里添加更多音乐
    const musicList = [
        {
            title: "Heart Linked",
            artist: "Jannik",
            src: "https://1837491863.v.123pan.cn/1837491863/33511341"
        }
    ];

    // 播放状态
    let currentIndex = 0;
    let isPlaying = false;
    let isEnabled = true; // 用户是否启用音乐
    let hasUserInteracted = false;
    let retryCount = 0;
    const maxRetries = 3;

    // DOM 元素
    let musicToggleBtn = null;
    let mobileMusicBtn = null;
    let musicEnableHint = null;

    // 创建音频元素
    const audio = new Audio();
    audio.volume = 0.3; // 设置较低的音量作为背景音乐
    audio.loop = true; // 单曲循环
    audio.preload = 'auto';

    // 初始化后台音乐
    function initBackgroundMusic() {
        if (musicList.length === 0) return;

        // 获取控制按钮
        musicToggleBtn = document.getElementById('musicToggleBtn');
        mobileMusicBtn = document.getElementById('mobileMusicBtn');
        musicEnableHint = document.getElementById('musicEnableHint');

        // 设置音频源
        audio.src = musicList[currentIndex].src;

        // 设置事件监听器
        setupEventListeners();

        // 检查用户之前的设置
        loadUserPreference();

        // 如果启用音乐，尝试自动播放
        if (isEnabled) {
            tryAutoPlay();
        } else {
            updateToggleButtons();
        }
    }

    // 设置事件监听器
    function setupEventListeners() {
        // 桌面端音乐控制按钮
        if (musicToggleBtn) {
            musicToggleBtn.addEventListener('click', toggleMusic);
        }

        // 移动端浮动音乐按钮
        if (mobileMusicBtn) {
            mobileMusicBtn.addEventListener('click', toggleMusic);
        }

        // 音频事件
        audio.addEventListener('ended', playNext);
        audio.addEventListener('play', () => {
            isPlaying = true;
            updateToggleButtons();
            console.log(`🎵 正在播放: ${musicList[currentIndex].title} - ${musicList[currentIndex].artist}`);
        });
        audio.addEventListener('pause', () => {
            isPlaying = false;
            updateToggleButtons();
        });
        audio.addEventListener('error', handleAudioError);

        // 用户交互检测
        document.addEventListener('click', handleUserInteraction, { once: true });
        document.addEventListener('keydown', handleUserInteraction, { once: true });
        document.addEventListener('touchstart', handleUserInteraction, { once: true });
    }

    // 处理音频错误
    function handleAudioError(e) {
        console.warn('音乐播放失败:', e);

        const errorCode = e.target.error ? e.target.error.code : null;

        // 检查是否是网络相关错误（可能因流量限制）
        if (errorCode === 2 || errorCode === 3 || errorCode === 4) { // NETWORK_ERR, DECODE_ERR, SRC_NOT_SUPPORTED
            retryCount++;

            if (retryCount <= maxRetries) {
                console.log(`尝试重试播放 (${retryCount}/${maxRetries})`);
                setTimeout(() => {
                    audio.load(); // 重新加载音频
                    if (isEnabled && hasUserInteracted) {
                        audio.play().catch(() => {
                            showTrafficLimitMessage();
                        });
                    }
                }, 2000);
            } else {
                showTrafficLimitMessage();
            }
        } else {
            // 其他错误，尝试播放下一首
            setTimeout(() => playNext(), 2000);
        }
    }

    // 显示流量限制提示
    function showTrafficLimitMessage() {
        if (document.getElementById('trafficLimitMsg')) return;

        const message = document.createElement('div');
        message.id = 'trafficLimitMsg';
        message.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: #ff6b6b;
                color: white;
                padding: 12px 16px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 1000;
                font-size: 14px;
                max-width: 300px;
                cursor: pointer;
            ">
                <i class="ri-error-warning-line" style="margin-right: 8px;"></i>
                您当前的IP已达到访问限制，请等待次日0:00重新尝试
                <button onclick="this.parentElement.remove()" style="
                    background: none;
                    border: none;
                    color: white;
                    float: right;
                    cursor: pointer;
                    font-size: 16px;
                    margin-left: 8px;
                ">×</button>
            </div>
        `;

        document.body.appendChild(message);

        // 50秒后自动隐藏
        setTimeout(() => {
            if (message.parentElement) {
                message.remove();
            }
        }, 50000);
    }

    // 尝试自动播放（处理浏览器自动播放策略）
    function tryAutoPlay() {
        if (!isEnabled) return;

        // 显示音乐启用提示
        showMusicEnableHint();

        console.log('🎵 音乐系统已准备就绪，等待用户交互后开始播放');
    }

    // 显示音乐启用提示
    function showMusicEnableHint() {
        if (musicEnableHint && !hasUserInteracted) {
            musicEnableHint.style.display = 'block';
        }
    }

    // 隐藏音乐启用提示
    function hideMusicEnableHint() {
        if (musicEnableHint) {
            musicEnableHint.style.display = 'none';
        }
    }

    // 处理用户交互
    function handleUserInteraction() {
        if (hasUserInteracted) return; // 防止重复处理

        hasUserInteracted = true;

        // 隐藏提示
        hideMusicEnableHint();

        if (isEnabled && !isPlaying) {
            // 用户首次交互后开始播放
            audio.muted = false;
            audio.play().then(() => {
                console.log('🎵 用户交互后成功开始播放');
            }).catch(e => {
                console.warn('用户交互后播放失败:', e);
                handleAudioError(e);
            });
        }
    }

    // 切换音乐开关
    function toggleMusic() {
        isEnabled = !isEnabled;
        saveUserPreference();

        if (isEnabled) {
            // 确保用户已交互
            hasUserInteracted = true;

            if (!isPlaying) {
                audio.muted = false;
                audio.play().then(() => {
                    console.log('🎵 音乐开启成功');
                }).catch(e => {
                    console.warn('开启音乐失败:', e);
                    handleAudioError(e);
                });
            }
        } else {
            audio.pause();
        }

        updateToggleButtons();
    }

    // 更新按钮状态
    function updateToggleButtons() {
        // 更新桌面端按钮
        if (musicToggleBtn) {
            const icon = musicToggleBtn.querySelector('i');

            if (isEnabled) {
                musicToggleBtn.classList.add('active');
                if (isPlaying) {
                    icon.className = 'ri-pause-line'; // 播放时显示暂停图标，更直观
                    musicToggleBtn.classList.add('playing');
                    musicToggleBtn.title = '暂停背景音乐';
                } else {
                    icon.className = 'ri-play-line'; // 停止时显示播放图标
                    musicToggleBtn.classList.remove('playing');
                    musicToggleBtn.title = '播放背景音乐';
                }
            } else {
                musicToggleBtn.classList.remove('active', 'playing');
                icon.className = 'ri-music-2-line'; // 关闭时显示音乐图标
                musicToggleBtn.title = '开启背景音乐';
            }
        }

        // 更新移动端浮动按钮
        if (mobileMusicBtn) {
            const icon = mobileMusicBtn.querySelector('i');

            if (isEnabled) {
                if (isPlaying) {
                    icon.className = 'ri-pause-line';
                    mobileMusicBtn.classList.add('playing');
                } else {
                    icon.className = 'ri-play-line';
                    mobileMusicBtn.classList.remove('playing');
                }
            } else {
                icon.className = 'ri-music-2-line';
                mobileMusicBtn.classList.remove('playing');
            }
        }
    }

    // 播放下一首
    function playNext() {
        if (!isEnabled) return;

        currentIndex = (currentIndex + 1) % musicList.length;
        retryCount = 0; // 重置重试计数

        audio.src = musicList[currentIndex].src;

        if (hasUserInteracted) {
            audio.play().catch(e => {
                console.warn('播放下一首失败:', e);
                handleAudioError(e);
            });
        }
    }

    // 保存用户偏好设置
    function saveUserPreference() {
        try {
            localStorage.setItem('backgroundMusicEnabled', isEnabled.toString());
        } catch (e) {
            console.warn('无法保存音乐设置:', e);
        }
    }

    // 加载用户偏好设置
    function loadUserPreference() {
        try {
            const saved = localStorage.getItem('backgroundMusicEnabled');
            if (saved !== null) {
                isEnabled = saved === 'true';
            }
        } catch (e) {
            console.warn('无法加载音乐设置:', e);
        }
    }

    // 公开接口
    window.BackgroundMusic = {
        play: () => {
            isEnabled = true;
            hasUserInteracted = true;
            saveUserPreference();
            if (!isPlaying) {
                audio.muted = false;
                audio.play().then(() => {
                    console.log('🎵 音乐播放成功');
                }).catch(handleAudioError);
            }
            updateToggleButtons();
        },
        pause: () => {
            isEnabled = false;
            saveUserPreference();
            audio.pause();
            updateToggleButtons();
        },
        toggle: toggleMusic,
        next: playNext,
        getCurrentTrack: () => musicList[currentIndex],
        isPlaying: () => isPlaying,
        isEnabled: () => isEnabled
    };

    // 初始化
    initBackgroundMusic();

    console.log('🎵 后台音乐系统已加载');
})();
