(function () {
  "use strict";
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;
  var rm = window.matchMedia("(prefers-reduced-motion: reduce)");
  function init(c) {
    (c || document).querySelectorAll(".ease-btn-magnetic").forEach(function (b) {
      if (b.dataset.magneticInitialized) return;
      b.dataset.magneticInitialized = "true";
      b.addEventListener("mousemove", function (e) {
        if (rm.matches) return;
        var r = b.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        var s = parseFloat(b.dataset.magneticStrength) || 0.3;
        var rad = parseFloat(b.dataset.magneticRadius) || 100;
        if (Math.sqrt(x * x + y * y) > rad) return;
        b.style.transform = "translate(" + (x * s) + "px, " + (y * s) + "px)";
      });
      b.addEventListener("mouseleave", function () { b.style.transform = ""; });
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { init(); });
  } else { init(); }
  if (typeof window !== "undefined") window.EaseMotionMagnetic = { init: init };
})();
