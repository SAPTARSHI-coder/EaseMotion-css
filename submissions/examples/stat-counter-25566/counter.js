(function () {
  'use strict';

  var counterClass = 'ease-stat-number';
  var countedClass = 'ease-stat-counted';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animateCounter(el, target, duration) {
    var start = performance.now();

    function step(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(eased * target);

      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
        el.classList.add(countedClass);
      }
    }

    requestAnimationFrame(step);
  }

  function triggerCounters() {
    var els = document.querySelectorAll('.' + counterClass);
    Array.prototype.forEach.call(els, function (el) {
      var target = parseInt(el.getAttribute('data-target'), 10);

      if (isNaN(target)) {
        var styleTarget = getComputedStyle(el).getPropertyValue('--ease-count-target').trim();
        target = styleTarget ? parseInt(styleTarget, 10) : NaN;
      }

      if (isNaN(target)) return;

      if (prefersReducedMotion) {
        el.textContent = target;
        el.classList.add(countedClass);
        return;
      }

      var duration = parseInt(el.getAttribute('data-duration'), 10) || 2000;
      animateCounter(el, target, duration);
    });
  }

  var supportsObserver = 'IntersectionObserver' in window;

  if (supportsObserver) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            triggerCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    var ready = function () {
      var grid = document.querySelector('.ease-stat-grid');
      if (grid) {
        observer.observe(grid);
      } else {
        triggerCounters();
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', ready);
    } else {
      ready();
    }
  } else {
    var readyFallback = function () {
      triggerCounters();
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', readyFallback);
    } else {
      readyFallback();
    }
  }
})();
