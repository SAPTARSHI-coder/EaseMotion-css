# 🌀 Slinky Button – Compresses and Expands Like a Slinky

An interactive slinky button that compresses and expands with fluid, spring-like animation. Click the button, press Space, or use controls to watch the slinky coil and uncoil with realistic spring physics, vibrant colors, and satisfying visual feedback. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic slinky animation** – Coils compress and expand with fluid spring motion
- **Interactive button** – Click the slinky button to toggle compression
- **Multiple control methods** – Compress, Expand, Toggle, and Reset buttons
- **Adjustable parameters** – Compression level (0-100%), coil count (6-24), speed (1-10×), color (0-360°)
- **Visual feedback** – Coil glow, highlights, connecting lines, dynamic colors
- **Keyboard shortcuts** – C (Compress), E (Expand), T (Toggle), R (Reset), Space (Toggle)
- **Real-time feedback** – Slinky status, coil count, status messages
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the slinky:
   - **Click** the slinky button to toggle compression
   - Click **Compress** to compress the slinky
   - Click **Expand** to expand the slinky
   - Click **Toggle** to switch between states
   - Click **Reset** to return to expanded state
3. Adjust the sliders:
   - **Compression** – Manual compression level (0-100%)
   - **Coils** – Number of coils (6-24)
   - **Speed** – Animation speed (1-10×)
   - **Color** – Slinky color (0-360° hue)
4. Use **keyboard shortcuts**:
   - `C` – Compress
   - `E` – Expand
   - `T` – Toggle
   - `R` – Reset
   - `Space` – Toggle

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Slinky rendering** – Each coil is drawn as a circle with gradients, highlights, and glow effects
- **Spring physics** – Smooth interpolation between expanded and compressed states
- **Coil dynamics** – Coils maintain spacing and wobble slightly for organic feel
- **Connecting lines** – Lines between coils enhance the slinky spring effect
- **Color system** – HSL-based color with dynamic brightness and saturation
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Compression | 0-100% compressed | 0% |
| Coils | Number of coils (6-24) | 12 |
| Speed | Animation speed (1-10×) | 5× |
| Color | Hue in degrees (0-360) | 200° |

### Modifying Slinky Appearance

```javascript
// Adjust coil rendering in drawSlinky()
const radius = width * (0.6 + 0.4 * Math.sin(t * Math.PI * 2 + time * 0.5));
// Change the 0.6 and 0.4 for different coil shapes

// Adjust glow intensity
const alpha = 0.1 + 0.1 * (1 - compress) * (0.5 + 0.5 * Math.sin(t * Math.PI * 2 + time * 0.5));