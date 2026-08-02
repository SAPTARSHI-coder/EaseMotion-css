# ☀️ Sunburst Effect – Rays Burst Outward on Interaction

An interactive sunburst effect that creates dramatic, radiating rays of light bursting outward with fluid animation, vibrant colors, and dynamic controls. Click anywhere on the canvas or press the Burst button to trigger an explosive sunburst, watch rays pulse rhythmically, or cycle through stunning color schemes. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Dramatic sunburst animation** – Rays burst outward with fluid, organic motion
- **Click interaction** – Click anywhere on the canvas to trigger a burst
- **Pulse mode** – Continuous rhythmic pulsing of rays
- **8 color schemes** – Golden, Sunset, Sunrise, Cool, Neon, Fire, Ice, Aurora
- **Customizable controls** – Ray count (8-72), burst speed (1-10×), ray length (20-100%), glow intensity (0-100%)
- **Dynamic ray system** – Each ray has independent speed, length, width, and opacity
- **Glow effects** – Ray glows, center sun glow, and ambient background glow
- **Keyboard shortcuts** – B (Burst), P (Pulse), C (Color), R (Reset)
- **Real-time feedback** – Burst status, ray count, status messages
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the sunburst:
   - **Click** anywhere on the canvas to trigger a burst
   - Click **Burst** for a dramatic ray explosion
   - Click **Pulse** for continuous rhythmic pulsing
   - Click **Color** to cycle through color schemes
   - Click **Reset** to clear all rays
3. Adjust the sliders:
   - **Ray Count** – Number of rays (8-72)
   - **Burst Speed** – Animation speed (1-10×)
   - **Ray Length** – Maximum ray length (20-100%)
   - **Glow Intensity** – Glow brightness (0-100%)
4. Use **keyboard shortcuts**:
   - `B` – Burst
   - `P` – Pulse toggle
   - `C` – Cycle colors
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Ray system** – Each ray is an object with angle, length, speed, width, opacity, and hue
- **Burst animation** – Rays shoot outward from the center with random delays and speeds
- **Pulse mode** – Rays oscillate in length and opacity rhythmically
- **Color system** – HSL-based colors with 8 preset schemes
- **Rendering pipeline** – Background gradient → ray glows → ray strokes → tip glows → center sun
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Ray Count | Number of rays (8-72) | 24 |
| Burst Speed | Animation speed (1-10×) | 5× |
| Ray Length | Maximum ray length (20-100%) | 60% |
| Glow Intensity | Glow brightness (0-100%) | 60% |
| Color Schemes | 8 presets | Golden |

### Modifying Ray Behavior

```javascript
// In the Ray class constructor
this.speed = 3 + Math.random() * 5;      // Speed range
this.width = 1 + Math.random() * 3;      // Width range
this.delay = Math.random() * 0.3;        // Initial delay

// In createSunburst() function
const length = maxLength * (0.7 + Math.random() * 0.3); // Length variation