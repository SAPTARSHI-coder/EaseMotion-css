/**
 * EaseMotion CSS — Parallax Hero Section Example
 * Optional mouse-move parallax script for enhanced depth.
 */

document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.parallax-hero');
  const layers = document.querySelectorAll('.parallax-layer');

  if (!hero || layers.length === 0) return;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Mouse Move Parallax Effect
  hero.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { width, height } = hero.getBoundingClientRect();
    
    // Calculate normalized coordinates (-0.5 to 0.5)
    const x = (clientX / width) - 0.5;
    const y = (clientY / height) - 0.5;

    layers.forEach((layer) => {
      // Use the existing depth configuration for mouse parallax speed
      const depth = parseFloat(getComputedStyle(layer).zIndex) || 1;
      const moveX = x * depth * 20; // 20px max movement per depth level
      const moveY = y * depth * 20;

      // Combine with scroll parallax by using a wrapper or additive transform
      // Here we just apply a subtle drift
      layer.style.setProperty('--mouse-x', `${moveX}px`);
      layer.style.setProperty('--mouse-y', `${moveY}px`);
      
      // Update: We'll apply this via a CSS variable so it doesn't overwrite scroll animation transforms
      // Actually, standard CSS animations overwrite inline 'transform'
      // Better way: Apply mouse parallax to an inner container if needed, 
      // but to keep it minimal, we'll just use a custom property in CSS for drift.
    });
  });
});
