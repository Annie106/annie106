// ==================== 音乐播放器功能 ====================
(function() {
    // 播放列表数据 - 可以在这里添加更多音乐
    const playlist = [
        {
            title: "Heart Linked",
            artist: "Jannik",
            src: "", 
            duration: "3:50"
        }
    ];

    // DOM 元素
    const musicPlayer = document.getElementById('musicPlayer');
    const playerToggle = document.getElementById('playerToggle');
    const playerClose = document.getElementById('playerClose');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressBar = document.getElementById('progressBar');
    const progressFill = document.getElementById('progressFill');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');
    const volumeBtn = document.getElementById('volumeBtn');
    const volumeBar = document.getElementById('volumeBar');
    const volumeFill = document.getElementById('volumeFill');
    const currentTrackTitle = document.getElementById('currentTrackTitle');
    const currentTrackArtist = document.getElementById('currentTrackArtist');
    const playlistContainer = document.getElementById('playlistContainer');

    // 播放器状态
    let currentTrackIndex = 0;
    let isPlaying = false;
    let isCollapsed = true;
    let volume = 0.7;
    let previousVolume = 0.7; // 保存之前的音量
    let currentTime = 0;
    let duration = 0;
    let autoPlayEnabled = false;
    let autoPlayBlocked = false;

    // 创建音频元素
    const audio = new Audio();
    audio.volume = volume;
    audio.preload = 'auto';
    audio.autoplay = true;

    // 初始化播放器
    function initPlayer() {
        renderPlaylist();
        setupEventListeners();
        updateVolumeDisplay();
        musicPlayer.classList.add('collapsed');

        // 页面打开时自动播放第一首音乐
        if (playlist.length > 0) {
            autoPlayEnabled = true;
            audio.muted = true;
            attachGestureResume();
            playTrack(currentTrackIndex, true);
        }
    }

    // 如果自动播放被阻止，等待用户交互再恢复声音
    function attachGestureResume() {
        const resume = () => {
            autoPlayBlocked = false;
            audio.muted = false;
            updateVolumeDisplay();
            audio.play().catch(e => {
                console.warn('用户交互后播放失败:', e);
            });
            hideAutoPlayHint();
        };

        document.addEventListener('click', resume, { once: true, passive: true });
        document.addEventListener('keydown', resume, { once: true, passive: true });
    }

    function showAutoPlayHint() {
        if (document.getElementById('autoPlayHint')) return;
        const hint = document.createElement('div');
        hint.id = 'autoPlayHint';
        hint.textContent = '自动播放已阻止，点击页面任意位置继续播放';
        hint.style.cssText = 'font-size:0.8rem;color:#888;text-align:center;margin-top:8px;';
        musicPlayer.querySelector('.player-content').appendChild(hint);
    }

    function hideAutoPlayHint() {
        const hint = document.getElementById('autoPlayHint');
        if (hint) hint.remove();
    }

    // 渲染播放列表
    function renderPlaylist() {
        playlistContainer.innerHTML = playlist.map((track, index) => `
            <div class="playlist-item ${index === currentTrackIndex ? 'active' : ''}" data-index="${index}">
                <div class="playlist-item-title">${track.title}</div>
                <div class="playlist-item-duration">${track.duration}</div>
            </div>
        `).join('');

        // 添加播放列表项点击事件
        document.querySelectorAll('.playlist-item').forEach(item => {
            item.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                playTrack(index);
            });
        });
    }

    // 设置事件监听器
    function setupEventListeners() {
        // 播放器切换
        playerToggle.addEventListener('click', togglePlayer);
        playerClose.addEventListener('click', collapsePlayer);

        // 播放控制
        playPauseBtn.addEventListener('click', togglePlayPause);
        prevBtn.addEventListener('click', playPrevious);
        nextBtn.addEventListener('click', playNext);

        // 进度条
        progressBar.addEventListener('click', seekTo);

        // 音量控制
        volumeBtn.addEventListener('click', toggleMute);
        volumeBar.addEventListener('click', setVolume);

        // 音频事件
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', playNext);
        audio.addEventListener('play', () => {
            isPlaying = true;
            updatePlayPauseBtn();
        });
        audio.addEventListener('pause', () => {
            isPlaying = false;
            updatePlayPauseBtn();
        });
    }

    // 切换播放器展开/收起
    function togglePlayer() {
        isCollapsed = !isCollapsed;
        if (isCollapsed) {
            musicPlayer.classList.add('collapsed');
        } else {
            musicPlayer.classList.remove('collapsed');
        }
    }

    // 收起播放器
    function collapsePlayer() {
        isCollapsed = true;
        musicPlayer.classList.add('collapsed');
    }

    // 播放/暂停切换
    function togglePlayPause() {
        if (isPlaying) {
            audio.pause();
        } else {
            if (audio.src) {
                audio.play();
            } else {
                playTrack(currentTrackIndex);
            }
        }
    }

    // 播放指定轨道
    function playTrack(index, autoplay = false) {
        if (index < 0 || index >= playlist.length) return;

        currentTrackIndex = index;
        const track = playlist[index];

        // 重置进度
        currentTime = 0;
        duration = 0;
        updateProgressDisplay();

        audio.src = track.src;
        currentTrackTitle.textContent = track.title;
        currentTrackArtist.textContent = track.artist;

        renderPlaylist();

        if (autoplay) {
            audio.play().then(() => {
                audio.muted = false;
                updateVolumeDisplay();
                hideAutoPlayHint();
            }).catch(e => {
                console.warn('自动播放被阻止:', e);
                autoPlayBlocked = true;
                audio.muted = true;
                updateVolumeDisplay();
                showAutoPlayHint();
            });
        } else {
            audio.addEventListener('canplaythrough', function onCanPlay() {
                audio.removeEventListener('canplaythrough', onCanPlay);
                audio.play().catch(e => {
                    console.warn('播放失败:', e);
                });
            });
        }
    }

    // 播放上一首
    function playPrevious() {
        // 只有一个歌曲时，重新播放当前歌曲
        playTrack(currentTrackIndex);
    }

    // 播放下一首
    function playNext() {
        // 只有一个歌曲时，重新播放当前歌曲
        playTrack(currentTrackIndex);
    }

    // 更新播放/暂停按钮
    function updatePlayPauseBtn() {
        const icon = playPauseBtn.querySelector('i');
        if (isPlaying) {
            icon.className = 'ri-pause-line';
        } else {
            icon.className = 'ri-play-line';
        }
    }

    // 跳转到指定位置
    function seekTo(e) {
        if (duration === 0) return; // 如果音频还没加载，不执行

        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(1, clickX / rect.width));
        const newTime = percentage * duration;

        audio.currentTime = newTime;
        currentTime = newTime;
        updateProgressDisplay();
    }

    // 设置音量
    function setVolume(e) {
        const rect = volumeBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(1, clickX / rect.width));

        volume = percentage;
        previousVolume = volume; // 更新之前的音量
        audio.volume = volume;
        updateVolumeDisplay();
    }

    // 切换静音
    function toggleMute() {
        if (audio.volume > 0) {
            previousVolume = audio.volume;
            audio.volume = 0;
        } else {
            audio.volume = previousVolume;
        }
        updateVolumeDisplay();
    }

    // 更新音量显示
    function updateVolumeDisplay() {
        const percentage = audio.volume * 100;
        volumeFill.style.width = `${percentage}%`;

        const icon = volumeBtn.querySelector('i');
        if (audio.volume === 0) {
            icon.className = 'ri-volume-mute-line';
        } else if (audio.volume < 0.5) {
            icon.className = 'ri-volume-down-line';
        } else {
            icon.className = 'ri-volume-up-line';
        }
    }

    // 更新持续时间
    function updateDuration() {
        duration = audio.duration;
        durationEl.textContent = formatTime(duration);
    }

    // 更新进度
    function updateProgress() {
        currentTime = audio.currentTime;
        updateProgressDisplay();
    }

    // 更新进度显示
    function updateProgressDisplay() {
        if (duration > 0) {
            const percentage = (currentTime / duration) * 100;
            progressBar.style.setProperty('--progress', `${percentage}%`);
            currentTimeEl.textContent = formatTime(currentTime);
            durationEl.textContent = formatTime(duration);
        }
    }

    // 格式化时间
    function formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';

        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    // 初始化
    initPlayer();

    console.log('🎵 音乐播放器已加载');
})();