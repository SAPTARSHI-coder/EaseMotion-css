const canvasContainer = document.getElementById('canvas-container');
const patternTypeSelect = document.getElementById('pattern-type');
const speedInput = document.getElementById('speed');
const sizeInput = document.getElementById('size');
const shiftInput = document.getElementById('shift');
const speedVal = document.getElementById('speed-val');
const sizeVal = document.getElementById('size-val');
const shiftVal = document.getElementById('shift-val');
const playPauseBtn = document.getElementById('play-pause');
const shapeCountEl = document.getElementById('shape-count');

let isPlaying = true;
let time = 0;
let animationFrameId;
let tiles = [];

// Configuration
let config = {
    pattern: patternTypeSelect.value,
    speed: parseFloat(speedInput.value),
    size: parseInt(sizeInput.value),
    shiftIntensity: parseInt(shiftInput.value) / 100
};

// Event Listeners
patternTypeSelect.addEventListener('change', (e) => {
    config.pattern = e.target.value;
    generateTiles();
});

speedInput.addEventListener('input', (e) => {
    config.speed = parseFloat(e.target.value);
    speedVal.textContent = config.speed.toFixed(1) + 'x';
});

sizeInput.addEventListener('input', (e) => {
    config.size = parseInt(e.target.value);
    sizeVal.textContent = config.size + 'px';
    generateTiles();
});

shiftInput.addEventListener('input', (e) => {
    config.shiftIntensity = parseInt(e.target.value) / 100;
    shiftVal.textContent = e.target.value + '%';
});

playPauseBtn.addEventListener('click', togglePlay);

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
    } else if (e.code === 'KeyP') {
        const options = Array.from(patternTypeSelect.options).map(o => o.value);
        const currentIndex = options.indexOf(config.pattern);
        const nextIndex = (currentIndex + 1) % options.length;
        patternTypeSelect.value = options[nextIndex];
        config.pattern = options[nextIndex];
        generateTiles();
    } else if (e.code === 'KeyR') {
        resetControls();
    }
});

function togglePlay() {
    isPlaying = !isPlaying;
    playPauseBtn.textContent = isPlaying ? 'Pause' : 'Play';
}

function resetControls() {
    patternTypeSelect.value = 'hexagonal';
    speedInput.value = '1';
    sizeInput.value = '40';
    shiftInput.value = '50';
    
    config.pattern = 'hexagonal';
    config.speed = 1;
    config.size = 40;
    config.shiftIntensity = 0.5;
    
    speedVal.textContent = '1.0x';
    sizeVal.textContent = '40px';
    shiftVal.textContent = '50%';
    
    isPlaying = true;
    playPauseBtn.textContent = 'Pause';
    
    generateTiles();
}

function generateTiles() {
    canvasContainer.innerHTML = '';
    tiles = [];
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    const size = config.size;
    
    let rows, cols;
    
    if (config.pattern === 'hexagonal') {
        const hexWidth = size * 2;
        const hexHeight = Math.sqrt(3) * size;
        const horizSpacing = hexWidth * 0.75;
        const vertSpacing = hexHeight;
        
        cols = Math.ceil(width / horizSpacing) + 2;
        rows = Math.ceil(height / vertSpacing) + 2;
        
        for (let r = -1; r < rows; r++) {
            for (let c = -1; c < cols; c++) {
                const x = c * horizSpacing;
                const y = r * vertSpacing + (c % 2 === 0 ? 0 : vertSpacing / 2);
                createTile(x, y, size * 2, hexHeight, 'hexagonal', r, c);
            }
        }
    } else if (config.pattern === 'triangular') {
        const triWidth = size;
        const triHeight = size * Math.sqrt(3) / 2;
        
        cols = Math.ceil(width / (triWidth / 2)) + 2;
        rows = Math.ceil(height / triHeight) + 2;
        
        for (let r = -1; r < rows; r++) {
            for (let c = -1; c < cols; c++) {
                const x = c * (triWidth / 2);
                const y = r * triHeight;
                const isUp = (c + r) % 2 === 0;
                createTile(x, y, triWidth, triHeight, 'triangular', r, c, isUp ? 'up' : 'down');
            }
        }
    } else if (config.pattern === 'square') {
        cols = Math.ceil(width / size) + 2;
        rows = Math.ceil(height / size) + 2;
        
        for (let r = -1; r < rows; r++) {
            for (let c = -1; c < cols; c++) {
                const x = c * size;
                const y = r * size;
                createTile(x, y, size, size, 'square', r, c);
            }
        }
    } else if (config.pattern === 'diamond') {
        const diaWidth = size;
        const diaHeight = size;
        
        cols = Math.ceil(width / (diaWidth / 2)) + 2;
        rows = Math.ceil(height / (diaHeight / 2)) + 2;
        
        for (let r = -1; r < rows; r++) {
            for (let c = -1; c < cols; c++) {
                if ((r + c) % 2 !== 0) continue;
                const x = c * (diaWidth / 2);
                const y = r * (diaHeight / 2);
                createTile(x, y, diaWidth, diaHeight, 'diamond', r, c);
            }
        }
    }
    
    shapeCountEl.textContent = tiles.length;
}

function createTile(x, y, w, h, type, r, c, extraClass = '') {
    const el = document.createElement('div');
    el.className = `tile shape-${type}`;
    if (extraClass) el.classList.add(extraClass);
    
    // Add +1 for a slight overlap to prevent visual gaps between shapes
    el.style.width = `${w + 1}px`;
    el.style.height = `${h + 1}px`;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    
    canvasContainer.appendChild(el);
    tiles.push({ el, x, y, r, c });
}

function animate() {
    if (isPlaying) {
        time += 0.05 * config.speed;
        
        const shiftIntensity = config.shiftIntensity;
        
        for (let i = 0; i < tiles.length; i++) {
            const t = tiles[i];
            
            // Calculate organic wave motion based on position and time
            const waveX = Math.sin(t.x * 0.01 + time) * 20 * shiftIntensity;
            const waveY = Math.cos(t.y * 0.01 + time) * 20 * shiftIntensity;
            const waveZ = Math.sin((t.x + t.y) * 0.005 + time * 1.5) * 50 * shiftIntensity;
            const scale = 1 + Math.sin(t.x * 0.01 + t.y * 0.01 + time) * 0.2 * shiftIntensity;
            
            // Dynamic color shift around the hue wheel
            const hue = (t.x * 0.1 + t.y * 0.1 + time * 20) % 360;
            const lightness = 40 + Math.sin(time + t.x * 0.02) * 20 * shiftIntensity;
            
            t.el.style.transform = `translate3d(${waveX}px, ${waveY}px, ${waveZ}px) scale(${scale})`;
            t.el.style.backgroundColor = `hsl(${hue}, 80%, ${lightness}%)`;
        }
    }
    
    animationFrameId = requestAnimationFrame(animate);
}

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        generateTiles();
    }, 200);
});

// Initialize
generateTiles();
animate();
