# 🌌 Northern Lights – Wavy Aurora Effect

A mesmerizing northern lights (aurora borealis) simulation with flowing, wavy light patterns dancing across a starry night sky. Watch as vibrant aurora layers ripple and flow with organic motion, creating a breathtaking natural light show. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic aurora simulation** – Multiple wavy layers with organic, flowing motion
- **8 vibrant color schemes** – Classic Green, Aurora Borealis, Pink Dream, Electric Blue, Sunset Aurora, Mystic Purple, Arctic Ice, Fire & Ice
- **Dynamic controls** – Adjust intensity, speed, wavelength, and number of layers
- **Star field** – Twinkling stars in the background
- **Pause/Resume** – Freeze the aurora at any moment
- **Wave effect** – Trigger a wave pulse with button or click
- **Color cycling** – Cycle through stunning aurora palettes
- **Real-time feedback** – Aurora status, intensity display, status messages
- **Keyboard shortcuts** – Space (Pause), C (Colors), W (Wave), R (Reset)
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the aurora:
   - Click **Pause** to freeze the animation
   - Click **Colors** to cycle through color schemes
   - Click **Wave** to trigger a wave pulse
   - Click **Reset** to return to default settings
   - Adjust **Intensity**, **Speed**, **Wavelength**, and **Layers** sliders
   - Click the canvas to trigger a wave pulse
3. Use **keyboard shortcuts**:
   - `Space` – Pause/Resume
   - `C` – Cycle colors
   - `W` – Wave pulse
   - `R` – Reset
4. Watch the mesmerizing aurora dance across the sky.

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Aurora rendering** – Multiple wave layers with sine-wave displacement, gradient fills, and glow effects
- **Wave generation** – Four combined wave frequencies create realistic, organic motion
- **Color schemes** – 8 curated palettes with 5 colors each, applied to aurora layers
- **Star field** – Random stars with twinkling animation
- **Light rays** – Vertical aurora streaks for added realism
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Intensity | Aurora brightness and visibility | 50% (10-100) |
| Speed | Animation speed multiplier | 5× (1-10) |
| Wavelength | Wave frequency and amplitude | 5× (1-10) |
| Layers | Number of aurora layers | 4 (2-8) |
| Color Schemes | 8 palettes with 5 colors each | Classic Green |

### Modifying Color Schemes

```javascript
// Add or modify color schemes in COLOR_SCHEMES
const COLOR_SCHEMES = [
  { name: 'My Aurora', colors: ['#color1', '#color2', '#color3', '#color4', '#color5'] },
];