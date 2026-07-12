const paragraphs = document.querySelectorAll('.thm-paragraph');
const colorBtns = document.querySelectorAll('.thm-color-btn');
let currentColor = '#fde047';

colorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    colorBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentColor = btn.dataset.color;
    document.documentElement.style.setProperty('--thm-highlight-color', currentColor);
  });
});

paragraphs.forEach(p => {
  p.addEventListener('click', () => {
    const isHighlighted = p.dataset.highlighted === 'true';
    if (isHighlighted) {
      p.classList.remove('highlighted');
      p.dataset.highlighted = 'false';
    } else {
      p.classList.add('highlighted');
      p.dataset.highlighted = 'true';
    }
  });
});
