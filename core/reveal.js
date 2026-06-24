(function () {
  'use strict';

  var revealClass = 'ease-reveal';
  var activeClass = 'ease-reveal-active';
  var observer = null;

  function isCentered(el) {
    var rect = el.getBoundingClientRect();
    var vh = window.innerHeight;
    return rect.top < vh * 0.85 && rect.bottom > 0;
  }

  var motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

  function revealAll() {
    var els = document.querySelectorAll('.' + revealClass);
    Array.prototype.forEach.call(els, function (el) {
      el.classList.add(activeClass);
    });
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }

  function initReveal() {
    if (motionMedia.matches) {
      revealAll();
      return;
    }

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
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

      function ready() {
        var els = document.querySelectorAll('.' + revealClass);
        Array.prototype.forEach.call(els, function (el) {
          if (isCentered(el)) {
            el.classList.add(activeClass);
          } else {
            observer.observe(el);
          }
        });
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ready);
      } else {
        ready();
      }
    } else {
      revealAll();
    }
  }

  motionMedia.addEventListener('change', function () {
    if (motionMedia.matches) {
      revealAll();
    } else {
      var els = document.querySelectorAll('.' + revealClass);
      Array.prototype.forEach.call(els, function (el) {
        el.classList.remove(activeClass);
      });
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      initReveal();
    }
  });

  initReveal();
})();
