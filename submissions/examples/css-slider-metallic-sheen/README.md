# CSS Slider: Metallic Sheen

A smooth, high-performance, and accessible pure CSS slider and carousel component featuring dynamic metallic sheen sweeping reflections and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS scroll-snap (`scroll-snap-type`), smooth CSS horizontal tracks, and keyframe animations.
- **Metallic Sheen Effect:** Sophisticated animated gradient sweeps simulating polished metallic reflections across slides.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #e2e8f0;            /* Accent metallic tone */
    --em-speed: 0.4s;                 /* Transition speed */
}
