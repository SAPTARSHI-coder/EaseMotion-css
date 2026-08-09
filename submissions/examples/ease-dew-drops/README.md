# 💧 Dew Drops – Water Droplets Form and Slide

An interactive dew drop simulation where water droplets form on a surface and slide down with realistic physics, glowing reflections, and organic motion. Watch as droplets form, grow, and slide with wobbling, trailing motion across a leaf-like surface. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic dew drops** – Droplets form, grow, and slide with organic motion
- **Glowing reflections** – Each drop has highlights, shadows, and glow effects
- **Trail system** – Drops leave subtle trails as they slide
- **Adjustable parameters** – Drop size (5-30px), slide speed (1-10×), formation rate (1-10×)
- **Interactive controls** – Drop, Clear, Pause, and Reset buttons
- **Auto-formation** – Drops form automatically at adjustable rate
- **Keyboard shortcuts** – D (Drop), C (Clear), Space (Pause), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the dew drops:
   - **Click** anywhere on the surface to create a drop
   - Click **Drop** for a random drop
   - Click **Clear** to remove all drops
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
3. Adjust the sliders:
   - **Drop Size** – Size of droplets (5-30px)
   - **Slide Speed** – How fast drops slide (1-10×)
   - **Formation Rate** – How often drops form (1-10×)
4. Use **keyboard shortcuts**:
   - `D` – Create random drop
   - `C` – Clear all drops
   - `Space` – Pause/Resume
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Drop system** – Each drop has position, size, speed, opacity, and trail
- **Physics simulation** – Drops slide with wobble, random movement, and trail
- **Rendering** – Glowing drops with highlights, shadows, and reflections
- **Auto-formation** – Drops form automatically at adjustable rate
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Drop Size | Size of droplets (5-30px) | 15px |
| Slide Speed | How fast drops slide (1-10×) | 5× |
| Formation Rate | How often drops form (1-10×) | 5× |
| Max Drops | Maximum active drops | 30 |

### Modifying Drop Appearance

```javascript
// In the Drop class constructor
this.size = size || parseInt(sizeSlider.value) * (0.5 + Math.random() * 0.8);
this.highlight = 0.3 + Math.random() * 0.4; // Highlight intensity
this.glowSize = this.size * 2; // Glow radius

// In draw() method – adjust colors
grad.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.9})`);
grad.addColorStop(0.3, `rgba(220, 240, 255, ${alpha * 0.8})`);
grad.addColorStop(0.7, `rgba(180, 220, 255, ${alpha * 0.6})`);
grad.addColorStop(1, `rgba(140, 200, 240, ${alpha * 0.4})`);