/* ============================================================
   ease-ripple — JavaScript
   Handles ripple creation on click/tap.
   ============================================================ */

(function () {
  "use strict";

  function createRipple(e) {
    var btn = e.currentTarget;
    var ripple = document.createElement("span");
    ripple.className = "ease-ripple-effect";

    var rect = btn.getBoundingClientRect();
    var size = Math.max(rect.width, rect.height);
    var x = (e.clientX || e.touches?.[0]?.clientX || rect.left + rect.width / 2) - rect.left - size / 2;
    var y = (e.clientY || e.touches?.[0]?.clientY || rect.top + rect.height / 2) - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    btn.appendChild(ripple);
    ripple.addEventListener("animationend", function () { ripple.remove(); });
  }

  function init() {
    document.querySelectorAll(".ease-ripple").forEach(function (el) {
      el.addEventListener("click", createRipple);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
