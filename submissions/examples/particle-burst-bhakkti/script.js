// Particle Burst Button: plain JavaScript with no dependencies.
const button = document.querySelector('.ease-particle-btn');

const colors = ['#ff5c8a', '#ffd23f', '#4ee1c1', '#72a8ff', '#c98cff', '#ff9f68'];

if (button) {
  button.addEventListener('click', () => {
    // Restart the button animation, even when it is clicked quickly.
    button.classList.remove('ease-particle-burst');
    void button.offsetWidth;
    button.classList.add('ease-particle-burst');

    const buttonBox = button.getBoundingClientRect();
    const startX = buttonBox.left + buttonBox.width / 2;
    const startY = buttonBox.top + buttonBox.height / 2;
    const particleCount = Math.floor(Math.random() * 11) + 20; // 20 to 30

    for (let index = 0; index < particleCount; index += 1) {
      const particle = document.createElement('span');
      const angle = Math.random() * Math.PI * 2;
      const distance = 70 + Math.random() * 110;
      const size = 6 + Math.random() * 8;

      particle.className = 'ease-particle';
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      particle.style.setProperty('--particle-size', `${size}px`);
      particle.style.setProperty('--particle-color', colors[Math.floor(Math.random() * colors.length)]);
      particle.style.setProperty('--move-x', `${Math.cos(angle) * distance}px`);
      particle.style.setProperty('--move-y', `${Math.sin(angle) * distance}px`);

      document.body.appendChild(particle);
      // Clean up after the fade-out so repeated clicks do not leave extra elements.
      particle.addEventListener('animationend', () => particle.remove(), { once: true });
    }
  });

  button.addEventListener('animationend', () => button.classList.remove('ease-particle-burst'));
}
