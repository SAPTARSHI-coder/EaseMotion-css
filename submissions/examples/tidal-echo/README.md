# 🌊 Tidal Echo

An interactive ocean-wave component where user interactions create expanding tidal ripples across a continuously animated ocean.

Tidal Echo is designed around the idea that the interface should react to the user's presence. Instead of displaying a static animated ocean, every click or touch becomes a disturbance that propagates through the water.

Built entirely with HTML, CSS, JavaScript, and the Canvas API.

---

## ✨ Features

- 🌊 Continuously animated multi-layer ocean
- 💧 Interactive tidal ripple generation
- 🌀 Multiple simultaneous ripple effects
- 📈 Adjustable wave amplitude
- 💥 Adjustable ripple intensity
- 🌅 Four atmospheric scenes
- ✨ Dynamic environmental glow
- 🔢 Real-time ripple counter
- 📱 Responsive canvas rendering
- ⌨️ Keyboard shortcuts
- 🎨 Glass-style control panel
- ♿ Reduced-motion consideration
- 🚫 No external dependencies
- ⚡ Canvas-based rendering with requestAnimationFrame

---

## 🌊 What It Does

Tidal Echo creates an animated ocean surface using several overlapping wave layers.

The ocean continuously moves even when there is no interaction.

When the user clicks or touches the water, a ripple object is created at that location.

Each ripple contains its own:

- Position
- Radius
- Strength
- Alpha value
- Animation phase

The ripple then expands while gradually losing its visual strength.

Multiple ripple objects can exist simultaneously, allowing interactions to overlap and produce a more organic effect.

---

## 🎨 Scenes

Tidal Echo includes four built-in environments.

### 🌤️ Calm

A bright blue environment designed for a peaceful ocean experience.

### 🌇 Sunset

A warm orange and pink environment inspired by an evening horizon.

### 🌙 Moonlit

A dark blue environment with a subtle celestial glow.

### ⛈️ Storm

A darker environment designed to provide stronger visual contrast against the animated water.

Scenes can be changed using the scene buttons at the bottom of the component.

---

## 🎛️ Controls

### Wave Amplitude

Controls the vertical movement of the ocean waves.

Range:

```text
0% → 100%