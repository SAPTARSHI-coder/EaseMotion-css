document.querySelectorAll('.ease-blur-up').forEach(img => {
  img.onload = () => img.classList.add('loaded');
  if (img.complete) img.classList.add('loaded');
});
