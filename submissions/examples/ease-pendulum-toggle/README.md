# ⏱️ Pendulum Toggle – Swings Side to Side

An interactive pendulum toggle that simulates realistic pendulum physics with graceful swinging motion. Click to start, pause, or toggle—watch the pendulum swing side to side with adjustable speed and angle controls, complete with glowing effects, real-time stats, and responsive feedback. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic pendulum physics** – Simulates gravity, damping, and elastic collisions
- **Toggle control** – Start, pause, toggle, and reset the pendulum
- **Adjustable speed** – Control how fast the pendulum swings (0.1× – 3×)
- **Adjustable angle** – Set maximum swing angle (10° – 60°)
- **Visual feedback** – Glowing bob, sliding toggle indicator, real-time stats
- **Swing counter** – Tracks number of full swings
- **Keyboard shortcuts** – Space (Toggle), ←/→ (Speed), ↑/↓ (Angle), R (Reset)
- **Multiple interaction methods** – Buttons, keyboard, click on pendulum or bob
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the pendulum:
   - Click **Start** to begin swinging
   - Click **Pause** to pause/resume
   - Click **Toggle** to start/pause
   - Click **Reset** to return to center
   - Click the pendulum or bob to toggle
   - Adjust **Speed** and **Angle** sliders
3. Use **keyboard shortcuts**:
   - `Space` – Toggle start/pause
   - `←` – Decrease speed
   - `→` – Increase speed
   - `↑` – Increase angle
   - `↓` – Decrease angle
   - `R` – Reset
4. Watch real-time stats update: angle, speed, and swing count.

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, pendulum design, and responsive layout
- `README.md` – you're reading it!

## 🧠 How It Works

- **Physics engine** – Simple pendulum simulation using angular acceleration: `a = -g * sin(θ)`
- **Integration** – Velocity-Verlet style integration with damping for realistic motion
- **Collision** – Elastic bounce at max angle with energy loss
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates
- **State management** – Tracks running state, pause state, angle, velocity, swing count
- **Visual feedback** – Bob glow intensifies with speed, indicator follows angle

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| `GRAVITY` | Gravity constant for physics | 0.5 |
| `DAMPING` | Energy loss per frame | 0.995 |
| `maxAngle` | Maximum swing angle | 30° |
| `speedMultiplier` | Speed multiplier | 1× |
| Pendulum height | Arm length | 280px |
| Bob size | Diameter of bob | 56px |

### Adjusting Physics

```javascript
// In the script, modify these constants:
const GRAVITY = 0.5;        // Higher = faster swings
const DAMPING = 0.995;      // Lower = more energy loss