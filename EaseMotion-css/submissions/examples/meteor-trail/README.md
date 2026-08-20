# ☄️ Meteor Trail — Interactive Cosmic Flight

A cinematic space animation component built for **EaseMotion CSS** where users launch glowing meteors across a multi-depth starfield with dynamic trails and particle bursts.

---

## 📖 Overview

**Meteor Trail** creates an interactive deep-space environment. Clicking anywhere or pressing interactive controls launches shooting stars with glowing cores, velocity-based trails, and impact particle bursts across an animated parallax starfield.

---

## 🎯 Core Features

- **Dynamic Starfield:** Layered stars with multi-depth drift speeds and opacity variations.
- **Interactive Meteor Bursts:** Click or tap to launch meteors toward pointer coordinates.
- **Velocity-Based Trails:** Fading trails that stretch dynamically based on speed and angle.
- **Impact Particles:** Particle bursts spawned along the meteor trajectory.
- **Ambient Generation:** Automatic shooting star spawns when idle.
- **Cosmic Controls:** Active meteor counter, launch trigger, and canvas reset option.
- **Keyboard Shortcuts:** Built-in support for `Space` (launch) and `R` (reset).
- **Reduced Motion Support:** Respects `prefers-reduced-motion` settings.
- **Zero External Dependencies:** Built using lightweight vanilla HTML, CSS, and JS.

---

## ⌨️ Interaction Controls

| Method | Control / Key | Action |
| :--- | :--- | :--- |
| **Pointer Click** | Left Click / Touch | Launches a meteor toward pointer position |
| **Launch Meteor** | `Space` / Button | Launches a random meteor across the screen |
| **Reset Field** | `R` / Reset Button | Clears active meteors and resets counter |

---

## 📂 Project Structure

```text
submissions/
└── examples/
    └── meteor-trail/
        ├── demo.html    # Standalone demo file
        ├── style.css    # Raw CSS styles for the component
        └── README.md    # Component documentation