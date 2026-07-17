/**
 * Ease Volume Control Slider
 * Minimal JS: updates the fill gradient position (--volume-percent) as the
 * slider moves, and toggles mute state. All visual styling is CSS-driven.
 */
(function () {
  const container = document.querySelector(".ease-volume");
  if (!container) return;

  const slider = container.querySelector(".volume-slider");
  const muteBtn = container.querySelector(".volume-icon-btn");
  const label = container.querySelector(".volume-percent-label");

  let lastVolume = slider.value;

  function updateFill() {
    slider.style.setProperty("--volume-percent", `${slider.value}%`);
    label.textContent = `${slider.value}%`;
    container.classList.toggle("is-muted", Number(slider.value) === 0);
  }

  slider.addEventListener("input", () => {
    if (Number(slider.value) > 0) lastVolume = slider.value;
    updateFill();
  });

  muteBtn.addEventListener("click", () => {
    if (Number(slider.value) === 0) {
      slider.value = lastVolume > 0 ? lastVolume : 50;
    } else {
      lastVolume = slider.value;
      slider.value = 0;
    }
    updateFill();
  });

  updateFill();
})();
