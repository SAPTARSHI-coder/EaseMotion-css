const replayBtn = document.getElementById('replayBtn');
const items = document.querySelectorAll('.stagger-item');

replayBtn.addEventListener('click', () => {
  items.forEach((item) => {
    item.style.animation = 'none';
    void item.offsetHeight;
    item.style.animation = '';
  });
});
