document.getElementById('holyBtn').addEventListener('click', () => {
  const card = document.getElementById('holyCard');
  const rays = card.querySelector('.holy-rays');
  const btn = document.getElementById('holyBtn');
  rays.classList.add('radiant');
  btn.classList.add('radiant');
  btn.textContent = '✦ Consecrated';
});
