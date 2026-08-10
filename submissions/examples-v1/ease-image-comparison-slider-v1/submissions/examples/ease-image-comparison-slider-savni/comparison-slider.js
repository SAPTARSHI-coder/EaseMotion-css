/**
 * Ease Image Comparison Slider
 * The core reveal interaction (clip-path driven by --slider-position)
 * is pure CSS. This tiny script only listens to the range input's
 * `input` event and writes the value to the --slider-position custom
 * property — no drag/pointer logic is reimplemented in JS, the native
 * <input type="range"> handles all dragging/keyboard/touch behavior.
 */
(function () {
  document.querySelectorAll(".ease-image-comparison-slider").forEach((slider) => {
    const range = slider.querySelector(".slider-range");
    if (!range) return;

    function update() {
      slider.style.setProperty("--slider-position", `${range.value}%`);
    }

    range.addEventListener("input", update);
    update(); // set initial position from the range's default value
  });
})();
