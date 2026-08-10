# ⚡ Plasma Ball – Plasma Arcs Follow Cursor

An interactive plasma ball simulation where glowing plasma arcs follow your cursor with organic, electric motion. Move your cursor to control the plasma tendrils, adjust intensity, speed, color, and arc count, or trigger explosive burst effects. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic plasma arcs** – Glowing tendrils follow cursor with organic motion
- **Cursor tracking** – Plasma arcs bend toward your cursor position
- **Adjustable parameters** – Arc intensity (0-100%), speed (1-10×), color (0-360°), arc count (3-12)
- **Burst effect** – Explosive particle burst from the center
- **Toggle controls** – Turn plasma ball on/off
- **Keyboard shortcuts** – T (Toggle), R (Reset), B (Burst)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the plasma ball:
   - **Move your cursor** over the canvas to control the plasma arcs
   - Click **Toggle** to turn plasma on/off
   - Click **Reset** to restore default settings
   - Click **Burst** for an explosive particle effect
   - Click the **canvas** to trigger a burst
3. Adjust the sliders:
   - **Arc Intensity** – Brightness and thickness (0-100%)
   - **Arc Speed** – Motion speed (1-10×)
   - **Color** – Hue of the plasma (0-360°)
   - **Arc Count** – Number of plasma tendrils (3-12)
4. Use **keyboard shortcuts**:
   - `T` – Toggle plasma
   - `R` – Reset
   - `B` – Burst

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Plasma arcs** – Multiple tendrils with organic wobble and cursor attraction
- **Cursor tracking** – Arcs bend toward cursor position with smooth interpolation
- **Rendering** – Glowing arcs with gradients, shadows, and color shifting
- **Burst particles** – Explosive particles burst from center on click
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Arc Intensity | Brightness and thickness (0-100%) | 70% |
| Arc Speed | Motion speed (1-10×) | 5× |
| Color | Hue (0-360°) | 220° (blue) |
| Arc Count | Number of tendrils (3-12) | 6 |

### Modifying Plasma Appearance

```javascript
// In drawPlasma() function – adjust arc behavior
const arcLength = 0.3 + 0.7 * (0.3 + 0.7 * (0.5 + 0.5 * Math.sin(time * 0.1 + i * 0.5)));
// Change 0.3 and 0.7 for different arc lengths

// Adjust wobble
const wobble = Math.sin(t * Math.PI * 4 + time * 0.5 * speed + i) * (3 + intensity * 10) * (1 - t * 0.5);
// Change 4 for frequency, 3 + intensity * 10 for amplitude