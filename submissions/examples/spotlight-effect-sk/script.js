/**
 * Spotlight Hover Effect
 * Tracks mouse position and updates CSS variables for radial gradient
 */
(function() {
  'use strict';

  // Find all cards with spotlight effect
  const cards = document.querySelectorAll('.spotlight-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update CSS variables on the card element
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // Touch device fallback: center spotlight or disable
  window.addEventListener('touchstart', function onFirstTouch() {
    document.body.classList.add('is-touch');
    window.removeEventListener('touchstart', onFirstTouch, false);
  }, false);

})();
