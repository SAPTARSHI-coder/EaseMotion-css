# CSS Glass Effect: Velvet Smooth Transition

A smooth, high-performance, and accessible pure CSS glassmorphism UI component featuring velvet smooth gradient shift styling and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, backdrop blur filters, and hardware-accelerated transforms.
- **Glassmorphic Velvet Smooth Effect:** Frosted glass container layered above slow-drifting, heavily blurred purple and indigo gradient orbs.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #a855f7;            /* Accent purple and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
