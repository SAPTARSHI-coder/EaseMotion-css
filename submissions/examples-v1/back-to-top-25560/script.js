(function () {
  "use strict";
  var btnClass = "ease-back-to-top";
  var visibleClass = "ease-visible";
  var scrollThreshold = 400;
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  function onScroll() {
    var els = document.querySelectorAll("." + btnClass);
    Array.prototype.forEach.call(els, function (el) {
      if (window.scrollY > scrollThreshold) {
        el.classList.add(visibleClass);
      } else {
        el.classList.remove(visibleClass);
      }
    });
  }
  function onClick(e) {
    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  function init() {
    var els = document.querySelectorAll("." + btnClass);
    Array.prototype.forEach.call(els, function (el) {
      el.addEventListener("click", onClick);
    });
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
