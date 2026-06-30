const canvas = document.getElementById("waveformCanvas");
const ctx = canvas.getContext("2d");
let animationId = null;
let isPlaying = true;
let currentMode = "sine";
let phase = 0;
let time = 0;

function resizeCanvas() {
  const container = canvas.parentElement;
  const rect = container.getBoundingClientRect();
  canvas.width = Math.min(1200, rect.width - 32);
  canvas.height = 300;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function generateWaveform(mode, t, frequency = 2) {
  const x = t * frequency;
  switch (mode) {
    case "sine":
      return Math.sin(x * Math.PI * 2);
    case "square":
      return Math.sin(x * Math.PI * 2) > 0 ? 1 : -1;
    case "sawtooth":
      return (x % 1) * 2 - 1;
    case "triangle":
      return Math.abs((x % 1) * 4 - 2) - 1;
    case "noise":
      return Math.random() * 2 - 1;
    case "bass":
      const env = Math.exp(-t * 0.5);
      return Math.sin(x * Math.PI * 2 * 0.5) * env * 1.5;
    default:
      return Math.sin(x * Math.PI * 2);
  }
}

function drawWaveform() {
  if (!isPlaying) return;

  const width = canvas.width;
  const height = canvas.height;
  const centerY = height / 2;
  const amplitude = height * 0.4;

  ctx.clearRect(0, 0, width, height);

  ctx.beginPath();
  ctx.strokeStyle = "#6c63ff";
  ctx.lineWidth = 2;
  ctx.shadowBlur = 10;
  ctx.shadowColor = "#6c63ff";

  let prevY = centerY;

  for (let x = 0; x < width; x++) {
    const progress = x / width;
    const y = generateWaveform(
      currentMode,
      phase + progress * 4,
      currentMode === "bass" ? 1 : 2.5
    );
    const yPos = centerY + y * amplitude;

    if (x === 0) {
      ctx.moveTo(x, yPos);
    } else {
      ctx.lineTo(x, yPos);
    }
    prevY = yPos;
  }

  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "rgba(108, 99, 255, 0.3)";
  ctx.lineWidth = 1;
  ctx.moveTo(0, centerY);
  ctx.lineTo(width, centerY);
  ctx.stroke();

  const gradient = ctx.createLinearGradient(0, 0, width, 0);
  gradient.addColorStop(0, "rgba(108,99,255,0)");
  gradient.addColorStop(0.5, "rgba(108,99,255,0.1)");
  gradient.addColorStop(1, "rgba(108,99,255,0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  phase += 0.02;
  time += 0.016;

  animationId = requestAnimationFrame(drawWaveform);
}

function startVisualization() {
  if (animationId) cancelAnimationFrame(animationId);
  isPlaying = true;
  drawWaveform();
}

function stopVisualization() {
  isPlaying = false;
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0d0d14";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document
  .getElementById("playBtn")
  .addEventListener("click", startVisualization);
document.getElementById("stopBtn").addEventListener("click", stopVisualization);

document.querySelectorAll(".mode-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".mode-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentMode = btn.getAttribute("data-mode");
    phase = 0;
    if (!isPlaying) startVisualization();
  });
});

startVisualization();
