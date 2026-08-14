# 🌋 Volcanic Vein

> A living volcanic terrain where glowing magma veins travel, branch, erupt and gradually cool beneath a dark rocky surface.

Volcanic Vein is an interactive animation component designed around the visual idea of a hidden magma network moving underneath volcanic terrain.

Instead of rendering a static lava effect, the component treats every magma path as a small animated system.

Magma travels through the terrain, branches into new paths, leaves behind fading heat trails and produces small ember particles around active regions.

The result is a continuously changing volcanic landscape that responds directly to user interaction.

---

## ✨ Features

- 🌋 Procedural magma veins
- 🔥 Dynamic heat control
- 🌡️ Five volcanic intensity states
- 🪨 Dark volcanic terrain
- ✨ Layered magma glow
- 🌱 Organic branching behavior
- 🔸 Floating ember particles
- 💥 Interactive eruption bursts
- 📊 Real-time active vein counter
- 🎛️ Interactive heat slider
- 🖱️ Click-to-create magma
- ⌨️ Keyboard shortcuts
- 🔄 Terrain reset
- 📱 Responsive layout
- 🚫 No external dependencies
- 📄 Self-contained browser demo

---

## 🎯 What This Component Does

The component creates a canvas-based volcanic environment.

Each magma vein contains:

- A starting position
- A movement direction
- A collection of historical points
- A movement speed
- A lifetime
- A branching timer

As the animation progresses, new points are continuously added to the vein.

This creates the appearance of magma flowing through a crack.

Older points are removed from the path, which gives the vein a moving-trail appearance instead of leaving permanent lines across the terrain.

---

## 🔥 Heat System

The heat slider controls the overall intensity of the volcanic environment.

### 0–20%

Dormant terrain.

Magma movement is minimal and the terrain remains mostly dark.

### 21–45%

Warm terrain.

Small magma paths begin appearing and slowly travel through the surface.

### 46–70%

Active terrain.

Multiple veins become visible and branching becomes more common.

### 71–90%

Intense terrain.

Magma movement becomes faster and the glow becomes significantly stronger.

### 91–100%

Eruption state.

The environment reaches maximum volcanic intensity and produces frequent ember activity.

---

## 🌋 Magma Vein System

Every magma path is represented by a `Vein` object.

A vein stores its current position and historical path:

```js
this.points = [{ x, y }];