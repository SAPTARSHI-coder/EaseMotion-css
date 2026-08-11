const defaults = {
  primary: "#6366f1",
  secondary: "#ec4899",
  radius: 12,
  spacing: 16,
  speed: 300
};

const primary = document.getElementById("primary");
const secondary = document.getElementById("secondary");
const radius = document.getElementById("radius");
const spacing = document.getElementById("spacing");
const speed = document.getElementById("speed");

const radiusValue = document.getElementById("radiusValue");
const spacingValue = document.getElementById("spacingValue");
const speedValue = document.getElementById("speedValue");

const cssOutput = document.getElementById("cssOutput");
const jsonOutput = document.getElementById("jsonOutput");

function updateTokens() {

  document.documentElement.style.setProperty("--primary", primary.value);
  document.documentElement.style.setProperty("--secondary", secondary.value);
  document.documentElement.style.setProperty("--radius", radius.value + "px");
  document.documentElement.style.setProperty("--spacing", spacing.value + "px");
  document.documentElement.style.setProperty("--speed", speed.value + "ms");

  radiusValue.textContent = radius.value + "px";
  spacingValue.textContent = spacing.value + "px";
  speedValue.textContent = speed.value + "ms";

  const css = `:root{
  --primary:${primary.value};
  --secondary:${secondary.value};
  --radius:${radius.value}px;
  --spacing:${spacing.value}px;
  --speed:${speed.value}ms;
}`;

  cssOutput.value = css;

  const json = {
    primary: primary.value,
    secondary: secondary.value,
    radius: radius.value + "px",
    spacing: spacing.value + "px",
    speed: speed.value + "ms"
  };

  jsonOutput.value = JSON.stringify(json, null, 2);
}

[primary, secondary, radius, spacing, speed].forEach(input => {
  input.addEventListener("input", updateTokens);
});

document.getElementById("reset").addEventListener("click", () => {
  primary.value = defaults.primary;
  secondary.value = defaults.secondary;
  radius.value = defaults.radius;
  spacing.value = defaults.spacing;
  speed.value = defaults.speed;
  updateTokens();
});

document.getElementById("copyCSS").addEventListener("click", () => {
  navigator.clipboard.writeText(cssOutput.value);
  alert("CSS copied!");
});

document.getElementById("copyJSON").addEventListener("click", () => {
  navigator.clipboard.writeText(jsonOutput.value);
  alert("JSON copied!");
});

updateTokens();
