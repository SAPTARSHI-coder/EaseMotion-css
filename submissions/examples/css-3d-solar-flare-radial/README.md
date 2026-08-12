# CSS 3D Effect: Solar Flare Radial

A smooth, high-performance, and accessible pure CSS 3D animation featuring radiant solar flare styling and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, 3D spatial `translateZ`, and hardware-accelerated transforms.
- **Solar Flare Radial Effect:** Radiant glowing orange and amber rays pulsing, rotating, and shifting across 3D space in the viewport background.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #f97316;            /* Accent orange and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
