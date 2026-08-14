# CSS Product Zoom Viewer

An advanced, high-performance product image zoom detail view component built completely with pure CSS, tailored specifically for e-commerce galleries, product cards, and online stores.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS scale transforms (`transform: scale(1.6)`) and overflow clipping containers (`overflow: hidden`).
- **Smooth Zoom Transition:** Spring-like cubic-bezier transition curves for fluid detail inspection on mouse hover.
- **SaaS Glassmorphic Card:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), glowing shadows, and clean typography.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Button and action highlight color */
    --em-speed: 0.5s;                 /* Zoom transition duration */
}
