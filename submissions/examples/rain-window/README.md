# 🌧️ Rain Window

An atmospheric interactive glass-window component where raindrops form, slide, merge, and react to cursor movement.

Rain Window recreates the feeling of watching rain travel down a window during a storm using lightweight Canvas-based animation and procedural droplet physics.

The component is completely self-contained and requires no external frameworks or dependencies.

---

## ✨ Features

- 🌧️ Continuous procedural rain
- 💧 Individual droplet physics
- 🔗 Automatic droplet merging
- 🪟 Atmospheric glass-window effect
- 🖱️ Cursor-reactive droplets
- 🌊 Interactive ripple effects
- 💥 Click-based water disturbances
- ✨ Procedural splash particles
- 🌫️ Blurred atmospheric background
- 📊 Live droplet counter
- ⌨️ Keyboard shortcuts
- 📱 Responsive layout
- 🔄 Reset functionality
- ⚡ Lightweight Canvas rendering

---

## 🎯 What Does It Do?

Rain Window simulates a rainy glass surface.

Instead of rendering simple vertical rain lines, every raindrop exists as an individual animated object.

Each droplet has its own:

- Position
- Radius
- Velocity
- Acceleration
- Opacity
- Animation phase
- Lifetime

This allows droplets to move independently and create a more organic visual effect.

---

## 💧 Droplet Physics

Droplets do not move at a fixed speed.

Each droplet starts with a different velocity and gradually accelerates downward.

A small amount of horizontal movement is also introduced using a sinusoidal animation phase.

This prevents every droplet from following an identical straight path.

Example properties:

```javascript
{
  radius: 1 - 7,
  velocity: 0.4 - 2.2,
  acceleration: 0.005 - 0.02,
  opacity: 0.45 - 0.8
}