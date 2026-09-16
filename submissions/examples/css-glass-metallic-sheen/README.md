# CSS Glass Effect: Metallic Sheen

A smooth, high-performance, and accessible pure CSS glassmorphism UI component featuring sweeping metallic sheen reflections and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, backdrop blur filters, and hardware-accelerated transforms.
- **Glassmorphic Metallic Sheen Effect:** Frosted glass card featuring an animated polished silver gradient reflection sweeping across the surface.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #94a3b8;            /* Accent metallic silver */
    --em-speed: 0.4s;                 /* Transition speed */
}
