# CSS Spinning Logo Animation

An advanced, high-performance SVG & CSS spinning logo component that assembles and spins dynamically on page load, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native SVG stroke dasharray animations (`stroke-dashoffset`), continuous rotation `@keyframes`, and transform scaling.
- **Dynamic Assembly Effect:** Rings and geometric paths draw themselves sequentially on load before transitioning into a continuous spin loop.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Button and badge highlight color */
    --em-speed: 0.4s;                 /* Hover transition speed */
}
