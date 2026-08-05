/**
 * EaseMotion CSS — Scroll Animation Observer
 * Lightweight (<1KB) IntersectionObserver to trigger CSS animations
 * when elements scroll into the viewport.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    // If reduced motion is preferred, immediately show all elements without animations
    document.querySelectorAll('.ease-scroll-trigger').forEach(el => {
      el.classList.add('ease-in-view');
    });
    return;
  }

  // Configuration for the observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of the element is visible
  };

  // Create the observer
  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the active class to trigger the CSS animation
        entry.target.classList.add('ease-in-view');
        
        // Stop observing the element once it has animated
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Attach observer to all trigger elements
  const triggerElements = document.querySelectorAll('.ease-scroll-trigger');
  triggerElements.forEach(el => {
    scrollObserver.observe(el);
  });
});
