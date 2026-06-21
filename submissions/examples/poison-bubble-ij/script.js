document.getElementById('poisonBtn').addEventListener('click', () => {
  const card = document.getElementById('poisonCard');
  const btn = document.getElementById('poisonBtn');
  card.classList.add('poisoned');
  btn.classList.add('poisoned');
  btn.textContent = '☠ Poisoned';
});
