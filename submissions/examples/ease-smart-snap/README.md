# 🎯 Smart Snap – Snaps into Alignment on Interaction

An interactive smart snap component where a draggable element snaps into alignment with grid positions on interaction. Drag the element and watch it smoothly snap to the nearest target—center, corners, edges, and thirds—with satisfying visual feedback and haptic response. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Smart snapping** – Element snaps to grid positions on drag
- **Multiple snap targets** – Center, corners, edges, and thirds
- **Smooth interpolation** – Fluid, eased snapping motion
- **Visual feedback** – Snap indicator, glow effects, particle bursts
- **Haptic feedback** – Vibration on snap (supported devices)
- **Adjustable parameters** – Snap strength (0-100%), threshold (10-80px), element size (40-100px)
- **Interactive controls** – Reset, Grid toggle, Center button
- **Keyboard shortcuts** – R (Reset), G (Grid), C (Center)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Drag the element around the canvas.
3. Watch it snap into alignment with grid positions.
4. Interact with the controls:
   - Click **Reset** to restore default settings
   - Click **Grid** to toggle the grid overlay
   - Click **Center** to snap to center
5. Adjust the sliders:
   - **Snap Strength** – How strongly it snaps (0-100%)
   - **Snap Threshold** – Distance to trigger snap (10-80px)
   - **Element Size** – Size of the element (40-100px)
6. Use **keyboard shortcuts**:
   - `R` – Reset
   - `G` – Toggle grid
   - `C` – Center

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Snap targets** – 12 predefined positions (center, corners, edges, thirds)
- **Distance calculation** – Finds the closest target within threshold
- **Smooth interpolation** – Element moves toward target with eased motion
- **Particle effects** – Glowing particles burst on successful snap
- **Haptic feedback** – Vibration on snap (if supported)

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Snap Strength | How strongly it snaps (0-100%) | 70% |
| Snap Threshold | Distance to trigger snap (10-80px) | 40px |
| Element Size | Size of the element (40-100px) | 70px |
| Snap Targets | 12 predefined positions | Center, corners, edges, thirds |

### Modifying Snap Targets

```javascript
// In generateSnapTargets() function – add or remove targets
snapTargets = [
  { x: (w - elemSize) / 2, y: (h - elemSize) / 2, label: 'Center' },
  // Add custom positions
  { x: 100, y: 100, label: 'Custom' },
];