# 🪄 Glow Stick – Bends and Glows Like a Glow Stick

An interactive glow stick simulation that bends and glows with realistic physics, vibrant colors, and dynamic light effects. Move your cursor to bend the glow stick, watch it pulse with glowing intensity, and snap it to create an explosive particle burst. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic glow stick** – Bends with cursor movement, glows with intensity
- **Dynamic bending** – Smooth, physics-based bending in any direction
- **Pulsing glow** – Subtle pulse animation for living light effect
- **Snap effect** – Explosive particle burst when snapped
- **Adjustable parameters** – Intensity (0-100%), bend amount (0-100%), color (0-360°)
- **Toggle controls** – Turn glow stick on/off
- **Keyboard shortcuts** – T (Toggle), R (Reset), S (Snap)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the glow stick:
   - **Move your cursor** over the canvas to bend the glow stick
   - Click **Toggle** to turn glow stick on/off
   - Click **Reset** to restore default settings
   - Click **Snap** for an explosive particle burst
   - Click the **canvas** to snap the glow stick
3. Adjust the sliders:
   - **Intensity** – Brightness of the glow (0-100%)
   - **Bend Amount** – How much the stick bends (0-100%)
   - **Color** – Hue of the glow (0-360°)
4. Use **keyboard shortcuts**:
   - `T` – Toggle glow stick
   - `R` – Reset
   - `S` – Snap

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Bending physics** – Glow stick bends based on cursor position with smooth interpolation
- **Glow rendering** – Radial gradients, glow trails, and bright core
- **Particle system** – Explosive particles burst from the glow stick when snapped
- **Color system** – HSL-based color with dynamic shifting
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Intensity | Brightness (0-100%) | 80% |
| Bend Amount | How much the stick bends (0-100%) | 50% |
| Color | Hue (0-360°) | 220° (blue) |

### Modifying Glow Stick Appearance

```javascript
// In drawGlowStick() function – adjust stick parameters
const stickLength = Math.min(w, h) * 0.6; // Change for length
const stickWidth = 8 + intensity * 12;    // Change for thickness
const numSegments = 30;                    // Change for smoothness

// Adjust glow colors
gradient.addColorStop(0, `hsla(${hue + 20}, 100%, 90%, ${alpha * 0.5})`);
// Change hue offsets for different color shifts