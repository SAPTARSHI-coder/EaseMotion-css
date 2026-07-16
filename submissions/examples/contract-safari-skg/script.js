/* =============================================================
   Contract Safari Stutter Reproduction — JavaScript
   Handles: browser detection, replay, stress test
   ============================================================= */

/* ── Browser Detection ─────────────────────────────────────── */
(function detectBrowser() {
  const ua  = navigator.userAgent;
  const el  = document.getElementById('browser-info');
  if (!el) return;

  let name    = 'Unknown';
  let version = '';
  let isSafari = false;

  if (/Edg\//.test(ua)) {
    name = 'Edge (Chromium)';
    version = (ua.match(/Edg\/([\d.]+)/) || [])[1] || '';
  } else if (/OPR\/|Opera/.test(ua)) {
    name = 'Opera';
    version = (ua.match(/OPR\/([\d.]+)/) || [])[1] || '';
  } else if (/Chrome\//.test(ua) && !/Chromium/.test(ua)) {
    name = 'Chrome';
    version = (ua.match(/Chrome\/([\d.]+)/) || [])[1] || '';
  } else if (/Firefox\//.test(ua)) {
    name = 'Firefox';
    version = (ua.match(/Firefox\/([\d.]+)/) || [])[1] || '';
  } else if (/Safari\//.test(ua) && !/Chrome/.test(ua)) {
    name = 'Safari';
    version = (ua.match(/Version\/([\d.]+)/) || [])[1] || '';
    isSafari = true;
  }

  const platform = navigator.platform || '';
  el.textContent = `Browser: ${name} ${version}  |  Platform: ${platform}`;

  if (isSafari) {
    el.style.borderColor = '#ef4444';
    el.style.color = '#fca5a5';
    el.textContent += '  ← Safari detected — stutter may be visible below';
  }
})();

/* ── Replay Utility ────────────────────────────────────────── */
/**
 * Restart a CSS animation on an element by toggling the class.
 * Uses the reflow trick to force the browser to re-evaluate
 * the animation (required in all browsers including Safari).
 */
function replayAnimation(el, animClass) {
  el.classList.remove(animClass);
  // Force reflow — necessary to reset the animation timeline
  void el.offsetWidth; // eslint-disable-line no-void
  el.classList.add(animClass);
}

document.querySelectorAll('.replay-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId  = btn.dataset.target;
    const animClass = btn.dataset.anim;
    const el = document.getElementById(targetId);
    if (el && animClass) replayAnimation(el, animClass);
  });
});

/* ── Stress Test ───────────────────────────────────────────── */
const stressBtn = document.getElementById('stress-btn');
const stressEls = [
  { id: 'stress-1', anim: 'running' },
  { id: 'stress-2', anim: 'running' },
  { id: 'stress-3', anim: 'running' },
];

if (stressBtn) {
  stressBtn.addEventListener('click', () => {
    stressEls.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.remove('running');
      void el.offsetWidth;
      el.classList.add('running');
    });
  });
}
