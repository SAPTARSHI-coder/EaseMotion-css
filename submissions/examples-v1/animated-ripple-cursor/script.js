const canvas = document.getElementById("rippleCanvas");
const ctx = canvas.getContext("2d");

let width, height;
let ripples = [];
let mouseX = 0,
  mouseY = 0;
let trailPositions = [];
let colorMode = "purple";
let animationId = null;

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}
resize();
window.addEventListener("resize", resize);

function getRippleColor(progress, mode) {
  if (mode === "purple") {
    return `rgba(108, 99, 255, ${1 - progress})`;
  } else if (mode === "blue") {
    return `rgba(6, 182, 212, ${1 - progress})`;
  } else if (mode === "rainbow") {
    const hue = (Date.now() * 0.002 + progress * 360) % 360;
    return `hsla(${hue}, 80%, 60%, ${1 - progress})`;
  }
  return `rgba(108, 99, 255, ${1 - progress})`;
}

class Ripple {
  constructor(x, y, size, isClick = false) {
    this.x = x;
    this.y = y;
    this.radius = isClick ? 5 : 2;
    this.maxRadius = isClick ? 120 : 60;
    this.opacity = 1;
    this.age = 0;
    this.life = 60;
    this.isClick = isClick;
  }

  update() {
    this.age++;
    this.radius += (this.maxRadius - this.radius) / 8;
    this.opacity = 1 - this.age / this.life;
    return this.age < this.life;
  }

  draw() {
    const progress = this.age / this.life;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = getRippleColor(progress, colorMode);
    ctx.lineWidth = this.isClick ? 3 : 2;
    ctx.stroke();

    if (this.isClick && this.age < 15) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = getRippleColor(progress, colorMode).replace(
        "1 - progress",
        "0.3"
      );
      ctx.fill();
    }
  }
}

function addRipple(x, y, isClick = false) {
  ripples.push(new Ripple(x, y, 0, isClick));
  if (ripples.length > 50) {
    ripples = ripples.slice(-50);
  }
}

function draw() {
  ctx.clearRect(0, 0, width, height);

  ripples = ripples.filter((ripple) => ripple.update());
  ripples.forEach((ripple) => ripple.draw());

  trailPositions.push({ x: mouseX, y: mouseY, age: 0 });
  trailPositions = trailPositions.filter((pos) => pos.age < 20);
  trailPositions.forEach((pos) => pos.age++);

  for (let i = 0; i < trailPositions.length; i++) {
    const pos = trailPositions[i];
    const alpha = 1 - pos.age / 20;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(108, 99, 255, ${alpha * 0.3})`;
    ctx.fill();
  }

  animationId = requestAnimationFrame(draw);
}

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  addRipple(mouseX, mouseY, false);
});

document.addEventListener("click", (e) => {
  addRipple(e.clientX, e.clientY, true);
});

document.getElementById("colorPurple").addEventListener("click", () => {
  colorMode = "purple";
});

document.getElementById("colorBlue").addEventListener("click", () => {
  colorMode = "blue";
});

document.getElementById("colorRainbow").addEventListener("click", () => {
  colorMode = "rainbow";
});

document.getElementById("clearRipples").addEventListener("click", () => {
  ripples = [];
  trailPositions = [];
});

draw();
