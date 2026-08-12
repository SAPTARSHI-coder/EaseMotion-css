const container = document.querySelector('.cq-container');
const buttons = document.querySelectorAll('.cq-btn');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const size = parseInt(btn.dataset.size);
    container.style.width = size + 'px';
  });
});
