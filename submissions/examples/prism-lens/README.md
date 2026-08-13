# 🔮 Prism Lens — Reactive Glass Refraction

An interactive, cursor-reactive glass lens component built for **EaseMotion CSS** that simulates optical refraction and light dispersion over dynamic interface surfaces.

---

## 📖 Overview

**Prism Lens** creates a realistic floating optical glass effect. As the user moves their pointer across the stage, the lens glides with smooth interpolation while inner rainbow refraction bands, specular highlights, and edge reflections react dynamically to position and velocity.

---

## 🎯 Core Features

- **Interpolated Pointer Tracking:** Smooth physics-based gliding rather than rigid cursor snapping.
- **Multi-Layered Optical Glass:** Combines inner glow, rainbow refraction, edge highlights, and specular reflections without images.
- **Velocity & Position Dynamics:** Internal highlights and prism rotations adjust based on cursor speed and location.
- **Interactive Click Pulse:** Triggers an optical pulse animation on click, tap, or keyboard interaction.
- **Keyboard & Touch Accessibility:** Full support for touch gestures and `Space` / `R` keyboard shortcuts.
- **Reduced Motion Support:** Respects `prefers-reduced-motion` settings by switching to a static display.
- **Zero Dependencies:** Built purely using vanilla HTML5, CSS3, and JavaScript ES6.

---

## ⌨️ Interaction Controls

| Method | Control / Key | Action |
| :--- | :--- | :--- |
| **Pointer Drag / Hover** | Pointer Move / Touch | Glides the glass lens across the surface |
| **Optical Pulse** | Left Click / `Space` | Triggers a pulse ripple through the lens |
| **Reset Lens** | `R` / Reset Button | Resets the lens position back to center |

---

## 📂 Project Structure

```text
submissions/
└── examples/
    └── prism-lens/
        ├── demo.html    # Standalone browser demo
        ├── style.css    # Styles and CSS custom properties
        └── README.md    # Documentation and usage guide