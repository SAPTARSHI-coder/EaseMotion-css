# ✨ Prism Ripple

An interactive refractive surface where pointer movement and clicks generate expanding prism-colored ripples across a glass-like animated gradient.

Prism Ripple is a lightweight, self-contained UI component built with vanilla HTML, CSS, and JavaScript. It combines pointer tracking, animated gradients, glassmorphism, localized glow, temporary ripple particles, interaction counters, keyboard controls, and responsive behavior into a single reusable experience.

---

## 📖 Description

Prism Ripple turns a normal interface surface into a responsive visual field.

The component behaves like a thin layer of glass or water illuminated by a moving light source. As the user moves their pointer across the surface, a localized glow follows the pointer. Clicking or tapping creates an expanding circular ripple that gradually fades away.

The background continuously shifts through multiple colors, giving each ripple a slightly different visual appearance.

The component does not require:

- React
- Vue
- Angular
- Tailwind
- GSAP
- Framer Motion
- External images
- External animation libraries

Everything is implemented using standard HTML, CSS, and JavaScript.

---

## 🎯 Core Features

### 🌈 Prism Gradient

The background uses multiple radial gradients to create a colorful refractive surface.

The gradients continuously move using CSS animation, preventing the background from feeling static.

### 🖱️ Pointer Tracking

The component tracks the pointer position inside the surface.

The pointer coordinates are used to position:

- Localized glow
- Pointer marker
- Ripple origin
- Surface interaction state

### 💧 Ripple Generation

Clicking or touching the surface generates a new ripple.

Each ripple:

1. Starts at the interaction point
2. Expands smoothly
3. Changes opacity
4. Applies a small blur
5. Emits a colored glow
6. Automatically removes itself

### ✦ Random Ripple Colors

Every ripple receives a random hue.

This means repeated interactions can produce different combinations of:

- Pink
- Purple
- Blue
- Cyan
- Green
- Orange
- Red

### 🔮 Glass Surface

The component uses:

- `backdrop-filter`
- Transparent layers
- Borders
- Inner highlights
- Gradient overlays

to create a lightweight glass-like appearance.

### 💡 Refractive Pointer Glow

A soft circular light follows the pointer.

The glow becomes more visible when the pointer enters the component and disappears when the pointer leaves.

### 🔢 Interaction Counter

The component tracks how many ripples have been generated during the current session.

Example:

```text
RIPPLES 12