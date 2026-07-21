/* ==========================================================================
   ease-ba-slider — behavior
   Vanilla JS, no dependencies. Handles mouse drag, touch drag, click-to-jump,
   and keyboard (arrow key) control of the comparison position.
   ========================================================================== */

(function () {
  "use strict";

  function initSlider(root) {
    const handle = root.querySelector("[data-ease-ba-handle]");
    const afterWrap = root.querySelector("[data-ease-ba-after-wrap]");
    let dragging = false;

    function setPosition(percent) {
      const clamped = Math.min(100, Math.max(0, percent));
      const rect = root.getBoundingClientRect();

      root.style.setProperty("--ease-ba-position", clamped + "%");
      root.style.setProperty("--ease-ba-slider-width", rect.width + "px");
      root.setAttribute("aria-valuenow", Math.round(clamped));

      if (clamped <= 6) {
        root.setAttribute("data-ease-ba-near", "before");
      } else if (clamped >= 94) {
        root.setAttribute("data-ease-ba-near", "after");
      } else {
        root.removeAttribute("data-ease-ba-near");
      }
    }

    function percentFromClientX(clientX) {
      const rect = root.getBoundingClientRect();
      const x = clientX - rect.left;
      return (x / rect.width) * 100;
    }

    function onPointerMove(clientX) {
      setPosition(percentFromClientX(clientX));
    }

    // Mouse drag
    handle.addEventListener("mousedown", (e) => {
      dragging = true;
      e.preventDefault();
    });

    root.addEventListener("mousedown", (e) => {
      // Clicking anywhere on the slider jumps to that position, then allows dragging
      dragging = true;
      onPointerMove(e.clientX);
    });

    window.addEventListener("mousemove", (e) => {
      if (dragging) onPointerMove(e.clientX);
    });

    window.addEventListener("mouseup", () => {
      dragging = false;
    });

    // Touch drag
    root.addEventListener(
      "touchstart",
      (e) => {
        dragging = true;
        onPointerMove(e.touches[0].clientX);
      },
      { passive: true }
    );

    root.addEventListener(
      "touchmove",
      (e) => {
        if (dragging) onPointerMove(e.touches[0].clientX);
      },
      { passive: true }
    );

    root.addEventListener("touchend", () => {
      dragging = false;
    });

    // Keyboard control
    root.addEventListener("keydown", (e) => {
      const current = parseFloat(root.getAttribute("aria-valuenow")) || 50;
      if (e.key === "ArrowLeft") {
        setPosition(current - 5);
        e.preventDefault();
      } else if (e.key === "ArrowRight") {
        setPosition(current + 5);
        e.preventDefault();
      } else if (e.key === "Home") {
        setPosition(0);
        e.preventDefault();
      } else if (e.key === "End") {
        setPosition(100);
        e.preventDefault();
      }
    });

    // Keep the "after" image sized correctly if the slider resizes
    window.addEventListener("resize", () => {
      const current = parseFloat(root.getAttribute("aria-valuenow")) || 50;
      setPosition(current);
    });

    setPosition(50);
  }

  document.querySelectorAll("[data-ease-ba-slider]").forEach(initSlider);
})();
