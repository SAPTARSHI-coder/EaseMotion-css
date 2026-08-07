const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let W, H;
function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const mouse = { x: W/2, y: H/2 };
const current = { x: W/2, y: H/2 };
let particles = [];
let paused = false;
let trailEnabled = true;

const speedSlider = document.getElementById('speed');
const sizeSlider = document.getElementById('size');
const trailSlider = document.getElementById('trail');
const hueSlider = document.getElementById('hue');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const trailBtn = document.getElementById('trailBtn');

let speed = 8, size = 60, trailLength = 15, hue = 220;

speedSlider.addEventListener('input', e => speed = Number(e.target.value));
sizeSlider.addEventListener('input', e => size = Number(e.target.value));
trailSlider.addEventListener('input', e => { trailLength = Number(e.target.value); });
hueSlider.addEventListener('input', e => { hue = Number(e.target.value); });

pauseBtn.addEventListener('click', () => {
  paused = !paused;
  pauseBtn.textContent = paused ? '▶️ Resume' : '⏸️ Pause';
});
resetBtn.addEventListener('click', () => {
  particles = [];
  current.x = mouse.x;
  current.y = mouse.y;
});
trailBtn.addEventListener('click', () => {
  trailEnabled = !trailEnabled;
  trailBtn.textContent = `✨ Trail: ${trailEnabled ? 'ON' : 'OFF'}`;
  if (!trailEnabled) particles = [];
});

document.addEventListener('keydown', (e) => {
  if (e.key === ' ' || e.code === 'Space') { e.preventDefault(); pauseBtn.click(); }
  if (e.key === 'r' || e.key === 'R') resetBtn.click();
  if (e.key === 't' || e.key === 'T') trailBtn.click();
});

document.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});
document.addEventListener('touchmove', (e) => {
  const t = e.touches[0];
  mouse.x = t.clientX;
  mouse.y = t.clientY;
}, { passive: true });

class Particle {
  constructor(x, y, hue) {
    this.x = x;
    this.y = y;
    this.life = 1;
    this.decay = 0.008 + Math.random() * 0.025;
    this.radius = 3 + Math.random() * 10;
    this.hue = hue + (Math.random() - 0.5) * 40;
  }
  update() {
    this.life -= this.decay;
    this.radius *= 0.99;
  }
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.life * 0.85;
    ctx.shadowColor = `hsl(${this.hue}, 100%, 60%)`;
    ctx.shadowBlur = 25;
    ctx.fillStyle = `hsl(${this.hue}, 100%, 65%)`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.max(this.radius, 0.5), 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function animate() {
  if (!paused) {
    const dx = mouse.x - current.x;
    const dy = mouse.y - current.y;
    const easeFactor = 1 - Math.exp(-speed * 0.045);
    current.x += dx * easeFactor;
    current.y += dy * easeFactor;

    if (trailEnabled && trailLength > 0) {
      particles.push(new Particle(current.x, current.y, hue));
      const maxParticles = trailLength * 4;
      if (particles.length > maxParticles) particles.splice(0, particles.length - maxParticles);
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      if (particles[i].life <= 0 || particles[i].radius < 0.3) {
        particles.splice(i, 1);
      }
    }
  }

  ctx.clearRect(0, 0, W, H);
  for (const p of particles) p.draw(ctx);

  ctx.save();
  const glowColor = `hsl(${hue}, 100%, 60%)`;
  ctx.shadowColor = glowColor;
  ctx.shadowBlur = 60;

  const gradient = ctx.createRadialGradient(
    current.x, current.y, 0,
    current.x, current.y, size / 2
  );
  gradient.addColorStop(0, `hsla(${hue}, 100%, 75%, 0.95)`);
  gradient.addColorStop(0.5, `hsla(${hue}, 100%, 55%, 0.7)`);
  gradient.addColorStop(1, `hsla(${hue}, 100%, 50%, 0)`);
  
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(current.x, current.y, size / 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  requestAnimationFrame(animate);
}
animate();