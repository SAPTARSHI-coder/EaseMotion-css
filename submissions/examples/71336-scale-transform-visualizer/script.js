const scaleBox = document.getElementById("scaleBox");
const scaleOutput = document.getElementById("scaleOutput");
const boxValue = document.getElementById("boxValue");
const rangeOutput = document.getElementById("rangeOutput");
const scaleRange = document.getElementById("scaleRange");
const replayButton = document.getElementById("replayButton");
const statusText = document.getElementById("statusText");

const presetButtons = document.querySelectorAll(".preset-button");

let currentScale = 1;

function formatScale(value) {
  const number = Number(value);

  return `${Number.isInteger(number) ? number : number.toFixed(1)}×`;
}

function updateActivePreset(value) {
  presetButtons.forEach((button) => {
    const isActive = Number(button.dataset.scale) === Number(value);

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function updateScale(value, animate = true) {
  const numericValue = Number(value);

  if (!Number.isFinite(numericValue)) {
    return;
  }

  currentScale = numericValue;

  const formatted = formatScale(numericValue);

  scaleBox.style.setProperty(
    "--target-scale",
    numericValue
  );

  scaleBox.style.transform =
    `scale(${numericValue})`;

  scaleOutput.textContent = formatted;
  boxValue.textContent = formatted;
  rangeOutput.textContent = formatted;

  scaleRange.value = numericValue;

  updateActivePreset(numericValue);

  if (animate) {
    statusText.textContent = "Scale updated";
  } else {
    statusText.textContent = "Ready";
  }
}

function replayAnimation() {
  scaleBox.classList.remove("replaying");

  // Force style recalculation so the animation can restart.
  void scaleBox.offsetWidth;

  scaleBox.style.setProperty(
    "--target-scale",
    currentScale
  );

  scaleBox.classList.add("replaying");

  statusText.textContent = "Animating…";

  const animationDuration = 800;

  window.setTimeout(() => {
    statusText.textContent = "Animation complete";
  }, animationDuration);

  window.setTimeout(() => {
    scaleBox.classList.remove("replaying");
  }, animationDuration + 50);
}

presetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updateScale(button.dataset.scale);
    replayAnimation();
  });
});

scaleRange.addEventListener("input", (event) => {
  updateScale(event.target.value);
});

replayButton.addEventListener("click", replayAnimation);

updateScale(currentScale, false);