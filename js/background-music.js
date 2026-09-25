// ==================== 后台音乐播放 ====================
(function() {
    // 音乐列表 - 可以在这里添加更多音乐
    const musicList = [
        {
            title: "2020中秋节-活动BGM",
            artist: "第五人格",
            src: "https://links.8uid.com/d/074409faa40e66ae993a29602f49716e"
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
    let musicCardToggle = null;
    let musicCardCollapse = null;
    let musicVolumeToggle = null;
    let musicVolumeSlider = null;
    let musicPlayerPercent = null;
    let musicProgressBar = null;
    let musicCurrentTime = null;
    let musicDuration = null;
    let musicPlayerCard = null;
    let musicEnableHint = null;
    let musicCardTitle = null;
    let musicCardArtist = null;
    let isCollapsed = false;

    // 创建音频元素
    const audio = new Audio();
    audio.volume = 0.3; // 设置较低的音量作为背景音乐
    audio.loop = true; // 单曲循环
    audio.preload = 'auto';

    // 初始化后台音乐
    function initBackgroundMusic() {
        if (musicList.length === 0) return;

        // 获取控制按钮
        musicCardToggle = document.getElementById('musicCardToggle');
        musicCardCollapse = document.getElementById('musicCardCollapse');
        musicVolumeToggle = document.getElementById('musicVolumeToggle');
        musicVolumeSlider = document.getElementById('musicVolumeSlider');
        musicPlayerPercent = document.getElementById('musicPlayerPercent');
        musicProgressBar = document.getElementById('musicProgressBar');
        musicCurrentTime = document.getElementById('musicCurrentTime');
        musicDuration = document.getElementById('musicDuration');
        musicPlayerCard = document.getElementById('musicPlayerCard');
        musicEnableHint = document.getElementById('musicEnableHint');
        musicCardTitle = document.getElementById('musicCardTitle');
        musicCardArtist = document.getElementById('musicCardArtist');

        updateMusicCard();
        syncVolumeUI();
        applyCollapseState();

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
        if (musicCardToggle) {
            musicCardToggle.addEventListener('click', toggleMusic);
        }
        if (musicCardCollapse) {
            musicCardCollapse.addEventListener('click', toggleCollapse);
        }
        if (musicVolumeToggle) {
            musicVolumeToggle.addEventListener('click', toggleMute);
        }
        if (musicVolumeSlider) {
            musicVolumeSlider.addEventListener('input', handleVolumeChange);
        }

        // 音频事件
        audio.addEventListener('ended', playNext);
        audio.addEventListener('play', () => {
            isPlaying = true;
            hideAudioError();
            updateToggleButtons();
            console.log(`🎵 正在播放: ${musicList[currentIndex].title} - ${musicList[currentIndex].artist}`);
        });
        audio.addEventListener('pause', () => {
            isPlaying = false;
            updateToggleButtons();
        });
        audio.addEventListener('timeupdate', updatePlaybackProgress);
        audio.addEventListener('loadedmetadata', updatePlaybackProgress);
        audio.addEventListener('durationchange', updatePlaybackProgress);
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
            showTrafficLimitMessage();
        }
    }

    // 显示音频错误提示
    function showTrafficLimitMessage() {
        if (document.getElementById('trafficLimitMsg')) return;

        const message = document.createElement('div');
        message.id = 'trafficLimitMsg';
        message.className = 'audio-error-toast';
        message.innerHTML = `
            <button type="button" class="audio-error-close" aria-label="关闭错误提示">
                <i class="ri-close-line"></i>
            </button>
            <p class="audio-error-message">
                <i class="ri-error-warning-line" aria-hidden="true"></i>
                <span>音频播放失败，请稍后重试</span>
            </p>
        `;

        message.querySelector('.audio-error-close').addEventListener('click', () => {
            message.remove();
        });
        document.body.appendChild(message);

        // 避免错误提示长时间占据页面
        setTimeout(() => {
            if (message.parentElement) {
                message.remove();
            }
        }, 50000);
    }

    function hideAudioError() {
        const message = document.getElementById('trafficLimitMsg');
        if (message) message.remove();
    }

    // 尝试自动播放（处理浏览器自动播放策略）
    function tryAutoPlay() {
        if (!isEnabled) return;

        hasUserInteracted = true;
        audio.muted = false;
        audio.play().then(() => {
            console.log('🎵 自动播放已开启');
            hideMusicEnableHint();
        }).catch(() => {
            showMusicEnableHint();
            console.log('🎵 浏览器阻止了自动播放，等待用户交互后再播放');
        });
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

    function applyCollapseState() {
        if (!musicPlayerCard || !musicCardCollapse) return;
        musicPlayerCard.classList.toggle('collapsed', isCollapsed);
        const icon = musicCardCollapse.querySelector('i');
        if (icon) {
            icon.className = isCollapsed ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line';
        }
        musicCardCollapse.setAttribute('aria-label', isCollapsed ? '展开播放器' : '收起播放器');
    }

    function toggleCollapse() {
        isCollapsed = !isCollapsed;
        applyCollapseState();
    }

    function toggleMute() {
        if (!musicVolumeSlider) return;

        const nextVolume = audio.muted ? Number(musicVolumeSlider.dataset.lastVolume || 30) : 0;
        musicVolumeSlider.value = nextVolume;
        audio.volume = nextVolume / 100;
        audio.muted = nextVolume === 0;
        syncVolumeUI();
    }

    function handleVolumeChange(event) {
        const value = Number(event.target.value || 0);
        audio.volume = value / 100;
        audio.muted = value === 0;
        event.target.dataset.lastVolume = String(value === 0 ? 30 : value);
        syncVolumeUI();
    }

    function syncVolumeUI() {
        if (!musicVolumeSlider || !musicVolumeToggle || !musicPlayerPercent) return;

        const volumeValue = audio.muted ? 0 : Math.round(audio.volume * 100);
        musicVolumeSlider.value = String(volumeValue);
        musicVolumeSlider.style.setProperty('--volume-percent', `${volumeValue}%`);
        musicPlayerPercent.textContent = `${volumeValue}%`;

        const icon = musicVolumeToggle.querySelector('i');
        if (!icon) return;

        if (volumeValue === 0 || audio.muted) {
            icon.className = 'ri-volume-mute-line';
            musicVolumeToggle.setAttribute('aria-label', '开启声音');
        } else if (volumeValue < 50) {
            icon.className = 'ri-volume-down-line';
            musicVolumeToggle.setAttribute('aria-label', '静音');
        } else {
            icon.className = 'ri-volume-up-line';
            musicVolumeToggle.setAttribute('aria-label', '静音');
        }
    }

    function formatTime(seconds) {
        if (!Number.isFinite(seconds) || seconds < 0) return '00:00';

        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    function updatePlaybackProgress() {
        if (!musicProgressBar || !musicCurrentTime || !musicDuration) return;

        const duration = audio.duration;
        const currentTime = audio.currentTime || 0;
        const progress = Number.isFinite(duration) && duration > 0
            ? Math.min((currentTime / duration) * 100, 100)
            : 0;

        musicProgressBar.style.width = `${progress}%`;
        musicCurrentTime.textContent = formatTime(currentTime);
        musicDuration.textContent = formatTime(duration);
    }

    // 更新按钮状态
    function updateToggleButtons() {
        if (musicCardToggle) {
            const icon = musicCardToggle.querySelector('i');
            if (!icon) return;

            if (isEnabled) {
                if (isPlaying) {
                    icon.className = 'ri-pause-line';
                    musicCardToggle.setAttribute('aria-label', '暂停音乐');
                } else {
                    icon.className = 'ri-play-line';
                    musicCardToggle.setAttribute('aria-label', '播放音乐');
                }
            } else {
                icon.className = 'ri-play-line';
                musicCardToggle.setAttribute('aria-label', '播放音乐');
            }
        }

        if (musicPlayerCard) {
            musicPlayerCard.classList.toggle('playing', isEnabled && isPlaying);
        }
    }

    function updateMusicCard() {
        if (musicCardTitle) {
            musicCardTitle.textContent = musicList[currentIndex].title;
        }
        if (musicCardArtist) {
            musicCardArtist.textContent = musicList[currentIndex].artist;
        }
    }

    // 播放下一首
    function playNext() {
        if (!isEnabled) return;

        currentIndex = (currentIndex + 1) % musicList.length;
        retryCount = 0; // 重置重试计数
        updateMusicCard();

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
