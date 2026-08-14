# 〰️ Waveform Trail – Cursor Leaves Audio Waveform Trail

An interactive waveform trail that follows your cursor, creating a beautiful audio waveform visualization with glowing trails, color shifting, and multiple display modes. Move your cursor to draw a waveform trail that pulses and flows like an audio visualizer. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Audio waveform trail** – Cursor leaves a glowing waveform trail
- **Multiple modes** – Wave, Spectrum, and Dots modes
- **Color shifting** – Colors transition along the trail
- **Glow effects** – Glowing trail with subtle particle effects
- **Adjustable parameters** – Trail length (20-200), wave amplitude (5-60px), frequency (1-10×), trail width (1-10px)
- **Play/Pause controls** – Pause the trail animation
- **Keyboard shortcuts** – C (Clear), Space (Pause), R (Reset), M (Mode)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Move your cursor over the canvas to draw a waveform trail.
3. Interact with the controls:
   - Click **Clear** to remove the trail
   - Click **Pause** to pause/resume
   - Click **Reset** to reset to default settings
   - Click **Mode** to cycle through Wave, Spectrum, and Dots modes
4. Adjust the sliders:
   - **Trail Length** – Number of trail points (20-200)
   - **Wave Amplitude** – Wave height (5-60px)
   - **Wave Frequency** – Wave speed/ripple (1-10×)
   - **Trail Width** – Thickness of the trail (1-10px)
5. Use **keyboard shortcuts**:
   - `C` – Clear trail
   - `Space` – Pause/Resume
   - `R` – Reset
   - `M` – Toggle trail mode

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Point tracking** – Cursor positions are stored as points with timestamps
- **Waveform generation** – Points are transformed using sine waves perpendicular to the trail direction
- **Rendering** – The waveform trail is drawn with gradient colors, glow effects, and customizable width
- **Trail modes** – Wave (standard waveform), Spectrum (vertical bars), Dots (dots at wave peaks)
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Trail Length | Number of trail points (20-200) | 80 |
| Wave Amplitude | Wave height (5-60px) | 25px |
| Wave Frequency | Wave speed/ripple (1-10×) | 4× |
| Trail Width | Thickness of the trail (1-10px) | 4px |
| Trail Modes | Wave, Spectrum, Dots | Wave |

### Modifying Trail Appearance

```javascript
// In drawWaveformTrail() function – adjust color ranges
const hue = 220 + progress * 80 + Math.sin(time + i * 0.05) * 10;
// Change 220 to your base hue, 80 to color shift range

// Adjust glow intensity
const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 6);
// Change size * 6 to adjust glow radius