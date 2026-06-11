(function () {
  'use strict';

  var revealClass = 'ease-reveal';
  var activeClass = 'ease-reveal-active';

  function isCentered(el) {
    var rect = el.getBoundingClientRect();
    var vh = window.innerHeight;
    return rect.top < vh * 0.85 && rect.bottom > 0;
  }

  function activate(el) {
    el.classList.add(activeClass);
    el.removeAttribute('aria-hidden');
  }

  var supportsObserver = 'IntersectionObserver' in window;

  if (supportsObserver) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            activate(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    var ready = function () {
      var els = document.querySelectorAll('.' + revealClass);
      Array.prototype.forEach.call(els, function (el) {
        if (!el.classList.contains(activeClass)) {
          el.setAttribute('aria-hidden', 'true');
        }
        if (isCentered(el)) {
          activate(el);
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
        activate(el);
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', readyFallback);
    } else {
      readyFallback();
    }
  }
})();
