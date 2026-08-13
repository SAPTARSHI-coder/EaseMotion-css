# CSS Button: Laser Ray Trace

A smooth, high-performance, and accessible pure CSS button component featuring Laser Ray Trace styling with glowing neon borders and sweeping light flares, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS pseudo-elements (`::before`), gradient sweeps, and hardware-accelerated transforms.
- **Laser Ray Trace Hover Effect:** Smooth sweeping light beam passing across the button on hover with intense red neon box-shadow lighting.
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
