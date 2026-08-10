# CSS Masonry Photo Grid

An advanced, high-performance Pinterest-style masonry photo grid component built completely with pure CSS, tailored specifically for image galleries, portfolios, and photo feeds.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS multi-column layouts (`column-count`, `column-gap`) and `break-inside: avoid` rules without any JS masonry libraries.
- **Variable Height Photo Cards:** Features staggered card heights and smooth image zoom hover animations with gradient overlays.
- **SaaS Glassmorphic Card:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), glowing shadows, and clean typography.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Badge accent highlight color */
    --em-speed: 0.4s;                 /* Hover transition speed */
}
