# 🔍 Lens Card – Magnifies Portion Underneath

An interactive magnifying lens card that follows your cursor, magnifying the portion underneath with smooth, responsive motion. Hover over the card to reveal a powerful zoom lens with adjustable magnification (1.2× – 4×), customizable lens size (60-200px), and beautiful visual effects including a rotating ring, pulsing glow, and zoom level display. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Interactive magnifying lens** – Follows cursor with smooth, responsive motion
- **Adjustable zoom** – Zoom level from 1.2× to 4×
- **Customizable lens size** – 60px to 200px diameter
- **Beautiful visual effects** – Rotating ring, pulsing glow, handle, cursor dot
- **Toggle visibility** – Show/hide the lens
- **Keyboard shortcuts** – +/− (Zoom), T (Toggle), R (Reset)
- **Touch support** – Works on mobile devices with touch
- **Real-time feedback** – Zoom level display, status messages
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the lens:
   - **Hover** over the card to reveal the magnifying lens
   - **Move** your mouse to see the lens follow
   - Click **Zoom In** or **Zoom Out** to adjust magnification
   - Click **Toggle** to show/hide the lens
   - Click **Reset** to restore default settings
3. Adjust the sliders:
   - **Zoom Level** – 1.2× to 4× magnification
   - **Lens Size** – 60px to 200px diameter
4. Use **keyboard shortcuts**:
   - `+` or `=` – Zoom in
   - `-` – Zoom out
   - `T` – Toggle lens visibility
   - `R` – Reset to default

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, card design, lens effects, and responsive layout
- `README.md` – you're reading it!

## 🧠 How It Works

- **Lens tracking** – The lens follows the cursor with smooth positioning, clamped to card bounds
- **Magnification** – The lens content uses CSS `background-size` and `background-position` to zoom the underlying card content
- **Visual effects** – Rotating ring animation, pulsing glow, and decorative handle
- **Touch support** – Touch events for mobile devices
- **State management** – Zoom level, lens size, visibility, and hover state

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Zoom Level | Magnification strength (1.2×-4×) | 2.0× |
| Lens Size | Lens diameter in pixels (60-200) | 120px |
| Lens Opacity | Fade in/out opacity | 0-1 |
| Ring Speed | Rotation animation speed | 8s |

### Modifying Visual Effects

```css
/* Change ring animation speed */
.lens-ring {
  animation: ring-rotate 8s linear infinite; /* Change 8s to desired speed */
}

/* Adjust glow intensity */
.lens-glow {
  background: radial-gradient(circle, rgba(100, 200, 255, 0.05), transparent 70%);
  /* Change 0.05 for different glow intensity */
}

/* Modify lens border */
.lens-magnifier {
  border: 2px solid rgba(255, 255, 255, 0.1);
  /* Change border color and width */
}