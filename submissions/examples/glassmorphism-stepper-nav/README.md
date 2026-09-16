# CSS Responsive Stepper Nav (Glassmorphism)

A responsive, frosted-glass progress stepper navigation built entirely with pure CSS. It automatically transforms from a horizontal step tracker on desktop viewports to a vertical timeline on mobile devices.

## 🎯 Features
- **Pure CSS/HTML:** Zero JavaScript required. Progress paths are drawn automatically using CSS `::after` pseudo-elements.
- **Glassmorphism Styling:** Utilizes `backdrop-filter: blur`, semi-transparent RGBA backgrounds, and subtle lighting borders for a premium depth effect.
- **Responsive Layout:** Flexbox properties fluidly reposition the step indicators and mutate the connecting lines from X-axis bars to Y-axis stems under `640px`.
- **Accessible:** Semantic `<nav>` and `<ol>` HTML, `aria-current="step"` for the active item, and `aria-hidden="true"` on visual indicators. Honors `@media (prefers-reduced-motion: reduce)`.

## 📁 Files Included
```text
demo.html
style.css
README.md