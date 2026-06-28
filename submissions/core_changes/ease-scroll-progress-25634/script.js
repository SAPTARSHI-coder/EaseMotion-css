(function () {
  'use strict';

  function initScrollProgress(selector) {
    var bar = document.querySelector(selector || '.ease-scroll-progress');
    if (!bar) return;

    var ticking = false;

    function update() {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = percent + '%';
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    });

    update();
  }

  if (typeof window !== 'undefined') {
    window.initScrollProgress = initScrollProgress;
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { initScrollProgress(); });
    } else {
      initScrollProgress();
    }
  }
})();
