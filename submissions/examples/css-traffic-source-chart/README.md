# CSS Traffic Source Chart

A smooth, high-performance, and accessible pure CSS dashboard widget component featuring horizontal bar charts showing traffic sources and percentages, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, custom CSS custom properties (`--em-progress`), and hardware-accelerated animations.
- **Traffic Source Chart Effect:** Animated horizontal progress bar fills with glowing neon gradients and track shadows.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #0ea5e9;            /* Accent blue color */
    --em-speed: 0.8s;                 /* Animation duration */
}
