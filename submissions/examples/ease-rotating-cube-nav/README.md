# 🧊 Rotating Cube Nav – 3D Menu Navigation

An interactive 3D cube navigation menu where each face represents a different menu item. Rotate the cube to navigate between pages, with smooth 3D transitions, visual feedback, and multiple control methods. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **6-face 3D cube** – Home, Settings, Analytics, Messages, Profile, Files
- **Smooth rotation** – Fluid 3D transitions between faces
- **Multiple navigation methods** – Next/Prev buttons, click dots, keyboard arrows, number keys (1-6)
- **Auto-rotate mode** – Continuous rotation for showcase
- **Customizable speed** – Adjust rotation speed (0.5× – 5×)
- **Adjustable perspective** – Change 3D depth perception (300-1200px)
- **Visual feedback** – Face indicator, active dot highlighting, status messages
- **Keyboard shortcuts** – ← → (Navigate), Space (Auto-Rotate), R (Reset), 1-6 (Jump to face)
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Navigate the cube:
   - Click **Next** or **Prev** to rotate the cube
   - Click the **dots** below the cube to jump to a face
   - Press **←** or **→** arrow keys to navigate
   - Press **1-6** to jump directly to a face
   - Click **Auto-Rotate** for continuous rotation
   - Click **Reset** to return to Home face
3. Adjust the sliders:
   - **Rotation Speed** – 0.5× to 5×
   - **Perspective** – 300px to 1200px
4. Use **keyboard shortcuts**:
   - `←` – Previous face
   - `→` – Next face
   - `Space` – Toggle Auto-Rotate
   - `R` – Reset to Home
   - `1`-`6` – Jump to face

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, cube design, and responsive layout
- `README.md` – you're reading it!

## 🧠 How It Works

- **3D CSS transforms** – Cube faces positioned with `translateZ` and `rotateY`/`rotateX`
- **Smooth interpolation** – Fluid rotation between faces with easing
- **Face tracking** – Determines which face is currently visible based on rotation angles
- **Auto-rotation** – Continuous rotation with adjustable speed
- **Perspective control** – Dynamic perspective for depth adjustment

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Speed | Rotation speed (0.5-5×) | 2× |
| Perspective | 3D depth perception (300-1200px) | 700px |
| Cube Size | Width/height of cube | 180px |
| Faces | 6 menu items | Home, Settings, Analytics, Messages, Profile, Files |

### Modifying Face Content

```javascript
// In the JavaScript
const faceNames = ['Home', 'Settings', 'Analytics', 'Messages', 'Profile', 'Files'];
const faceIcons = ['🏠', '⚙️', '📊', '💬', '👤', '📁'];

// Update HTML face content
<div class="face front">
  <div class="face-content">
    <span class="face-icon">🏠</span>
    <span class="face-label">Home</span>
  </div>
</div>