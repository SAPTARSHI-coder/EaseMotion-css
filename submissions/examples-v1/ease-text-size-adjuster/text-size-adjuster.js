/**
 * Ease Text Size Adjuster
 * Steps through preset scale levels (5 steps), updating --text-scale on the
 * content area. All resizing is a CSS transition on font-size; this script
 * only tracks the current step and writes the custom property + persists it.
 */
(function () {
  const container = document.querySelector(".ease-text-adjuster");
  if (!container) return;

  const content = container.querySelector(".adjuster-content");
  const decreaseBtn = container.querySelector(".decrease");
  const increaseBtn = container.querySelector(".increase");
  const resetBtn = container.querySelector(".reset");
  const dots = container.querySelectorAll(".level-dot");

  const SCALES = [0.85, 1, 1.15, 1.3, 1.45]; // 5 steps
  const DEFAULT_STEP = 1;
  let step = Number(localStorage.getItem("ease-text-scale-step"));
  if (isNaN(step) || step < 0 || step > SCALES.length - 1) step = DEFAULT_STEP;

  function render() {
    content.style.setProperty("--text-scale", SCALES[step]);
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === step));
    decreaseBtn.classList.toggle("is-disabled", step === 0);
    increaseBtn.classList.toggle("is-disabled", step === SCALES.length - 1);
    localStorage.setItem("ease-text-scale-step", step);
  }

  decreaseBtn.addEventListener("click", () => {
    if (step > 0) { step--; render(); }
  });

  increaseBtn.addEventListener("click", () => {
    if (step < SCALES.length - 1) { step++; render(); }
  });

  resetBtn.addEventListener("click", () => {
    step = DEFAULT_STEP;
    render();
  });

  render();
})();