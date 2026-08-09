# 🌀 Smoothly Follow – Element Smoothly Follows Cursor

An interactive component where a glowing element smoothly follows your cursor with fluid, organic motion, creating a responsive, tactile experience. Watch as the element glides with smooth interpolation, leaving a beautiful trail of glowing particles behind. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Smooth cursor following** – Element glides with fluid, eased motion
- **Glowing trail** – Beautiful particle trail follows the element
- **Adjustable parameters** – Follow speed (1-20×), element size (30-120px), trail length (0-30), color (0-360°)
- **Interactive controls** – Pause, Reset, and Trail toggle
- **Keyboard shortcuts** – Space (Pause), R (Reset), T (Trail)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Move your cursor over the canvas to make the element follow.
3. Interact with the controls:
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click **Trail** to toggle the trail on/off
   - Click the **canvas** to toggle pause
4. Adjust the sliders:
   - **Follow Speed** – How fast the element follows (1-20×)
   - **Element Size** – Size of the following element (30-120px)
   - **Trail Length** – Number of trail particles (0-30)
   - **Color** – Hue of the effect (0-360°)
5. Use **keyboard shortcuts**:
   - `Space` – Pause/Resume
   - `R` – Reset
   - `T` – Toggle trail

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Smooth interpolation** – Element follows cursor with eased, fluid motion
- **Trail system** – Positions stored and rendered as glowing trail
- **Particle effects** – Glowing particles burst from the trail
- **Color system** – HSL-based colors with dynamic shifting
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Follow Speed | How fast the element follows (1-20×) | 8× |
| Element Size | Size of the following element (30-120px) | 70px |
| Trail Length | Number of trail particles (0-30) | 12 |
| Color | Hue (0-360°) | 220° (blue) |

### Modifying Follow Behavior

```javascript
// In updateFollow() function – adjust interpolation
const moveSpeed = Math.min(speed * 0.1, dist * 0.05);
// Change 0.1 for speed scaling, 0.05 for distance-based smoothing

// Trail particle generation
createTrailParticles(last.x, last.y, 1); // Change count for density