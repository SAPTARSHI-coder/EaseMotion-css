document.getElementById('expBtn').addEventListener('click', () => {
  const icon = document.getElementById('expIcon');
  icon.querySelectorAll('.shockwave-ring, .shockwave-core, .debris').forEach(el => {
    el.classList.remove('trigger');
    void el.offsetWidth;
    el.classList.add('trigger');
  });
});
