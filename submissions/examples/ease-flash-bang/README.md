# 💥 Flash Bang – Bright Flash Blinds Momentarily

An explosive flash bang effect that creates a blinding burst of light with a dramatic flash overlay, glowing particles, and afterimage effects. Click or press F to trigger a bright flash that momentarily blinds, with adjustable intensity, duration, and color. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Dramatic flash effect** – Bright burst of light with overlay and particles
- **Adjustable parameters** – Flash intensity (10-100%), duration (100-800ms), color (0-360°)
- **Flash particles** – Glowing particles burst outward with each flash
- **Afterimage effect** – Subtle glow remains after the flash
- **Pause controls** – Pause/resume the animation
- **Keyboard shortcuts** – F (Flash), Space (Pause), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the flash bang:
   - Click **Flash** to trigger a bright burst
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click the **canvas** to trigger a flash
3. Adjust the sliders:
   - **Flash Intensity** – Brightness (10-100%)
   - **Flash Duration** – How long the flash lasts (100-800ms)
   - **Flash Color** – Hue of the flash (0-360°)
4. Use **keyboard shortcuts**:
   - `F` – Flash
   - `Space` – Pause/Resume
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Flash overlay** – Radial gradient overlay with adjustable intensity and color
- **Particle system** – Glowing particles burst outward from center
- **Afterimage** – Subtle glow that fades after the flash
- **Timing** – Flash duration controls how long the overlay stays visible
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Flash Intensity | Brightness (10-100%) | 80% |
| Flash Duration | How long the flash lasts (100-800ms) | 300ms |
| Flash Color | Hue (0-360°) | 50° (yellow) |

### Modifying Flash Appearance

```javascript
// In createFlash() function – adjust flash overlay
flashOverlay.style.background = `radial-gradient(circle at center, 
  hsla(${hue}, 100%, 95%, ${intensity * 0.9}), 
  hsla(${hue + 20}, 100%, 80%, ${intensity * 0.6}), 
  hsla(${hue + 40}, 100%, 60%, ${intensity * 0.3})
)`;

// Adjust particle count
const particleCount = 30 + Math.floor(intensity * 50);