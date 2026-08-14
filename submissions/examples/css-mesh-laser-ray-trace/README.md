# CSS Mesh Gradient: Laser Ray Trace

A smooth, high-performance, and accessible pure CSS gradients & mesh component featuring laser ray trace glowing neon borders and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS mesh gradients, glowing box-shadows, and hardware-accelerated transforms.
- **Laser Ray Trace Gradient Effect:** Frosted glass container layered above drifting laser-red mesh orbs with intense neon glow lighting.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #ef4444;            /* Accent laser red color */
    --em-speed: 0.4s;                 /* Transition speed */
}
