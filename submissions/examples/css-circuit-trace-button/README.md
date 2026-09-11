# CSS Circuit Trace Button

An advanced, high-performance interactive button component featuring animated circuit board traces and glowing pathway signals on hover, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS pseudoclasses (`:hover`), translation transforms (`translateX`), and glowing box-shadows.
- **Circuit Pathway Animation:** Glowing circuit lines slide across the button borders on hover simulating active hardware transmission paths.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #06b6d4;            /* Circuit trace glow color */
    --em-speed: 0.4s;                 /* Transition speed */
}
