/**
 * PARTICLE BURST BUTTON - Interactive Script
 * Creates colorful particle explosions on button click
 */

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('particleBtn');
  
  if (!button) {
    console.warn('Particle Burst Button: Button element not found.');
    return;
  }

  // ============================================
  // CONFIGURATION
  // ============================================
  
  const CONFIG = {
    particleCount: 35,           // Number of particles per burst
    colors: [
      '#f472b6', '#ec4899', '#db2777', // Pinks
      '#8b5cf6', '#7c3aed', '#6d28d9', // Purples
      '#06b6d4', '#0891b2', '#0e7490', // Cyans
      '#f59e0b', '#d97706', '#b45309', // Ambers
      '#34d399', '#10b981', '#059669', // Greens
      '#f87171', '#ef4444', '#dc2626', // Reds
      '#fbbf24', '#f59e0b', '#d97706', // Yellows
    ],
    particleSize: { min: 6, max: 18 },
    duration: 1200,              // ms
    spread: 300,                 // px in each direction
    shapes: ['circle', 'square', 'triangle', 'star'],
  };

  // ============================================
  // CREATE PARTICLE CONTAINER
  // ============================================
  
  let container = document.querySelector('.ease-particle-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'ease-particle-container';
    document.body.appendChild(container);
  }

  // ============================================
  // UTILITY FUNCTIONS
  // ============================================
  
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randomInt(min, max) {
    return Math.floor(random(min, max + 1));
  }

  function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // ============================================
  // CREATE PARTICLE BURST
  // ============================================
  
  function createParticleBurst(x, y) {
    const count = CONFIG.particleCount;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      
      // Random properties
      const size = random(CONFIG.particleSize.min, CONFIG.particleSize.max);
      const color = randomFrom(CONFIG.colors);
      const shape = randomFrom(CONFIG.shapes);
      const angle = random(0, Math.PI * 2);
      const distance = random(50, CONFIG.spread);
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance - random(0, 100); // Slight upward bias
      
      // Set particle styles
      particle.className = `ease-particle ${shape !== 'circle' ? shape : ''}`;
      particle.style.cssText = `
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        --ease-particle-x: ${dx}px;
        --ease-particle-y: ${dy}px;
        --ease-particle-duration: ${CONFIG.duration}ms;
        animation-delay: ${random(0, 0.1)}s;
        box-shadow: 0 0 ${size/2}px ${color}40;
      `;
      
      fragment.appendChild(particle);
    }

    container.appendChild(fragment);

    // Cleanup after animation
    setTimeout(() => {
      const particles = container.querySelectorAll('.ease-particle');
      particles.forEach(p => p.remove());
    }, CONFIG.duration + 200);
  }

  // ============================================
  // HANDLE BUTTON CLICK
  // ============================================
  
  button.addEventListener('click', (e) => {
    // Get button position
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Create burst at button center
    createParticleBurst(centerX, centerY);
    
    // Button feedback
    button.style.transform = 'scale(0.92)';
    setTimeout(() => {
      button.style.transform = '';
    }, 150);
  });

  // ============================================
  // KEYBOARD ACCESSIBILITY
  // ============================================
  
  button.setAttribute('aria-label', 'Particle Burst Button - Click for explosion effect');

  button.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      button.click();
    }
  });

  // ============================================
  // TOUCH SUPPORT
  // ============================================
  
  button.addEventListener('touchstart', (e) => {
    // Trigger on touch
    const touch = e.touches[0];
    if (touch) {
      createParticleBurst(touch.clientX, touch.clientY);
    }
  }, { passive: true });

  // ============================================
  // DEBUG
  // ============================================
  
  console.log('💥 Particle Burst Button initialized!');
  console.log(`🎨 ${CONFIG.colors.length} colors available`);
  console.log(`✨ ${CONFIG.particleCount} particles per burst`);
});