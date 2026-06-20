document.getElementById('castBtn').addEventListener('click', () => {
  const icon = document.getElementById('burstIcon');
  icon.querySelectorAll('.burst-flash, .particle').forEach(el => {
    el.classList.remove('trigger');
    void el.offsetWidth;
    el.classList.add('trigger');
  });
});
