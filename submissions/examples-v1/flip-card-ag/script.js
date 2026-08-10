document.addEventListener('DOMContentLoaded', () => {
  const flipCard = document.getElementById('flipCard');

  if (!flipCard) return;

  // Toggle flipped state on click/tap (for mobile and keyboard activation)
  flipCard.addEventListener('click', (e) => {
    // Prevent double-triggering if the user clicked child elements
    e.preventDefault();
    
    const isFlipped = flipCard.classList.toggle('flipped');
    
    // Update ARIA attributes for screen readers
    flipCard.setAttribute('aria-expanded', isFlipped);
  });
});
