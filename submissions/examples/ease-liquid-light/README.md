# 💧 Liquid Light – Fluid Light Moves Like Liquid Mercury

An interactive liquid light simulation where fluid light flows and swirls like liquid mercury, creating mesmerizing, organic motion with glowing particles, fluid dynamics, and responsive interaction. Move your cursor to guide the flow, watch particles trail and blend with smooth viscosity, and adjust flow speed, particle count, viscosity, and brightness. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Fluid light simulation** – Particles flow like liquid mercury with organic motion
- **Glowing particle system** – Trailing particles with pulsing brightness and color shifting
- **Mouse interaction** – Cursor attracts and guides the fluid flow
- **Adjustable parameters** – Flow speed (1-10×), particle count (50-400), viscosity (0-100%), brightness (0-100%)
- **Play/Pause controls** – Start, pause, toggle, and reset the animation
- **Visual effects** – Glowing trails, particle cores, sparkles, depth sorting
- **Keyboard shortcuts** – Space (Toggle), P (Play/Pause), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the liquid light:
   - **Move your cursor** over the canvas to attract and guide the flow
   - Click **Play** to start/resume animation
   - Click **Pause** to pause animation
   - Click **Toggle** to switch between play and pause
   - Click **Reset** to reset to default state
3. Adjust the sliders:
   - **Flow Speed** – Animation speed (1-10×)
   - **Particle Count** – Number of particles (50-400)
   - **Viscosity** – Fluid thickness/damping (0-100%)
   - **Brightness** – Overall brightness (0-100%)
4. Use **keyboard shortcuts**:
   - `Space` – Toggle play/pause
   - `P` – Play/Pause
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Particle system** – Each particle has position, velocity, trail, and color properties
- **Fluid dynamics** – Particles flow with velocity, damping, and viscosity
- **Mouse interaction** – Cursor exerts attractive force on nearby particles
- **Trail rendering** – Each particle leaves a glowing trail that fades over time
- **Color system** – HSL-based colors that shift along the trail
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Flow Speed | Animation speed (1-10×) | 5× |
| Particle Count | Number of particles (50-400) | 150 |
| Viscosity | Fluid thickness (0-100%) | 50% |
| Brightness | Overall brightness (0-100%) | 60% |

### Modifying Particle Behavior

```javascript
// In the Particle class constructor
this.size = 1 + Math.random() * 3;           // Size range
this.hue = 180 + Math.random() * 60;         // Color range (180-240 = cyan-blue)
this.trailLength = 8 + Math.floor(Math.random() * 12); // Trail length
this.friction = 0.96 + Math.random() * 0.03;  // Friction range

// In Particle.update() – adjust mouse interaction
const force = (200 - dist) / 200 * 0.02 * speedMult;
// Change 200 for different interaction radius
// Change 0.02 for different force strength