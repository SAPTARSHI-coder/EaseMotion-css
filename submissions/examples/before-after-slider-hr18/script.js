/* ==========================================================================
   script.js — before-after-slider-hr18
   Binds every .ease-compare-slider-hr18's range input to the
   --bas-pos-hr18 custom property that drives the reveal clip-path,
   divider line, and handle position (all defined in style.css).
   ========================================================================== */
(function () {
  "use strict";

  function initSlider(root) {
    var range = root.querySelector(".bas-range-hr18");
    if (!range) return;

    function apply() {
      root.style.setProperty("--bas-pos-hr18", range.value + "%");
    }

    // 'input' fires continuously while dragging, clicking, or using the
    // keyboard's arrow keys on a focused range input — a single listener
    // covers mouse, touch, and keyboard interaction alike, since they all
    // funnel through the same native <input type="range"> element.
    range.addEventListener("input", apply);

    // Set the initial position on load, in case the markup's starting
    // value differs from the CSS default.
    apply();
  }

  document.querySelectorAll(".ease-compare-slider-hr18").forEach(initSlider);
})();
