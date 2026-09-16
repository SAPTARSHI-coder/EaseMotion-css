document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.ease-neon-ring-container');
  const ring = document.querySelector('.ease-neon-ring');

  if (!container || !ring) {
    console.warn('Neon Pulse Ring: Required elements not found.');
    return;
  }

  // Click → Ripple Burst
  container.addEventListener('click', (e) => {
    ring.classList.remove('ripple');
    void ring.offsetWidth;
    ring.classList.add('ripple');
    
    container.style.transition = 'filter 0.1s';
    container.style.filter = 'brightness(1.3)';
    setTimeout(() => {
      container.style.filter = 'brightness(1)';
    }, 150);
  });

  // Cursor Tracking
  let trackingActive = false;

  container.addEventListener('mouseenter', () => {
    trackingActive = true;
    container.dataset.tracking = 'active';
  });

  container.addEventListener('mouseleave', () => {
    trackingActive = false;
    container.dataset.tracking = 'inactive';
    container.style.setProperty('--mouse-x', '50%');
    container.style.setProperty('--mouse-y', '50%');
  });

  container.addEventListener('mousemove', (e) => {
    if (!trackingActive) return;
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    container.style.setProperty('--mouse-x', Math.min(100, Math.max(0, x)) + '%');
    container.style.setProperty('--mouse-y', Math.min(100, Math.max(0, y)) + '%');
  });

  // Keyboard Accessibility
  container.setAttribute('role', 'button');
  container.setAttribute('tabindex', '0');
  container.setAttribute('aria-label', 'Neon Pulse Ring - Interactive Glow Effect');

  container.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      container.click();
    }
  });

  // Touch Support
  let touchTimeout;
  container.addEventListener('touchstart', (e) => {
    clearTimeout(touchTimeout);
    container.click();
    touchTimeout = setTimeout(() => {
      ring.classList.remove('ripple');
    }, 800);
  }, { passive: true });

  console.log('✨ Neon Pulse Ring initialized!');
});