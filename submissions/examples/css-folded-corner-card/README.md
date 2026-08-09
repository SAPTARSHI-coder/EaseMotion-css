# CSS Folded Corner Card

An advanced, high-performance notebook card component built completely with pure CSS, featuring a realistic folded top-right corner effect utilizing linear gradients and geometric transforms.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS properties, linear gradient cutouts, and transform transitions.
- **Realistic Corner Fold:** Uses a diagonal linear-gradient combined with drop shadows and hover scaling to simulate a classic folded paper aesthetic.
- **Light & Dark Mode Support:** Automatically adapts to user system preferences using `@media (prefers-color-scheme: dark)` and custom CSS variables.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA landmarks and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-corner-size: 40px;           /* Folded corner dimension */
    --em-fold-bg: #cbd5e1;            /* Fold triangle shade */
}
