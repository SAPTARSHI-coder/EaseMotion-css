const text = document.querySelector('.gradient-text');

document.addEventListener('scroll', () => {
  const rect = text.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const scrollPercent = 1 - (rect.top / windowHeight);
  const pos = Math.min(Math.max(scrollPercent * 100, 0), 100);
  text.style.backgroundPosition = `${pos}% 50%`;
});
