document.getElementById('shadowBtn').addEventListener('click', () => {
  const overlay = document.querySelector('.shadow-overlay');
  const btn = document.getElementById('shadowBtn');
  overlay.classList.add('cursed');
  btn.classList.add('cursed');
  btn.textContent = '🌑 Cursed';
});
