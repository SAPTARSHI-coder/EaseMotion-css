# CSS Deep Space Background

A smooth, high-performance, and accessible pure CSS deep space background component featuring a slow zoom starfield and glowing nebula effects, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS multi-radial gradient starfield patterns, scale keyframe animations, and hardware-accelerated transforms.
- **Deep Space Zoom Effect:** Immersive slow continuous zoom and rotation into a procedural multi-layered starfield with pulsing nebula clouds.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #818cf8;            /* Accent indigo color */
    --em-speed: 0.4s;                 /* Transition speed */
}
