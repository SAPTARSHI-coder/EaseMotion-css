# 🔔 Resonance Ring – Rings Resonate Like Tuning Fork

An interactive resonance ring simulation where beautiful, pulsating rings expand outward like a tuning fork's vibration, creating a mesmerizing visual representation of resonance and sound. Watch as rings resonate with rhythmic pulses, glowing with vibrant colors and organic motion. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Resonance ring simulation** – Rings expand with pulsating resonance like a tuning fork
- **Rhythmic pulsing** – Rings resonate with organic, wave-like motion
- **Glowing particles** – Particles burst from each resonance ring
- **Adjustable parameters** – Resonance speed (1-10×), ring size (20-100%), resonance frequency (1-10×), color (0-360°)
- **Interactive controls** – Resonate, Clear, Pause, and Reset buttons
- **Keyboard shortcuts** – R (Resonate), C (Clear), Space (Pause), X (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the resonance ring:
   - Click **Resonate** to create a resonance ring
   - Click **Clear** to remove all rings
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click the **canvas** to resonate
3. Adjust the sliders:
   - **Resonance Speed** – How fast rings expand (1-10×)
   - **Ring Size** – Maximum ring size (20-100%)
   - **Resonance Frequency** – How fast rings pulse (1-10×)
   - **Color** – Hue of the rings (0-360°)
4. Use **keyboard shortcuts**:
   - `R` – Resonate
   - `C` – Clear rings
   - `Space` – Pause/Resume
   - `X` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Resonance system** – Rings expand with pulsating resonance
- **Oscillation physics** – Rings pulse with sine-wave resonance
- **Particle effects** – Glowing particles burst from each ring
- **Color system** – HSL-based colors with dynamic shifting
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Resonance Speed | How fast rings expand (1-10×) | 5× |
| Ring Size | Maximum ring size (20-100%) | 60% |
| Resonance Frequency | How fast rings pulse (1-10×) | 5× |
| Color | Hue (0-360°) | 220° (blue) |

### Modifying Resonance Appearance

```javascript
// In the Ring class constructor
this.ringCount = 3 + Math.floor(Math.random() * 3); // Number of rings
this.trailLength = 8 + Math.floor(Math.random() * 12); // Trail length
this.glowSize = 15 + Math.random() * 25; // Glow size

// In draw() method – adjust ring colors
const hue = this.hue + (i / ringCount) * 40; // Color shift between rings