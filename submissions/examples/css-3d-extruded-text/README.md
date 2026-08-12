# CSS 3D Extruded Text

An advanced, high-performance 3D extruded text shadow depth effect component built completely with pure CSS, tailored specifically for hero sections, typography showcases, and modern headings.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using multi-layered CSS `text-shadow` coordinate maps to simulate realistic 3D depth and physical extrusion.
- **Interactive Depth Elevation:** Smoothly elevates and scales upon hover and keyboard focus.
- **SaaS Glassmorphic Card:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), glowing shadows, and clean typography.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Button and badge highlight color */
    --em-speed: 0.4s;                 /* Hover transition duration */
}
