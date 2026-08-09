/* ==========================================================================
   scroll-trigger-hr18.js
   A standalone, dependency-free scroll-trigger reveal utility.

   Usage: add a `data-ease-scroll` attribute to any element:

     <div data-ease-scroll="ease-fade-in-hr18 threshold-0.5 once">...</div>
     <div data-ease-scroll="ease-slide-up-hr18 threshold-0.2 repeat delay-150">...</div>

   Grammar (space-separated tokens):
     <animation-class>   required, first token — the class to apply on reveal
     threshold-<0-1>     optional, default 0.2 — how much of the element
                          must be visible before it fires
     once | repeat       optional, default once — repeat re-triggers the
                          animation every time the element re-enters view
     delay-<ms>           optional, default 0 — delay before the class is
                          applied once the element crosses the threshold

   This file is a standalone reference implementation, not a plugin for an
   existing internal engine — see README.md for why.
   ========================================================================== */
(function () {
  "use strict";

  function parseConfig(raw) {
    var tokens = raw.trim().split(/\s+/);
    var config = {
      animationClass: tokens[0],
      threshold: 0.2,
      once: true,
      delay: 0
    };

    tokens.slice(1).forEach(function (token) {
      if (token.indexOf("threshold-") === 0) {
        var t = parseFloat(token.slice("threshold-".length));
        if (!isNaN(t)) config.threshold = Math.min(1, Math.max(0, t));
      } else if (token === "once") {
        config.once = true;
      } else if (token === "repeat") {
        config.once = false;
      } else if (token.indexOf("delay-") === 0) {
        var d = parseInt(token.slice("delay-".length), 10);
        if (!isNaN(d)) config.delay = d;
      }
    });

    return config;
  }

  function reveal(el, config) {
    window.setTimeout(function () {
      el.classList.add(config.animationClass);
      el.classList.add("ease-scroll-revealed-hr18");
    }, config.delay);
  }

  function hide(el, config) {
    el.classList.remove(config.animationClass);
    el.classList.remove("ease-scroll-revealed-hr18");
  }

  function init() {
    var elements = document.querySelectorAll("[data-ease-scroll]");
    if (!elements.length) return;

    var prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    elements.forEach(function (el) {
      var config = parseConfig(el.getAttribute("data-ease-scroll"));

      // Respect reduced-motion preference: reveal immediately, no
      // IntersectionObserver churn, no animation class needed since the
      // stylesheet's own reduced-motion query removes the animation anyway.
      if (prefersReducedMotion) {
        el.classList.add("ease-scroll-revealed-hr18");
        return;
      }

      // Graceful fallback for environments without IntersectionObserver.
      if (!("IntersectionObserver" in window)) {
        reveal(el, config);
        return;
      }

      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              reveal(el, config);
              if (config.once) observer.unobserve(el);
            } else if (!config.once) {
              hide(el, config);
            }
          });
        },
        { threshold: config.threshold }
      );

      observer.observe(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
