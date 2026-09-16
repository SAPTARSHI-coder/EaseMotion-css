# 🌈 Chromatic Shift – Colors Cycle Through Spectrum on Hover

An interactive chromatic shift effect where colors smoothly cycle through the full spectrum on hover, creating a mesmerizing rainbow gradient that flows across the card. With adjustable speed, saturation, lightness, and auto-play mode, this component brings vibrant, dynamic color to any interface. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Smooth color cycling** – Colors shift through the full spectrum on hover
- **5-color gradient** – Rich, multi-color gradient with seamless transitions
- **Adjustable parameters** – Shift speed (1-20×), saturation (0-100%), lightness (20-80%)
- **Auto-play mode** – Continuous color cycling without hover
- **Play/Pause controls** – Start, pause, reset, and speed toggle
- **Real-time feedback** – Current hue display, status messages
- **Visual effects** – Soft glow, subtle overlay, hover scale
- **Keyboard shortcuts** – Space (Auto), P (Pause), R (Reset)
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the chromatic card:
   - **Hover** over the card to see colors shift
   - Click **Auto** for continuous cycling
   - Click **Pause** to freeze the current color
   - Click **Reset** to return to default
   - Click **Speed** to toggle through preset speeds
3. Adjust the sliders:
   - **Shift Speed** – How fast colors change (1-20×)
   - **Saturation** – Color intensity (0-100%)
   - **Lightness** – Color brightness (20-80%)
4. Use **keyboard shortcuts**:
   - `Space` – Toggle auto mode
   - `P` – Pause/Resume
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, card design, and responsive layout
- `README.md` – you're reading it!

## 🧠 How It Works

- **Color system** – HSL-based color cycling with smooth interpolation
- **Gradient generation** – Dynamic 5-color gradient with offset hues
- **Smooth transitions** – Eased color shifts for fluid motion
- **Auto mode** – Continuous hue rotation with adjustable speed
- **Hover detection** – Triggers color shift on mouse enter/leave
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Shift Speed | Color change speed (1-20×) | 5× |
| Saturation | Color intensity (0-100%) | 80% |
| Lightness | Color brightness (20-80%) | 50% |
| Auto Mode | Continuous cycling | Off |

### Modifying Color Behavior

```javascript
// In updateChromatic() function – adjust color offsets
const hue2 = (hue + 30) % 360;   // Offset for second color
const hue3 = (hue + 60) % 360;   // Third color
const hue4 = (hue + 120) % 360;  // Fourth color
const hue5 = (hue + 240) % 360;  // Fifth color
// Change offsets for different gradient patterns