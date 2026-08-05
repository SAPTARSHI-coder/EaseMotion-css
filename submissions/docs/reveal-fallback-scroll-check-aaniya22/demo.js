/**
 * Reference implementation for the core/reveal.js no-IntersectionObserver
 * fallback fix. Standalone — does not modify core/reveal.js.
 *
 * Original bug: the fallback branch added the active class to every
 * .reveal-el element immediately, regardless of scroll position.
 *
 * Fix: throttled scroll/resize listener that checks each element's
 * position and only activates it once it's actually in view.
 */

(function () {
  var revealClass = 'reveal-el';
  var activeClass = 'is-active';

  function isCentered(el) {
    var rect = el.getBoundingClientRect();
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    // Consider "in view" once the element has entered the bottom
    // 90% of the viewport, matching core/reveal.js's IO threshold intent.
    return rect.top < viewportHeight * 0.9 && rect.bottom > 0;
  }

  var throttled = false;

  var checkAndReveal = function () {
    var els = document.querySelectorAll('.' + revealClass + ':not(.' + activeClass + ')');
    Array.prototype.forEach.call(els, function (el) {
      if (isCentered(el)) {
        el.classList.add(activeClass);
      }
    });
  };

  var onScroll = function () {
    if (throttled) return;
    throttled = true;
    window.requestAnimationFrame(function () {
      checkAndReveal();
      throttled = false;
    });
  };

  var readyFallback = function () {
    checkAndReveal();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', readyFallback);
  } else {
    readyFallback();
  }
})();