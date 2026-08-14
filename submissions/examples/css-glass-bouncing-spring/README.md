# CSS Glass Effect: Bouncing Spring

A smooth, high-performance, and accessible pure CSS glassmorphism UI component featuring spring physics easing and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS cubic-bezier spring easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`), backdrop blur filters, and hardware-accelerated transforms.
- **Glassmorphic Bouncing Spring Effect:** Frosted glass container with spring-physics hover animations layered above animated glowing gradient orbs.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #10b981;            /* Accent emerald green and button color */
    --em-speed: 0.5s;                 /* Transition speed */
}
