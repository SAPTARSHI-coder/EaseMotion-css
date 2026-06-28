document.querySelectorAll('.size-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.closest('.size-group');
    group.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const result = btn.closest('.selector-card').querySelector('.size-result');
    result.textContent = 'Selected: ' + btn.dataset.size;
  });
});

document.querySelectorAll('.color-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.closest('.size-group');
    group.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const result = btn.closest('.selector-card').querySelector('.size-result');
    result.textContent = btn.dataset.color;
  });
});
