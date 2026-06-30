# 🌌 Premium 3D Flip Card Engine (Pure HTML & CSS)

A production-ready, high-fidelity 3D card flip component featuring a built-in light/dark theme architecture. Engineered using **pure CSS**, this project relies completely on native layout mechanics, zero JavaScript overhead, and highly optimized animation curves to deliver a premium user experience.

---

## ✨ Key Features

- **Zero JavaScript Dependency:** State management (theme toggling) and interactions (card flipping) are entirely driven by the CSS pipeline.
- **Kinetic 3D Physics:** Utilizes calibrated CSS perspective planes and an elastic `cubic-bezier` timing function to mimic real-world inertia.
- **CSS Variable Architecture:** Built on a unified token design system. Changing themes involves swapping root tokens rather than re-rendering components.
- **Flawless Spatial Layering:** Leverages true 3D spatial separation to prevent visual bleeding or text mirroring during intermediate rotation angles.

---

## 🛠️ Core Engineering Concepts

### 1. The Checkbox Hack (Native State Management)

To maintain a toggle state without JavaScript, an invisible `<input type="checkbox">` is placed at the root level. Using the general sibling combinator (`~`), we mutate down-tree CSS variables based on the checked state:

```css
.theme-checkbox:checked ~ .app-container {
  --bg-app: #0b0f19;
  --bg-card: #131c2e;
  /* Dark theme overrides... */
}
```
