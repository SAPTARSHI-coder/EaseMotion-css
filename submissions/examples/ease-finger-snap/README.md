# 👆 Finger Snap – Snap Sound Effect with Visual Ring

An interactive finger snap simulation that creates a satisfying snap effect with expanding visual rings, shockwave particles, and haptic feedback. Click or press Space to snap, and watch as beautiful concentric rings expand outward with glowing particles and vibrant colors. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Satisfying snap effect** – Expanding rings with shockwave particles
- **Haptic feedback** – Vibrates on supported devices
- **Multiple ring layers** – 1-8 concentric rings per snap
- **Adjustable parameters** – Ring speed (1-10×), ring size (20-100%), ring count (1-8), color (0-360°)
- **Interactive controls** – Snap, Clear, Pause, and Reset buttons
- **Keyboard shortcuts** – Space (Snap), C (Clear), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the finger snap:
   - Click **Snap** to trigger the effect
   - Click **Clear** to remove all rings
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click the **canvas** to snap
3. Adjust the sliders:
   - **Ring Speed** – How fast rings expand (1-10×)
   - **Ring Size** – Maximum ring size (20-100%)
   - **Ring Count** – Number of concentric rings (1-8)
   - **Color** – Hue of the rings (0-360°)
4. Use **keyboard shortcuts**:
   - `Space` – Snap
   - `C` – Clear rings
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Snap effect** – Expanding rings with organic wobble and particles
- **Particle system** – Glowing particles burst from each ring
- **Haptic feedback** – Device vibration on snap (if supported)
- **Color system** – HSL-based colors with dynamic shifting
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Ring Speed | How fast rings expand (1-10×) | 5× |
| Ring Size | Maximum ring size (20-100%) | 60% |
| Ring Count | Number of concentric rings (1-8) | 3 |
| Color | Hue (0-360°) | 220° (blue) |

### Modifying Snap Appearance

```javascript
// In the Ring class constructor
this.rings = parseInt(countSlider.value); // Number of rings
this.trailLength = 5 + Math.floor(Math.random() * 8); // Trail length
this.glowSize = 10 + Math.random() * 20; // Glow size

// In draw() method – adjust ring colors
const hue = this.hue + (i / ringCount) * 40; // Color shift between rings