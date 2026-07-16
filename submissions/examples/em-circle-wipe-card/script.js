/* =========================================================
   EaseMotion CSS — Radial Circle-Wipe Card Reveal
   Optional JS: allows the reveal origin to follow the
   user's cursor position for a "flashlight" feel.
   Purely additive — the effect works via pure CSS
   (:hover + clip-path) even if this script is removed.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".em-circle-wipe-card");

  cards.forEach((card) => {
    const overlay = card.querySelector(".em-card-state-overlay");

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      overlay.style.setProperty("--reveal-x", `${x}%`);
      overlay.style.setProperty("--reveal-y", `${y}%`);
    });

    card.addEventListener("mouseenter", () => {
      overlay.style.clipPath = `circle(75% at var(--reveal-x, 50%) var(--reveal-y, 50%))`;
    });

    card.addEventListener("mouseleave", () => {
      overlay.style.clipPath = `circle(0% at var(--reveal-x, 50%) var(--reveal-y, 50%))`;
    });
  });
});
