const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const direction = document.getElementById("gradDirection");
const preview = document.getElementById("gradPreview");
const output = document.getElementById("gradOutput");

function updateGradient() {
  const css = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
  preview.style.background = css;
  output.value = css;
}

color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);
direction.addEventListener("change", updateGradient);
updateGradient();
