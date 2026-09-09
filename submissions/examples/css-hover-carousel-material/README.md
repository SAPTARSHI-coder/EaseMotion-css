# CSS Hover Carousel: Material Design

A high-performance, responsive pure CSS hover carousel component featuring Material Design elevation shadows and smooth scroll-snap behavior, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built using native CSS `scroll-snap` mechanics and hardware-accelerated transitions.
- **Material Elevation Effect:** Cards elevate vertically and project deeper multi-layer drop shadows on hover.
- **Dark Mode Compatible & Responsive:** Optimized Material Dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #bb86fc;            /* Material Purple Accent */
    --em-speed: 0.3s;                 /* Transition duration */
}
