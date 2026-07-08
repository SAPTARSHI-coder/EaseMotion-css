document.addEventListener('DOMContentLoaded', () => {
  const magneticButtons = document.querySelectorAll('.btn-magnetic');

  magneticButtons.forEach(btn => {
    // Store the bounding rect only on mouseenter.
    // Doing this on mousemove causes jitter because the element itself is moving!
    let rect;
    
    btn.addEventListener('mouseenter', () => {
      rect = btn.getBoundingClientRect();
    });

    btn.addEventListener('mousemove', (e) => {
      if (!rect) rect = btn.getBoundingClientRect();
      
      // Calculate distance from center
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Multiply by a fraction to dampen the movement
      btn.style.setProperty('--mx', `${x * 0.4}px`);
      btn.style.setProperty('--my', `${y * 0.4}px`);
    });

    btn.addEventListener('mouseleave', () => {
      // Reset position
      btn.style.setProperty('--mx', '0px');
      btn.style.setProperty('--my', '0px');
      rect = null; // Clear rect so it recalculates fresh on next enter
    });
  });
});
