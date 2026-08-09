# 🐟 Koi Pond – Fish Swim and Ripple Water

An interactive koi pond simulation where colorful fish swim gracefully through rippling water with realistic movement, vibrant colors, and ambient water effects. Click to add ripples, watch fish glide with organic motion, and create a peaceful, meditative aquatic scene. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Graceful fish swimming** – Organic movement with smooth target-seeking, wobble, and tail animation
- **Vibrant koi colors** – 20+ beautiful color variations with gradient shading and patterns
- **Dynamic water ripples** – Click anywhere to create expanding ripple effects with glow
- **Ambient water effects** – Subtle caustics, surface ripples, and deep water gradients
- **Fish count control** – Add or remove fish with slider or button (0-15 fish)
- **Speed control** – Adjust swimming speed (1× – 10×)
- **Ripple intensity** – Control ripple size and effect strength
- **Pause/Resume** – Freeze the animation at any time
- **Real-time feedback** – Fish count, pond status, status messages
- **Keyboard shortcuts** – A (Add), R (Ripple), C (Clear), Space (Pause)
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the pond:
   - **Click** anywhere on the pond to create ripples
   - Click **Add Fish** to add a fish
   - Click **Ripple** to create random ripples
   - Click **Clear** to remove all fish
   - Click **Pause** to pause/resume the animation
   - Adjust **Fish Count**, **Speed**, and **Ripple Intensity** sliders
3. Use **keyboard shortcuts**:
   - `A` – Add a fish
   - `R` – Create random ripples
   - `C` – Clear all fish
   - `Space` – Pause/Resume
4. Watch the fish swim gracefully and interact with ripples.

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Fish AI** – Each fish seeks random targets with smooth interpolation, creating natural swimming patterns
- **Fish rendering** – Custom-drawn fish bodies with gradients, eyes, fins, and tail animation
- **Ripple system** – Expanding circular ripples with multiple wave rings and glow effects
- **Water rendering** – Deep blue water with subtle caustics, ambient ripples, and reflections
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Max Fish | Maximum number of fish | 15 |
| Fish Size | Size range | 15-35px |
| Fish Colors | Array of koi colors | 20+ colors |
| Ripple Max | Maximum ripple radius | 60-120px |
| Speed | Animation speed multiplier | 5× (1-10) |

### Modifying Fish Colors

```javascript
// Add or change colors in the COLORS array
const COLORS = [
  '#ff6b6b', '#ff4757', // Add your own hex colors
];