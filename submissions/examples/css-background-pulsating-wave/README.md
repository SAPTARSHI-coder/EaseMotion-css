# CSS Background: Pulsating Wave

A smooth, high-performance, and accessible pure CSS background animation featuring expanding pulsating wave rings and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, scaling transformations, and hardware-accelerated glowing box-shadows.
- **Pulsating Wave Effect:** Concentric translucent teal rings expanding and fading outward continuously from the center viewport.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #14b8a6;            /* Accent teal and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
