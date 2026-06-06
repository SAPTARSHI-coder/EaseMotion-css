(function () {
  'use strict';

  var revealClass = 'ease-reveal';
  var activeClass = 'active';

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
        observer.observe(el);
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
