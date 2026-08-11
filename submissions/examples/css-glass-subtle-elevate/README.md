# CSS Glass Effect: Subtle Elevate

A smooth, high-performance, and accessible pure CSS glassmorphism UI component featuring subtle elevation hover mechanics and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS transitions, backdrop blur filters, and hardware-accelerated transforms.
- **Glassmorphic Subtle Elevate Effect:** Frosted glass card layered above soft floating background orbs with smooth lift and shadow expansion on hover.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #3b82f6;            /* Accent blue and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
