# CSS Glass Effect: Liquid Wave Fill

A smooth, high-performance, and accessible pure CSS glassmorphism UI component featuring liquid wave fill background styling and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, backdrop blur filters, and hardware-accelerated transforms.
- **Glassmorphic Liquid Wave Effect:** Frosted glass container floating above continuous fluid cyan and blue wave fill animations.
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
