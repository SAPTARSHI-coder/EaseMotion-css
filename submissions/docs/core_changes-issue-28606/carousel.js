/* ============================================================
   ease-carousel — JavaScript
   Handles arrow navigation, dot indicators, and auto-play.
   Submission for EaseMotion CSS · Issue #28606
   ============================================================ */

(function () {
  "use strict";

  function init() {
    var carousels = document.querySelectorAll(".ease-carousel");
    carousels.forEach(function (carousel) {
      var track = carousel.querySelector(".ease-carousel-track");
      var slides = track ? track.querySelectorAll(".ease-carousel-slide") : [];
      var prev = carousel.querySelector(".ease-carousel-prev");
      var next = carousel.querySelector(".ease-carousel-next");
      var dots = document.querySelectorAll(
        '[data-carousel-dots="' +
          (carousel.id || "") +
          '"] .ease-carousel-dot, ' +
          "." +
          carousel.className
            .split(" ")
            .filter(function (c) {
              return c;
            })
            .join(".") +
          " ~ .ease-carousel-dots .ease-carousel-dot"
      );
      if (!track || !slides.length) return;

      function getActiveIndex() {
        var scrollLeft = track.scrollLeft;
        var slideWidth =
          slides[0].offsetWidth + parseInt(getComputedStyle(track).gap || "0");
        return Math.round(scrollLeft / slideWidth);
      }

      function goTo(index) {
        var slideWidth =
          slides[0].offsetWidth + parseInt(getComputedStyle(track).gap || "0");
        track.scrollTo({ left: index * slideWidth, behavior: "smooth" });
      }

      function updateDots() {
        var active = getActiveIndex();
        dots.forEach(function (dot, i) {
          dot.classList.toggle("ease-carousel-dot-active", i === active);
        });
        slides.forEach(function (s, i) {
          s.classList.toggle("ease-carousel-slide-active", i === active);
        });
      }

      if (prev)
        prev.addEventListener("click", function () {
          goTo(getActiveIndex() - 1);
        });
      if (next)
        next.addEventListener("click", function () {
          goTo(getActiveIndex() + 1);
        });
      dots.forEach(function (dot, i) {
        dot.addEventListener("click", function () {
          goTo(i);
        });
      });

      track.addEventListener("scroll", updateDots);
      updateDots();

      /* Auto-play */
      var interval = parseInt(carousel.getAttribute("data-interval") || "0");
      if (interval > 0) {
        var timer = setInterval(function () {
          var nextIdx = getActiveIndex() + 1;
          if (nextIdx >= slides.length) nextIdx = 0;
          goTo(nextIdx);
        }, interval);
        carousel.addEventListener("mouseenter", function () {
          clearInterval(timer);
        });
        carousel.addEventListener("focusin", function () {
          clearInterval(timer);
        });
        carousel.addEventListener("mouseleave", function () {
          timer = setInterval(function () {
            var nextIdx = getActiveIndex() + 1;
            if (nextIdx >= slides.length) nextIdx = 0;
            goTo(nextIdx);
          }, interval);
        });
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
