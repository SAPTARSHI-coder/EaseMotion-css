# 💡 Neon Glow – Bright Neon Glow Pulses and Spreads

An interactive neon glow effect that pulses and spreads with vibrant, radiant light, creating a mesmerizing, energetic visual experience. Watch as bright neon light expands and contracts with fluid motion, surrounded by glowing particles and luminous rings. Customize pulse speed, glow size, intensity, and color to create your perfect neon atmosphere. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Pulsing neon glow** – Smooth, rhythmic expansion and contraction
- **Glowing particle system** – Orbiting particles with trails and color shifting
- **Adjustable parameters** – Pulse speed (1-10×), glow size (20-200%), intensity (0-100%), color (0-360°)
- **Visual effects** – Radial glow gradients, ambient rings, bright core, particle trails
- **Play/Pause controls** – Start, pause, toggle, and reset the animation
- **Keyboard shortcuts** – Space (Toggle), P (Play/Pause), R (Reset)
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the neon glow:
   - Click **Play** to start/resume animation
   - Click **Pause** to pause animation
   - Click **Toggle** to switch between play and pause
   - Click **Reset** to reset to default state
   - Click the **canvas** to toggle play/pause
3. Adjust the sliders:
   - **Pulse Speed** – Animation speed (1-10×)
   - **Glow Size** – Size of the glow (20-200%)
   - **Intensity** – Brightness (0-100%)
   - **Color** – Hue shift (0-360°)
4. Use **keyboard shortcuts**:
   - `Space` – Toggle play/pause
   - `P` – Play/Pause
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Pulse animation** – Smooth sine-wave pulsation of the glow
- **Particle system** – Orbiting particles with trails, varying sizes, and colors
- **Glow rendering** – Radial gradients, ambient rings, and bright core
- **Color system** – HSL-based color with dynamic shifting
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Pulse Speed | Animation speed (1-10×) | 5× |
| Glow Size | Size of the glow (20-200%) | 100% |
| Intensity | Brightness (0-100%) | 80% |
| Color | Hue shift (0-360°) | 220° (blue) |

### Modifying Particle Behavior

```javascript
// In the GlowParticle class constructor
this.size = 3 + Math.random() * 8;           // Size range
this.speed = 0.005 + Math.random() * 0.02;   // Orbit speed
this.trailLength = 5 + Math.floor(Math.random() * 10); // Trail length
this.radius = 10 + Math.random() * maxR * 0.8; // Orbit radius