# CSS Dynamic Stepper Nav (Pastel)

A soft, friendly progress stepper navigation component utilizing a light pastel color palette. It features elastic transitions and floating animations to create a dynamic, engaging user experience using pure CSS.

## 🎯 Features
- **Pure CSS/HTML:** Zero JavaScript required. Uses dynamically colored `::after` pseudo-elements for the connecting progress paths.
- **Pastel Aesthetics:** Uses a calming color scheme featuring mint green (`#a8e6cf`) for completed steps and soft lavender (`#dcd3ff`) for the active state, paired with light box shadows.
- **Dynamic Animations:** Implements an elastic `cubic-bezier` transition for state changes and a gentle vertical floating `@keyframes` animation for the active step to draw attention organically.
- **Responsive Layout:** Flexbox properties allow the component to collapse from a horizontal row into a vertical timeline for viewports under `600px`.
- **Accessible:** Semantic `<nav>` and `<ol>` HTML, proper `aria-current="step"` labeling, and respects `@media (prefers-reduced-motion: reduce)` by halting the floating and scaling animations.

## 📁 Files Included
```text
demo.html
style.css
README.md