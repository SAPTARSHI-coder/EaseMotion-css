/**
 * EaseMotion CSS — Custom Cursor Effect
 * cursor.js
 *
 * Initialises the dual-ring cursor with:
 *   - RAF-based smooth tracking (dot snappy, ring lagging)
 *   - Magnetic pull on [data-magnetic], <a>, <button> elements
 *   - Click ripple animation
 *   - Auto-hide when cursor leaves the viewport
 *   - Respects prefers-reduced-motion
 */

(function () {
  "use strict";

  /* ── Respect reduced motion ── */
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const dot = document.getElementById("emCursor");
  const ring = document.getElementById("emCursorRing");

  if (!dot || !ring) {
    console.warn(
      "[EaseMotion] Cursor elements not found. Add #emCursor and #emCursorRing to <body>."
    );
    return;
  }

  /* ── State ── */
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let hidden = false;

  /* ── Update mouse position ── */
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (hidden) {
      dot.classList.remove("em-cursor--hidden");
      ring.classList.remove("em-cursor-ring--hidden");
      hidden = false;
    }
  });

  /* ── Hide when cursor leaves the window ── */
  document.addEventListener("mouseleave", () => {
    dot.classList.add("em-cursor--hidden");
    ring.classList.add("em-cursor-ring--hidden");
    hidden = true;
  });

  /* ── Hover detection ── */
  const HOVER_SELECTORS =
    'a, button, [data-magnetic], input, textarea, select, label, [role="button"]';

  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(HOVER_SELECTORS)) {
      dot.classList.add("em-cursor--hover");
      ring.classList.add("em-cursor-ring--hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(HOVER_SELECTORS)) {
      dot.classList.remove("em-cursor--hover");
      ring.classList.remove("em-cursor-ring--hover");
    }
  });

  /* ── Click: state flash + ripple ── */
  document.addEventListener("mousedown", () => {
    dot.classList.add("em-cursor--click");
    ring.classList.add("em-cursor-ring--click");
    if (!reducedMotion) spawnRipple(mouseX, mouseY);
  });

  document.addEventListener("mouseup", () => {
    dot.classList.remove("em-cursor--click");
    ring.classList.remove("em-cursor-ring--click");
  });

  function spawnRipple(x, y) {
    const r = document.createElement("div");
    r.className = "em-cursor-ripple";
    r.style.left = x + "px";
    r.style.top = y + "px";
    document.body.appendChild(r);
    r.addEventListener("animationend", () => r.remove());
  }

  /* ── RAF loop: dot snappy, ring lerps behind ── */
  const LERP = 0.13; // ring lag (0 = no movement, 1 = instant)

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function tick() {
    /* Dot follows instantly */
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";

    if (!reducedMotion) {
      /* Ring lags behind */
      ringX = lerp(ringX, mouseX, LERP);
      ringY = lerp(ringY, mouseY, LERP);
    } else {
      ringX = mouseX;
      ringY = mouseY;
    }

    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);

  /* ── Magnetic pull on [data-magnetic] elements ── */
  if (!reducedMotion) {
    document.querySelectorAll("[data-magnetic]").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const strength = 0.28; // pull intensity (0 = none, 1 = full)
        el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      });

      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });
  }
})();
