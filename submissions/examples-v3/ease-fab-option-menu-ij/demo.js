const fabMain = document.getElementById('fabMain');
const fabContainer = document.getElementById('fabContainer');
const status = document.getElementById('status');

fabMain.addEventListener('click', (e) => {
  e.stopPropagation();
  fabContainer.classList.toggle('open');
  fabMain.classList.toggle('active');
});

document.querySelectorAll('.fab-option').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const value = btn.dataset.value;
    status.textContent = `Selected: ${value}`;
    status.style.background = '#6366f1';
    status.style.color = '#fff';
    fabContainer.classList.remove('open');
    fabMain.classList.remove('active');
  });
});

document.addEventListener('click', () => {
  fabContainer.classList.remove('open');
  fabMain.classList.remove('active');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    fabContainer.classList.remove('open');
    fabMain.classList.remove('active');
  }
});
