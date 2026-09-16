# 🌊 Echo Ripple — Interactive Water Surface Component

An interactive water-surface component built for **EaseMotion CSS** where user interactions generate soft, expanding ripples that travel across a dynamic, layered liquid surface.

---

## 📖 Overview

**Echo Ripple** simulates a calm pond disturbed by user interaction. Clicking or tapping anywhere on the surface creates expanding concentric ripples from the interaction point. The component supports multiple simultaneous ripples that overlap, fade, and interact visually with floating water particles and ambient surface reflections.

---

## 🎯 Core Features

- **Interactive Ripple Generation:** Spawns concentric ripples precisely at the click or tap coordinates.
- **Multiple Simultaneous Ripples:** Supports overlapping wave lifecycle animations running smoothly together.
- **Organic Fade & Expansion:** Ripples expand outwards with realistic velocity and gradual opacity decay.
- **Floating Particles & Reflections:** Dynamic water surface details including ambient light highlights and drifting particles for visual depth.
- **Interactive Controls:** Includes a live active ripple counter, center-ripple trigger, and canvas reset option.
- **Keyboard & Touch Accessibility:** Full support for touch gestures and keyboard shortcuts (`Space` and `R`).
- **Reduced Motion Support:** Respects `prefers-reduced-motion` media queries by disabling continuous background animation loops.
- **Zero External Dependencies:** Built using lightweight, vanilla HTML, CSS, and JavaScript.

---

## ⌨️ Interaction Controls

| Method | Control / Key | Action |
| :--- | :--- | :--- |
| **Pointer Interaction** | Left Click / Touch | Generates a ripple at cursor/finger position |
| **Center Ripple** | `Space` / Button | Spawns a new ripple at the center of the water surface |
| **Reset Surface** | `R` / Reset Button | Clears all active ripples immediately |

---

## 📂 Project Structure

```text
submissions/
└── examples/
    └── echo-ripple/
        ├── demo.html    # Standalone demo file
        ├── style.css    # Raw CSS styles for the component
        └── README.md    # Documentation and usage guide