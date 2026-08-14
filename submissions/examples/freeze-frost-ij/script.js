document.getElementById('frostBtn').addEventListener('click', () => {
  const card = document.getElementById('frostCard');
  const overlay = card.querySelector('.frost-overlay');
  const btn = document.getElementById('frostBtn');
  overlay.classList.add('frozen');
  btn.classList.add('frozen');
  btn.textContent = '❄ Frozen';
});
