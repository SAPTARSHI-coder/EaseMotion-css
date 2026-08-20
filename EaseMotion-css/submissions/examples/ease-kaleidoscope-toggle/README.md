# 🌀 Kaleidoscope Toggle – Patterns Shift and Rotate

An interactive kaleidoscope that generates beautiful, shifting patterns with every click, toggle, or slider adjustment. Watch as colors, rotations, and scales transform in real-time, creating endless mesmerizing combinations. Built with vanilla HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **12-segment kaleidoscope** – Symmetrical pattern with radial segments
- **10+ pattern themes** – Classic, Sunset, Ocean, Forest, Aurora, Fire, Ice, Neon, Pastel, Retro
- **One-click toggle** – Shift between patterns with a satisfying animated button
- **Real-time controls** – Rotate, scale, and hue-shift sliders for endless customization
- **Auto-animation mode** – Watch patterns rotate continuously (double-click to toggle)
- **Speed control** – Switch between Slow, Normal, and Fast animation speeds
- **Randomize** – Generate completely unique pattern combinations instantly
- **Reset** – Return to the default classic pattern
- **Visual feedback** – Status messages, pattern name display, rotation counter
- **Keyboard shortcuts** – T (toggle), R (rotate), Space (play/pause), X (random), Z (reset), S (speed)
- **Responsive design** – Adapts to any screen size from mobile to desktop

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the kaleidoscope:
   - Click the **Toggle Pattern** button to shift through pattern themes
   - Use the **Rotate**, **Random**, **Reset**, and **Speed** buttons
   - Drag the **Rotation**, **Scale**, and **Hue Shift** sliders for fine control
   - **Double-click** the kaleidoscope to start/stop auto-rotation
   - Use **keyboard shortcuts**: `T` (toggle), `R` (rotate 30°), `Space` (play/pause), `X` (random), `Z` (reset), `S` (speed)
3. Watch the status bar and pattern info for real-time feedback.

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, kaleidoscope design, and responsive layout
- `README.md` – you're reading it!

## 🧠 How It Works

- **Kaleidoscope segments** – 12 triangular segments arranged radially, each with a `clip-path` to create the kaleidoscope effect
- **Pattern system** – Each pattern theme has 6 colors that are distributed across the 12 segments
- **Color transformation** – Colors are dynamically shifted using HSL conversion for hue rotation
- **Animation loop** – Uses `requestAnimationFrame` for smooth continuous rotation at 60fps
- **Multi-modal interaction** – Buttons, sliders, keyboard, and double-click all control the same state
- **Visual feedback** – Status messages, pattern name, rotation angle, and segment count update in real-time

## 🎨 Customization

You can easily customize the kaleidoscope:

| Parameter | Description | Default |
|-----------|-------------|---------|
| Segments | Number of radial segments | 12 |
| Patterns | Color themes for patterns | 10 themes |
| Animation speed | Auto-rotation speed multiplier | 1× (Normal) |
| Rotation range | Slider range | 0° – 360° |
| Scale range | Slider range | 50% – 150% |
| Hue shift | Slider range | 0° – 360° |

### Adding New Patterns

Add your own color themes to the `PATTERNS` array:

```javascript
const PATTERNS = [
  // Existing patterns...
  { 
    name: 'My Theme', 
    colors: ['#hex1', '#hex2', '#hex3', '#hex4', '#hex5', '#hex6'] 
  }
];