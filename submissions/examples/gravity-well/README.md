# 🪐 Gravity Well

Gravity Well is an interactive space-time visualization that represents a simplified gravitational field using orbital particles, animated rings, and a glowing central gravitational core.

The component uses motion to communicate gravitational strength.

## ✨ Features

- 🪐 Central gravitational core
- 🌀 Orbital particle system
- 🌌 Deep-space background
- ⭐ Animated celestial particles
- 📈 0–100% gravity control
- 💫 Dynamic orbital velocity
- 🕳️ Gravitational attraction
- ⚡ Gravity pulse interaction
- 📊 Real-time field state
- ⌨️ Keyboard shortcuts
- 📱 Responsive design
- 🚫 No external dependencies

## 🎮 Controls

| Input | Action |
|---|---|
| Slider | Changes gravitational strength |
| Gravity Pulse | Creates a temporary field disturbance |
| Space | Trigger gravity pulse |
| R | Reset gravity |
| Resize | Recalculates the canvas |

## 🌀 Gravity States

### Weak

0–25%.

Particles maintain wide and slow orbital paths.

### Stable

26–50%.

Particles follow balanced orbital paths around the central object.

### Strong

51–75%.

Orbital velocity increases and particles gradually move closer to the gravitational core.

### Extreme

76–100%.

The gravitational field becomes highly concentrated and particles orbit much faster.

## 💫 Orbital System

Each orbital body contains:

- Angular position
- Orbital radius
- Angular velocity
- Particle size
- Phase information

Every animation frame updates the particle's angular position and radius.

Increasing gravity increases the orbital velocity and attraction.

## ⚡ Gravity Pulse

The Gravity Pulse action temporarily disturbs the orbital system.

Particles are pushed outward before naturally returning toward the central gravitational field.

This creates a brief ripple-like interaction.

## 🎨 Visual System

The component combines:

- CSS orbital rings
- Radial gradients
- Canvas particles
- Glow effects
- Core animation
- Responsive sizing

The central object remains visually stable while the surrounding system provides continuous movement.

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript ES6
- Canvas API
- requestAnimationFrame
- CSS animations
- Responsive media queries

## 🔧 Customization

Developers can customize:

- Gravity range
- Particle count
- Orbital radius
- Orbital speed
- Attraction strength
- Core size
- Core glow
- Orbit dimensions
- Background gradients
- Pulse intensity

## 📱 Responsive Design

The component automatically adapts its orbital dimensions and layout for smaller screens.

The controls also switch to a vertical layout on mobile devices.

## 🎯 Use Cases

Gravity Well can be used for:

- Astronomy websites
- Science education
- Space dashboards
- Game interfaces
- Experimental landing pages
- Portfolio projects
- Interactive animation collections

## 📄 License

MIT License.