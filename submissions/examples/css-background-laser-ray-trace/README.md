# CSS Background: Laser Ray Trace

A smooth, high-performance, and accessible pure CSS background animation featuring dynamic laser ray trace styling and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, custom rotation variables (`--r`, `--d`), and hardware-accelerated transforms.
- **Laser Ray Trace Effect:** Sweeping luminous cyan laser beams rotating and pulsing across the viewport background.
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
