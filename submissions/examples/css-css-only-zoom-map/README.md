# CSS CSS-only Zoom Map

An advanced, high-performance interactive regional map container featuring smooth CSS-only zoom-in and pan effects on hover, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS transforms (`scale` and `translate`), grid backgrounds, and smooth cubic-bezier transitions.
- **Interactive Map Canvas:** Animated glowing map markers with pulsing radar rings simulating live geographical data points.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #0ea5e9;            /* Map marker and primary button highlight */
    --em-speed: 0.4s;                 /* Card transition speed */
}
