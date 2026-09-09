# Aurora Glassmorphism Profile Card 🌌🪟

A highly modern, animation-first profile card component featuring a **Glassmorphism UI**, an **Animated Aurora Mesh Gradient Background**, and a **Rotating Conic Gradient Border**. Built entirely with pure CSS.

## Features
- **Animated Conic Border**: Uses CSS `@property` to smoothly animate a gradient border around the card.
- **Aurora Mesh Background**: Three floating, blurred blobs with `mix-blend-mode: screen` create a dynamic, glowing aurora effect.
- **True Glassmorphism**: Utilizes `backdrop-filter: blur()` and `saturate()` for a realistic frosted glass effect over the aurora background.
- **Interactive Hover States**: The card lifts on hover, and the connect button emits a neon glow.

## Customization
Tweak the CSS variables in the `:root` selector inside `style.css`:
- `--color-1`, `--color-2`, `--color-3`: Change the aurora gradient colors.
- `--glass-bg` & `--glass-border`: Adjust the opacity and tint of the frosted glass.
- `rotateBorder` animation duration: Speed up or slow down the border rotation.

## Demo
Open `demo.html` in a modern browser (Chrome, Edge, Safari) to experience the backdrop-filter and 3D hover effects.

---
*Part of the [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css) framework.*