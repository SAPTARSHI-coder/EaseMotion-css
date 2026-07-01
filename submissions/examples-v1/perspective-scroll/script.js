const cards = document.querySelectorAll('.perspective-card');

document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  cards.forEach((card) => {
    const speed = parseFloat(card.dataset.speed);
    const yOffset = scrollY * speed * 0.3;
    const rotateX = scrollY * speed * 0.05;
    const rotateY = scrollY * speed * 0.03;
    card.style.transform = `translateY(${yOffset}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
});
