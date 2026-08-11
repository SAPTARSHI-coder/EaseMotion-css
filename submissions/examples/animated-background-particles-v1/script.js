const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
let w, h, particles, mouse;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

function init() {
  resize();
  particles = [];
  mouse = { x: null, y: null };
  const count = Math.min(80, Math.floor((w * h) / 12000));
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 2 + 1,
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "rgba(99, 102, 241, 0.5)";
  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;
    if (mouse.x !== null) {
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        p.x -= dx * 0.02;
        p.y -= dy * 0.02;
      }
    }
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 100)})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(draw);
}

window.addEventListener("resize", resize);
canvas.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
canvas.addEventListener("mouseleave", () => { mouse.x = null; mouse.y = null; });

init();
draw();
