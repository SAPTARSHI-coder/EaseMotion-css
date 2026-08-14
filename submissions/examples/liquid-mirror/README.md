# 🌊 Liquid Mirror

An interactive reflective liquid surface where pointer movement creates expanding ripples, floating particles drift through the scene, and a soft shimmer passes across the surface.

Built as a lightweight, self-contained animation component for EaseMotion CSS.

---

## 📖 Description

Liquid Mirror creates the visual feeling of touching a magical reflective water surface.

The component combines several small animation systems:

- Pointer-driven ripple generation
- Expanding circular waves
- Ripple opacity decay
- Floating background particles
- Animated reflection shimmer
- Multiple visual mirror modes
- Adjustable interaction intensity
- Real-time ripple counting
- Keyboard controls
- Responsive layout

Everything is implemented using vanilla HTML, CSS and JavaScript.

There are no external libraries, animation frameworks or dependencies.

---

## 🎯 Core Features

### 💧 Interactive Ripples

Moving the pointer across the mirror creates subtle ripples.

Clicking or touching the surface creates a stronger ripple.

Each ripple has:

- Position
- Radius
- Opacity
- Expansion speed
- Strength
- Maximum radius

Ripples expand smoothly and disappear naturally as their opacity decreases.

---

### 🌊 Ripple Limiting

The component maintains a maximum of 12 active ripples.

When the maximum number is reached, the oldest ripple is removed before creating a new one.

This prevents excessive animation objects from accumulating during rapid pointer interaction.

---

### ✨ Floating Particles

The mirror contains 30 lightweight background particles.

Each particle has:

- Random position
- Random size
- Independent movement speed
- Phase value
- Slight horizontal movement

Particles continuously move through the surface to prevent the background from appearing completely static.

---

### 🪞 Mirror Modes

Four visual modes are included.

| Mode | Icon | Description |
| --- | --- | --- |
| Calm | 🌊 | Soft blue reflective atmosphere |
| Ripple | 💧 | Brighter liquid with stronger waves |
| Deep | 🌑 | Dark high-contrast reflection |
| Cosmic | ✨ | Purple and blue magical atmosphere |

Each mode changes:

- Background gradients
- Ripple color
- Particle color
- Overall visual atmosphere

---

### 🎚️ Intensity Control

The intensity slider ranges from:

`0% → 100%`

Higher intensity affects the ripple expansion behavior and shimmer strength.

The value is displayed in real time beside the slider.

---

### 🌟 Reflection Shimmer

A subtle animated highlight continuously travels across the surface.

The shimmer is implemented with a dynamically positioned linear gradient.

This creates the impression of light moving across reflective liquid.

---

### 📊 Interaction Counter

Every manually or automatically generated ripple increments the interaction counter.

The counter updates immediately whenever a new ripple is created.

---

## ⌨️ Interaction Options

| Input | Action |
| --- | --- |
| Pointer Move | Creates subtle ripples |
| Click | Creates a stronger ripple |
| Touch | Creates a ripple |
| Create Ripple | Creates a center ripple |
| Space | Creates a center ripple |
| R | Resets the mirror |
| Intensity Slider | Changes interaction strength |
| Mode Buttons | Changes mirror atmosphere |

---

## ✨ Animation Flow

### 1. Pointer Movement

The pointer enters the mirror surface.

A coordinate is calculated relative to the canvas.

A low-strength ripple may be created.

---

### 2. Ripple Creation

A ripple begins with:

```text
radius = 0
opacity = 1