document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('newsletterEmail');
  const submitBtn = document.getElementById('newsletterBtn');
  const successBox = document.getElementById('newsletterSuccess');
  const confettiBox = document.getElementById('confettiBox');

  // ─── Verification Validation Regex ───
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = emailInput.value.trim();

    // ─── Input Quality Control Fallback ───
    if (!EMAIL_REGEX.test(emailValue)) {
      emailInput.classList.remove('error-shake');
      void emailInput.offsetWidth; // Force hardware redraw reflow ticker
      emailInput.classList.add('error-shake');
      return;
    }

    // ─── Enter Loading Simulation State ───
    submitBtn.classList.add('ease-newsletter-ak__btn--loading');
    emailInput.disabled = true;

    setTimeout(() => {
      // ─── Transition into Success UI View ───
      submitBtn.classList.remove('ease-newsletter-ak__btn--loading');
      form.classList.add('ease-newsletter-ak__form--collapsed');
      successBox.classList.remove('ease-newsletter-ak__success--hidden');
      
      // Execute UI confetti explosion
      triggerConfettiBurst();
    }, 1200);
  });

  // ─── Procedural Micro-Particle Explosion Logic ───
  function triggerConfettiBurst() {
    const COLORS = ['#6366f1', '#3b82f6', '#a855f7', '#10b981', '#f59e0b'];
    const PARTICLE_COUNT = 45;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const particle = document.createElement('div');
      particle.classList.add('ease-newsletter-ak__confetti');
      
      // Randomize color palette distribution
      particle.style.backgroundColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      
      // Center generation metrics inside the wrapper boundary canvas
      particle.style.left = '50%';
      particle.style.top = '50%';
      
      confettiBox.appendChild(particle);

      // Map random vector paths using hardware-accelerated transforms
      const angle = Math.random() * Math.PI * 2;
      const velocity = 80 + Math.random() * 140; // Pixel push radius bounds
      const targetX = Math.cos(angle) * velocity;
      const targetY = Math.sin(angle) * velocity - 40; // Add upward gravity bias
      const rotation = Math.random() * 720; // Full tumble cycles

      // Construct native composite performance keyframes pipelines
      const animation = particle.animate([
        {
          transform: 'translate(-50%, -50%) scale(0) rotate(0deg)',
          opacity: 1
        },
        {
          transform: `translate(calc(-50% + ${targetX}px), calc(-50% + ${targetY}px)) scale(${0.5 + Math.random()}) rotate(${rotation}deg)`,
          opacity: 1,
          offset: 0.4
        },
        {
          transform: `translate(calc(-50% + ${targetX}px), calc(-50% + ${targetY} * 1.3px + 60px)) scale(0) rotate(${rotation * 1.5}deg)`,
          opacity: 0
        }
      ], {
        duration: 1200 + Math.random() * 800,
        easing: 'cubic-bezier(0.1, 0.8, 0.25, 1)',
        fill: 'forwards'
      });

      // Clear memory references on animation end
      animation.onfinish = () => particle.remove();
    }
  }
});