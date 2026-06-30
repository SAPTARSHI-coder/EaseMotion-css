import * as THREE from "three";

let scene, camera, renderer, particles, particleSystem;
let mouseX = 0,
  mouseY = 0;
let targetX = 0,
  targetY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let explodeMode = false;
let explodeProgress = 0;
let colorIndex = 0;
let time = 0;

const colors = [
  [0x6c63ff, 0xa855f7, 0xec4899],
  [0x06b6d4, 0x22d3ee, 0x67e8f9],
  [0x10b981, 0x34d399, 0x6ee7b7],
  [0xf59e0b, 0xfbbf24, 0xfcd34d],
  [0xef4444, 0xf87171, 0xfca5a5],
];

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0d0d14);
  scene.fog = new THREE.FogExp2(0x0d0d14, 0.0008);

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 5, 25);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BufferGeometry();
  const particleCount = 4000;
  const positions = new Float32Array(particleCount * 3);
  const colorsArray = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const radius = 12;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
    positions[i * 3 + 2] = radius * Math.cos(phi);

    const color = new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.8, 0.6);
    colorsArray[i * 3] = color.r;
    colorsArray[i * 3 + 1] = color.g;
    colorsArray[i * 3 + 2] = color.b;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colorsArray, 3));

  const particleTexture = (() => {
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.arc(16, 16, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.shadowBlur = 0;
    return new THREE.CanvasTexture(canvas);
  })();

  const material = new THREE.PointsMaterial({
    size: 0.25,
    vertexColors: true,
    map: particleTexture,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
  });

  particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);

  const starGeometry = new THREE.BufferGeometry();
  const starCount = 800;
  const starPositions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    starPositions[i * 3] = (Math.random() - 0.5) * 200;
    starPositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
    starPositions[i * 3 + 2] = (Math.random() - 0.5) * 100 - 50;
  }
  starGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(starPositions, 3)
  );
  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.08,
    transparent: true,
    opacity: 0.5,
  });
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);

  document.addEventListener("mousemove", onDocumentMouseMove);
  window.addEventListener("resize", onWindowResize);

  document.getElementById("colorBtn").addEventListener("click", changeColors);
  document
    .getElementById("explodeBtn")
    .addEventListener("click", toggleExplode);

  animate();
}

function onDocumentMouseMove(event) {
  mouseX = (event.clientX - windowHalfX) / 100;
  mouseY = (event.clientY - windowHalfY) / 100;
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function changeColors() {
  colorIndex = (colorIndex + 1) % colors.length;
  const colorSet = colors[colorIndex];
  const positions = particleSystem.geometry.attributes.position.array;
  const colorsArray = particleSystem.geometry.attributes.color.array;

  for (let i = 0; i < positions.length / 3; i++) {
    const t = Math.sin(i * 0.01) * 0.5 + 0.5;
    let r, g, b;
    if (t < 0.33) {
      const factor = t / 0.33;
      r =
        (((colorSet[0] >> 16) & 255) / 255) * (1 - factor) +
        (((colorSet[1] >> 16) & 255) / 255) * factor;
      g =
        (((colorSet[0] >> 8) & 255) / 255) * (1 - factor) +
        (((colorSet[1] >> 8) & 255) / 255) * factor;
      b =
        ((colorSet[0] & 255) / 255) * (1 - factor) +
        ((colorSet[1] & 255) / 255) * factor;
    } else if (t < 0.66) {
      const factor = (t - 0.33) / 0.33;
      r =
        (((colorSet[1] >> 16) & 255) / 255) * (1 - factor) +
        (((colorSet[2] >> 16) & 255) / 255) * factor;
      g =
        (((colorSet[1] >> 8) & 255) / 255) * (1 - factor) +
        (((colorSet[2] >> 8) & 255) / 255) * factor;
      b =
        ((colorSet[1] & 255) / 255) * (1 - factor) +
        ((colorSet[2] & 255) / 255) * factor;
    } else {
      const factor = (t - 0.66) / 0.34;
      r =
        (((colorSet[2] >> 16) & 255) / 255) * (1 - factor) +
        (((colorSet[0] >> 16) & 255) / 255) * factor;
      g =
        (((colorSet[2] >> 8) & 255) / 255) * (1 - factor) +
        (((colorSet[0] >> 8) & 255) / 255) * factor;
      b =
        ((colorSet[2] & 255) / 255) * (1 - factor) +
        ((colorSet[0] & 255) / 255) * factor;
    }
    colorsArray[i * 3] = r;
    colorsArray[i * 3 + 1] = g;
    colorsArray[i * 3 + 2] = b;
  }
  particleSystem.geometry.attributes.color.needsUpdate = true;
}

function toggleExplode() {
  explodeMode = !explodeMode;
  explodeProgress = 0;
  const btn = document.getElementById("explodeBtn");
  btn.textContent = explodeMode ? "Reset Mode" : "Explode Mode";

  const positions = particleSystem.geometry.attributes.position.array;
  const originalPositions = positions.slice();

  if (explodeMode) {
    for (let i = 0; i < positions.length / 3; i++) {
      const angle1 = Math.random() * Math.PI * 2;
      const angle2 = Math.random() * Math.PI * 2;
      const radius = 25 + Math.random() * 15;
      positions[i * 3] = Math.sin(angle1) * Math.cos(angle2) * radius;
      positions[i * 3 + 1] = Math.sin(angle1) * Math.sin(angle2) * radius;
      positions[i * 3 + 2] = Math.cos(angle1) * radius;
    }
  } else {
    for (let i = 0; i < positions.length / 3; i++) {
      const radius = 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
  }
  particleSystem.geometry.attributes.position.needsUpdate = true;
}

function animate() {
  requestAnimationFrame(animate);

  time += 0.008;

  targetX += (mouseX - targetX) * 0.05;
  targetY += (mouseY - targetY) * 0.05;

  particleSystem.rotation.y = targetX * 0.5;
  particleSystem.rotation.x = targetY * 0.3;

  particleSystem.rotation.z = Math.sin(time * 0.5) * 0.1;

  const scale = 1 + Math.sin(time * 0.5) * 0.03;
  particleSystem.scale.set(scale, scale, scale);

  renderer.render(scene, camera);
}

init();
