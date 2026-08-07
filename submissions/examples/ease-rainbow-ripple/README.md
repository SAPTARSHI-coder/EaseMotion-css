# 🌈 Rainbow Ripple – Rainbow Rings Expand from Interaction

An interactive rainbow ripple effect where colorful rings expand outward from your click or touch, creating a mesmerizing, colorful wave of light. Each ripple features multiple rainbow-colored rings with glowing trails, organic wobble, and adjustable speed, size, ring count, and opacity. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Colorful rainbow ripples** – Rings expand with rainbow colors from each interaction
- **Multiple rings per ripple** – Adjustable ring count (3-12) for each ripple
- **Organic motion** – Subtle wobble and trailing for natural feel
- **Burst effect** – Creates multiple ripples across the canvas at once
- **Adjustable parameters** – Ripple speed (1-10×), size (20-100%), ring count (3-12), opacity (0-100%)
- **Toggle controls** – Turn ripples on/off
- **Keyboard shortcuts** – T (Toggle), C (Clear), B (Burst), R (Reset), Space (Toggle)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the ripples:
   - **Click** anywhere on the canvas to create a rainbow ripple
   - Click **Toggle** to turn ripples on/off
   - Click **Clear** to remove all ripples
   - Click **Burst** for multiple ripples across the canvas
   - Click **Reset** to restore default settings
3. Adjust the sliders:
   - **Ripple Speed** – Expansion speed (1-10×)
   - **Ripple Size** – Maximum size (20-100%)
   - **Ring Count** – Number of rings per ripple (3-12)
   - **Opacity** – Ring opacity (0-100%)
4. Use **keyboard shortcuts**:
   - `T` – Toggle ripples
   - `C` – Clear all ripples
   - `B` – Burst ripples
   - `R` – Reset
   - `Space` – Toggle ripples

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Ripple system** – Each ripple expands outward with multiple colored rings
- **Rainbow colors** – Each ring in a ripple has a different hue (0-360°)
- **Organic motion** – Ripples have subtle wobble and trailing effects
- **Ring rendering** – Each ring is drawn with glow, stroke, and opacity
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Ripple Speed | Expansion speed (1-10×) | 5× |
| Ripple Size | Maximum size (20-100%) | 60% |
| Ring Count | Rings per ripple (3-12) | 6 |
| Opacity | Ring opacity (0-100%) | 60% |
| Max Ripples | Maximum active ripples | 50 |

### Modifying Ripple Appearance

```javascript
// In the Ripple class constructor
this.maxRadius = Math.min(canvas.width, canvas.height) * 0.45 * (parseInt(sizeSlider.value) / 100);
// Change 0.45 for different max radius

// In draw() method – adjust ring colors
const hue = (this.hue + (i / ringCount) * 360) % 360;
// Change 3jdaskdnk60 to 180 for two-colorsdnkd gradient, etc.