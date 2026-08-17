// sound.js – Optional tactile sound & haptic hook for EaseMotion
// Tiny (<1 KB), zero‑dependency module using the Web Audio API.
// Provides click/pop audio feedback and optional vibration for elements
// that use EaseMotion interactive classes (e.g., ease-click‑pop, ease‑btn‑magnetic).

/**
 * Initialise the sound & haptic system.
 * @param {Object} [options]
 * @param {string} [options.selector] CSS selector for elements to enhance.
 * @param {boolean} [options.enableSound] Enable audio feedback (default true).
 * @param {boolean} [options.enableHaptic] Enable vibration feedback (default true).
 */
export function initEaseMotionSound(options = {}) {
  const {
    selector = '[class*="ease-"]',
    enableSound = true,
    enableHaptic = true,
  } = options;

  // Lazy‑create a single AudioContext for the lifetime of the page.
  let audioCtx;
  const getAudioCtx = () => {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  };

  // Generate a short click sound using an oscillator.
  const playClick = () => {
    const ctx = getAudioCtx();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.frequency.value = 1000; // 1 kHz click tone
    oscillator.type = 'square';
    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    oscillator.connect(gain).connect(ctx.destination);
    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.045);
  };

  // Trigger device vibration if supported.
  const vibrate = () => {
    if (navigator.vibrate) navigator.vibrate(10);
  };

  // Event delegation – single listener on document.
  document.addEventListener('click', (e) => {
    const target = e.target.closest(selector);
    if (!target) return;
    if (enableSound) playClick();
    if (enableHaptic) vibrate();
  });
}
