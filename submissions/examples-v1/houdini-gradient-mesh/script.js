// Houdini Gradient Mesh interactive logic
document.addEventListener('DOMContentLoaded', () => {
  const meshContainer = document.querySelector('.mesh-container');
  
  if (CSS.registerProperty) {
    console.log('CSS Houdini Properties are supported in this browser.');
  } else {
    console.warn('CSS Houdini Properties are NOT supported. Fallback animations will be used if provided.');
  }

  // Add subtle interactive movement based on mouse position
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    requestAnimationFrame(() => {
      const overlay = document.querySelector('.mesh-overlay');
      if (overlay) {
         overlay.style.transform = `translate(${x}px, ${y}px)`;
      }
    });
  });
});
