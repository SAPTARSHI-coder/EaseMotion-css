# 🌊 Pulse Wave – Energy Pulse Expands Outward

An interactive energy pulse wave simulation where glowing rings expand outward from the center with organic motion, creating a powerful, dynamic wave effect. Watch as colorful energy pulses ripple, shimmer, and spread across the canvas with stunning visual effects. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Dynamic pulse waves** – Energy waves expand outward with glowing rings
- **Organic motion** – Waves wobble, trail, and shimmer naturally
- **Particle effects** – Glowing particles burst from each wave
- **Adjustable parameters** – Pulse speed (1-10×), pulse size (20-100%), wave intensity (0-100%), color (0-360°)
- **Interactive controls** – Pulse, Clear, Pause, and Reset buttons
- **Keyboard shortcuts** – P (Pulse), C (Clear), Space (Pause), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the pulse wave:
   - Click **Pulse** to send out an energy wave
   - Click **Clear** to remove all waves
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click the **canvas** to send a pulse
3. Adjust the sliders:
   - **Pulse Speed** – How fast waves expand (1-10×)
   - **Pulse Size** – Maximum wave size (20-100%)
   - **Wave Intensity** – Brightness and detail (0-100%)
   - **Color** – Hue of the waves (0-360°)
4. Use **keyboard shortcuts**:
   - `P` – Pulse
   - `C` – Clear waves
   - `Space` – Pause/Resume
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Wave system** – Each wave expands with multiple glowing rings
- **Organic motion** – Wobble, trails, and shimmer create natural feel
- **Particle effects** – Particles burst from waves for added drama
- **Color system** – HSL-based colors with dynamic shifting
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Pulse Speed | How fast waves expand (1-10×) | 5× |
| Pulse Size | Maximum wave size (20-100%) | 60% |
| Wave Intensity | Brightness and detail (0-100%) | 70% |
| Color | Hue (0-360°) | 220° (blue) |

### Modifying Wave Appearance

```javascript
// In the Wave class constructor
this.rings = 3 + Math.floor(this.intensity * 4); // Number of rings
this.trailLength = 10 + Math.floor(Math.random() * 15); // Trail length
this.glowSize = 20 + this.intensity * 40; // Glow size

// In draw() method – adjust ring colors
const hue = this.hue + (i / this.rings) * 60; // Color shift between rings