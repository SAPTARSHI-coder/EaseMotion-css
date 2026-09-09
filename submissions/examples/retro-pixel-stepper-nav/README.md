# CSS Custom Stepper Nav (Retro Pixel)

A nostalgic, 8-bit arcade-inspired progress stepper navigation. It features chunky solid borders, sharp squared indicators, and classic step-based keyframe animations, all built using pure CSS.

## 🎯 Features
- **Pure CSS/HTML:** Zero JavaScript dependencies. Progress lines are dynamically generated using `::after` pseudo-elements.
- **Retro Aesthetic:** Uses hard, offset `box-shadow`s instead of blurring, strict solid black borders (`4px`), and a blocky layout to simulate an old-school video game UI.
- **8-Bit Animations:** The active step utilizes the `steps()` timing function in its `@keyframes` to create a choppy, retro "jumping" and "blinking" effect.
- **Responsive Layout:** Automatically detects smaller viewports using Flexbox to morph the horizontal step tracker into a vertical timeline.
- **Accessible:** Semantic `<nav>` and `<ol>` HTML, `aria-current="step"` for screen readers, and honors `@media (prefers-reduced-motion: reduce)` by disabling the jumping/blinking animations.

## 📁 Files Included
```text
demo.html
style.css
README.md