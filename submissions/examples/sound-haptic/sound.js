(function(){
  // Create a single shared AudioContext (will be resumed on user interaction)
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioCtx();

  // Internal helper to play a short tone
  function beep(durationSec, frequency) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.value = frequency;
    osc.connect(gain);
    gain.connect(ctx.destination);
    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.1, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);
    osc.start(now);
    osc.stop(now + durationSec);
  }

  /** Play a crisp click sound (≈ 50 ms at 1 kHz) */
  function click() {
    // Ensure the AudioContext is resumed (required after a user gesture)
    if (ctx.state !== 'running') ctx.resume();
    beep(0.05, 1000);
  }

  /** Play a low‑frequency pop sound (≈ 70 ms at 150 Hz) */
  function pop() {
    if (ctx.state !== 'running') ctx.resume();
    beep(0.07, 150);
  }

  /** Trigger optional haptic feedback if the device supports it.
   *  pattern can be a number (ms) or an array of numbers for vibration patterns.
   */
  function haptic(pattern) {
    if (navigator.vibrate) {
      navigator.vibrate(pattern);
    }
  }

  // Expose a tiny API on the global window object.
  window.EaseMotionSound = { click, pop, haptic };
})();
