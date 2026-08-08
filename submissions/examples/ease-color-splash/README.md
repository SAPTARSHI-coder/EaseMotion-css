# 🎨 Color Splash – Color Explodes Outward Like Paint Splash

An interactive color splash effect where vibrant paint particles explode outward from your click or touch, creating a dynamic, colorful explosion of paint-like particles with gravity, trails, and organic motion. Each splash bursts with 50-500 colorful particles that dance, fall, and fade with realistic physics. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Explosive color splash** – Particles burst outward like paint splashing
- **Vibrant colors** – Random selection from 20+ vivid paint colors
- **Realistic physics** – Gravity, friction, wobble, and life decay
- **Organic particles** – Irregular shapes, trails, and glow effects
- **Adjustable parameters** – Particle count (50-500), explosion force (1-10×), particle size (1-10×), vibrancy (0-100%)
- **Toggle controls** – Turn splash on/off
- **Keyboard shortcuts** – S (Splash), C (Clear), T (Toggle), R (Reset), Space (Splash)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the color splash:
   - **Click** anywhere on the canvas to create a splash
   - Click **Splash** for an explosion at the center
   - Click **Clear** to remove all particles
   - Click **Toggle** to turn splash on/off
   - Click **Reset** to restore default settings
3. Adjust the sliders:
   - **Particle Count** – Number of particles (50-500)
   - **Explosion Force** – How far particles fly (1-10×)
   - **Particle Size** – Size of each particle (1-10×)
   - **Vibrancy** – Color intensity (0-100%)
4. Use **keyboard shortcuts**:
   - `S` – Splash
   - `C` – Clear
   - `T` – Toggle
   - `R` – Reset
   - `Space` – Splash

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Particle system** – Each particle has position, velocity, size, color, life, gravity, and friction
- **Physics simulation** – Gravity pulls particles down, friction slows them, life decays over time
- **Organic rendering** – Particles have trails, glow, rotation, and irregular shapes
- **Color palette** – 20+ vibrant paint colors with random selection
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Particle Count | Number of particles (50-500) | 150 |
| Explosion Force | How far particles fly (1-10×) | 5× |
| Particle Size | Size of each particle (1-10×) | 4× |
| Vibrancy | Color intensity (0-100%) | 80% |
| Max Particles | Maximum active particles | 1000 |

### Modifying Particle Behavior

```javascript
// In the Particle class constructor
this.gravity = 0.02 + Math.random() * 0.04; // Adjust gravity
this.decay = 0.003 + Math.random() * 0.008; // Adjust life decay
this.friction = 0.98 + Math.random() * 0.015; // Adjust friction

// In createSplash() function
const numColors = 3 + Math.floor(Math.random() * 4); // Change color variety