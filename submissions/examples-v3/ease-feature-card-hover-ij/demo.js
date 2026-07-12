document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    console.log(`Card clicked: ${card.querySelector('.card-title').textContent}`);
  });
});
