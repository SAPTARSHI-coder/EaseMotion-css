# 🌊 Memory Reef

> An interactive underwater ecosystem where every interaction grows a living coral reef.

Memory Reef is a self-contained interactive canvas component that transforms user interaction into organic coral growth.

Click anywhere inside the underwater scene and a new coral colony begins growing from that location. Coral branches progressively extend, bubbles rise from the new colony, particles drift through the water, fish swim through the background, and the reef gradually becomes denser as more interactions are made.

The component is built entirely with HTML, CSS, and vanilla JavaScript.

No frameworks.
No external dependencies.
No external assets.

---

## ✨ Features

### 🪸 Interactive Coral Growth

Clicking inside the underwater scene creates a new coral colony.

Each colony is generated with:

- Random coral type
- Random color
- Random scale
- Organic branching
- Smooth growth interpolation
- Individual pulse phase
- Independent animation state

The coral does not simply appear immediately.

Instead, it grows progressively from its origin, creating a more natural feeling of development.

---

### 🌿 Multiple Coral Types

Memory Reef currently supports four procedural coral styles:

#### Branch

A branching coral structure generated recursively from a central point.

#### Fan

Several branches spread outward to create a fan-like coral silhouette.

#### Tube

A cluster of vertical coral tubes with varying heights.

#### Bloom

A flower-like coral structure with multiple glowing petals.

New coral types can be added through the `coralTypes` collection and the rendering logic.

---

## 🌊 Underwater Environment

The component creates an underwater atmosphere without external images.

The environment contains:

- Deep-water gradient
- Animated caustic light
- Floating plankton
- Bubble particles
- Swimming fish silhouettes
- Underwater haze
- Dark seabed
- Procedural coral

This keeps the component lightweight while still providing a rich visual environment.

---

## 🫧 Bubble System

Every new coral colony creates a small group of bubbles.

Each bubble receives randomized properties:

```javascript
{
  x,
  y,
  size,
  speed,
  wobble,
  phase,
  life
}