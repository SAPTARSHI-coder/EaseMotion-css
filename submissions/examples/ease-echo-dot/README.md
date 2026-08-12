# 🔊 Echo Dot – Sends Out Sound Wave Rings Like Echo

An interactive echo dot simulation that sends out beautiful, expanding sound wave rings like a sonar pulse or echo. Watch as concentric rings ripple outward with organic motion, glowing particles, and shimmering colors, creating a mesmerizing audio-visual experience. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Echo ring simulation** – Concentric rings expand outward like sound waves
- **Organic motion** – Rings wobble, trail, and shimmer naturally
- **Particle effects** – Glowing particles burst from each ring
- **Adjustable parameters** – Ring speed (1-10×), ring size (20-100%), ring count (3-12), color (0-360°)
- **Interactive controls** – Echo, Clear, Pause, and Reset buttons
- **Keyboard shortcuts** – E (Echo), C (Clear), Space (Pause), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the echo dot:
   - Click **Echo** to send out sound wave rings
   - Click **Clear** to remove all rings
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click the **canvas** to send an echo
3. Adjust the sliders:
   - **Ring Speed** – How fast rings expand (1-10×)
   - **Ring Size** – Maximum ring size (20-100%)
   - **Ring Count** – Number of concentric rings (3-12)
   - **Color** – Hue of the rings (0-360°)
4. Use **keyboard shortcuts**:
   - `E` – Echo
   - `C` – Clear rings
   - `Space` – Pause/Resume
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Ring system** – Multiple concentric rings expand outward
- **Organic motion** – Wobble, trails, and shimmer create natural feel
- **Particle effects** – Particles burst from rings for added drama
- **Color system** – HSL-based colors with dynamic shifting
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Ring Speed | How fast rings expand (1-10×) | 5× |
| Ring Size | Maximum ring size (20-100%) | 60% |
| Ring Count | Number of concentric rings (3-12) | 6 |
| Color | Hue (0-360°) | 220° (blue) |

### Modifying Ring Appearance

```javascript
// In the Ring class constructor
this.rings = parseInt(countSlider.value); // Number of rings
this.trailLength = 8 + Math.floor(Math.random() * 12); // Trail length
this.glowSize = 15 + Math.random() * 25; // Glow size

// In draw() method – adjust ring colors
const hue = this.hue + (i / ringCount) * 60; // Color shift between rings