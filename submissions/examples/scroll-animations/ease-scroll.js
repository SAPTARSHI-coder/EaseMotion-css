/**
 * EaseMotion CSS - Scroll Observer Utility
 * A lightweight IntersectionObserver script to trigger animations when elements enter the viewport.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the class that triggers the CSS animation
        entry.target.classList.add('ease-in-view');
        
        // Stop observing this element so it only animates once
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of the element is visible
  });

  // Find all elements with the trigger class and observe them
  const animatedElements = document.querySelectorAll('.ease-scroll-trigger');
  animatedElements.forEach(el => {
    observer.observe(el);
  });
});
