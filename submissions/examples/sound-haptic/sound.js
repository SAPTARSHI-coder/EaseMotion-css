(function(){
  // Lazy-created shared AudioContext
  let audioCtx;
  function getAudioCtx() {
    if (!audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioCtx();
    }
    if (audioCtx.state !== 'running') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Internal helper to play a short oscillator tone
  function beep(durationSec, frequency, type = 'square') {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = frequency;
    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.15, now + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.001, now + durationSec);

    osc.start(now);
    osc.stop(now + durationSec);
  }

  /** Play a crisp click sound (≈ 50ms at 1kHz) */
  function click() {
    beep(0.05, 1000, 'square');
  }

  /** Play a low-frequency pop sound (≈ 70ms at 150Hz) */
  function pop() {
    beep(0.07, 150, 'sine');
  }

  /** Trigger optional haptic feedback if supported */
  function haptic(pattern = 10) {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(pattern);
    }
  }

  /** Automatically attach sound and haptic feedback to matching interactive elements */
  function init(options = {}) {
    const {
      selector = '[class*="ease-click"], [class*="ease-btn"], [class*="ease-pop"]',
      enableSound = true,
      enableHaptic = true,
    } = options;

    document.addEventListener('click', (e) => {
      const target = e.target.closest(selector);
      if (!target) return;
      if (enableSound) click();
      if (enableHaptic) haptic(15);
    });
  }

  // Expose public API
  window.EaseMotionSound = { click, pop, haptic, init };
})();
