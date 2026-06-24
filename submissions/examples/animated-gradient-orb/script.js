import * as THREE from 'three';

let scene, camera, renderer, sphere, material;
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;
let time = 0;
let rotationSpeed = 0.005;

const colors = [
    new THREE.Color(0x6c63ff),
    new THREE.Color(0xa855f7),
    new THREE.Color(0xec4899),
    new THREE.Color(0x06b6d4),
    new THREE.Color(0x10b981),
    new THREE.Color(0xf59e0b),
    new THREE.Color(0xef4444)
];

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050508);
    
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 3.5);
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);
    
    const geometry = new THREE.SphereGeometry(1.2, 128, 128);
    
    const vertexShader = `
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
            vUv = uv;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
            gl_PointSize = 1.0;
            gl_Position = projectionMatrix * mvPosition;
        }
    `;
    
    const fragmentShader = `
        uniform float uTime;
        varying vec2 vUv;
        
        void main() {
            vec2 uv = vUv;
            float t = uTime * 0.5;
            
            float r = sin(uv.x * 3.14159 * 4.0 + t) * cos(uv.y * 3.14159 * 3.0 + t * 0.7);
            float g = sin(uv.x * 3.14159 * 5.0 + t * 1.2) * cos(uv.y * 3.14159 * 4.0 + t * 0.5);
            float b = sin(uv.x * 3.14159 * 6.0 + t * 0.8) * cos(uv.y * 3.14159 * 5.0 + t * 0.9);
            
            r = (r + 1.0) / 2.0;
            g = (g + 1.0) / 2.0;
            b = (b + 1.0) / 2.0;
            
            r = r * 0.8 + 0.4;
            g = g * 0.6 + 0.2;
            b = b * 0.9 + 0.1;
            
            vec3 color1 = vec3(0.42, 0.39, 1.0);
            vec3 color2 = vec3(0.66, 0.33, 0.98);
            vec3 color3 = vec3(0.93, 0.28, 0.60);
            
            float mix1 = sin(uv.x * 3.14159 * 2.0 + uTime) * 0.5 + 0.5;
            float mix2 = cos(uv.y * 3.14159 * 2.0 + uTime * 0.8) * 0.5 + 0.5;
            
            vec3 finalColor = mix(color1, color2, mix1);
            finalColor = mix(finalColor, color3, mix2);
            
            finalColor = finalColor * (r * 0.8 + g * 0.6 + b * 0.8);
            
            float glow = sin(uv.x * 3.14159 * 8.0) * sin(uv.y * 3.14159 * 8.0);
            finalColor += vec3(0.3, 0.2, 0.5) * glow * 0.3;
            
            gl_FragColor = vec4(finalColor, 1.0);
        }
    `;
    
    material = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 }
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        side: THREE.DoubleSide
    });
    
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 2000;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
        starPositions[i * 3] = (Math.random() - 0.5) * 200;
        starPositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
        starPositions[i * 3 + 2] = (Math.random() - 0.5) * 80 - 40;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.08, transparent: true, opacity: 0.4 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
    
    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);
    
    document.getElementById('speedSlow').addEventListener('click', () => rotationSpeed = 0.002);
    document.getElementById('speedNormal').addEventListener('click', () => rotationSpeed = 0.005);
    document.getElementById('speedFast').addEventListener('click', () => rotationSpeed = 0.012);
    
    animate();
}

function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = (event.clientY / window.innerHeight) * 2 - 1;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    
    time += 0.016;
    material.uniforms.uTime.value = time;
    
    targetX += (mouseX * Math.PI - targetX) * 0.05;
    targetY += (mouseY * Math.PI * 0.5 - targetY) * 0.05;
    
    sphere.rotation.y = targetX;
    sphere.rotation.x = targetY * 0.5;
    sphere.rotation.z += rotationSpeed;
    
    renderer.render(scene, camera);
}

init();s