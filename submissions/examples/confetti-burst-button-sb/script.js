document.querySelector('.ease-confetti-btn').addEventListener('click', function(e) {
  const colors = ['#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#43e97b', '#fa709a', '#fee140'];
  const button = e.target.getBoundingClientRect();
  const centerX = button.left + button.width / 2;
  const centerY = button.top + button.height / 2;
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'confetti-particle';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.left = centerX + 'px';
    particle.style.top = centerY + 'px';
    particle.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px)`;
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
  }
});
