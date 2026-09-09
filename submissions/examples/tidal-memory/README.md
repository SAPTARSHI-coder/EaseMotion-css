# 🌊 Tidal Memory

An interactive ocean-memory animation where glowing memories drift through animated tides.

## 📖 Description

Tidal Memory is a lightweight interactive UI component inspired by the movement of memories and ocean tides.

The component creates a living ocean environment containing layered waves, floating particles, and glowing memory bubbles. Users can create memories directly inside the ocean and watch them move according to the selected tidal state.

Every memory has an independent animation phase, size, speed, and position. This prevents the animation from feeling synchronized and creates a more natural visual experience.

## ✨ Features

- 🌊 Three-layer animated ocean waves
- 💭 Interactive memory creation
- 🫧 Independent floating memory bubbles
- 🌊 Calm tidal state
- 🌅 Rising tidal state
- 🌊 High Tide state
- 🌙 Ebb tidal state
- 🎚️ Adjustable tide intensity
- ✨ 35 floating particles
- 📊 Real-time memory counter
- 🖱️ Mouse interaction
- ⌨️ Space and R keyboard shortcuts
- 🔄 Reset functionality
- 📱 Responsive layout
- 🚫 No external libraries or frameworks

## 🎯 How It Works

The component uses the Canvas API and requestAnimationFrame to continuously update the ocean.

Each memory stores:

- x/y position
- base position
- size
- animation phase
- movement speed
- lifetime state

The animation phase is incremented independently for every memory, allowing each bubble to follow its own path.

The current tide state controls the overall wave intensity and movement speed.

## 🌊 Tidal States

### Calm

The ocean moves slowly with subtle wave motion.

### Rising

Wave movement increases and memories begin drifting more actively.

### High Tide

The strongest state with larger wave movement and increased memory motion.

### Ebb

The ocean becomes calmer again with slower movement.

## 🖱️ Interaction

### Create Memory

Click anywhere inside the ocean.

A new glowing memory bubble will appear at the selected position.

### Create Memory Button

Creates a memory at a randomized location inside the ocean.

### Tide Intensity

Controls how strongly memories react to the selected tidal state.

### Reset

Removes all active memories.

## ⌨️ Keyboard Controls

| Key | Action |
|-----|--------|
| Space | Create memory |
| R | Reset memories |

## 🎨 Visual Design

The component uses:

- Deep ocean gradients
- Transparent overlays
- Soft white glow
- Layered wave shapes
- Glass-like control panels
- Rounded interaction elements
- Subtle particle effects

The visual language is intentionally calm and atmospheric.

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript ES6
- Canvas API
- requestAnimationFrame
- CSS gradients
- CSS backdrop-filter

No external dependencies are required.

## 🔧 Customization

The component can be customized by changing:

```js
const states = {
  calm: { speed: 0.4, wave: 8 },
  rising: { speed: 0.7, wave: 14 },
  high: { speed: 1.1, wave: 22 },
  ebb: { speed: 0.25, wave: 5 }
};