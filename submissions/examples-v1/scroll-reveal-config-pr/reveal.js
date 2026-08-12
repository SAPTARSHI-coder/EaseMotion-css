(function () {
  "use strict";

  var revealClass = "ease-reveal";
  var activeClass = "active";

  function isCentered(el) {
    var rect = el.getBoundingClientRect();
    var vh = window.innerHeight;
    return rect.top < vh * 0.85 && rect.bottom > 0;
  }

  var supportsObserver = "IntersectionObserver" in window;

  if (supportsObserver) {
    // Generate fine-grained thresholds (0.0 to 1.0 with 0.05 increments)
    // to allow precise tracking of different user-defined thresholds.
    var thresholds = [];
    for (var i = 0; i <= 20; i++) {
      thresholds.push(i * 0.05);
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var target = entry.target;
          var thresholdAttr = target.getAttribute("data-reveal-threshold");
          var targetThreshold = thresholdAttr
            ? parseFloat(thresholdAttr)
            : 0.15;

          var delayAttr = target.getAttribute("data-reveal-delay");
          var delay = delayAttr ? parseInt(delayAttr, 10) : 0;

          var onceAttr = target.getAttribute("data-reveal-once");
          var once = onceAttr !== "false";

          // Trigger active state when intersection ratio reaches or exceeds target threshold
          if (
            entry.intersectionRatio >= targetThreshold &&
            entry.isIntersecting
          ) {
            if (delay > 0) {
              if (!target._revealTimeout) {
                target._revealTimeout = setTimeout(function () {
                  target.classList.add(activeClass);
                  delete target._revealTimeout;
                }, delay);
              }
            } else {
              target.classList.add(activeClass);
            }

            if (once) {
              observer.unobserve(target);
            }
          } else if (entry.intersectionRatio < targetThreshold) {
            // Cancel any pending reveal timeouts if user scrolls away before delay completes
            if (target._revealTimeout) {
              clearTimeout(target._revealTimeout);
              delete target._revealTimeout;
            }

            // If data-reveal-once="false", remove active class when leaving viewport
            if (!once) {
              target.classList.remove(activeClass);
            }
          }
        });
      },
      { threshold: thresholds }
    );

    var ready = function () {
      var els = document.querySelectorAll("." + revealClass);
      Array.prototype.forEach.call(els, function (el) {
        if (isCentered(el)) {
          el.classList.add(activeClass);
        } else {
          observer.observe(el);
        }
      });
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", ready);
    } else {
      ready();
    }
  } else {
    // Fallback logic for older browsers
    var readyFallback = function () {
      var els = document.querySelectorAll("." + revealClass);
      Array.prototype.forEach.call(els, function (el) {
        var delayAttr = el.getAttribute("data-reveal-delay");
        var delay = delayAttr ? parseInt(delayAttr, 10) : 0;

        if (delay > 0) {
          setTimeout(function () {
            el.classList.add(activeClass);
          }, delay);
        } else {
          el.classList.add(activeClass);
        }
      });
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", readyFallback);
    } else {
      readyFallback();
    }
  }
})();
