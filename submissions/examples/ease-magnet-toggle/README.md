# 🧲 Magnet Toggle – Attract / Repel with Animation

An interactive magnet toggle that simulates magnetic attraction and repulsion with fluid particle animations. Click the toggle, use buttons, or keyboard shortcuts to switch between attract and repel modes—watch as particles are drawn toward or pushed away from the magnet with smooth, physics-like motion. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic magnetic simulation** – Particles orbit or scatter based on magnetic mode
- **Toggle switch** – Visually satisfying switch on the magnet itself
- **Attract mode** – Particles orbit the magnet with increasing intensity
- **Repel mode** – Particles push outward with force-based scattering
- **Force meter** – Adjustable force slider for intensity control
- **Random burst** – Explosive random animation for dramatic effect
- **Keyboard shortcuts** – A (Attract), R (Repel), T (Toggle), Space (Random), Arrow keys (Force)
- **Visual feedback** – Glowing poles, animated switch, status messages
- **Responsive design** – Adapts to any screen size
- **Click interaction** – Click the magnet body to toggle modes

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the magnet:
   - Click the **Attract** button to pull particles toward the magnet
   - Click **Repel** to push particles away
   - Click **Toggle** to switch between modes
   - Click **Random Burst** for a dramatic animated effect
   - Click the magnet body itself to toggle modes
   - Adjust the **Force** meter to control intensity
3. Use **keyboard shortcuts**:
   - `A` – Attract mode
   - `R` – Repel mode
   - `T` – Toggle modes
   - `Space` – Random burst
   - `↑` – Increase force
   - `↓` – Decrease force
4. Watch particles respond with fluid, physics-like animations.

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, magnet design, and responsive layout
- `README.md` – you're reading it!

## 🧠 How It Works

- **Magnetic modes** – `attract` pulls particles toward the center with orbiting motion; `repel` pushes particles outward with spreading motion
- **Particle system** – 8 particles with independent positions that smoothly interpolate toward targets
- **Force control** – A force meter (0-100%) controls the intensity of attraction/repulsion, affecting speed, distance, and scale
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps particle updates with lerp-based interpolation
- **Toggle switch** – A visual switch on the magnet that animates between positions based on mode
- **Glow effects** – Pole glows pulse in active modes, providing clear visual feedback

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Particle count | Number of orbiting particles | 8 |
| Attract distance | Base orbit radius in attract mode | 30-70px |
| Repel distance | Base spread radius in repel mode | 100-180px |
| Force range | Min/max force percentage | 0-100% |
| Animation speed | Lerp factor for smooth motion | 0.08-0.12 |
| Particle symbols | Emojis or icons for particles | ⏺ |

### Adding More Particles

```html
<!-- Add more particle divs -->
<div class="particle" id="particle9" style="--delay: 1.6s">⏺</div>
<div class="particle" id="particle10" style="--delay: 1.8s">⏺</div>