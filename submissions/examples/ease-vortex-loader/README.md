# 🌀 Vortex Loader – Particles Spiral into Vortex

An interactive vortex loader where particles spiral inward in a mesmerizing vortex pattern with fluid motion, glowing trails, and dynamic color shifts. Watch as hundreds of particles swirl and spiral into the center, creating a hypnotic, cosmic visual experience. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Mesmerizing vortex animation** – Particles spiral inward with organic motion
- **Dynamic particle system** – Hundreds of particles with trails, glow, and pulse effects
- **Self-sustaining** – Particles respawn at the outer edge when they reach the center
- **Adjustable parameters** – Speed (1-10×), particle count (50-300), vortex strength (0-100%), particle size (1-8px)
- **Play/Pause controls** – Start, stop, toggle, and reset the animation
- **Visual effects** – Glowing trails, pulsing particles, center vortex ring
- **Real-time feedback** – Vortex status, particle count display
- **Keyboard shortcuts** – Space (Toggle), P (Play/Pause), R (Reset)
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the vortex:
   - Click **Play** to start/resume animation
   - Click **Pause** to pause animation
   - Click **Toggle** to switch between play and pause
   - Click **Reset** to reset to default state
3. Adjust the sliders:
   - **Speed** – Animation speed (1-10×)
   - **Particles** – Number of particles (50-300)
   - **Vortex Strength** – Pull intensity (0-100%)
   - **Particle Size** – Size of each particle (1-8px)
4. Use **keyboard shortcuts**:
   - `Space` – Toggle play/pause
   - `P` – Play/Pause
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Particle system** – Each particle has position, radius, angle, speed, color, trail, and pulse
- **Vortex physics** – Particles spiral inward with increasing speed as they approach the center
- **Self-sustaining** – Particles respawn at the outer edge when they reach the center
- **Visual effects** – Trailing particles, radial glow, pulsing size, center vortex ring
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Speed | Animation speed (1-10×) | 5× |
| Particles | Number of particles (50-300) | 150 |
| Vortex Strength | Pull intensity (0-100%) | 50% |
| Particle Size | Size of each particle (1-8px) | 4px |

### Modifying Particle Behavior

```javascript
// In the Particle class constructor
this.speed = 0.3 + Math.random() * 0.7;      // Speed range
this.size = 2 + Math.random() * 4;            // Size range
this.trailLength = 10 + Math.floor(Math.random() * 20); // Trail length

// In Particle.update() – adjust vortex physics
const pullStrength = vortexStrength * 0.02;    // Vortex pull strength
this.angle += (0.02 + (1 - this.radius / this.startRadius) * 0.03) * speed;
// Change 0.02 and 0.03 for different spiral tightness