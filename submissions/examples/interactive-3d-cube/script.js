const cube = document.getElementById('cube');
let targetX = -15, targetY = 30;

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * -2;
  targetY = x * 45;
  targetX = y * 45;
  cube.style.transform = `rotateX(${targetX}deg) rotateY(${targetY}deg)`;
});
