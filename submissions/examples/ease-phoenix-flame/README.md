# 🔥 Phoenix Flame – Flame Rises and Reforms Like Phoenix

An interactive phoenix flame simulation where particles rise like a majestic flame and reform into the shape of a phoenix, creating a dramatic, mythical visual experience. Watch as glowing particles ascend in a fiery dance, then gracefully reassemble into the silhouette of a phoenix. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Dramatic phoenix animation** – Particles rise like flame and reform into phoenix shape
- **Mythical phoenix shape** – Particles form the silhouette of a majestic phoenix
- **Glowing particles** – Each particle has glow, trail, and color variation
- **Adjustable parameters** – Flame intensity (0-100%), rise speed (1-10×), particle count (50-300), flame color (0-360°)
- **Interactive controls** – Rise, Reform, Pause, and Reset buttons
- **Keyboard shortcuts** – R (Rise), F (Reform), Space (Pause), X (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the phoenix flame:
   - Click **Rise** to watch the flame ascend
   - Click **Reform** to reassemble into phoenix shape
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click the **canvas** to rise
3. Adjust the sliders:
   - **Flame Intensity** – Brightness of the flame (0-100%)
   - **Rise Speed** – How fast particles move (1-10×)
   - **Particle Count** – Number of particles (50-300)
   - **Flame Color** – Hue of the flame (0-360°)
4. Use **keyboard shortcuts**:
   - `R` – Rise
   - `F` – Reform
   - `Space` – Pause/Resume
   - `X` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Particle system** – Particles rise with organic motion and reform into phoenix shape
- **Phoenix shape** – Predefined phoenix silhouette coordinates
- **Physics simulation** – Particles rise with wobble, fade, and reset
- **Reformation** – Particles smoothly interpolate toward target positions
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Flame Intensity | Brightness (0-100%) | 70% |
| Rise Speed | How fast particles move (1-10×) | 5× |
| Particle Count | Number of particles (50-300) | 150 |
| Flame Color | Hue (0-360°) | 30° (orange) |

### Modifying Phoenix Shape

```javascript
// In generatePhoenixShape() function – adjust phoenix shape
const bodyPoints = [
  // Head and crest
  { x: 0, y: -22 * scale },
  { x: 3, y: -20 * scale },
  // Add or modify points to change shape
];