/* =============================================================
   CSS Aurora Gradient Hero Card with Hover Spotlight
   EaseMotion — Interactive Spotlight Mouse Tracking JS
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('auroraCard');

  if (!card) return;

  let ticking = false;
  let mouseX = 0;
  let mouseY = 0;

  /**
   * Update CSS custom properties for spotlight coordinates
   */
  function updateSpotlight() {
    const rect = card.getBoundingClientRect();
    const x = ((mouseX - rect.left) / rect.width) * 100;
    const y = ((mouseY - rect.top) / rect.height) * 100;

    card.style.setProperty('--mouse-x', `${x.toFixed(2)}%`);
    card.style.setProperty('--mouse-y', `${y.toFixed(2)}%`);

    ticking = false;
  }

  // Mouse move listener with requestAnimationFrame throttling
  card.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!ticking) {
      requestAnimationFrame(updateSpotlight);
      ticking = true;
    }
  });

  // Reset to center when mouse leaves card
  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
  });

  // Touch support for mobile devices
  card.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;

      if (!ticking) {
        requestAnimationFrame(updateSpotlight);
        ticking = true;
      }
    }
  }, { passive: true });
});
