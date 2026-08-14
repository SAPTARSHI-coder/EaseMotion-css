# 🔊 Audio Ripple – Ripples Radiate from Sound Source

An interactive audio ripple simulation where beautiful, organic ripples radiate outward from a sound source like audio waves spreading through space. Watch as concentric rings expand with wave-like distortion, glowing particles, and vibrant colors, creating a mesmerizing visual representation of sound. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Audio ripple simulation** – Ripples radiate from the sound source
- **Wave distortion** – Rings undulate with organic wave motion
- **Glowing particles** – Particles burst from each ripple
- **Adjustable parameters** – Ripple speed (1-10×), ripple size (20-100%), wave intensity (0-100%), color (0-360°)
- **Interactive controls** – Play, Clear, Pause, and Reset buttons
- **Keyboard shortcuts** – P (Play), C (Clear), Space (Pause), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the audio ripple:
   - Click **Play** to send out audio ripples
   - Click **Clear** to remove all ripples
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click the **canvas** to play
3. Adjust the sliders:
   - **Ripple Speed** – How fast ripples expand (1-10×)
   - **Ripple Size** – Maximum ripple size (20-100%)
   - **Wave Intensity** – Wave distortion strength (0-100%)
   - **Color** – Hue of the ripples (0-360°)
4. Use **keyboard shortcuts**:
   - `P` – Play
   - `C` – Clear ripples
   - `Space` – Pause/Resume
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Ripple system** – Concentric rings expand with wave distortion
- **Wave physics** – Rings undulate with organic wave motion
- **Particle effects** – Glowing particles burst from each ripple
- **Color system** – HSL-based colors with dynamic shifting
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Ripple Speed | How fast ripples expand (1-10×) | 5× |
| Ripple Size | Maximum ripple size (20-100%) | 60% |
| Wave Intensity | Wave distortion strength (0-100%) | 70% |
| Color | Hue (0-360°) | 220° (blue) |

### Modifying Ripple Appearance

```javascript
// In the Ripple class constructor
this.rings = 4 + Math.floor(this.intensity * 4); // Number of rings
this.trailLength = 8 + Math.floor(Math.random() * 12); // Trail length
this.glowSize = 15 + this.intensity * 25; // Glow size

// In draw() method – adjust ring colors
const hue = this.hue + (i / ringCount) * 60; // Color shift between rings