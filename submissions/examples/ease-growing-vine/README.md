# 🌿 Growing Vine – Vine Grows and Wraps Around Element

An interactive growing vine simulation where a lush vine grows organically and wraps around a central element, creating a beautiful, nature-inspired visual effect. Watch as the vine branches and wraps with flowing motion, sprouting leaves along the way. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Organic vine growth** – Vine grows with branching, wrapping motion
- **Leaf system** – Leaves sprout along the vine with varying density
- **Wrapping effect** – Vine wraps around the center element
- **Adjustable parameters** – Growth speed (1-10×), vine length (10-60), wrap tightness (0-100%), leaf density (0-100%)
- **Interactive controls** – Grow, Clear, Pause, and Reset buttons
- **Keyboard shortcuts** – G (Grow), C (Clear), Space (Pause), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the vine:
   - Click **Grow** to start a new vine
   - Click **Clear** to remove the vine
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
3. Adjust the sliders:
   - **Growth Speed** – How fast the vine grows (1-10×)
   - **Vine Length** – How long the vine grows (10-60 nodes)
   - **Wrap Tightness** – How tightly it wraps (0-100%)
   - **Leaf Density** – How many leaves appear (0-100%)
4. Use **keyboard shortcuts**:
   - `G` – Grow vine
   - `C` – Clear vine
   - `Space` – Pause/Resume
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Vine system** – Vine grows with branching nodes and wrapping motion
- **Growth animation** – Each node grows and spawns children
- **Wrapping behavior** – Vine curves toward center with adjustable tightness
- **Leaf rendering** – Leaves sprout with varying size, angle, and color
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Growth Speed | How fast the vine grows (1-10×) | 5× |
| Vine Length | Number of nodes (10-60) | 30 |
| Wrap Tightness | How tightly it wraps (0-100%) | 50% |
| Leaf Density | How many leaves (0-100%) | 60% |

### Modifying Vine Appearance

```javascript
// In the VineNode class – adjust stem colors
ctx.strokeStyle = `rgba(34, 139, 34, ${alpha * 0.9})`; // Stem color
// Change to different greens

// Leaf colors
grad.addColorStop(0, `rgba(60, 220, 120, ${leafAlpha * 0.9})`);
grad.addColorStop(0.5, `rgba(40, 180, 80, ${leafAlpha * 0.8})`);
grad.addColorStop(1, `rgba(20, 120, 50, ${leafAlpha * 0.6})`);