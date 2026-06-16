(function () {
  "use strict";

  var isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0;

  if (isTouchDevice) return;

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function initMagneticButtons(container) {
    var buttons = (container || document).querySelectorAll(".ease-btn-magnetic");

    buttons.forEach(function (btn) {
      if (btn.dataset.magneticInitialized) return;
      btn.dataset.magneticInitialized = "true";

      btn.addEventListener("mousemove", function (e) {
        if (reducedMotion.matches) return;

        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        var strength = parseFloat(btn.dataset.magneticStrength) || 0.3;
        var radius = parseFloat(btn.dataset.magneticRadius) || 100;

        var distance = Math.sqrt(x * x + y * y);
        if (distance > radius) return;

        btn.style.transform =
          "translate(" + (x * strength) + "px, " + (y * strength) + "px)";
      });

      btn.addEventListener("mouseleave", function () {
        btn.style.transform = "";
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initMagneticButtons();
    });
  } else {
    initMagneticButtons();
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { initMagneticButtons: initMagneticButtons };
  } else if (typeof window !== "undefined") {
    window.EaseMotionMagnetic = { init: initMagneticButtons };
  }
})();
