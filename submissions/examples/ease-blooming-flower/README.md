# 🌸 Blooming Flower – Flower Blooms from Center Outward

An interactive blooming flower simulation where a beautiful flower opens from a bud to full bloom with elegant petal animations, vibrant colors, and particle effects. Watch as petals unfurl from the center outward, creating a mesmerizing bloom effect. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Beautiful bloom animation** – Flower opens from bud to full bloom
- **Customizable petals** – Adjustable petal count (5-24)
- **Color options** – 8 color themes (Pink, Rose, Red, Orange, Yellow, Teal, Blue, Purple)
- **Particle effects** – Bloom particles burst from the center
- **Adjustable parameters** – Bloom speed (1-10×), petal count (5-24), flower size (30-100%)
- **Interactive controls** – Bloom, Reset, Pause, and Color buttons
- **Keyboard shortcuts** – B (Bloom), R (Reset), Space (Pause), C (Color)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the flower:
   - Click **Bloom** to watch the flower open
   - Click **Reset** to return to a bud
   - Click **Pause** to pause/resume the animation
   - Click **Color** to cycle through color themes
   - Click the **canvas** to bloom
3. Adjust the sliders:
   - **Bloom Speed** – How fast the flower blooms (1-10×)
   - **Petal Count** – Number of petals (5-24)
   - **Flower Size** – Size of the flower (30-100%)
4. Use **keyboard shortcuts**:
   - `B` – Bloom
   - `R` – Reset
   - `Space` – Pause/Resume
   - `C` – Cycle colors

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Bloom animation** – Petals unfurl from center with smooth interpolation
- **Petal rendering** – Each petal is drawn with gradients and glow effects
- **Inner petals** – Staggered inner petals for depth and realism
- **Particle system** – Bloom particles burst from center for celebratory effect
- **Color system** – 8 color themes with hue shifting
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Bloom Speed | How fast the flower blooms (1-10×) | 5× |
| Petal Count | Number of petals (5-24) | 12 |
| Flower Size | Size of the flower (30-100%) | 70% |
| Colors | 8 color themes | Pink |

### Modifying Flower Appearance

```javascript
// In drawFlower() function – adjust petal colors
const hueOffset = (i / petalCountVal) * 30 + (1 - progress) * 10;
const lightness = 50 + 30 * petalProgress * (0.5 + 0.5 * Math.sin(angle * 2 + time));

// Adjust gradient stops for different petal shading
grad.addColorStop(0, `hsla(${hue + hueOffset + 10}, ${sat + 10}%, ${light + 20}%, ${0.9 * petalProgress})`);
grad.addColorStop(0.5, `hsla(${hue + hueOffset}, ${sat}%, ${light}%, ${0.8 * petalProgress})`);
grad.addColorStop(1, `hsla(${hue + hueOffset - 10}, ${sat - 10}%, ${light - 20}%, ${0.6 * petalProgress})`);