# 🌋 Magma Vein

> A living volcanic network where glowing magma branches, pulses and spreads beneath a dark geological surface.

Magma Vein is an interactive animation component that visualizes a procedural underground magma system.

Instead of using a predefined animation path, the component generates branching magma veins dynamically. As a vein reaches the end of its path, it can generate additional branches, creating an organic network that continuously evolves across the volcanic surface.

The component is built entirely with vanilla HTML, CSS and JavaScript and uses the Canvas API for rendering.

---

## ✨ Features

- 🌋 Procedural magma network
- 🔥 Organic branching veins
- 💡 Animated glowing magma cores
- ⚡ Travelling heat pulses
- 💥 Interactive eruption points
- 🌡️ Real-time pressure control
- ✨ Floating ember particles
- 🪨 Procedural volcanic surface texture
- 📊 Live vein statistics
- ⌨️ Keyboard shortcuts
- 📱 Responsive layout
- 🚫 Zero external dependencies

---

## 🎯 What It Does

The component simulates a simplified underground magma system.

A magma source begins at a point on the volcanic surface and travels in a specific direction.

As the magma reaches the end of the initial vein, the system can generate additional branches.

The resulting structure resembles a naturally occurring volcanic network.

Each branch has its own:

- Direction
- Length
- Speed
- Width
- Depth
- Animation state

This creates variation between every generated network.

---

## 🌋 Procedural Branching

The main visual effect comes from procedural branching.

A vein begins with:

```js
new Vein(x, y, angle)