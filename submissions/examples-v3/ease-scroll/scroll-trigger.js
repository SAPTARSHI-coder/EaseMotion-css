(function () {
  'use strict';

  var baseClass = 'ease-scroll';
  var activeClass = 'ease-scroll-active';
  var pendingClass = 'ease-scroll-pending';

  // Helper to determine if an element is in the viewport (fallback for older browsers)
  function isInViewport(el, threshold) {
    var rect = el.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var vw = window.innerWidth || document.documentElement.clientWidth;
    
    // Calculate how much of the element is visible
    var visibleHeight = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
    var visibleWidth = Math.min(rect.right, vw) - Math.max(rect.left, 0);
    
    if (visibleHeight <= 0 || visibleWidth <= 0) {
      return false;
    }
    
    var elementArea = el.offsetHeight * el.offsetWidth;
    var visibleArea = visibleHeight * visibleWidth;
    var ratio = elementArea > 0 ? visibleArea / elementArea : 0;
    
    // If element is taller than viewport, check if it occupies a significant portion
    if (el.offsetHeight > vh) {
      return rect.top < vh * (1 - threshold) && rect.bottom > vh * threshold;
    }
    
    return ratio >= threshold;
  }

  // Initialize element custom variables from data-ease-scroll attributes
  function initElementStyles(el) {
    var delay = el.getAttribute('data-ease-scroll-delay');
    if (delay) {
      el.style.setProperty('--ease-scroll-delay', delay.match(/^[0-9.]+$/) ? delay + 'ms' : delay);
    }
    var duration = el.getAttribute('data-ease-scroll-duration');
    if (duration) {
      el.style.setProperty('--ease-scroll-duration', duration.match(/^[0-9.]+$/) ? duration + 'ms' : duration);
    }
    var easing = el.getAttribute('data-ease-scroll-easing');
    if (easing) {
      el.style.setProperty('--ease-scroll-easing', easing);
    }
  }

  // Handle prefers-reduced-motion preference change dynamically
  var mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  function handleReducedMotion(e) {
    if (e.matches) {
      var els = document.querySelectorAll('.' + baseClass);
      Array.prototype.forEach.call(els, function (el) {
        el.classList.add(activeClass);
        el.classList.remove(pendingClass);
      });
    }
  }
  
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handleReducedMotion);
  } else if (mediaQuery.addListener) {
    mediaQuery.addListener(handleReducedMotion);
  }

  // If user prefers reduced motion, activate everything immediately
  if (mediaQuery.matches) {
    var readyReduced = function () {
      var els = document.querySelectorAll('.' + baseClass);
      Array.prototype.forEach.call(els, function (el) {
        el.classList.add(activeClass);
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', readyReduced);
    } else {
      readyReduced();
    }
    return;
  }

  var supportsObserver = 'IntersectionObserver' in window;

  if (supportsObserver) {
    // Create an observer with multiple thresholds to support custom per-element thresholds
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var el = entry.target;
          var threshold = parseFloat(el.getAttribute('data-ease-scroll-threshold')) || 0.15;
          var once = el.getAttribute('data-ease-scroll-once') !== 'false';
          
          if (entry.isIntersecting) {
            // Hint GPU acceleration just before/during animation
            el.classList.add(pendingClass);
            
            // Check if threshold is met or if element is larger than viewport and intersects
            var isTallElement = el.offsetHeight > window.innerHeight;
            if (entry.intersectionRatio >= threshold || (isTallElement && entry.intersectionRatio > 0)) {
              el.classList.add(activeClass);
              el.classList.remove(pendingClass);
              
              if (once) {
                observer.unobserve(el);
              }
            }
          } else {
            el.classList.remove(pendingClass);
            if (!once) {
              el.classList.remove(activeClass);
            }
          }
        });
      },
      {
        threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: '0px'
      }
    );

    var ready = function () {
      var els = document.querySelectorAll('.' + baseClass);
      Array.prototype.forEach.call(els, function (el) {
        initElementStyles(el);
        observer.observe(el);
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', ready);
    } else {
      ready();
    }
  } else {
    // Fallback: Throttled scroll listener for legacy browsers
    var throttleTimeout;
    var checkElements = function () {
      var els = document.querySelectorAll('.' + baseClass);
      Array.prototype.forEach.call(els, function (el) {
        initElementStyles(el);
        var threshold = parseFloat(el.getAttribute('data-ease-scroll-threshold')) || 0.15;
        var once = el.getAttribute('data-ease-scroll-once') !== 'false';
        
        if (isInViewport(el, threshold)) {
          el.classList.add(activeClass);
        } else if (!once) {
          el.classList.remove(activeClass);
        }
      });
    };

    var scrollHandler = function () {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(function () {
          throttleTimeout = null;
          checkElements();
        }, 100);
      }
    };

    var readyFallback = function () {
      checkElements();
      window.addEventListener('scroll', scrollHandler);
      window.addEventListener('resize', scrollHandler);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', readyFallback);
    } else {
      readyFallback();
    }
  }
})();
