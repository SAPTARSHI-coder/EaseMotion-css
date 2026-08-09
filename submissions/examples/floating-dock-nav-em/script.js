/* =============================================================
   Floating Dock Navigation Bar (macOS Style)
   EaseMotion — Vanilla JS Logic
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const dock = document.getElementById('dock');
  const items = dock.querySelectorAll('.dock__item');
  
  // Flag dock to use dynamic JS scaling instead of CSS hover fallback
  dock.classList.add('is-dynamic');

  // Configuration for scaling effect
  const MAX_SCALE = 1.4; // Max scale when directly hovered
  const RANGE = 150;     // Distance in px where scaling starts affecting adjacent items
  const BASE_SCALE = 1;  // Normal scale

  /**
   * Calculates the scale for an item based on mouse distance
   */
  function handleMouseMove(e) {
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      
      // Calculate center of the dock item
      const itemCenterX = rect.left + rect.width / 2;
      const itemCenterY = rect.top + rect.height / 2;

      // Distance from mouse to center of the item
      const distanceX = Math.abs(e.clientX - itemCenterX);
      const distanceY = Math.abs(e.clientY - itemCenterY);
      
      // Calculate total distance using Pythagorean theorem
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      // If within range, scale it up
      if (distance < RANGE) {
        // Linear scale based on distance: 
        // 0 distance = MAX_SCALE, RANGE distance = BASE_SCALE
        const scale = BASE_SCALE + (MAX_SCALE - BASE_SCALE) * (1 - distance / RANGE);
        item.style.setProperty('--scale', scale.toFixed(2));
      } else {
        item.style.setProperty('--scale', BASE_SCALE);
      }
    });
  }

  /**
   * Reset scales when mouse leaves the dock area
   */
  function handleMouseLeave() {
    items.forEach(item => {
      item.style.setProperty('--scale', BASE_SCALE);
      // Optional: Add a slight transition back to normal
      item.querySelector('.dock__btn').style.transition = 'transform 0.3s ease-out';
    });
  }

  /**
   * Restore fast transition when mouse re-enters
   */
  function handleMouseEnter() {
    items.forEach(item => {
      item.querySelector('.dock__btn').style.transition = 'transform 0.1s linear';
    });
  }

  // Attach event listeners
  dock.addEventListener('mousemove', handleMouseMove);
  dock.addEventListener('mouseleave', handleMouseLeave);
  dock.addEventListener('mouseenter', handleMouseEnter);

  // Handle click toggling of active state
  items.forEach(item => {
    const btn = item.querySelector('.dock__btn');
    if(btn) {
      btn.addEventListener('click', () => {
        // In a real app, this would route to a page.
        // Here we just toggle the active indicator dot.
        item.classList.toggle('is-active');
      });
    }
  });
});
