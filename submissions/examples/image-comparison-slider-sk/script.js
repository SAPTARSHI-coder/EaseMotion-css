document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.comparison-slider');
  const beforeImage = document.querySelector('.comparison-before');
  const handle = document.querySelector('.comparison-handle');
  
  if (!slider) return;

  let isDragging = false;
  
  // Set initial state
  updateSliderPosition(50);
  
  // Mouse events
  slider.addEventListener('mousedown', startDragging);
  window.addEventListener('mousemove', drag);
  window.addEventListener('mouseup', stopDragging);
  
  // Touch events
  slider.addEventListener('touchstart', startDragging, { passive: true });
  window.addEventListener('touchmove', drag, { passive: false });
  window.addEventListener('touchend', stopDragging);
  
  // Keyboard accessibility
  slider.addEventListener('keydown', handleKeyDown);
  
  // Clean up keyboard nav classes
  slider.addEventListener('blur', () => {
    beforeImage.classList.remove('keyboard-nav');
    handle.classList.remove('keyboard-nav');
  });

  function startDragging(e) {
    isDragging = true;
    slider.classList.add('is-dragging');
    
    // Remove transition classes during drag for maximum responsiveness
    beforeImage.classList.remove('keyboard-nav');
    handle.classList.remove('keyboard-nav');
    
    drag(e);
  }
  
  function stopDragging() {
    isDragging = false;
    slider.classList.remove('is-dragging');
  }
  
  function drag(e) {
    if (!isDragging) return;
    
    // Prevent default scroll behavior when swiping on the slider
    if (e.type === 'touchmove' && e.cancelable) {
      e.preventDefault();
    }
    
    let clientX = e.clientX;
    
    // Handle touch events
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
    }
    
    if (clientX === undefined) return;
    
    const sliderRect = slider.getBoundingClientRect();
    
    // Calculate relative x position inside the slider
    let x = clientX - sliderRect.left;
    
    // Constrain within boundaries
    x = Math.max(0, Math.min(x, sliderRect.width));
    
    // Convert to percentage
    const percent = (x / sliderRect.width) * 100;
    updateSliderPosition(percent);
  }
  
  function handleKeyDown(e) {
    // Add transition classes for smooth movement via keyboard
    beforeImage.classList.add('keyboard-nav');
    handle.classList.add('keyboard-nav');
    
    const currentValue = parseFloat(slider.getAttribute('aria-valuenow')) || 50;
    let newValue = currentValue;
    const step = 5; // 5% per keystroke
    
    switch(e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        newValue = Math.max(0, currentValue - step);
        e.preventDefault();
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        newValue = Math.min(100, currentValue + step);
        e.preventDefault();
        break;
      case 'Home':
        newValue = 0;
        e.preventDefault();
        break;
      case 'End':
        newValue = 100;
        e.preventDefault();
        break;
      default:
        // Do not prevent default behavior for tabs, etc.
        return;
    }
    
    updateSliderPosition(newValue);
  }
  
  function updateSliderPosition(percent) {
    // Round to 2 decimal places for cleaner CSS
    const roundedPercent = percent.toFixed(2);
    
    // Update the custom CSS property which controls layout
    slider.style.setProperty('--slider-position', `${roundedPercent}%`);
    
    // Update accessibility attributes
    slider.setAttribute('aria-valuenow', Math.round(percent));
  }
});
