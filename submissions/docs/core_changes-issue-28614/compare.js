/* ============================================================
   ease-image-compare — JavaScript
   Handles mouse/touch drag to reposition the compare slider.
   ============================================================ */

(function () {
  "use strict";

  function init() {
    var comparers = document.querySelectorAll(".ease-image-compare");
    comparers.forEach(function (cmp) {
      var before = cmp.querySelector(".ease-image-compare-before");
      var root = cmp;

      function setPos(pct) {
        var p = Math.max(0, Math.min(100, pct));
        root.style.setProperty("--ease-compare-pos", p + "%");
      }

      function onMove(clientX) {
        var rect = root.getBoundingClientRect();
        var pct = ((clientX - rect.left) / rect.width) * 100;
        setPos(pct);
      }

      function onDown(e) {
        root.classList.add("ease-image-compare-dragging");
        onMove(e.clientX || e.touches[0].clientX);
      }

      function onUp() {
        root.classList.remove("ease-image-compare-dragging");
      }

      function onDrag(e) {
        if (!root.classList.contains("ease-image-compare-dragging")) return;
        e.preventDefault();
        onMove(e.clientX || e.touches[0].clientX);
      }

      root.addEventListener("mousedown", onDown);
      root.addEventListener("touchstart", onDown, { passive: true });
      document.addEventListener("mousemove", onDrag);
      document.addEventListener("touchmove", onDrag, { passive: false });
      document.addEventListener("mouseup", onUp);
      document.addEventListener("touchend", onUp);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
