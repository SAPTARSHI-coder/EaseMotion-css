# 🧲 Magnetic Pull – Pulls Nearby Elements Toward It

An interactive magnetic pull simulation where particles are drawn toward a central magnet with realistic physics, glowing trails, and dynamic visual effects. Watch as particles orbit, swirl, and cluster around the magnet with adjustable strength, range, and particle count. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Magnetic attraction simulation** – Particles are pulled toward the magnet with realistic physics
- **Orbital motion** – Particles swirl and orbit around the magnet
- **Glowing particles** – Each particle has glow, trail, and color variation
- **Burst effect** – Explosive particle burst from the center
- **Adjustable parameters** – Magnetic strength (0-100%), range (50-300px), particle count (10-60), color (0-360°)
- **Interactive controls** – Pause, Reset, and Burst buttons
- **Keyboard shortcuts** – Space (Pause), R (Reset), B (Burst)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the magnetic pull:
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click **Burst** for an explosive particle burst
   - Click the **canvas** to trigger a burst
3. Adjust the sliders:
   - **Magnetic Strength** – How strong the pull is (0-100%)
   - **Magnetic Range** – How far the pull reaches (50-300px)
   - **Particle Count** – Number of particles (10-60)
   - **Color** – Hue of the particles (0-360°)
4. Use **keyboard shortcuts**:
   - `Space` – Pause/Resume
   - `R` – Reset
   - `B` – Burst

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Particle system** – Each particle has position, velocity, mass, color, and trail
- **Magnetic physics** – Particles are attracted to the center with force based on distance and strength
- **Orbital motion** – Particles swirl and orbit with organic motion
- **Rendering** – Glowing particles with trails, gradients, and highlights
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Magnetic Strength | How strong the pull is (0-100%) | 60% |
| Magnetic Range | How far the pull reaches (50-300px) | 150px |
| Particle Count | Number of particles (10-60) | 30 |
| Color | Hue (0-360°) | 220° (blue) |

### Modifying Particle Behavior

```javascript
// In the Particle class constructor
this.speed = 0.5 + Math.random() * 1.5; // Speed range
this.mass = 0.5 + Math.random() * 0.5; // Mass affects force response
this.trailLength = 5 + Math.floor(Math.random() * 8); // Trail length

// In Particle.update() – adjust magnetic force
const force = (1 - dist / range) * strengthFactor * 0.05 * this.mass;
// Change 0.05 for different force sensitivity