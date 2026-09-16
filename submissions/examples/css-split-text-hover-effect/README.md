# CSS Split-text Hover Effect

An advanced, high-performance split-text hover effect component built completely with pure CSS, tailored specifically for hero sections, typography showcases, and creative portfolios.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS clip-paths (`polygon`), absolute positioning, and smooth cubic-bezier transform translations.
- **Interactive Split Halves:** Splits typography cleanly into top and half halves that slide apart upon hover or keyboard focus.
- **SaaS Glassmorphic Card:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), glowing shadows, and clean typography.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Text color and highlight accent */
    --em-speed: 0.4s;                 /* Split transition duration */
}
