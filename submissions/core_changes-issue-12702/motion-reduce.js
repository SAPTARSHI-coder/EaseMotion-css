(function () {
  'use strict';

  var mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  function applyReducedMotionState(reduced) {
    document.documentElement.dataset.easeReducedMotion = reduced ? 'true' : 'false';

    var loops = document.querySelectorAll('.ease-bounce, .ease-rotate, .ease-pulse, .ease-wave, .ease-ping');
    Array.prototype.forEach.call(loops, function (el) {
      if (reduced) {
        el.dataset.easeOriginalIterations = el.style.animationIterationCount || '';
        el.style.animationIterationCount = '1';
        el.style.animationDuration = '0.01ms';
      } else {
        el.style.animationIterationCount = el.dataset.easeOriginalIterations || '';
        el.style.animationDuration = '';
      }
    });

    var reveals = document.querySelectorAll('.ease-reveal');
    Array.prototype.forEach.call(reveals, function (el) {
      if (reduced) {
        el.classList.add('ease-reveal-active');
      }
    });
  }

  if (mediaQuery.matches) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        applyReducedMotionState(true);
      });
    } else {
      applyReducedMotionState(true);
    }
  }

  mediaQuery.addEventListener('change', function (e) {
    applyReducedMotionState(e.matches);
  });
})();
