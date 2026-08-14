# 🌀 Vacuum Button – Pulls Particles Toward It

An interactive vacuum button that creates a powerful suction effect, pulling particles toward it with fluid physics, glowing trails, and satisfying visual feedback. Click the button or press Space to toggle between suck, blow, and idle modes—watch particles swirl, cluster, and scatter with realistic force dynamics. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Particle physics simulation** – Particles with mass, velocity, damping, and force-based motion
- **Suck mode** – Particles are pulled toward the center with increasing force
- **Blow mode** – Particles are pushed away from the center
- **Visual feedback** – Glowing trails, particle highlights, suction/blow range indicators
- **Customizable parameters** – Particle count (10-80), suction power (1-10×), range (20-100%), speed (1-10×)
- **Interactive button** – Click the floating button to toggle modes
- **Keyboard shortcuts** – S (Suck), B (Blow), T (Toggle), R (Reset), Space (Toggle)
- **Real-time feedback** – Vacuum status, particle count, status messages
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the vacuum:
   - **Click** the vacuum button to toggle suck mode
   - Click **Suck** to pull particles toward center
   - Click **Blow** to push particles away
   - Click **Toggle** to cycle through modes
   - Click **Reset** to reset particles
3. Adjust the sliders:
   - **Particles** – Number of particles (10-80)
   - **Suction Power** – Force strength (1-10×)
   - **Range** – Effect radius (20-100%)
   - **Speed** – Animation speed (1-10×)
4. Use **keyboard shortcuts**:
   - `S` – Suck mode
   - `B` – Blow mode
   - `T` – Toggle modes
   - `R` – Reset
   - `Space` – Toggle modes

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Particle system** – Each particle has position, velocity, mass, color, and trail
- **Force simulation** – Suck applies inward force, blow applies outward force based on distance
- **Physics integration** – Velocity damping, speed clamping, soft boundary bouncing
- **Visual effects** – Glowing trails, radial gradients, particle highlights, range indicators
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Particles | Number of particles (10-80) | 30 |
| Suction Power | Force strength (1-10×) | 5× |
| Range | Effect radius (20-100%) | 60% |
| Speed | Animation speed (1-10×) | 5× |
| Colors | 20 preset particle colors | Various |

### Modifying Particle Behavior

```javascript
// In the Particle class constructor
this.speed = 0.5 + Math.random() * 1.5;  // Base speed
this.mass = 0.5 + Math.random() * 0.5;    // Mass affects force response
this.trailLength = 3 + Math.floor(Math.random() * 5); // Trail length

// In the update method
const force = (1 - dist / rangePx) * power * 0.08; // Suck force
const force = (1 - dist / rangePx) * power * 0.06; // Blow force