# CSS Background: Floating Elevation

A smooth, high-performance, and accessible pure CSS background animation featuring dynamic floating elevation glassmorphic cards and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, smooth vertical floating translations, and hardware-accelerated drop shadows.
- **Floating Elevation Effect:** Glassmorphic cards gently floating and elevating with dynamic shadow depths across the viewport background.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Accent indigo and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
