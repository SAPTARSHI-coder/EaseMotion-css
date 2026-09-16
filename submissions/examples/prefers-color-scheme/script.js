const display = document.getElementById('schemeDisplay');
const mq = window.matchMedia('(prefers-color-scheme: dark)');
display.textContent = mq.matches ? 'Dark' : 'Light';
mq.addEventListener('change', (e) => {
  display.textContent = e.matches ? 'Dark' : 'Light';
});
