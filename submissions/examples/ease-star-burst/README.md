# 💥 Star Burst – Star Explodes Outward Like Supernova

An explosive supernova simulation where a star bursts outward with hundreds of glowing particles, creating a dramatic, cosmic explosion effect. Watch as particles explode in all directions with realistic physics, glowing trails, and stunning visual effects. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Dramatic supernova explosion** – Star bursts outward with hundreds of particles
- **Realistic physics** – Gravity, friction, wobble, and life decay
- **Glowing particles** – Each particle has glow, trail, and color variation
- **Adjustable parameters** – Particle count (50-500), explosion force (1-10×), particle size (1-10×), color temperature (Cool/Neutral/Warm)
- **Interactive controls** – Burst, Clear, Pause, and Reset buttons
- **Keyboard shortcuts** – B (Burst), C (Clear), Space (Pause), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the supernova:
   - Click **Burst** to create a supernova explosion
   - Click **Clear** to remove all particles
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click the **canvas** to trigger a burst
3. Adjust the sliders:
   - **Particle Count** – Number of particles (50-500)
   - **Explosion Force** – How far particles fly (1-10×)
   - **Particle Size** – Size of particles (1-10×)
   - **Color Temp** – Cool/Neutral/Warm color temperature
4. Use **keyboard shortcuts**:
   - `B` – Burst
   - `C` – Clear
   - `Space` – Pause/Resume
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Particle system** – Each particle has position, velocity, size, color, life, and trail
- **Physics simulation** – Gravity pulls particles down, friction slows them, life decays over time
- **Three particle types** – Core particles, slow debris, and fast sparks
- **Color temperature** – Cool (blue-white), Neutral (white), Warm (yellow-orange)
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Particle Count | Number of particles (50-500) | 200 |
| Explosion Force | How far particles fly (1-10×) | 5× |
| Particle Size | Size of particles (1-10×) | 5× |
| Color Temp | Cool/Neutral/Warm | Neutral |

### Modifying Particle Behavior

```javascript
// In the Particle class constructor
this.gravity = 0.01 + Math.random() * 0.02; // Gravity strength
this.friction = 0.98 + Math.random() * 0.015; // Friction
this.trailLength = 5 + Math.floor(Math.random() * 10); // Trail length

// In createSupernova() function – adjust particle ratios
// Core particles: 100% (all particles)
// Slow debris: 10% of total
// Fast sparks: 30% of total