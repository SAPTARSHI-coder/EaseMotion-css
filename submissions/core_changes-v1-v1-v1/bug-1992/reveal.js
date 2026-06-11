(function () {
  'use strict';
  var revealClass = 'ease-reveal';
  var activeClass = 'active';
  if ('IntersectionObserver' in window) {
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
    var els = document.querySelectorAll('.' + revealClass);
    Array.prototype.forEach.call(els, function (el) {
      observer.observe(el);
    });
  } else {
    var els = document.querySelectorAll('.' + revealClass);
    Array.prototype.forEach.call(els, function (el) {
      el.classList.add(activeClass);
    });
  }
})();
