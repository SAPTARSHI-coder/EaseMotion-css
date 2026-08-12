# ✨ Sparks Fly – Sparks Fly from Interaction Point

An interactive spark effect where bursts of glowing sparks fly outward from your click or touch, creating a dramatic, energetic display of light and motion. Watch as sparks burst, trail, and fade with realistic physics, glowing colors, and organic motion. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Explosive spark bursts** – Sparks fly outward from interaction point
- **Realistic physics** – Gravity, friction, wobble, and life decay
- **Glowing sparks** – Each spark has glow, trail, and color variation
- **Adjustable parameters** – Spark count (10-100), force (1-10×), life (0-100%), size (1-8px)
- **Interactive controls** – Spark, Clear, Pause, and Reset buttons
- **Keyboard shortcuts** – S (Spark), C (Clear), Space (Pause), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the sparks:
   - **Click** anywhere on the canvas to create sparks
   - Click **Spark** for a random burst
   - Click **Clear** to remove all sparks
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
3. Adjust the sliders:
   - **Spark Count** – Number of sparks (10-100)
   - **Spark Force** – How far sparks fly (1-10×)
   - **Spark Life** – How long sparks last (0-100%)
   - **Spark Size** – Size of sparks (1-8px)
4. Use **keyboard shortcuts**:
   - `S` – Spark burst
   - `C` – Clear sparks
   - `Space` – Pause/Resume
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Spark system** – Each spark has position, velocity, size, color, life, and trail
- **Physics simulation** – Gravity pulls sparks down, friction slows them, life decays over time
- **Organic rendering** – Sparks have glow, trails, rotation, and irregular shapes
- **Color palette** – 15 warm colors (orange, yellow, gold, red)
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Spark Count | Number of sparks (10-100) | 40 |
| Spark Force | How far sparks fly (1-10×) | 5× |
| Spark Life | How long sparks last (0-100%) | 50% |
| Spark Size | Size of sparks (1-8px) | 4px |

### Modifying Spark Appearance

```javascript
// In the SPARK_COLORS array – add or change colors
const SPARK_COLORS = [
  '#ff6b35', '#ff8c42', '#ffa94d', // Oranges
  '#ffd93d', '#fecb6e', // Yellows
  // Add your own colors
];

// In the Spark class – adjust physics
this.gravity = 0.02 + Math.random() * 0.03; // Gravity strength
this.friction = 0.98 + Math.random() * 0.015; // Friction