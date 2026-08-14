document.getElementById('shakeBtn').addEventListener('click', () => {
  const card = document.getElementById('shakeCard');
  card.classList.remove('shaking');
  void card.offsetWidth;
  card.classList.add('shaking');
});
