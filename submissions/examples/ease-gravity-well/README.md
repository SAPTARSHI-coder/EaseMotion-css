# 🌀 Gravity Well – Creates Gravity Well Pulling Things In

An interactive gravity well simulation where particles are drawn into a cosmic vortex with realistic physics, orbital motion, and dynamic visual effects. Watch as particles spiral inward, orbit the center, and get pulled into the gravity well with mesmerizing, fluid motion. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Gravity well simulation** – Particles are pulled into a cosmic vortex
- **Orbital motion** – Particles spiral and orbit around the center
- **Event horizon** – Visual range ring with distortion effects
- **Glowing particles** – Each particle has glow, trail, and color variation
- **Burst effect** – Explosive particle burst from the center
- **Collapse effect** – Particles rapidly collapse into the well
- **Adjustable parameters** – Gravity strength (0-100%), event horizon (50-300px), particle count (10-80), color (0-360°)
- **Interactive controls** – Pause, Reset, Burst, and Collapse buttons
- **Keyboard shortcuts** – Space (Pause), R (Reset), B (Burst), C (Collapse)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the gravity well:
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click **Burst** for an explosive particle burst
   - Click **Collapse** to pull particles rapidly inward
   - Click the **canvas** to trigger a burst
3. Adjust the sliders:
   - **Gravity Strength** – How strong the pull is (0-100%)
   - **Event Horizon** – The reach of the well (50-300px)
   - **Particle Count** – Number of particles (10-80)
   - **Color** – Hue of the particles (0-360°)
4. Use **keyboard shortcuts**:
   - `Space` – Pause/Resume
   - `R` – Reset
   - `B` – Burst
   - `C` – Collapse

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Particle system** – Each particle has position, velocity, mass, color, and trail
- **Gravity physics** – Particles are attracted to the center with force based on distance and strength
- **Orbital motion** – Particles spiral and orbit with tangential velocity
- **Event horizon** – Visual range ring with distortion lines
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Gravity Strength | How strong the pull is (0-100%) | 60% |
| Event Horizon | The reach of the well (50-300px) | 150px |
| Particle Count | Number of particles (10-80) | 40 |
| Color | Hue (0-360°) | 220° (blue) |

### Modifying Particle Behavior

```javascript
// In the Particle class constructor
this.mass = 0.5 + Math.random() * 0.5; // Mass affects force response
this.trailLength = 8 + Math.floor(Math.random() * 12); // Trail length

// In Particle.update() – adjust gravity force
const force = (1 - dist / horizon) * strengthFactor * 0.06 * this.mass;
// Change 0.06 for different force sensitivity