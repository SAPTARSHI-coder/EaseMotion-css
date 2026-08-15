# CSS Animated Stepper Nav (Material Design)

A responsive, card-based progress stepper navigation built entirely with pure CSS. It mimics Google's Material Design principles, featuring proper elevations, fluid color transitions, and a pulsating animation for active steps.

## 🎯 Features
- **Pure CSS/HTML:** Zero JavaScript required. Progress paths are drawn automatically using CSS `::after` pseudo-elements.
- **Material Design UI:** Utilizes standard Material design tokens, including `#1976d2` primary blue, standard transition curves (`cubic-bezier(0.4, 0, 0.2, 1)`), and level 2 box-shadow elevations.
- **Animated Focus:** Incorporates a continuous, subtle ripple/pulse animation (`@keyframes`) on the currently active step to draw user attention.
- **Responsive Layout:** Flexbox properties gracefully transition the UI from a horizontal row on desktop to a vertical timeline on viewports under `600px`.
- **Accessible:** Semantic `<nav>` and `<ol>` HTML, `aria-current="step"` for the active item, and fully respects `@media (prefers-reduced-motion: reduce)` by disabling the pulse animation.

## 📁 Files Included
```text
demo.html
style.css
README.md