# CSS Glowing Stepper Nav (Gradient Glow)

A highly stylized, pure CSS progress stepper navigation optimized for dark mode. It features animated multi-stop gradient glows for the active step and vibrant neon connecting paths for completed steps.

## 🎯 Features
- **Pure CSS/HTML:** Zero JavaScript dependencies. The connecting progress lines are generated dynamically using CSS `::after` pseudo-elements.
- **Hardware-Accelerated Gradient Glow:** Utilizes a blurred pseudo-element (`filter: blur`) combined with an animated `background-position` keyframe to create a shifting, breathing neon aura around the active step.
- **Responsive Layout:** Flexbox properties gracefully transition the UI from a horizontal row on desktop to a vertical timeline on viewports under `650px`. The gradient lines automatically adjust their angle from `90deg` to `180deg`.
- **Accessible:** Semantic `<nav>` and `<ol>` HTML, `aria-current="step"` for the active item, and fully respects `@media (prefers-reduced-motion: reduce)` by halting the gradient shift and scaling animations.

## 📁 Files Included
```text
demo.html
style.css
README.md