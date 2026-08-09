# 🪟 Stained Glass – Creates Stained Glass Pattern with Light Passing Through

An interactive stained glass generator that creates beautiful, colorful glass patterns with light passing through, complete with vibrant panels, lead lines, reflections, and dynamic illumination controls. Generate unique patterns with adjustable panel count, light intensity, and color vibrancy. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Beautiful stained glass patterns** – Voronoi-like panel generation with vibrant colors
- **Dynamic light control** – Toggle light on/off with smooth transitions
- **Adjustable parameters** – Panel count (6-30), light intensity (0-100%), color vibrancy (0-100%)
- **Unique patterns** – Each generation creates a unique arrangement
- **Glass effects** – Reflections, lead lines, subtle animations
- **Interactive controls** – Generate, Toggle Light, Reset, Save
- **Keyboard shortcuts** – G (Generate), T (Toggle Light), R (Reset)
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the stained glass:
   - Click **Generate** to create a new pattern
   - Click **Toggle Light** to turn light on/off
   - Click **Reset** to return to default
   - Click **Save** to save (right-click to save image)
   - Click the **stained glass** itself to toggle light
3. Adjust the sliders:
   - **Panel Count** – Number of glass panels (6-30)
   - **Light Intensity** – Brightness of light (0-100%)
   - **Color Vibrancy** – Color saturation (0-100%)
4. Use **keyboard shortcuts**:
   - `G` – Generate new pattern
   - `T` – Toggle light
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, stained glass design, and responsive layout
- `README.md` – you're reading it!

## 🧠 How It Works

- **Pattern generation** – Voronoi-like polygon generation with random seed points
- **Color system** – Rich color palette with HSL-based variations
- **Glass effects** – Reflections, lead line borders, subtle animations
- **Light simulation** – Light passes through panels with intensity and vibrancy control
- **Animation loop** – Uses `requestAnimationFrame` for smooth updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Panel Count | Number of glass panels (6-30) | 12 |
| Light Intensity | Brightness of light (0-100%) | 70% |
| Color Vibrancy | Color saturation (0-100%) | 80% |
| Colors | 30 predefined stained glass colors | Various |

### Modifying Colors

```javascript
// Add or change colors in the COLORS array
const COLORS = [
  '#ff6b6b', '#ff4757', // Add your own hex colors
  // ... up to 30 color
];