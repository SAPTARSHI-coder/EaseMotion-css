const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
let particleCount = 80;
let mouseX = -1000, mouseY = -1000;
let animationId = null;

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = 2 + Math.random() * 3;
        this.color = `hsl(${250 + Math.random() * 50}, 70%, 60%)`;
    }
    
    update() {
        let dx = this.x - mouseX;
        let dy = this.y - mouseY;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
            let angle = Math.atan2(dy, dx);
            let force = (100 - dist) / 100 * 2;
            this.vx += Math.cos(angle) * force * 0.1;
            this.vy += Math.sin(angle) * force * 0.1;
        }
        
        this.x += this.vx;
        this.y += this.vy;
        
        this.vx *= 0.99;
        this.vy *= 0.99;
        
        if (this.x < 0) { this.x = width; }
        if (this.x > width) { this.x = 0; }
        if (this.y < 0) { this.y = height; }
        if (this.y > height) { this.y = 0; }
    }
    
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
                const opacity = 1 - (dist / 120);
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(108, 99, 255, ${opacity * 0.3})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }
}

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initParticles();
}
resize();
window.addEventListener('resize', resize);

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

document.addEventListener('mouseleave', () => {
    mouseX = -1000;
    mouseY = -1000;
});

function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#0d0d14';
    ctx.fillRect(0, 0, width, height);
    
    drawConnections();
    
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    
    animationId = requestAnimationFrame(draw);
}

document.getElementById('moreParticles').addEventListener('click', () => {
    particleCount = Math.min(200, particleCount + 20);
    initParticles();
});

document.getElementById('lessParticles').addEventListener('click', () => {
    particleCount = Math.max(30, particleCount - 20);
    initParticles();
});

document.getElementById('resetParticles').addEventListener('click', () => {
    particleCount = 80;
    initParticles();
});

draw();