const items = document.querySelectorAll('.it-item');
const line = document.querySelector('.it-line');

const observer = new IntersectionObserver((entries) => {
  let anyVisible = false;
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      anyVisible = true;
    }
  });
  if (anyVisible) line.classList.add('drawn');
}, { threshold: 0.15 });

items.forEach(item => observer.observe(item));

items.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('expanded');
  });
});
