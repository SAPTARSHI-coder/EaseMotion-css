# 🕯️ Candle Flicker – Candle Flame Flickers and Dances

An interactive candle flame simulation with realistic flickering, dancing flames, glowing embers, and adjustable height, speed, and color. Watch the flame flicker and dance like a real candle, with the ability to blow it out and relight it. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic candle flame** – Flickering, dancing flame with organic motion
- **Glowing embers** – Small glowing particles rising from the flame
- **Blow effect** – Blow on the candle to make it flicker
- **Adjustable parameters** – Flame height (20-100%), flicker speed (1-10×), flame color (0-360°)
- **Toggle controls** – Light/extinguish the candle
- **Keyboard shortcuts** – T (Toggle), R (Reset), B (Blow)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the candle:
   - Click **Toggle** to light/extinguish the candle
   - Click **Reset** to restore default settings
   - Click **Blow** to blow on the candle
   - Click the **canvas** to blow on the candle
3. Adjust the sliders:
   - **Flame Height** – How tall the flame is (20-100%)
   - **Flicker Speed** – How fast the flame flickers (1-10×)
   - **Flame Color** – Hue of the flame (0-360°)
4. Use **keyboard shortcuts**:
   - `T` – Toggle candle
   - `R` – Reset
   - `B` – Blow

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Flame system** – Multiple flame particles with organic flicker and dance
- **Particle physics** – Particles rise, wobble, and fade with life cycles
- **Ember system** – Glowing particles rise from the flame
- **Blow effect** – Wind pushes flame particles outward
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Flame Height | How tall the flame is (20-100%) | 80% |
| Flicker Speed | How fast the flame flickers (1-10×) | 5× |
| Flame Color | Hue (0-360°) | 30° (orange) |

### Modifying Flame Appearance

```javascript
// In the FlameParticle class – adjust flame shape
ctx.moveTo(0, -height);
ctx.quadraticCurveTo(width * 0.4, -height * 0.5, width * 0.5, -height * 0.1);
// Adjust control points for different flame shapes

// In generateFlame() – adjust particle count
const count = 15 + Math.floor(heightMult * 25); // More particles for taller flame