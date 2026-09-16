const canvas = document.getElementById('noiseCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let animationId = null;
let isActive = true;
let intensity = 0.35;

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}
resize();
window.addEventListener('resize', resize);

function drawNoise() {
    if (!isActive) {
        ctx.clearRect(0, 0, width, height);
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
        return;
    }
    
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;
    
    const noiseStrength = Math.floor(intensity * 255);
    
    for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * noiseStrength;
        data[i] = value;
        data[i + 1] = value * 0.8;
        data[i + 2] = value * 1.2;
        data[i + 3] = 255;
    }
    
    ctx.putImageData(imageData, 0, 0);
    
    animationId = requestAnimationFrame(drawNoise);
}

document.getElementById('intensityLow').addEventListener('click', () => {
    intensity = 0.15;
    canvas.style.opacity = '0.15';
});

document.getElementById('intensityMedium').addEventListener('click', () => {
    intensity = 0.35;
    canvas.style.opacity = '0.35';
});

document.getElementById('intensityHigh').addEventListener('click', () => {
    intensity = 0.6;
    canvas.style.opacity = '0.6';
});

document.getElementById('toggleNoise').addEventListener('click', () => {
    isActive = !isActive;
    const btn = document.getElementById('toggleNoise');
    if (isActive) {
        btn.textContent = 'Stop Noise';
        drawNoise();
    } else {
        btn.textContent = 'Start Noise';
        ctx.clearRect(0, 0, width, height);
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }
});

drawNoise();