/* ============================================================
   ease-magnetic — JavaScript
   Tracks mouse position and applies magnetic pull.
   ============================================================ */

(function () {
  "use strict";

  function init() {
    var magnets = document.querySelectorAll(".ease-magnetic");
    magnets.forEach(function (el) {
      var inner = el.querySelector(".ease-magnetic-inner") || el;

      function onMove(e) {
        var rect = el.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var mx = (e.clientX || e.touches?.[0]?.clientX || cx) - cx;
        var my = (e.clientY || e.touches?.[0]?.clientY || cy) - cy;
        var dist = Math.sqrt(mx * mx + my * my);
        var radius =
          parseFloat(
            getComputedStyle(el).getPropertyValue("--ease-magnetic-radius")
          ) || 150;
        var strength =
          parseFloat(
            getComputedStyle(el).getPropertyValue("--ease-magnetic-strength")
          ) || 0.3;

        if (dist < radius && dist > 0) {
          var pull = (1 - dist / radius) * strength;
          inner.style.transform =
            "translate(" + mx * pull + "px, " + my * pull + "px)";
        }
      }

      function onLeave() {
        inner.style.transform = "";
        el.classList.add("ease-magnetic-snap");
        setTimeout(function () {
          el.classList.remove("ease-magnetic-snap");
        }, 500);
      }

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      el.addEventListener("touchmove", onMove, { passive: true });
      el.addEventListener("touchend", onLeave);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
