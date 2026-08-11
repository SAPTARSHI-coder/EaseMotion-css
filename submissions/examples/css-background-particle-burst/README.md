# CSS Background: Particle Burst

A smooth, high-performance, and accessible pure CSS background animation featuring dynamic particle burst styling and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, custom variables (`--x`, `--y`, `--d`), and hardware-accelerated transforms.
- **Particle Burst Effect:** Radiating glowing particle nodes expanding outward continuously from the center viewport.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #8b5cf6;            /* Accent purple and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
