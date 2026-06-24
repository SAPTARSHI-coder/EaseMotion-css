document.getElementById('chargeBtn').addEventListener('click', () => {
  const card = document.getElementById('chargeCard');
  const fill = document.getElementById('chargeFill');
  const pct = document.getElementById('chargePct');
  const btn = document.getElementById('chargeBtn');

  card.classList.add('charging');
  fill.classList.add('charging');
  btn.textContent = '⚡ Charging...';

  let progress = 0;
  const interval = setInterval(() => {
    progress += 2;
    pct.textContent = Math.min(progress, 100) + '%';
    if (progress >= 100) {
      clearInterval(interval);
      pct.textContent = '100%';
      card.classList.remove('charging');
      card.classList.add('full');
      fill.classList.remove('charging');
      fill.classList.add('full');
      btn.classList.add('full');
      btn.textContent = '⚡ Full Charge!';
    }
  }, 40);
});
