// 3D Typographic Spiral Ribbon
// Lays out each letter of WORD along a vertical helix using
// rotateY + translateZ, then lets the user drag to manually spin
// the ribbon (pausing the auto-rotate CSS animation while dragging).

const WORD = "EASEMOTION";
const RADIUS = 130;
const VERTICAL_STEP = 26;
const ribbon = document.getElementById("spiral-ribbon");
const stage = document.getElementById("spiral-stage");

const letters = WORD.split("");
const angleStep = 360 / letters.length;

letters.forEach((char, i) => {
  const el = document.createElement("span");
  el.className = "spiral-letter";
  el.textContent = char;
  const angle = i * angleStep;
  const yOffset = (i - (letters.length - 1) / 2) * VERTICAL_STEP * -1;
  el.style.transform = `translateY(${yOffset}px) rotateY(${angle}deg) translateZ(${RADIUS}px)`;
  ribbon.appendChild(el);
});

// Manual drag-to-rotate, independent of the CSS auto-rotate animation
let isDragging = false;
let startX = 0;
let currentRotation = 0;
let dragRotation = 0;

function getRotationFromStyle() {
  const style = getComputedStyle(ribbon);
  const match = style.transform.match(/matrix3d|none/);
  return 0; // CSS animation drives base rotation; drag adds an offset layer
}

stage.addEventListener("pointerdown", (e) => {
  isDragging = true;
  startX = e.clientX;
  stage.classList.add("dragging");
});

window.addEventListener("pointermove", (e) => {
  if (!isDragging) return;
  const delta = e.clientX - startX;
  dragRotation += delta * 0.5;
  ribbon.style.transform = `rotateY(${dragRotation}deg)`;
  startX = e.clientX;
});

window.addEventListener("pointerup", () => {
  isDragging = false;
  stage.classList.remove("dragging");
});
