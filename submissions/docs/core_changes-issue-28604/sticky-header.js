/* ============================================================
   ease-sticky-header — JavaScript
   Uses IntersectionObserver to toggle .ease-sticky-scrolled
   on sticky headers when they exit the viewport.
   Submission for EaseMotion CSS · Issue #28604
   ============================================================ */

(function () {
  "use strict";

  function init() {
    var headers = document.querySelectorAll(".ease-sticky-header");
    if (!headers.length || !window.IntersectionObserver) return;

    headers.forEach(function (header) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            header.classList.toggle(
              "ease-sticky-scrolled",
              !entry.isIntersecting
            );
          });
        },
        { threshold: 0, rootMargin: "-1px 0px 0px 0px" }
      );
      observer.observe(header);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
