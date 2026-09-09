/**
 * EaseMotion JS Fallback for @property count-up
 * Solves silent failures on older Safari/Firefox browsers.
 */

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.js-count-up');

  elements.forEach(el => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = parseInt(el.getAttribute('data-duration'), 10) || 2000;
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      el.textContent = target; // Skip animation
      return;
    }

    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      el.textContent = Math.floor(easeProgress * target);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  });
});
