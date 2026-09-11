/**
 * EaseMotion CSS — Back to Top Button
 * btt.js
 *
 * Features:
 *   - Shows button after scrolling past a threshold
 *   - SVG circular progress ring tracks scroll position
 *   - Smooth scroll to top on click
 *   - Pulse animation on first appearance
 *   - Respects prefers-reduced-motion
 */

(function () {
  'use strict';

  const SHOW_THRESHOLD = 200; // px scrolled before button appears

  const wrap     = document.getElementById('emBttWrap');
  const progress = document.getElementById('emBttProgress');
  const btn      = document.getElementById('emBtt');

  if (!wrap || !btn) {
    console.warn('[EaseMotion] Back-to-top elements not found.');
    return;
  }

  /* ── SVG ring setup ── */
  const radius = progress ? parseFloat(progress.getAttribute('r')) : 0;
  const circumference = 2 * Math.PI * radius;

  if (progress) {
    progress.style.strokeDasharray  = circumference;
    progress.style.strokeDashoffset = circumference; // start empty
  }

  /* ── Reduced motion ── */
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── State ── */
  let visible   = false;
  let pulsed    = false;
  let ticking   = false;

  function updateProgress() {
    if (!progress) return;
    const scrollTop  = window.scrollY || document.documentElement.scrollTop;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    const pct        = docHeight > 0 ? scrollTop / docHeight : 0;
    progress.style.strokeDashoffset = circumference * (1 - pct);
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > SHOW_THRESHOLD && !visible) {
        visible = true;
        wrap.classList.add('em-btt--visible');

        if (!pulsed && !reducedMotion) {
          pulsed = true;
          wrap.classList.add('em-btt--pulse');
          wrap.addEventListener('animationend', () => {
            wrap.classList.remove('em-btt--pulse');
          }, { once: true });
        }
      } else if (scrollTop <= SHOW_THRESHOLD && visible) {
        visible = false;
        wrap.classList.remove('em-btt--visible');
        pulsed = false; // allow pulse again next time it appears
      }

      updateProgress();
      ticking = false;
    });
  }

  /* ── Scroll to top on click ── */
  btn.addEventListener('click', () => {
    if (reducedMotion) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  /* ── Listen ── */
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Init ── */
  onScroll();
})();