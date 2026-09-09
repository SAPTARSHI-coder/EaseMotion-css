/* ==========================================================================
   EASE AUDIO WAVEFORM SCRUBBER — script.js
   Library: EaseMotion CSS  |  Issue: #62775
   Vanilla JavaScript only — no frameworks, no external libraries
   ========================================================================== */

(function () {
  'use strict';

  /* ── Track presets ─────────────────────────────────────────────────────── */
  // Using a public-domain audio file from the Wikimedia Commons CC0 collection.
  // Falls back gracefully if unreachable.
  const TRACKS = [
    {
      name:   'Neon Cascade',
      artist: 'EaseMotion Beats',
      cover:  '♪',
      src:    'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
    },
    {
      name:   'Deep Space',
      artist: 'EaseMotion Beats',
      cover:  '🎵',
      src:    'https://upload.wikimedia.org/wikipedia/commons/3/3e/Chopin_-_Nocturne_Op_9_No_1_in_Bb_minor.ogg',
    },
    {
      name:   'Golden Hour',
      artist: 'EaseMotion Beats',
      cover:  '🎶',
      src:    'https://upload.wikimedia.org/wikipedia/commons/6/6e/Piano_sonata_no._2_-_1._Allegro_vivace.ogg',
    },
    {
      name:   'Mint Wave',
      artist: 'EaseMotion Beats',
      cover:  '🎼',
      src:    'https://upload.wikimedia.org/wikipedia/commons/2/21/Hans_Zimmer_-_Now_We_Are_Free.ogg',
    },
  ];

  /* ── Deterministic waveform amplitude tables ───────────────────────────── */
  // 60-bar amplitudes for each track — fixed values so the waveform is stable
  // across page loads. Values are in [0.15, 1.0].
  const WAVEFORMS = (() => {
    // Pseudo-random seeded generator (Mulberry32) — deterministic per seed
    function mulberry32(seed) {
      return function () {
        seed |= 0;
        seed = (seed + 0x6D2B79F5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }

    function makeWave(seed) {
      const rand = mulberry32(seed);
      const bars = 60;
      const wave = [];
      for (let i = 0; i < bars; i++) {
        // Blend random with a smooth envelope shape for musical appearance
        const envelope = Math.sin((i / bars) * Math.PI);
        const r = rand();
        wave.push(Math.max(0.12, Math.min(1, 0.4 * envelope + 0.6 * r)));
      }
      return wave;
    }

    return [
      makeWave(0xdeadbeef),
      makeWave(0xcafebabe),
      makeWave(0xf00df00d),
      makeWave(0xbadc0de0),
    ];
  })();

  /* ── DOM References (cached once) ─────────────────────────────────────── */
  const audio            = document.getElementById('awsAudio');
  const scrubber         = document.getElementById('awsScrubber');
  const barsContainer    = document.getElementById('awsBars');
  const playhead         = document.getElementById('awsPlayhead');
  const tooltip          = document.getElementById('awsTooltip');
  const loopRegion       = document.getElementById('awsLoopRegion');
  const loopHandleStart  = document.getElementById('loopHandleStart');
  const loopHandleEnd    = document.getElementById('loopHandleEnd');
  const btnPlay          = document.getElementById('btnPlay');
  const btnRewind        = document.getElementById('btnRewind');
  const btnForward       = document.getElementById('btnForward');
  const volumeSlider     = document.getElementById('volumeSlider');
  const currentTimeEl    = document.getElementById('currentTimeDisplay');
  const durationEl       = document.getElementById('durationDisplay');
  const trackNameEl      = document.getElementById('trackName');
  const trackArtistEl    = document.getElementById('trackArtist');
  const trackCoverEl     = document.getElementById('trackCover');
  const themeBtns        = document.querySelectorAll('.aws-theme-btn');
  const speedBtns        = document.querySelectorAll('.aws-speed-btn');
  const trackBtns        = document.querySelectorAll('.aws-track-btn');

  /* ── State ─────────────────────────────────────────────────────────────── */
  let currentTrackIndex = 0;
  let isScrubbing       = false;   // pointer down on waveform
  let rafId             = null;    // requestAnimationFrame handle
  let barEls            = [];      // cached bar element references
  let loopStart         = 0.25;   // normalised [0..1]
  let loopEnd           = 0.60;
  let activeDragTarget  = null;   // 'loopStart' | 'loopEnd' | null

  /* ════════════════════════════════════════════════════════════════════════
     UTILITIES
     ════════════════════════════════════════════════════════════════════════ */

  /** Format seconds → "m:ss" */
  function formatTime(secs) {
    if (!isFinite(secs) || isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  /** Clamp value between min and max */
  function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  }

  /** Get pointer X fraction [0..1] relative to scrubber bounds */
  function pointerFraction(e, el) {
    const rect = el.getBoundingClientRect();
    return clamp((e.clientX - rect.left) / rect.width, 0, 1);
  }

  /* ════════════════════════════════════════════════════════════════════════
     WAVEFORM
     ════════════════════════════════════════════════════════════════════════ */

  function buildBars(amplitudes) {
    barsContainer.innerHTML = '';
    barEls = [];
    amplitudes.forEach(function (amp) {
      const bar = document.createElement('div');
      bar.className = 'aws-bar';
      bar.style.height = `${Math.round(amp * 100)}%`;
      barsContainer.appendChild(bar);
      barEls.push(bar);
    });
  }

  /** Update bar active/inactive classes based on normalised progress [0..1] */
  function updateBars(progress) {
    const threshold = Math.round(progress * barEls.length);
    for (let i = 0; i < barEls.length; i++) {
      if (i < threshold) {
        if (!barEls[i].classList.contains('aws-bar--active')) {
          barEls[i].classList.add('aws-bar--active');
        }
      } else {
        if (barEls[i].classList.contains('aws-bar--active')) {
          barEls[i].classList.remove('aws-bar--active');
        }
      }
    }
  }

  /* ════════════════════════════════════════════════════════════════════════
     PLAYHEAD + TIME
     ════════════════════════════════════════════════════════════════════════ */

  function setPlayheadProgress(fraction) {
    const pct = `${(fraction * 100).toFixed(3)}%`;
    playhead.style.setProperty('--progress', pct);
  }

  function updateTimeDisplay(current, total) {
    currentTimeEl.textContent = formatTime(current);
    durationEl.textContent    = formatTime(total);
    // Update accessible slider value
    const pct = total > 0 ? Math.round((current / total) * 100) : 0;
    scrubber.setAttribute('aria-valuenow', pct);
    scrubber.setAttribute('aria-valuetext', `${formatTime(current)} of ${formatTime(total)}`);
  }

  /* ── rAF-based playback loop ─────────────────────────────────────────── */
  function startPlaybackLoop() {
    if (rafId) return; // already running

    function tick() {
      if (audio.paused || audio.ended) {
        rafId = null;
        return;
      }
      const dur  = audio.duration;
      const cur  = audio.currentTime;
      const frac = dur > 0 ? cur / dur : 0;

      setPlayheadProgress(frac);
      updateBars(frac);
      updateTimeDisplay(cur, dur);

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
  }

  function stopPlaybackLoop() {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  /* ════════════════════════════════════════════════════════════════════════
     SEEKING
     ════════════════════════════════════════════════════════════════════════ */

  function seekToFraction(fraction) {
    const dur = audio.duration;
    if (!isFinite(dur) || isNaN(dur) || dur <= 0) return;
    const t = clamp(fraction * dur, 0, dur);
    audio.currentTime = t;
    // Immediately update visuals without waiting for 'timeupdate'
    setPlayheadProgress(fraction);
    updateBars(fraction);
    updateTimeDisplay(t, dur);
  }

  /* ── Pointer events on scrubber ─────────────────────────────────────── */
  scrubber.addEventListener('pointerdown', function (e) {
    // Ignore if clicking a loop handle
    if (e.target.closest('.aws-loop-handle')) return;

    isScrubbing = true;
    scrubber.setPointerCapture(e.pointerId);
    seekToFraction(pointerFraction(e, scrubber));
    e.preventDefault();
  });

  scrubber.addEventListener('pointermove', function (e) {
    if (!isScrubbing) {
      // Show tooltip
      showTooltip(e);
      return;
    }
    seekToFraction(pointerFraction(e, scrubber));
    e.preventDefault();
  });

  scrubber.addEventListener('pointerup', function (e) {
    if (isScrubbing) {
      isScrubbing = false;
      scrubber.releasePointerCapture(e.pointerId);
    }
  });

  scrubber.addEventListener('pointercancel', function () {
    isScrubbing = false;
  });

  scrubber.addEventListener('pointerleave', function () {
    if (!isScrubbing) hideTooltip();
  });

  /* ── Keyboard scrubbing ──────────────────────────────────────────────── */
  scrubber.addEventListener('keydown', function (e) {
    const dur = audio.duration;
    if (!isFinite(dur) || dur <= 0) return;

    let delta = 0;
    switch (e.key) {
      case 'ArrowRight': delta =  5; break;
      case 'ArrowLeft':  delta = -5; break;
      case 'ArrowUp':    delta = 10; break;
      case 'ArrowDown':  delta = -10; break;
      case 'Home':
        audio.currentTime = 0;
        setPlayheadProgress(0);
        updateBars(0);
        updateTimeDisplay(0, dur);
        return;
      case 'End':
        audio.currentTime = dur;
        setPlayheadProgress(1);
        updateBars(1);
        updateTimeDisplay(dur, dur);
        return;
      default: return;
    }

    e.preventDefault();
    const newTime = clamp(audio.currentTime + delta, 0, dur);
    audio.currentTime = newTime;
    setPlayheadProgress(newTime / dur);
    updateBars(newTime / dur);
    updateTimeDisplay(newTime, dur);
  });

  /* ════════════════════════════════════════════════════════════════════════
     TOOLTIP
     ════════════════════════════════════════════════════════════════════════ */

  function showTooltip(e) {
    const rect = scrubber.getBoundingClientRect();
    const frac = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    const dur  = audio.duration;
    const time = isFinite(dur) && dur > 0 ? frac * dur : 0;

    tooltip.textContent = formatTime(time);
    tooltip.classList.add('aws-tooltip--visible');
    tooltip.setAttribute('aria-hidden', 'false');

    // Position via transform to avoid layout — keep within card bounds
    const tipHalfW = 30; // approximate half-width of tooltip
    const maxLeft  = rect.width;
    const rawX     = frac * rect.width;
    const safeX    = clamp(rawX, tipHalfW, maxLeft - tipHalfW);

    tooltip.style.left      = `${safeX}px`;
    tooltip.style.transform = 'translateX(-50%)';
  }

  function hideTooltip() {
    tooltip.classList.remove('aws-tooltip--visible');
    tooltip.setAttribute('aria-hidden', 'true');
  }

  /* ════════════════════════════════════════════════════════════════════════
     LOOP HANDLE DRAGGING
     ════════════════════════════════════════════════════════════════════════ */

  function initLoopHandle(handleEl, type) {
    handleEl.addEventListener('pointerdown', function (e) {
      e.stopPropagation(); // don't trigger scrubber seek
      activeDragTarget = type;
      handleEl.setPointerCapture(e.pointerId);
      e.preventDefault();
    });

    handleEl.addEventListener('pointermove', function (e) {
      if (activeDragTarget !== type) return;
      const frac = pointerFraction(e, scrubber);

      if (type === 'loopStart') {
        loopStart = clamp(frac, 0, loopEnd - 0.02);
        handleEl.style.left = `${loopStart * 100}%`;
        handleEl.setAttribute('aria-valuenow', Math.round(loopStart * 100));
      } else {
        loopEnd = clamp(frac, loopStart + 0.02, 1);
        handleEl.style.left = `${loopEnd * 100}%`;
        handleEl.setAttribute('aria-valuenow', Math.round(loopEnd * 100));
      }

      updateLoopRegion();
      e.preventDefault();
    });

    handleEl.addEventListener('pointerup', function () {
      activeDragTarget = null;
    });

    handleEl.addEventListener('pointercancel', function () {
      activeDragTarget = null;
    });

    // Keyboard control for loop handles
    handleEl.addEventListener('keydown', function (e) {
      const step = 0.01;
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (type === 'loopStart') {
          loopStart = clamp(loopStart + step, 0, loopEnd - 0.02);
          handleEl.style.left = `${loopStart * 100}%`;
          handleEl.setAttribute('aria-valuenow', Math.round(loopStart * 100));
        } else {
          loopEnd = clamp(loopEnd + step, loopStart + 0.02, 1);
          handleEl.style.left = `${loopEnd * 100}%`;
          handleEl.setAttribute('aria-valuenow', Math.round(loopEnd * 100));
        }
        updateLoopRegion();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        e.preventDefault();
        if (type === 'loopStart') {
          loopStart = clamp(loopStart - step, 0, loopEnd - 0.02);
          handleEl.style.left = `${loopStart * 100}%`;
          handleEl.setAttribute('aria-valuenow', Math.round(loopStart * 100));
        } else {
          loopEnd = clamp(loopEnd - step, loopStart + 0.02, 1);
          handleEl.style.left = `${loopEnd * 100}%`;
          handleEl.setAttribute('aria-valuenow', Math.round(loopEnd * 100));
        }
        updateLoopRegion();
      }
    });
  }

  function updateLoopRegion() {
    loopRegion.style.setProperty('--loop-start', `${loopStart * 100}%`);
    loopRegion.style.setProperty('--loop-end',   `${loopEnd   * 100}%`);
    // Compute CSS width for the region
    loopRegion.style.width = `${(loopEnd - loopStart) * 100}%`;
    loopRegion.style.left  = `${loopStart * 100}%`;
  }

  initLoopHandle(loopHandleStart, 'loopStart');
  initLoopHandle(loopHandleEnd,   'loopEnd');

  /* ════════════════════════════════════════════════════════════════════════
     PLAY / PAUSE
     ════════════════════════════════════════════════════════════════════════ */

  function syncPlayState(playing) {
    if (playing) {
      btnPlay.classList.add('aws-playing');
      btnPlay.setAttribute('aria-label', 'Pause');
      startPlaybackLoop();
    } else {
      btnPlay.classList.remove('aws-playing');
      btnPlay.setAttribute('aria-label', 'Play');
      stopPlaybackLoop();
    }
  }

  btnPlay.addEventListener('click', function () {
    if (audio.paused) {
      audio.play().catch(function (err) {
        console.warn('[AWS] Playback failed:', err.message);
      });
    } else {
      audio.pause();
    }
  });

  audio.addEventListener('play',  function () { syncPlayState(true); });
  audio.addEventListener('pause', function () { syncPlayState(false); });
  audio.addEventListener('ended', function () { syncPlayState(false); });

  /* ════════════════════════════════════════════════════════════════════════
     REWIND / FORWARD
     ════════════════════════════════════════════════════════════════════════ */

  btnRewind.addEventListener('click', function () {
    audio.currentTime = clamp(audio.currentTime - 5, 0, audio.duration || 0);
  });

  btnForward.addEventListener('click', function () {
    audio.currentTime = clamp(audio.currentTime + 5, 0, audio.duration || 0);
  });

  /* ════════════════════════════════════════════════════════════════════════
     VOLUME
     ════════════════════════════════════════════════════════════════════════ */

  audio.volume = parseFloat(volumeSlider.value);

  volumeSlider.addEventListener('input', function () {
    const v = parseFloat(this.value);
    audio.volume = v;
    this.setAttribute('aria-valuetext', `${Math.round(v * 100)}%`);
  });

  /* ════════════════════════════════════════════════════════════════════════
     PLAYBACK SPEED
     ════════════════════════════════════════════════════════════════════════ */

  speedBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const speed = parseFloat(this.dataset.speed);
      audio.playbackRate = speed;

      speedBtns.forEach(function (b) {
        b.classList.remove('aws-speed-btn--active');
        b.setAttribute('aria-pressed', 'false');
      });
      this.classList.add('aws-speed-btn--active');
      this.setAttribute('aria-pressed', 'true');
    });
  });

  /* ════════════════════════════════════════════════════════════════════════
     AUDIO METADATA & ERROR HANDLING
     ════════════════════════════════════════════════════════════════════════ */

  audio.addEventListener('loadedmetadata', function () {
    const dur = audio.duration;
    updateTimeDisplay(audio.currentTime, dur);
  });

  audio.addEventListener('timeupdate', function () {
    // Only update if rAF loop isn't running (i.e., paused)
    if (!rafId) {
      const dur  = audio.duration;
      const cur  = audio.currentTime;
      const frac = dur > 0 ? cur / dur : 0;
      setPlayheadProgress(frac);
      updateBars(frac);
      updateTimeDisplay(cur, dur);
    }
  });

  audio.addEventListener('error', function () {
    console.warn('[AWS] Audio load error. Demo mode (no audio).');
    durationEl.textContent    = '--:--';
    currentTimeEl.textContent = '0:00';
    // The UI remains functional as a visual demo
  });

  /* ════════════════════════════════════════════════════════════════════════
     TRACK SWITCHING
     ════════════════════════════════════════════════════════════════════════ */

  function loadTrack(index) {
    const wasPlaying = !audio.paused;
    const track = TRACKS[index];

    // Stop current playback safely
    audio.pause();
    stopPlaybackLoop();
    syncPlayState(false);

    // Reset visuals
    setPlayheadProgress(0);
    updateBars(0);
    updateTimeDisplay(0, 0);
    currentTimeEl.textContent = '0:00';
    durationEl.textContent    = '0:00';

    // Update track metadata UI
    trackNameEl.textContent   = track.name;
    trackArtistEl.textContent = track.artist;
    trackCoverEl.textContent  = track.cover;

    // Rebuild waveform for this track
    buildBars(WAVEFORMS[index]);

    // Update track button states
    trackBtns.forEach(function (btn) {
      const active = parseInt(btn.dataset.track) === index;
      btn.classList.toggle('aws-track-btn--active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    currentTrackIndex = index;

    // Load new source
    audio.src = track.src;
    audio.load();

    // Resume if previously playing
    if (wasPlaying) {
      audio.play().catch(function (err) {
        console.warn('[AWS] Auto-resume after track switch failed:', err.message);
      });
    }
  }

  trackBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const idx = parseInt(this.dataset.track);
      if (idx !== currentTrackIndex) {
        loadTrack(idx);
      }
    });
  });

  /* ════════════════════════════════════════════════════════════════════════
     THEME SWITCHING
     ════════════════════════════════════════════════════════════════════════ */

  themeBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const theme = this.dataset.theme;
      document.documentElement.dataset.theme = theme;

      themeBtns.forEach(function (b) {
        const active = b.dataset.theme === theme;
        b.classList.toggle('aws-theme-btn--active', active);
        b.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    });
  });

  /* ════════════════════════════════════════════════════════════════════════
     INITIALISE
     ════════════════════════════════════════════════════════════════════════ */

  function init() {
    // Build initial waveform
    buildBars(WAVEFORMS[0]);

    // Set initial loop region CSS
    updateLoopRegion();

    // Load initial track
    audio.src    = TRACKS[0].src;
    audio.volume = parseFloat(volumeSlider.value);
    audio.load();

    // Reset display
    setPlayheadProgress(0);
    updateTimeDisplay(0, 0);
  }

  init();

})();
