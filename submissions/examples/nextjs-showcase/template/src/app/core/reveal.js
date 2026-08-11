(function () {
  'use strict';

  var revealClass = 'ease-reveal';
  var activeClass = 'ease-reveal-active';

  function isCentered(el) {
    var rect = el.getBoundingClientRect();
    var vh = window.innerHeight;
    return rect.top < vh * 0.85 && rect.bottom > 0;
  }

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    var readyReduced = function () {
      var els = document.querySelectorAll('.' + revealClass);
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
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add(activeClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    var ready = function () {
      var els = document.querySelectorAll('.' + revealClass);
      Array.prototype.forEach.call(els, function (el) {
        if (isCentered(el)) {
          el.classList.add(activeClass);
        } else {
          observer.observe(el);
        }
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', ready);
    } else {
      ready();
    }
  } else {
    var readyFallback = function () {
      var els = document.querySelectorAll('.' + revealClass);
      Array.prototype.forEach.call(els, function (el) {
        el.classList.add(activeClass);
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', readyFallback);
    } else {
      readyFallback();
    }
  }
})();
