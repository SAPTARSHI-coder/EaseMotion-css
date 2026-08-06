# 🌼 Floating Pollen – Pollen Particles Float Gracefully

An interactive floating pollen simulation where delicate pollen particles drift gracefully through the air with organic, soothing motion. Watch as golden particles float, wobble, and drift with gentle, hypnotic movement, creating a calming, nature-inspired visual experience. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Graceful floating motion** – Pollen drifts with organic sine-wave movement
- **Glowing particles** – Each particle has glow, trail, and subtle texture
- **Adjustable parameters** – Pollen count (10-100), float speed (1-10×), drift amount (0-100%), particle size (1-6px)
- **Interactive controls** – Add, Clear, Pause, and Reset buttons
- **Keyboard shortcuts** – A (Add), C (Clear), Space (Pause), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the pollen:
   - Click **Add** to add more particles
   - Click **Clear** to remove all particles
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click the **canvas** to add particles
3. Adjust the sliders:
   - **Pollen Count** – Number of particles (10-100)
   - **Float Speed** – How fast particles move (1-10×)
   - **Drift Amount** – How much particles drift (0-100%)
   - **Particle Size** – Size of particles (1-6px)
4. Use **keyboard shortcuts**:
   - `A` – Add particles
   - `C` – Clear particles
   - `Space` – Pause/Resume
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Pollen system** – Each particle has position, velocity, size, color, and phase
- **Organic motion** – Sine-wave floating with wobble and drift
- **Rendering** – Glowing particles with trails and pollen texture
- **Particle behavior** – Particles pulse, rotate, and drift with organic motion
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Pollen Count | Number of particles (10-100) | 40 |
| Float Speed | Movement speed (1-10×) | 5× |
| Drift Amount | Drift intensity (0-100%) | 50% |
| Particle Size | Size of particles (1-6px) | 3px |

### Modifying Pollen Appearance

```javascript
// In the POLLEN_COLORS array – add or change colors
const POLLEN_COLORS = [
  '#f9d976', '#f5c64a', '#f0b830', // Yellows
  '#f5d76e', '#f7dc6f', // Golds
  // Add your own colors
];

// In the Pollen class – adjust motion
this.wobbleAmount = 0.3 + Math.random() * 0.7; // Wobble intensity
this.speed = 0.2 + Math.random() * 0.5; // Speed range