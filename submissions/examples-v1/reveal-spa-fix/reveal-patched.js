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
  if (prefersReducedMotion) return;

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

    // BUG FIX: Re-initialize on dynamic content for SPAs
    if ('MutationObserver' in window) {
      var mutObserver = new MutationObserver(function () {
        // Debounce multiple mutations
        clearTimeout(mutObserver.timeout);
        mutObserver.timeout = setTimeout(function () {
          ready();
        }, 100);
      });
      mutObserver.observe(document.body, { childList: true, subtree: true });
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

    // BUG FIX: Re-initialize on dynamic content for SPAs
    if ('MutationObserver' in window) {
      var mutObserverFallback = new MutationObserver(function () {
        // Debounce multiple mutations
        clearTimeout(mutObserverFallback.timeout);
        mutObserverFallback.timeout = setTimeout(function () {
          readyFallback();
        }, 100);
      });
      mutObserverFallback.observe(document.body, { childList: true, subtree: true });
    }
  }
})();
