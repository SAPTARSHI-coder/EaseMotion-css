# 🌨️ Hail Storm

## Hail Bounces Across Surface — A Mesmerizing Storm Simulation

### Description

**Hail Storm** is an immersive, physics-driven simulation that brings a dramatic hailstorm to life on your screen. Watch as countless hailstones cascade from the sky, bouncing chaotically across an undulating icy surface. Each hailstone behaves independently, with realistic physics including gravity, bounciness, wind resistance, and energy loss.

The simulation captures the raw energy of a real hailstorm — hailstones of varying sizes tumble and ricochet, leaving brief trails as they bounce. The surface beneath is not flat; it rolls with gentle bumps and ridges, creating unpredictable bounce patterns that feel organic and alive. Subtle sparkles and highlights on the hailstones add visual depth, while the dark, moody sky and drifting clouds set the atmospheric tone.

Whether you're looking for a calming screensaver-like experience, a physics demonstration, or simply something mesmerizing to watch, Hail Storm delivers with stunning visual fidelity and buttery-smooth performance.

---

### Features

- 🌨️ **Realistic Physics** — Each hailstone has individual gravity, velocity, bounciness, and wind response
- 🎯 **Dynamic Surface** — The ground is not flat; undulating terrain creates organic, unpredictable bounces
- ⚡ **Adjustable Intensity** — Control the severity of the storm from light flurries to severe hail
- 💨 **Wind Control** — Add horizontal wind to push hailstones sideways, creating dynamic patterns
- 🏀 **Bounciness Slider** — Adjust how much energy hailstones retain on each bounce
- 🎨 **Visual Polish** — Glowing gradients, sparkles, trails, and atmospheric lighting
- 📊 **Real-Time Stats** — Track the number of active hailstones and storm intensity
- ⌨️ **Keyboard Shortcuts** — Space (pause), R (reset), + (add hail), - (remove hail)
- 📱 **Touch & Mouse Support** — Optimized for all devices with responsive design

---

### How to Use

1. **Open `demo.html`** in any modern browser — no server required
2. **Watch** as hailstones fall and bounce across the surface
3. **Adjust the intensity** slider to control storm severity (1 = light, 5 = severe)
4. **Adjust bounciness** to change how much hailstones bounce (30% = soft, 90% = super bouncy)
5. **Add wind** to push hailstones horizontally (-20 to +20)
6. **Pause/Resume** with the ⏸️/▶️ button or press the **Spacebar**
7. **Reset** the storm with the 🔄 button or press **R**
8. **Add more hail** with the ➕ button or press **+**
9. **Remove hail** with the ➖ button or press **-**

---

### Control Reference

| Control | Action | Keyboard Shortcut |
|---------|--------|-------------------|
| ⏸️/▶️ | Pause / Resume storm | Spacebar |
| 🔄 | Reset to initial state | R |
| ➕ | Add 10-20 hailstones | + |
| ➖ | Remove 10-20 hailstones | - |
| Intensity | Storm severity (1-5) | N/A |
| Bounciness | Bounce energy retention (30-90%) | N/A |
| Wind | Horizontal wind force (-20 to +20) | N/A |

---

### Visual Effects

- **Hailstone Rendering** — Each hailstone is a gradient-filled circle with a bright highlight, giving it a glossy, icy appearance
- **Motion Trails** — Fast-moving hailstones leave brief, translucent trails
- **Bounce Sparkles** — When hailstones hit the surface, they create tiny sparkle effects
- **Atmospheric Sky** — Dark, layered gradient with subtle drifting clouds
- **Undulating Surface** — The ground features gentle bumps using multiple sine waves for organic terrain
- **Surface Sparkles** — Occasional glints on the icy ground for added realism
- **Shadow & Depth** — Subtle shadows and depth effects for a 3D feel

---

### Technical Architecture

- **Canvas-based Rendering** — Efficient pixel-level drawing with hardware acceleration
- **Physics Engine** — Simple but effective physics with gravity, velocity, bounciness, and friction
- **Particle System** — Each hailstone is an independent particle with its own properties
- **Terrain Generation** — The surface is generated using layered sine wave functions
- **Performance Optimization** — Hailstones are limited to prevent performance degradation; trails are short-lived
- **Responsive Design** — Adapts to any screen size with touch-optimized controls

---

### Why It Fits EaseMotion CSS

This submission embodies the **EaseMotion CSS** philosophy through:

- **Human-Readable Controls** — Intuitive sliders and buttons with clear labels and icons
- **Animation-First Experience** — Every movement is smooth, fluid, and natural
- **Mesmerizing Visuals** — Beautiful, polished effects that showcase the power of web animations
- **Playful & Engaging** — Watching the hailstones bounce is inherently satisfying and addictive
- **Accessible** — Works on any device, with touch, mouse, and keyboard support
- **No Dependencies** — Pure HTML + CSS + vanilla JavaScript

---

