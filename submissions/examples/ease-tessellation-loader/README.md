# 🔷 Tessellation Loader – Geometric Patterns Tile and Shift

An interactive tessellation loader that creates mesmerizing geometric patterns with hexagonal, triangular, square, and diamond tiles that shift and flow with fluid motion. Watch as shapes tile the canvas with shifting colors, organic movement, and hypnotic patterns. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **4 geometric patterns** – Hexagon, Triangle, Square, Diamond tessellations
- **Fluid motion** – Shapes shift and flow with organic sine-wave movement
- **Dynamic colors** – Colors shift along the pattern based on position and time
- **Play/Pause controls** – Start, stop, toggle, and reset the animation
- **Customizable parameters** – Speed (1-10×), tile size (20-80px), pattern type, shift intensity (0-100%)
- **Real-time feedback** – Tessellation status, shape count display
- **Keyboard shortcuts** – Space (Toggle), P (Play/Pause), R (Reset)
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the tessellation:
   - Click **Play** to start/resume animation
   - Click **Pause** to pause animation
   - Click **Toggle** to switch between play and pause
   - Click **Reset** to reset to default state
3. Adjust the sliders:
   - **Speed** – Animation speed (1-10×)
   - **Tile Size** – Size of each tile (20-80px)
   - **Pattern** – Hexagon, Triangle, Square, Diamond
   - **Shift Intensity** – Movement intensity (0-100%)
4. Use **keyboard shortcuts**:
   - `Space` – Toggle play/pause
   - `P` – Play/Pause
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Tessellation generation** – Shapes are arranged in repeating patterns across the canvas
- **Fluid motion** – Each shape shifts using sine-wave calculations based on position and time
- **Color system** – HSL-based colors that shift based on position and time
- **Shape rendering** – Custom drawing functions for hexagons, triangles, squares, and diamonds
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Speed | Animation speed (1-10×) | 5× |
| Tile Size | Size of each tile (20-80px) | 40px |
| Pattern | Hexagon, Triangle, Square, Diamond | Hexagon |
| Shift Intensity | Movement intensity (0-100%) | 50% |

### Modifying Pattern Appearance

```javascript
// In shape drawing functions – adjust colors
const hue = (x * 0.5 + y * 0.3 + time * 20 * speed) % 360;
const lightness = 50 + 20 * Math.sin(x * 0.05 + y * 0.04 + time * speed);
// Change multipliers for different color patterns

// Adjust gradient stops
gradient.addColorStop(0, `hsl(${hue + 20}, 80%, ${lightness + 20}%)`);
gradient.addColorStop(0.5, `hsl(${hue}, 80%, ${lightness}%)`);
gradient.addColorStop(1, `hsl(${hue - 20}, 80%, ${lightness - 15}%)`);