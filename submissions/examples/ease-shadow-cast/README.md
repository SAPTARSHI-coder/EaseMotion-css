# 🌓 Shadow Cast

## Object Casts Realistic Shadow — Interactive Light & Shadow Simulation

### Description

**Shadow Cast** is an interactive, physics-based shadow simulation that demonstrates how objects cast realistic shadows in response to dynamic light sources. Drag a 3D object around the canvas and watch as its shadow shifts, stretches, and distorts in real-time based on the position and height of the light source. The simulation features realistic shadow blur, light angle control, height adjustment, and multiple object shapes to explore.

The experience is both educational and visually engaging. A beautifully rendered object — choose from a vase, cube, sphere, or cone — casts a soft, blurred shadow on a subtle ground plane. The shadow changes shape and position as you move the object, rotate it, or adjust the light source. You can drag the light source directly, use sliders to fine-tune its angle and height, or adjust the shadow blur for different visual effects.

This is more than just a visual demo — it's a fully interactive physics simulation that teaches the principles of light and shadow. Move the light source to see how shadows elongate and shift, adjust the height to see how shadows soften and spread, and rotate the object to see how shadows change with object orientation. Toggle the light on/off or hide the shadow entirely to study the effect.

Whether you're a designer studying lighting principles, a developer learning about shadow rendering, or simply someone fascinated by the interplay of light and objects, Shadow Cast offers a beautiful, interactive playground for exploring the fundamentals of shadow physics.

---

### Features

- 🌓 **Realistic Shadow Physics** — Shadows dynamically respond to light position, height, and object orientation
- 🎨 **Multiple Object Shapes** — Choose from vase, cube, sphere, or cone with unique shadow patterns
- 🖱️ **Drag & Drop Interaction** — Drag the object or light source directly on the canvas
- ☀️ **Adjustable Light Controls** — Fine-tune light angle (0-360°) and height (50-400px)
- 🎭 **Shadow Blur Control** — Adjust shadow softness from sharp to ultra-soft
- 💡 **Light Toggle** — Turn the light on/off to see the effect
- 🌓 **Shadow Toggle** — Hide/show the shadow for comparison
- 🔄 **Object Rotation** — Rotate the object to see how shadows change with orientation
- ⌨️ **Keyboard Controls** — Arrow keys to move object, Q/E to rotate, R to reset
- 📱 **Touch & Mouse Support** — Works on desktop, tablet, and mobile devices

---

### How to Use

1. **Open `demo.html`** in any modern browser — no server required
2. **Drag the object** (the 3D shape) to move it around the canvas
3. **Drag the light source** (the glowing circle) to change light position
4. **Adjust the light angle** slider to rotate the light around the object
5. **Adjust the light height** slider to change how high the light is
6. **Adjust shadow blur** to control shadow softness
7. **Toggle light** on/off with the 💡 button
8. **Toggle shadow** on/off with the 🌓 button
9. **Rotate the object** using Q/E keys or by clicking and dragging
10. **Reset** with the 🔄 button or press R

---

### Controls Reference

| Control | Action | Keyboard Shortcut |
|---------|--------|-------------------|
| 🖱️ Drag Object | Move object around canvas | Arrow keys |
| 🖱️ Drag Light | Move light source | N/A |
| 🔄 Reset | Reset object to center | R |
| 💡 Toggle Light | Turn light on/off | L |
| 🌓 Toggle Shadow | Show/hide shadow | S |
| ☀️ Light Angle | Rotate light (0-360°) | N/A |
| 📏 Light Height | Change light height (50-400px) | N/A |
| 🎨 Shadow Blur | Adjust shadow softness | N/A |
| 🔄 Rotate Object | Rotate the object | Q (counter-clockwise), E (clockwise) |

---

### Visual & Technical Effects

- **Dynamic Shadow Projection** — Shadows are calculated based on light position, height, and object geometry
- **Soft Shadow Blur** — Adjustable blur creates realistic penumbra effects
- **Shadow Distance** — Shadow length increases as light angle decreases, mimicking real-world physics
- **Gradient Shadows** — Shadows fade with distance for realistic falloff
- **Specular Highlight** — Objects show specular highlights based on light position
- **Rim Lighting** — Subtle rim light effect adds depth
- **Ground Plane** — Semi-transparent ground plane with subtle grid for spatial reference
- **Light Glow** — Light source emits a soft, atmospheric glow
- **Object Rotation** — Rotating the object changes shadow shape and orientation

---

### Object Types & Shadow Behavior

| Object | Shape | Shadow Behavior |
|--------|-------|-----------------|
| Vase | Curved, organic | Soft, flowing shadow with varied edges |
| Cube | Geometric, angular | Sharp, rectangular shadow with defined corners |
| Sphere | Perfectly round | Circular shadow that scales uniformly |
| Cone | Triangular, pointed | Triangular shadow that changes with rotation |

---

### Technical Architecture

| Component | Description |
|-----------|-------------|
| **Canvas Rendering** | Hardware-accelerated 2D canvas for smooth performance |
| **Shadow Calculation** | Projection-based shadow mapping using object geometry |
| **Light Physics** | Directional light with position, angle, and height controls |
| **Object Rendering** | Multiple shape types with gradient fills and highlights |
| **Interactive Controls** | Drag-and-drop, sliders, and keyboard shortcuts |
| **Performance Optimization** | Efficient rendering with requestAnimationFrame |

---

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| **R** | Reset object to center |
| **L** | Toggle light on/off |
| **S** | Toggle shadow on/off |
| **Arrow Keys** | Move object position |
| **Q** | Rotate object counter-clockwise |
| **E** | Rotate object clockwise |

---

### File Structure
