# 🌿 Whispering Grass

An interactive canvas-based grass field where pointer movement creates localized wind waves that travel through the meadow.

Whispering Grass is designed around organic motion rather than conventional hover animations. Each grass blade has its own height, phase, lean, depth, and movement characteristics, allowing the field to react naturally when the user moves through it.

The component is completely self-contained and requires no external libraries or frameworks.

---

## ✨ Overview

Whispering Grass creates the visual illusion of a physical meadow responding to wind.

Moving the pointer across the field generates a localized disturbance. Grass blades close to the pointer bend more strongly while blades farther away receive progressively weaker influence.

Once the pointer leaves the area, the grass does not immediately snap back. Instead, every blade gradually interpolates toward its resting position, creating a soft spring-like recovery.

The result is a calm and organic interaction suitable for nature-focused interfaces and creative UI demonstrations.

---

## 🎯 Features

- Interactive canvas-based grass field
- Hundreds of independently animated grass blades
- Pointer-controlled wind interaction
- Distance-based influence calculation
- Localized wind waves
- Smooth blade interpolation
- Natural recovery animation
- Ambient idle movement
- Randomized blade height
- Randomized blade phase
- Randomized blade lean
- Depth variation
- Adjustable wind intensity
- Adjustable grass density
- Adjustable wave radius
- Adjustable recovery speed
- Wind burst interaction
- Reset functionality
- Keyboard shortcuts
- Responsive canvas
- No external dependencies
- Works directly from `demo.html`

---

## 🌾 Grass Blade System

Every blade is represented by a lightweight `GrassBlade` object.

Each blade stores:

```text
x
baseY
height
width
phase
lean
angle
targetAngle
depth
speed