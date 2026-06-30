const canvas = document.getElementById("gridCanvas");
const ctx = canvas.getContext("2d");

let width, height;
let time = 0;

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}
resize();
window.addEventListener("resize", resize);

function drawGrid() {
  ctx.clearRect(0, 0, width, height);

  ctx.strokeStyle = "#6c63ff";
  ctx.lineWidth = 1;
  ctx.shadowBlur = 8;
  ctx.shadowColor = "#6c63ff";

  const cellSize = 60;
  const cols = Math.ceil(width / cellSize) + 2;
  const rows = Math.ceil(height / cellSize) + 2;

  ctx.beginPath();

  for (let i = -1; i <= cols; i++) {
    const x = i * cellSize;
    const offsetX = Math.sin(time * 0.5 + i * 0.2) * 8;
    const finalX = x + offsetX;

    let lastY = 0;
    let hasMove = false;

    for (let j = 0; j <= rows; j++) {
      const y = j * cellSize;
      const offsetY = Math.sin(time * 0.8 + j * 0.15) * 5;
      const finalY = y + offsetY;

      if (!hasMove) {
        ctx.moveTo(finalX, finalY);
        hasMove = true;
      } else {
        ctx.lineTo(finalX, finalY);
      }
      lastY = finalY;
    }
  }

  for (let j = -1; j <= rows; j++) {
    const y = j * cellSize;
    const offsetY = Math.sin(time * 0.6 + j * 0.18) * 8;
    const finalY = y + offsetY;

    let lastX = 0;
    let hasMove = false;

    for (let i = 0; i <= cols; i++) {
      const x = i * cellSize;
      const offsetX = Math.sin(time * 0.7 + i * 0.12) * 5;
      const finalX = x + offsetX;

      if (!hasMove) {
        ctx.moveTo(finalX, finalY);
        hasMove = true;
      } else {
        ctx.lineTo(finalX, finalY);
      }
      lastX = finalX;
    }
  }

  ctx.stroke();

  for (let i = 0; i < 50; i++) {
    const x = (i / 50) * width;
    const waveY = height * 0.5 + Math.sin(time * 1.5 + i * 0.3) * 50;

    ctx.beginPath();
    ctx.strokeStyle = `rgba(108, 99, 255, ${0.1 + Math.sin(time + i) * 0.05})`;
    ctx.lineWidth = 0.5;
    ctx.moveTo(x, waveY - 100);
    ctx.lineTo(x, waveY + 100);
    ctx.stroke();
  }

  time += 0.016;
  requestAnimationFrame(drawGrid);
}

drawGrid();
