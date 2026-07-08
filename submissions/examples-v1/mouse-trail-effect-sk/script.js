document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('trail-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  
  let particles = [];
  const maxParticles = 60;
  
  // Try to grab color from CSS variable, default to #00d2ff
  const rootStyles = getComputedStyle(document.documentElement);
  const particleColor = rootStyles.getPropertyValue('--trail-color').trim() || '#00d2ff';
  
  let mouse = {
    x: null,
    y: null
  };

  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  // If reduced motion is preferred, don't even start the animation loop
  if (prefersReducedMotion.matches) {
    return;
  }

  // Handle Resize
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Update tracking
  function updateMousePosition(x, y) {
    mouse.x = x;
    mouse.y = y;
    
    // Add particles on move
    for(let i = 0; i < 2; i++) {
        particles.push(new Particle(x, y));
    }
    
    // Keep array size manageable
    if (particles.length > maxParticles) {
      particles.splice(0, particles.length - maxParticles);
    }
  }

  window.addEventListener('mousemove', (e) => {
    updateMousePosition(e.clientX, e.clientY);
  });

  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      updateMousePosition(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Particle Class
  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      // Slight random velocity for spread
      this.vx = (Math.random() - 0.5) * 1.5;
      this.vy = (Math.random() - 0.5) * 1.5;
      this.size = Math.random() * 4 + 2;
      this.life = 1.0;
      this.decay = Math.random() * 0.05 + 0.02;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.life -= this.decay;
      if (this.size > 0.1) this.size -= 0.1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.shadowBlur = 15;
      ctx.shadowColor = particleColor;
      ctx.fillStyle = particleColor;
      ctx.globalAlpha = Math.max(0, this.life); // Prevent negative alpha
      ctx.fill();
    }
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      
      if (particles[i].life <= 0) {
        particles.splice(i, 1);
        i--;
      }
    }
    
    requestAnimationFrame(animate);
  }
  
  animate();
});
