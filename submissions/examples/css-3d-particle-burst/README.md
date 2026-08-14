# CSS 3D Effect: Particle Burst

A smooth, high-performance, and accessible pure CSS 3D animation featuring exploding particle burst styling and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, 3D spatial transformations (`translateZ`), and glowing box-shadows.
- **Particle Burst 3D Effect:** Glowing luminous blue particle dots exploding outwards across 3D depth planes from the viewport center.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #3b82f6;            /* Accent blue and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
