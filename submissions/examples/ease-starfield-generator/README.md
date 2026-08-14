# ⭐ Starfield Generator – Creates Star Fields on Click

An interactive starfield generator that creates beautiful, dynamic star fields with a single click. Generate realistic star patterns with twinkling stars, adjustable parameters, and even nebula effects. Click the canvas or use buttons to create endless variations of cosmic scenes. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Click to generate** – Click the canvas to create a new starfield
- **Realistic star distribution** – Size variation (small to bright stars), twinkling animation, cross sparkles
- **Nebula mode** – Generate colorful nebula clouds with embedded stars
- **Adjustable parameters** – Star count (50-1000), spread, brightness, color temperature (Cool/Neutral/Warm)
- **Save as image** – Export your starfield as a PNG file
- **Keyboard shortcuts** – G (Generate), N (Nebula), C (Clear), S (Save)
- **Real-time feedback** – Star count, field status, status messages
- **Responsive design** – Adapts to any screen size
- **Twinkling animation** – Stars pulse with organic, natural twinkling

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the starfield:
   - **Click** anywhere on the canvas to generate a new starfield
   - Click **Generate** for a standard starfield
   - Click **Nebula** for a colorful nebula with stars
   - Click **Clear** to remove all stars
   - Click **Save** to download as PNG
3. Adjust the sliders:
   - **Star Count** – Number of stars (50-1000)
   - **Spread** – How spread out the stars are
   - **Brightness** – Overall star brightness
   - **Color Temp** – Cool (blue), Neutral (white), Warm (yellow/orange)
4. Use **keyboard shortcuts**:
   - `G` – Generate starfield
   - `N` – Generate nebula
   - `C` – Clear starfield
   - `S` – Save as image

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Star generation** – Stars are distributed with controlled spread, size variation (logarithmic distribution for realism), and brightness
- **Color temperature** – Stars shift from blue/white (cool) to yellow/orange (warm) based on slider
- **Twinkling animation** – Each star has independent twinkling speed and phase using sine waves
- **Nebula generation** – Creates clusters of colored particles with random hues, plus bright stars embedded
- **Rendering pipeline** – Background gradient → nebula particles (if any) → star glows → star cores → sparkle effects
- **Animation loop** – Uses `requestAnimationFrame` for smooth twinkling at 60fps

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Star Count | Number of stars | 300 (50-1000) |
| Spread | Distribution spread | 50% (0-100) |
| Brightness | Overall brightness | 60% (0-100) |
| Color Temp | Cool/Neutral/Warm | 50% (Neutral) |
| Nebula Colors | Random palette | 3-6 colors |

### Modifying Star Generation

```javascript
// In generateStarfield() function - adjust size distribution
if (sizeRand < 0.6) {
  size = 0.5 + Math.random() * 1;     // Small stars
} else if (sizeRand < 0.85) {
  size = 1 + Math.random() * 1.5;     // Medium stars
} else if (sizeRand < 0.97) {
  size = 2.5 + Math.random() * 2;     // Large stars
} else {
  size = 4.5 + Math.random() * 3;     // Very bright stars
}