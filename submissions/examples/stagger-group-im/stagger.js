/**
 * EaseMotion CSS — Stagger Group
 * Submission #4372
 *
 * Progressively enhances .stagger-group elements:
 *
 * 1. Modern browsers (Chrome 115+): uses CSS scroll-driven animations
 *    via animation-timeline: view() — zero JS for animation, GPU-native.
 *
 * 2. All other browsers: IntersectionObserver fires when the group
 *    enters the viewport, then applies staggered delays to children.
 *
 * Usage:
 *   <div class="stagger-group" data-stagger="100" data-animation="slide-up">
 *     <div>Child 1</div>
 *     <div>Child 2</div>
 *   </div>
 *
 * data-stagger: delay between children in ms (default: 100)
 * data-animation: slide-up | slide-left | fade | zoom (default: slide-up)
 */

(function () {
  'use strict';

  // Check if CSS scroll-driven animations are supported
  const supportsScrollDriven = CSS.supports('animation-timeline', 'view()');

  // Animation configs — hidden state and visible state
  const animations = {
    'slide-up': {
      hidden:  { opacity: '0', transform: 'translateY(28px)' },
      visible: { opacity: '1', transform: 'translateY(0)' },
    },
    'slide-left': {
      hidden:  { opacity: '0', transform: 'translateX(-28px)' },
      visible: { opacity: '1', transform: 'translateX(0)' },
    },
    'fade': {
      hidden:  { opacity: '0', transform: 'none' },
      visible: { opacity: '1', transform: 'none' },
    },
    'zoom': {
      hidden:  { opacity: '0', transform: 'scale(0.88)' },
      visible: { opacity: '1', transform: 'scale(1)' },
    },
  };

  function initStaggerGroups() {
    const groups = document.querySelectorAll('.stagger-group');
    if (!groups.length) return;

    groups.forEach(group => {
      const staggerMs  = parseInt(group.dataset.stagger, 10) || 100;
      const animName   = group.dataset.animation || 'slide-up';
      const anim       = animations[animName] || animations['slide-up'];
      const children   = Array.from(group.children);

      // If scroll-driven supported, CSS handles it — just add class and data attributes
      // The CSS in style.css uses @supports to apply scroll-driven keyframes
      if (supportsScrollDriven) {
        children.forEach((child, i) => {
          child.classList.add('sg-child', `sg-anim-${animName}`);
          child.style.setProperty('--sg-delay', `${i * staggerMs}ms`);
        });
        group.classList.add('sg-native');
        return;
      }

      // Fallback: IntersectionObserver
      children.forEach(child => {
        // Set hidden state
        Object.assign(child.style, anim.hidden);
        child.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
        child.style.willChange = 'opacity, transform';
      });

      let triggered = false;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !triggered) {
            triggered = true;
            observer.disconnect();

            children.forEach((child, i) => {
              setTimeout(() => {
                Object.assign(child.style, anim.visible);
                child.style.willChange = 'auto';
              }, i * staggerMs);
            });
          }
        });
      }, {
        threshold: 0.1,       // Fire when 10% of group is visible
        rootMargin: '0px 0px -40px 0px', // Slight offset from bottom
      });

      observer.observe(group);
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStaggerGroups);
  } else {
    initStaggerGroups();
  }

  // Expose for manual init (e.g. after dynamic content)
  window.EaseStagger = { init: initStaggerGroups };

})();
