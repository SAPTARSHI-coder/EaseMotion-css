# 🕯️ Shadow Lantern

An interactive light-and-shadow projection component where a movable lantern dynamically changes the shadows of floating objects.

## 📖 Overview

Shadow Lantern creates a miniature atmospheric environment using the HTML5 Canvas API.

A glowing lantern acts as the primary light source while multiple floating objects cast projected shadows across a translucent surface.

Moving the lantern changes the direction, length, opacity, and softness of the shadows in real time.

The component is completely self-contained and requires no external libraries, frameworks, build tools, or server.

Simply open `demo.html` in a browser.

---

## ✨ Features

- 🕯️ Interactive movable lantern
- 🌑 Dynamic shadow projection
- 💡 Adjustable light intensity
- 🌫️ Adjustable shadow softness
- ✨ 35 atmospheric dust particles
- 🔥 Organic lantern flickering
- 🪐 Six floating scene objects
- 🌟 Multi-layer lantern glow
- 📊 Real-time light coordinates
- ⟳ Reset functionality
- ⌨️ Keyboard controls
- 📱 Responsive layout
- 🎨 Atmospheric dark environment
- ⚡ Canvas-based animation loop
- 🧩 Zero external dependencies

---

## 🕯️ Light Source

The lantern is represented as a dynamically positioned radial light source.

Its position can be controlled using:

- Pointer dragging
- Canvas clicking
- Arrow keys

The light source is clamped to a safe region so it cannot disappear outside the scene.

The glow radius changes according to the selected light intensity.

---

## 🌑 Shadow Projection

Every floating object receives an automatically generated shadow.

The shadow direction is calculated using the vector between the lantern and the object.

Conceptually:

```text
Object Position - Light Position
          ↓
     Direction Vector
          ↓
 Projection Distance
          ↓
     Shadow Position