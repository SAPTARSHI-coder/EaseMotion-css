const canvas = document.getElementById('sunburst-canvas');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = canvas.clientWidth * devicePixelRatio;
  canvas.height = canvas.clientHeight * devicePixelRatio;
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
}
window.addEventListener('resize', resize);
resize();

const colorSchemes = {
  golden: ['#fbbf24', '#f59e0b', '#d97706'],
  sunset: ['#f97316', '#ec4899', '#a855f7'],
  sunrise: ['#fde047', '#fb923c', '#f43f5e'],
  cool: ['#38bdf8', '#818cf8', '#a78bfa'],
  neon: ['#22d3ee', '#a3e635', '#f472b6'],
  fire: ['#ef4444', '#f97316', '#facc15'],
  ice: ['#bae6fd', '#7dd3fc', '#38bdf8'],
  aurora: ['#4ade80', '#22d3ee', '#818cf8']
};

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const state = {
  mode: 'burst',
  colorKey: 'golden',
  rayCount: 32,
  raySpeed: 5,
  rayLength: 220,
  glowIntensity: 15,
  rays: [],
  pulsePhase: 0
};

const modeSelect = document.getElementById('mode-select');
const colorSelect = document.getElementById('color-select');
const rayCountInput = document.getElementById('ray-count');
const raySpeedInput = document.getElementById('ray-speed');
const rayLengthInput = document.getElementById('ray-length');
const glowInput = document.getElementById('glow-intensity');
const burstBtn = document.getElementById('burst-btn');

const rayCountVal = document.getElementById('ray-count-val');
const raySpeedVal = document.getElementById('ray-speed-val');
const rayLengthVal = document.getElementById('ray-length-val');
const glowVal = document.getElementById('glow-intensity-val');

modeSelect.addEventListener('change', () => { state.mode = modeSelect.value; });
colorSelect.addEventListener('change', () => { state.colorKey = colorSelect.value; });
rayCountInput.addEventListener('input', () => {
  state.rayCount = Number(rayCountInput.value);
  rayCountVal.textContent = state.rayCount;
});
raySpeedInput.addEventListener('input', () => {
  state.raySpeed = Number(raySpeedInput.value);
  raySpeedVal.textContent = state.raySpeed;
});
rayLengthInput.addEventListener('input', () => {
  state.rayLength = Number(rayLengthInput.value);
  rayLengthVal.textContent = state.rayLength;
});
glowInput.addEventListener('input', () => {
  state.glowIntensity = Number(glowInput.value);
  glowVal.textContent = state.glowIntensity;
});

function spawnBurst(cx, cy) {
  const colors = colorSchemes[state.colorKey];
  for (let i = 0; i < state.rayCount; i++) {
    const angle = (i / state.rayCount) * Math.PI * 2;
    state.rays.push({
      cx, cy, angle,
      length: 0,
      maxLength: state.rayLength * (0.7 + Math.random() * 0.6),
      speed: (state.raySpeed * (0.8 + Math.random() * 0.4)),
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 1
    });
  }
}

canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  spawnBurst(e.clientX - rect.left, e.clientY - rect.top);
});

burstBtn.addEventListener('click', () => {
  spawnBurst(canvas.clientWidth / 2, canvas.clientHeight / 2);
});

window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    spawnBurst(canvas.clientWidth / 2, canvas.clientHeight / 2);
  }
  if (e.key === 'p' || e.key === 'P') {
    state.mode = state.mode === 'burst' ? 'pulse' : 'burst';
    modeSelect.value = state.mode;
  }
});

function drawRay(ray, alpha) {
  const x2 = ray.cx + Math.cos(ray.angle) * ray.length;
  const y2 = ray.cy + Math.sin(ray.angle) * ray.length;

  ctx.save();
  ctx.globalAlpha = alpha;
  if (state.glowIntensity > 0 && !prefersReducedMotion) {
    ctx.shadowBlur = state.glowIntensity;
    ctx.shadowColor = ray.color;
  }
  ctx.strokeStyle = ray.color;
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(ray.cx, ray.cy);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.restore();
}

function updateBurstRays() {
  for (let i = state.rays.length - 1; i >= 0; i--) {
    const ray = state.rays[i];
    ray.length += ray.speed * 4;
    ray.life -= 0.012;
    if (ray.length >= ray.maxLength || ray.life <= 0) {
      state.rays.splice(i, 1);
      continue;
    }
    drawRay(ray, Math.max(ray.life, 0));
  }
}

function drawPulse(time) {
  const cx = canvas.clientWidth / 2;
  const cy = canvas.clientHeight / 2;
  const colors = colorSchemes[state.colorKey];
  const pulse = (Math.sin(time / 500) + 1) / 2;
  const currentLength = state.rayLength * (0.5 + pulse * 0.5);

  for (let i = 0; i < state.rayCount; i++) {
    const angle = (i / state.rayCount) * Math.PI * 2 + time / 4000;
    const ray = {
      cx, cy, angle,
      length: currentLength,
      color: colors[i % colors.length]
    };
    drawRay(ray, 0.5 + pulse * 0.5);
  }
}

function animate(time) {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  if (state.mode === 'burst') {
    updateBurstRays();
  } else {
    drawPulse(time);
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);