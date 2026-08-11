# CSS Magnet Text Effect

An advanced, high-performance interactive typography component where individual text characters magnetically shift and react upon user hover, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS structural selectors (`nth-child`), custom properties, and smooth cubic-bezier transitions.
- **Magnetic Typography Interaction:** Characters disperse vertically in alternating directions and highlight dynamically when hovering over the word group.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #3b82f6;            /* Button highlight color */
    --em-speed: 0.4s;                 /* Card elevation speed */
}
