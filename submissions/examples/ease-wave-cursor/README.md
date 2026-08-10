# 🌊 Wave Cursor – Leaves a Sine Wave Trail

An interactive wave cursor that leaves a beautiful, flowing sine wave trail behind your cursor as you move. Watch as the trail undulates with organic wave motion, glowing with vibrant colors that shift along the path. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Sine wave trail** – Cursor leaves a smooth, undulating wave trail
- **Real-time tracking** – Follows cursor with fluid, responsive motion
- **Customizable parameters** – Trail length (20-200), wave amplitude (5-60px), frequency (1-10×), trail width (1-10px)
- **Multiple trail modes** – Wave, Line, and Dots modes
- **Play/Pause** – Pause the trail animation
- **Clear & Reset** – Clear trail or reset to default settings
- **Color shifting** – Colors shift along the trail for a vibrant effect
- **Glow effects** – Glowing trail with subtle particle effects
- **Keyboard shortcuts** – C (Clear), Space (Pause), R (Reset), T (Trail mode)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Move your cursor over the canvas to see the wave trail.
3. Interact with the controls:
   - Click **Clear** to remove the trail
   - Click **Pause** to pause/resume
   - Click **Reset** to reset to default settings
   - Click **Trail** to cycle through wave, line, and dots modes
4. Adjust the sliders:
   - **Trail Length** – Number of trail points (20-200)
   - **Wave Amplitude** – Wave height (5-60px)
   - **Wave Frequency** – Wave speed/ripple (1-10×)
   - **Trail Width** – Thickness of the trail (1-10px)
5. Use **keyboard shortcuts**:
   - `C` – Clear trail
   - `Space` – Pause/Resume
   - `R` – Reset
   - `T` – Toggle trail mode

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Point tracking** – Cursor positions are stored as points with timestamps
- **Wave generation** – Points are transformed using sine waves perpendicular to the trail direction
- **Rendering** – The wave trail is drawn with gradient colors, glow effects, and customizable width
- **Trail modes** – Wave (standard wave), Line (direct line), Dots (dots at wave peaks)
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Trail Length | Number of trail points (20-200) | 80 |
| Wave Amplitude | Wave height (5-60px) | 25px |
| Wave Frequency | Wave speed/ripple (1-10×) | 4× |
| Trail Width | Thickness of the trail (1-10px) | 4px |
| Trail Modes | Wave, Line, Dots | Wave |

### Modifying Trail Appearance

```javascript
// In drawWaveTrail() function – adjust color ranges
const hue = 200 + progress * 80 + Math.sin(time + i * 0.05) * 10;
// Change 200 to your base hue, 80 to color shift range

// Adjust glow intensity
const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 6);
// Change size * 6 to adjust glow radius