// Binds every .compare-range input to its parent .compare container's
// --clip-offset custom property. That single variable drives the
// clip-path on the "after" layer and the handle's position in CSS —
// this file has no drag math, no pointer tracking, no animation loop.

function initComparisonSliders() {
  const ranges = document.querySelectorAll(".compare-range");

  ranges.forEach((range) => {
    const container = range.closest(".compare");
    if (!container) return;

    const update = () => {
      container.style.setProperty("--clip-offset", `${range.value}%`);
    };

    // Initial paint from the input's starting value attribute.
    update();

    // Mouse drag, touch drag, and keyboard arrows all fire native
    // "input" events on a range control — one listener covers all three.
    range.addEventListener("input", update);
  });
}

function copySnippet(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  const text = el.innerText;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      const original = btn.textContent;
      btn.textContent = "Copied";
      btn.classList.add("is-copied");
      setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove("is-copied");
      }, 1500);
    })
    .catch(() => {
      btn.textContent = "Select & copy";
    });
}

document.addEventListener("DOMContentLoaded", initComparisonSliders);
