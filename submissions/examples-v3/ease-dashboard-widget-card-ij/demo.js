document.getElementById('replayBtn').addEventListener('click', () => {
  const cards = document.querySelectorAll('.dash-card');
  cards.forEach((card, i) => {
    card.style.animation = 'none';
    card.offsetHeight;
    card.style.animation = `cardEnter var(--dash-duration) ease-out forwards`;
    card.style.animationDelay = `calc(var(--dash-stagger) * ${i})`;
  });
});
