/**
 * Interactive Audio Waveform Visualizer & Player Control
 * EaseMotion-css Component Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Element References
  const playerCard = document.getElementById('audio-player');
  const barsWrapper = document.getElementById('bars-wrapper');
  const waveformContainer = document.getElementById('waveform-container');
  const waveformTooltip = document.getElementById('waveform-tooltip');
  const tooltipTime = document.getElementById('tooltip-time');
  const scrubHoverLine = document.getElementById('scrub-hover-line');
  const progressPlayLine = document.getElementById('progress-play-line');

  const trackTitle = document.getElementById('track-title');
  const trackSubtitle = document.getElementById('track-subtitle');
  const timeElapsedEl = document.getElementById('time-elapsed');
  const timeRemainingEl = document.getElementById('time-remaining');
  const playbackStatusText = document.querySelector('#playback-status .status-text');

  const btnPlayPause = document.getElementById('btn-play-pause');
  const btnSkipBack = document.getElementById('btn-skip-back');
  const btnSkipForward = document.getElementById('btn-skip-forward');
  const btnMute = document.getElementById('btn-mute');
  const volumeRange = document.getElementById('volume-range');
  const btnSpeed = document.getElementById('btn-speed');
  const speedLabel = document.getElementById('speed-label');
  const presetSelect = document.getElementById('preset-select');

  const iconVolumeOn = btnMute.querySelector('.icon-volume-on');
  const iconVolumeMuted = btnMute.querySelector('.icon-volume-muted');

  // Player State Configuration
  const TOTAL_BARS = 50;
  const SPEED_RATES = [1.0, 1.25, 1.5, 2.0, 0.75];
  
  let state = {
    isPlaying: false,
    currentTime: 0,
    duration: 225, // 03:45 total duration in seconds
    volume: 0.8,
    isMuted: false,
    speedIndex: 0,
    preset: 'speech',
    barHeights: []
  };

  // Preset Configurations & Generator
  const PRESET_METADATA = {
    speech: {
      title: 'Aetherial Neural Voice #042',
      subtitle: 'ElevenLabs v3.5 Neural Audio Generator',
      duration: 225, // 03:45
      generateHeights: (count) => {
        const heights = [];
        for (let i = 0; i < count; i++) {
          // Voice cadence simulation (speech pauses and pitch variation)
          const isPause = (i % 7 === 0) || (i % 13 === 0);
          if (isPause) {
            heights.push(Math.floor(Math.random() * 15) + 10);
          } else {
            const base = Math.sin(i * 0.3) * 35 + 55;
            const noise = Math.random() * 25 - 12;
            heights.push(Math.min(95, Math.max(15, Math.floor(base + noise))));
          }
        }
        return heights;
      }
    },
    synth: {
      title: 'Synthesizer Horizon (Ambient Mix)',
      subtitle: 'Modular Synth Engine — 128 BPM Synthwave',
      duration: 260, // 04:20
      generateHeights: (count) => {
        const heights = [];
        for (let i = 0; i < count; i++) {
          const sine1 = Math.sin(i * 0.2) * 30;
          const sine2 = Math.cos(i * 0.4) * 20;
          heights.push(Math.min(98, Math.max(20, Math.floor(50 + sine1 + sine2))));
        }
        return heights;
      }
    },
    chiptune: {
      title: 'Retro Cyber Pixel Run #08',
      subtitle: '8-Bit Synthesizer & Pulse Wave Chiptune',
      duration: 180, // 03:00
      generateHeights: (count) => {
        const heights = [];
        for (let i = 0; i < count; i++) {
          // Stepped arpeggio levels
          const step = (i % 4) * 22 + 25;
          const randomJump = Math.random() > 0.8 ? 35 : 0;
          heights.push(Math.min(95, Math.max(15, step + randomJump)));
        }
        return heights;
      }
    },
    lofi: {
      title: 'Midnight Rain & Vinyl Lounge',
      subtitle: 'Lo-Fi Chill Hop — Vinyl Crackle Study Beat',
      duration: 210, // 03:30
      generateHeights: (count) => {
        const heights = [];
        for (let i = 0; i < count; i++) {
          const base = 40 + Math.sin(i * 0.15) * 25;
          const noise = Math.random() * 10 - 5;
          heights.push(Math.min(85, Math.max(18, Math.floor(base + noise))));
        }
        return heights;
      }
    }
  };

  // Web Audio API Synthesizer Helper (Mock Audio Generator)
  class AudioSynthEngine {
    constructor() {
      this.ctx = null;
      this.osc = null;
      this.gainNode = null;
      this.intervalId = null;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    start(presetName, getVolume) {
      this.init();
      if (!this.ctx) return;

      this.stop();

      // Simple ambient sound generator according to preset
      const baseFreqs = {
        speech: [220, 261.63, 329.63, 392.00],
        synth: [146.83, 220, 293.66, 440],
        chiptune: [329.63, 392.00, 493.88, 659.25],
        lofi: [130.81, 164.81, 196.00, 246.94]
      };

      const freqs = baseFreqs[presetName] || baseFreqs.speech;
      let stepIndex = 0;

      const playTone = () => {
        if (!this.ctx || state.isMuted) return;

        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = presetName === 'chiptune' ? 'square' : (presetName === 'synth' ? 'sawtooth' : 'sine');
          osc.frequency.setValueAtTime(freqs[stepIndex % freqs.length], this.ctx.currentTime);

          const currentVol = getVolume();
          gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(Math.max(0.001, currentVol * 0.15), this.ctx.currentTime + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start();
          osc.stop(this.ctx.currentTime + 0.4);

          stepIndex++;
        } catch (err) {
          // Ignore Web Audio errors if audio context blocked
        }
      };

      playTone();
      this.intervalId = setInterval(playTone, presetName === 'chiptune' ? 200 : 400);
    }

    stop() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
  }

  const audioEngine = new AudioSynthEngine();

  // Helper Functions
  function formatTime(seconds) {
    const mins = Math.floor(Math.abs(seconds) / 60);
    const secs = Math.floor(Math.abs(seconds) % 60);
    const paddedMins = String(mins).padStart(2, '0');
    const paddedSecs = String(secs).padStart(2, '0');
    return `${seconds < 0 ? '-' : ''}${paddedMins}:${paddedSecs}`;
  }

  // Render Waveform Bars
  function renderWaveform(presetName) {
    barsWrapper.innerHTML = '';
    const presetData = PRESET_METADATA[presetName] || PRESET_METADATA.speech;
    state.duration = presetData.duration;
    state.barHeights = presetData.generateHeights(TOTAL_BARS);

    state.barHeights.forEach((heightPercent, index) => {
      const bar = document.createElement('div');
      bar.className = 'waveform-bar';
      bar.dataset.index = index;
      bar.style.setProperty('--bar-height', `${heightPercent}%`);
      // Random staggered delays for natural bounce effect
      const delay = (index % 5) * 0.2 + (Math.random() * 0.1);
      bar.style.setProperty('--bar-delay', `${delay.toFixed(2)}s`);
      barsWrapper.appendChild(bar);
    });

    updateProgressUI();
  }

  // Update Progress UI (Bars, Time, Lines, ARIA)
  function updateProgressUI() {
    const progressPercent = (state.currentTime / state.duration) * 100;
    const playedBarsCount = Math.floor((progressPercent / 100) * TOTAL_BARS);

    const bars = barsWrapper.children;
    for (let i = 0; i < bars.length; i++) {
      if (i <= playedBarsCount && progressPercent > 0) {
        bars[i].classList.add('is-played');
      } else {
        bars[i].classList.remove('is-played');
      }
    }

    // Play Line Indicator Position
    progressPlayLine.style.left = `${progressPercent}%`;

    // Time Labels
    timeElapsedEl.textContent = formatTime(state.currentTime);
    timeRemainingEl.textContent = `-${formatTime(state.duration - state.currentTime)}`;

    // Accessibility ARIA attributes
    waveformContainer.setAttribute('aria-valuenow', Math.round(progressPercent));
    waveformContainer.setAttribute('aria-valuetext', `${formatTime(state.currentTime)} of ${formatTime(state.duration)}`);
  }

  // Playback Loop Timer
  let lastTimestamp = null;
  let animFrameId = null;

  function stepPlayback(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const deltaTime = (timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;

    if (state.isPlaying) {
      state.currentTime += deltaTime * SPEED_RATES[state.speedIndex];

      if (state.currentTime >= state.duration) {
        state.currentTime = state.duration;
        pauseTrack();
      }

      updateProgressUI();
      animFrameId = requestAnimationFrame(stepPlayback);
    }
  }

  function playTrack() {
    state.isPlaying = true;
    playerCard.classList.add('is-playing');
    btnPlayPause.setAttribute('aria-pressed', 'true');
    btnPlayPause.setAttribute('aria-label', 'Pause Track');
    playbackStatusText.textContent = 'Playing';

    audioEngine.start(state.preset, () => (state.isMuted ? 0 : state.volume));

    lastTimestamp = null;
    if (animFrameId) cancelAnimationFrame(animFrameId);
    animFrameId = requestAnimationFrame(stepPlayback);
  }

  function pauseTrack() {
    state.isPlaying = false;
    playerCard.classList.remove('is-playing');
    btnPlayPause.setAttribute('aria-pressed', 'false');
    btnPlayPause.setAttribute('aria-label', 'Play Track');
    playbackStatusText.textContent = state.currentTime >= state.duration ? 'Finished' : 'Paused';

    audioEngine.stop();

    if (animFrameId) {
      cancelAnimationFrame(animFrameId);
      animFrameId = null;
    }
  }

  function togglePlayPause() {
    if (state.currentTime >= state.duration) {
      state.currentTime = 0;
    }
    if (state.isPlaying) {
      pauseTrack();
    } else {
      playTrack();
    }
  }

  function seekToPercent(percent) {
    const clampedPercent = Math.max(0, Math.min(100, percent));
    state.currentTime = (clampedPercent / 100) * state.duration;
    updateProgressUI();
  }

  // Waveform Hover & Drag Scrubbing
  let isDragging = false;

  function calculateRatioFromEvent(e) {
    const rect = waveformContainer.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const offsetX = clientX - rect.left;
    return Math.max(0, Math.min(1, offsetX / rect.width));
  }

  function handlePointerMove(e) {
    const ratio = calculateRatioFromEvent(e);
    const percent = ratio * 100;
    const hoverTimeSec = ratio * state.duration;

    // Position Tooltip & Scrub Line
    waveformTooltip.style.left = `${percent}%`;
    scrubHoverLine.style.left = `${percent}%`;
    tooltipTime.textContent = formatTime(hoverTimeSec);

    // Highlight bars near hover cursor
    const hoverIndex = Math.floor(ratio * TOTAL_BARS);
    const bars = barsWrapper.children;
    for (let i = 0; i < bars.length; i++) {
      if (i === hoverIndex) {
        bars[i].classList.add('is-scrub-cursor');
      } else {
        bars[i].classList.remove('is-scrub-cursor');
      }
    }

    if (isDragging) {
      seekToPercent(percent);
    }
  }

  waveformContainer.addEventListener('pointerenter', () => {
    waveformContainer.classList.add('is-hovering');
    waveformTooltip.classList.add('visible');
  });

  waveformContainer.addEventListener('pointerleave', () => {
    waveformContainer.classList.remove('is-hovering');
    waveformTooltip.classList.remove('visible');
    const bars = barsWrapper.children;
    for (let i = 0; i < bars.length; i++) {
      bars[i].classList.remove('is-scrub-cursor');
    }
  });

  waveformContainer.addEventListener('pointerdown', (e) => {
    isDragging = true;
    waveformContainer.setPointerCapture(e.pointerId);
    const ratio = calculateRatioFromEvent(e);
    seekToPercent(ratio * 100);
  });

  waveformContainer.addEventListener('pointermove', handlePointerMove);

  waveformContainer.addEventListener('pointerup', (e) => {
    if (isDragging) {
      isDragging = false;
      try {
        waveformContainer.releasePointerCapture(e.pointerId);
      } catch (err) {}
    }
  });

  // Controls Event Listeners
  btnPlayPause.addEventListener('click', togglePlayPause);

  btnSkipBack.addEventListener('click', () => {
    seekToPercent(((state.currentTime - 5) / state.duration) * 100);
  });

  btnSkipForward.addEventListener('click', () => {
    seekToPercent(((state.currentTime + 5) / state.duration) * 100);
  });

  // Mute & Volume Logic
  function updateVolumeUI() {
    if (state.isMuted || state.volume === 0) {
      iconVolumeOn.classList.add('hidden');
      iconVolumeMuted.classList.remove('hidden');
      btnMute.setAttribute('aria-label', 'Unmute Audio');
    } else {
      iconVolumeOn.classList.remove('hidden');
      iconVolumeMuted.classList.add('hidden');
      btnMute.setAttribute('aria-label', 'Mute Audio');
    }
  }

  btnMute.addEventListener('click', () => {
    state.isMuted = !state.isMuted;
    updateVolumeUI();
  });

  volumeRange.addEventListener('input', (e) => {
    state.volume = parseFloat(e.target.value);
    state.isMuted = state.volume === 0;
    updateVolumeUI();
  });

  // Speed Selector Logic
  btnSpeed.addEventListener('click', () => {
    state.speedIndex = (state.speedIndex + 1) % SPEED_RATES.length;
    const currentSpeed = SPEED_RATES[state.speedIndex];
    speedLabel.textContent = `${currentSpeed.toFixed(currentSpeed === 1 || currentSpeed === 2 ? 1 : 2)}x`;
  });

  // Preset Selector Logic
  presetSelect.addEventListener('change', (e) => {
    const selectedPreset = e.target.value;
    state.preset = selectedPreset;
    const data = PRESET_METADATA[selectedPreset];

    if (data) {
      trackTitle.textContent = data.title;
      trackSubtitle.textContent = data.subtitle;
      state.currentTime = 0;
      renderWaveform(selectedPreset);

      if (state.isPlaying) {
        audioEngine.start(selectedPreset, () => (state.isMuted ? 0 : state.volume));
      }
    }
  });

  // Keyboard Shortcuts Support
  window.addEventListener('keydown', (e) => {
    // Avoid triggering when focused inside select dropdown or input fields
    if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      return;
    }

    switch (e.code) {
      case 'Space':
      case 'KeyK':
        e.preventDefault();
        togglePlayPause();
        break;

      case 'ArrowLeft':
      case 'KeyJ':
        e.preventDefault();
        seekToPercent(((state.currentTime - 5) / state.duration) * 100);
        break;

      case 'ArrowRight':
      case 'KeyL':
        e.preventDefault();
        seekToPercent(((state.currentTime + 5) / state.duration) * 100);
        break;

      case 'KeyM':
        e.preventDefault();
        state.isMuted = !state.isMuted;
        updateVolumeUI();
        break;

      case 'Digit1':
      case 'Digit2':
      case 'Digit3':
      case 'Digit4':
        const presetKeys = ['speech', 'synth', 'chiptune', 'lofi'];
        const keyNum = parseInt(e.code.replace('Digit', ''), 10) - 1;
        if (presetKeys[keyNum]) {
          presetSelect.value = presetKeys[keyNum];
          presetSelect.dispatchEvent(new Event('change'));
        }
        break;

      default:
        break;
    }
  });

  // Initial Initialization
  renderWaveform(state.preset);
  updateVolumeUI();
});
