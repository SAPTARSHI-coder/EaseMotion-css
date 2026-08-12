# CSS Mesh Gradient: Neumorphic Soft Shadow

A smooth, high-performance, and accessible pure CSS gradients & mesh component featuring soft neumorphic shadow depth and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS mesh gradients, soft neumorphic box-shadow pairs, and hardware-accelerated transforms.
- **Neumorphic Soft Shadow Effect:** Immersive soft extrusion lighting utilizing dual-directional offset shadows on dark surfaces.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #38bdf8;            /* Accent blue color */
    --em-speed: 0.4s;                 /* Transition speed */
}
