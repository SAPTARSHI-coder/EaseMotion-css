/**
 * NEON PULSE RING - Interactive Script
 * Adds click ripple + cursor tracking functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.ease-neon-ring-container');
  const ring = document.querySelector('.ease-neon-ring');

  // Guard: Exit if elements don't exist
  if (!container || !ring) {
    console.warn('Neon Pulse Ring: Required elements not found.');
    return;
  }

  // ============================================
  // 1. CLICK → RIPPLE BURST
  // ============================================

  container.addEventListener('click', (e) => {
    // Remove any existing ripple class
    ring.classList.remove('ripple');
    
    // Force reflow to restart animation
    void ring.offsetWidth;
    
    // Add ripple class to trigger animation
    ring.classList.add('ripple');
    
    // Optional: Vibrant flash feedback on click
    container.style.transition = 'filter 0.1s';
    container.style.filter = 'brightness(1.3)';
    setTimeout(() => {
      container.style.filter = 'brightness(1)';
    }, 150);
  });

  // ============================================
  // 2. CURSOR TRACKING (Mouse movement)
  // ============================================

  let trackingActive = false;

  container.addEventListener('mouseenter', () => {
    trackingActive = true;
    container.dataset.tracking = 'active';
  });

  container.addEventListener('mouseleave', () => {
    trackingActive = false;
    container.dataset.tracking = 'inactive';
    // Reset position with smooth transition
    container.style.setProperty('--mouse-x', '50%');
    container.style.setProperty('--mouse-y', '50%');
  });

  container.addEventListener('mousemove', (e) => {
    if (!trackingActive) return;
    
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Clamp values between 0 and 100
    const clampedX = Math.min(100, Math.max(0, x));
    const clampedY = Math.min(100, Math.max(0, y));
    
    container.style.setProperty('--mouse-x', clampedX + '%');
    container.style.setProperty('--mouse-y', clampedY + '%');
    
    // Optional: Update glow intensity based on mouse proximity
    const centerX = 50;
    const centerY = 50;
    const distance = Math.sqrt(
      Math.pow((clampedX - centerX), 2) + 
      Math.pow((clampedY - centerY), 2)
    );
    const intensity = Math.min(1, (100 - distance) / 100);
    ring.style.setProperty('--glow-intensity', intensity);
  });

  // ============================================
  // 3. KEYBOARD ACCESSIBILITY
  // ============================================

  container.setAttribute('role', 'button');
  container.setAttribute('tabindex', '0');
  container.setAttribute('aria-label', 'Neon Pulse Ring - Interactive Glow Effect');

  container.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      container.click();
    }
  });

  // ============================================
  // 4. TOUCH SUPPORT (Mobile)
  // ============================================

  let touchTimeout;

  container.addEventListener('touchstart', (e) => {
    // Clear previous timeout
    clearTimeout(touchTimeout);
    
    // Trigger ripple on touch
    container.click();
    
    // Reset after animation
    touchTimeout = setTimeout(() => {
      ring.classList.remove('ripple');
    }, 800);
  }, { passive: true });

  // ============================================
  // 5. DEBUG / LOG (Optional)
  // ============================================

  console.log('✨ Neon Pulse Ring initialized!');
  console.log('💡 Hover · Click · Experience the glow');
});