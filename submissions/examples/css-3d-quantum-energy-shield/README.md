# CSS 3D Effect: Quantum Energy Shield

A smooth, high-performance, and accessible pure CSS 3D animation featuring rotating quantum energy rings and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, 3D spatial transformations (`perspective`, `rotateX`, `rotateY`, `rotateZ`, `translateZ`), and hardware-accelerated animations.
- **Quantum Energy Shield Effect:** Intersecting glowing cyan energy ring orbits rotating dynamically across 3D space in the background.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #06b6d4;            /* Accent cyan and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
