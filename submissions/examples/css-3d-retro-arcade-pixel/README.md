# CSS 3D Effect: Retro Arcade Pixel

A smooth, high-performance, and accessible pure CSS 3D animation featuring retro arcade pixel styling and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, 3D spatial transformations (`translateZ`), and glowing box-shadows.
- **Retro Arcade Pixel Effect:** Luminous pixel squares pulsing and shifting across 3D depth planes in the viewport background.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #ec4899;            /* Accent pink and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
