# CSS Micro-interaction: Synthwave Grid Line

A smooth, high-performance, and accessible pure CSS micro-interaction component featuring scrolling synthwave perspective grid styling and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, scrolling background grid animations, and hardware-accelerated transforms.
- **Synthwave Grid Line Effect:** Retro perspective neon grid lines scrolling dynamically toward the viewer beneath a glowing synthwave sun.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #f43f5e;            /* Accent synthwave rose pink and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
