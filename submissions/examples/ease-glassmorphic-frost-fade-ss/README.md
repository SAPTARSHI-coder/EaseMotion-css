# Glassmorphic Frost Fade (`.glass-frost-fade`)

## Abstract

The **Glassmorphic Frost Fade** animation component provides a smooth entrance effect for modal cards, dialog panels, and login overlays. Combining hardware-accelerated backdrop blurring (`backdrop-filter`), opacity scaling, and depth blur transitions, it creates an elegant frosted-glass appearance when elements enter the screen.

---

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a premium "Glassmorphic Frost Fade" entrance animation (`.glass-frost-fade`) where an element transitions seamlessly from high-blur, slight scaling, and transparency into a crisp, backdrop-filtered frosted-glass panel.

### 2. How is it used?
Apply the `.glass-frost-fade` class to any card or panel container element. The entrance animation will trigger automatically on page load. To replay the animation dynamically on demand (e.g., via button interaction), toggle or re-apply the `.is-animating` class using JavaScript with a forced DOM reflow:

```javascript
const card = document.getElementById('frost-card');
card.classList.remove('is-animating');
void card.offsetWidth; // Force DOM reflow
card.classList.add('is-animating');
```

### 3. Why is it useful?
Combines hardware-accelerated backdrop blur (`backdrop-filter`), opacity fade, and spatial scaling to deliver a high-end macOS/iOS native aesthetic without relying on external JavaScript animation frameworks or heavy third-party CSS libraries.

---

## Visual Mechanics

- **Entrance Keyframe Sequence (`@keyframes easeFrostFade`)**:
  - `0%`: `opacity: 0; transform: scale(0.92) translateY(16px); filter: blur(24px);`
  - `100%`: `opacity: 1; transform: scale(1) translateY(0); filter: blur(0px);`
- **Timing Function**: Smooth `cubic-bezier(0.16, 1, 0.3, 1)` easing curve for fluid, responsive motion.
- **Glass Aesthetics**: Blended multi-layer radial background gradients, translucent surface fills, fine subtle borders, and dynamic multi-layered drop shadows.
- **Accessibility & Contrast**: Includes `@media (forced-colors: active)` media query overrides to guarantee visibility and focus indicators in high-contrast operating system modes.

---

## Custom CSS Properties

The component leverages customizable CSS tokens attached to `:root` for flexible theme overrides:

| Custom Property | Default Value | Description |
| :--- | :--- | :--- |
| `--frost-bg` | `rgba(255, 255, 255, 0.08)` | Background ambient translucency layer |
| `--frost-surface` | `rgba(15, 23, 42, 0.6)` | Main translucent surface fill |
| `--frost-border` | `rgba(255, 255, 255, 0.15)` | Subtle glass edge border color |
| `--frost-text` | `#f8fafc` | Primary crisp text color |
| `--frost-muted` | `#cbd5e1` | Secondary muted text color |
| `--frost-accent` | `#38bdf8` | Highlight outline & accent color |
| `--frost-radius` | `20px` | Surface border radius |
| `--frost-shadow` | `0 25px 50px -12px rgba(0, 0, 0, 0.5)` | Deep ambient shadow under the frosted glass surface |
