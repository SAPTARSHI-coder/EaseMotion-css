const canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '0';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

let width, height;
let columns = [];
let drops = [];
let fontSize = 20;
let columnCount = 80;
let animationId = null;

const chars = '日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    columnCount = Math.floor(width / fontSize);
    initDrops();
}

function initDrops() {
    drops = [];
    for (let i = 0; i < columnCount; i++) {
        drops[i] = {
            y: Math.random() * -height,
            speed: 2 + Math.random() * 8,
            chars: []
        };
        const charCount = 8 + Math.floor(Math.random() * 15);
        for (let j = 0; j < charCount; j++) {
            drops[i].chars[j] = chars[Math.floor(Math.random() * chars.length)];
        }
    }
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, width, height);
    
    ctx.font = `${fontSize}px 'Courier New', monospace`;
    
    for (let i = 0; i < columnCount; i++) {
        const drop = drops[i];
        const x = i * fontSize;
        
        for (let j = 0; j < drop.chars.length; j++) {
            const y = drop.y - j * fontSize;
            if (y > 0 && y < height) {
                const brightness = 1 - (j / drop.chars.length);
                const intensity = Math.floor(100 + 155 * brightness);
                
                if (j === 0) {
                    ctx.fillStyle = `rgb(255, 255, 255)`;
                } else {
                    ctx.fillStyle = `rgb(0, ${intensity}, 0)`;
                }
                
                ctx.fillText(drop.chars[j], x, y);
            }
        }
        
        drop.y += drop.speed;
        
        if (drop.y - (drop.chars.length * fontSize) > height) {
            drop.y = Math.random() * -100;
            drop.speed = 2 + Math.random() * 8;
            const charCount = 8 + Math.floor(Math.random() * 15);
            drop.chars = [];
            for (let j = 0; j < charCount; j++) {
                drop.chars[j] = chars[Math.floor(Math.random() * chars.length)];
            }
        }
    }
    
    animationId = requestAnimationFrame(draw);
}

function setRainDensity(density) {
    const targetColumns = Math.floor((density / 100) * (width / fontSize));
    if (targetColumns > columnCount) {
        for (let i = columnCount; i < targetColumns; i++) {
            drops[i] = {
                y: Math.random() * -height,
                speed: 2 + Math.random() * 8,
                chars: []
            };
            const charCount = 8 + Math.floor(Math.random() * 15);
            for (let j = 0; j < charCount; j++) {
                drops[i].chars[j] = chars[Math.floor(Math.random() * chars.length)];
            }
        }
    } else if (targetColumns < columnCount) {
        drops = drops.slice(0, targetColumns);
    }
    columnCount = targetColumns;
}

resize();
window.addEventListener('resize', resize);
initDrops();
draw();

document.getElementById('moreRain').addEventListener('click', () => {
    const newCount = Math.min(150, columnCount + 10);
    setRainDensity((newCount / (width / fontSize)) * 100);
});

document.getElementById('lessRain').addEventListener('click', () => {
    const newCount = Math.max(20, columnCount - 10);
    setRainDensity((newCount / (width / fontSize)) * 100);
});

document.getElementById('resetRain').addEventListener('click', () => {
    initDrops();
});