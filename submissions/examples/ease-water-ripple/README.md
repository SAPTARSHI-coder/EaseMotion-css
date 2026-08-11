# 💧 Water Ripple – Ripples Spread Across Glass Surface

An interactive water ripple simulation where beautiful, organic ripples spread across a glassy water surface with realistic wave physics, glowing rings, and subtle caustic effects. Click or tap to create ripples, watch them expand and interact with wavy, organic motion. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic water ripples** – Organic wave rings with glow effects
- **Interactive drops** – Click or tap to create ripples anywhere
- **Multiple wave rings** – Each ripple has multiple nested waves
- **Adjustable parameters** – Ripple speed (1-10×), size (20-100%), wave height (0-100%), decay (0-100%)
- **Pause controls** – Pause/resume the animation
- **Keyboard shortcuts** – D (Drop), C (Clear), Space (Pause), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the water:
   - **Click** anywhere on the water to create a ripple
   - Click **Drop** for a random ripple
   - Click **Clear** to remove all ripples
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
3. Adjust the sliders:
   - **Ripple Speed** – How fast ripples expand (1-10×)
   - **Ripple Size** – Maximum ripple size (20-100%)
   - **Wave Height** – Height of wave distortion (0-100%)
   - **Ripple Decay** – How fast ripples fade (0-100%)
4. Use **keyboard shortcuts**:
   - `D` – Drop random ripple
   - `C` – Clear all ripples
   - `Space` – Pause/Resume
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Ripple system** – Each ripple expands with multiple wave rings
- **Wave physics** – Organic wave distortion with sine-based displacement
- **Glow effects** – Soft glowing rings with opacity decay
- **Water rendering** – Deep water gradient with caustics and ambient ripples
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Ripple Speed | Expansion speed (1-10×) | 5× |
| Ripple Size | Maximum size (20-100%) | 60% |
| Wave Height | Wave distortion (0-100%) | 50% |
| Ripple Decay | Fade speed (0-100%) | 30% |
| Max Ripples | Maximum active ripples | 50 |

### Modifying Ripple Appearance

```javascript
// In the Ripple class constructor
this.waveCount = 3 + Math.floor(this.height * 3); // Number of wave rings
this.wobbleAmount = 1 + Math.random() * 2; // Wobble intensity

// In draw() method – adjust colors
ctx.strokeStyle = `rgba(100, 200, 255, ${waveOpacity * 0.4})`; // Ripple color
// Change 100, 200, 255 for different colors