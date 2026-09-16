# CSS Specificity Chart

A smooth, high-performance, and accessible pure CSS visual comparison chart component demonstrating CSS selector specificity weights, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, custom CSS custom properties (`--em-progress`), and hardware-accelerated animations.
- **Specificity Chart Effect:** Animated horizontal progress bar fills comparing weights from inline styles down to element selectors with glowing neon gradients.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #a855f7;            /* Accent purple color */
    --em-speed: 0.8s;                 /* Animation duration */
}
