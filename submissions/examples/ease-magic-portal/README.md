# 🌀 Magic Portal – Swirling Portal with Particles

An enchanting magic portal simulation with swirling particles, dynamic color schemes, and mesmerizing visual effects. Watch as hundreds of glowing particles orbit through a mystical vortex, with pulsing trails, shimmering rings, and breathtaking bursts of magical energy. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Swirling particle system** – Hundreds of glowing particles orbit in a magical vortex
- **8 vibrant color schemes** – Mystic, Fire, Ice, Nature, Royal, Neon, Galaxy, Sunset
- **Particle burst effect** – Click to send particles scattering in a magical explosion
- **Dynamic portal rings** – Rotating, pulsing rings with glow effects- **Real-time controls** – Adjust particle count (50-500), speed (1×-10×), size (1×-10×), vortex strength (0-100%)
- **Pause/Resume** – Freeze the magic at any moment
- **Color cycling** – Cycle through enchanting color palettes
- **Real-time feedback** – Portal status, particle count, status messages
- **Keyboard shortcuts** – Space (Pause), B (Burst), C (Color), R (Reset)
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the portal:
   - **Click** anywhere on the portal to trigger a particle burst
   - Click **Pause** to freeze the animation
   - Click **Burst** to scatter particles
   - Click **Color** to cycle through color schemes
   - Click **Reset** to return to default state
   - Adjust **Particles**, **Speed**, **Size**, and **Vortex** sliders
3. Use **keyboard shortcuts**:
   - `Space` – Pause/Resume
   - `B` – Particle burst
   - `C` – Cycle colors
   - `R` – Reset portal
4. Watch the mesmerizing swirling magic unfold.

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Particle system** – Each particle orbits the portal center with individual speed, distance, phase, and trail
- **Vortex effect** – Particles are drawn toward the center based on vortex strength slider
- **Color schemes** – 8 curated palettes with 5 colors each, applied to particles and rings
- **Burst effect** – Particles scatter outward with random speed and angle, then return to orbit
- **Portal rendering** – Rotating rings with glow, center glow, particle trails, and background stars
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Particle Count | Number of particles | 200 (50-500) |
| Speed | Animation speed multiplier | 5× (1-10) |
| Size | Particle size multiplier | 5× (1-10) |
| Vortex | Pull strength toward center | 50% (0-100) |
| Color Schemes | 8 palettes with 5 colors each | Mystic (default) |

### Modifying Color Schemes

```javascript
// Add or modify color schemes in COLOR_SCHEMES
const COLOR_SCHEMES = [
  { name: 'My Theme', colors: ['#color1', '#color2', '#color3', '#color4', '#color5'] },
];