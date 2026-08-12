# CSS Polaroid Gallery

An advanced, high-performance stacked polaroid photo gallery component built completely with pure CSS, tailored specifically for photography portfolios, memories, and modern UI showcases.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS transform translations (`translateX`, `rotate`), stacking contexts (`z-index`), and spring-like transition curves.
- **Interactive Fan-Out Effect:** Smoothly fans out stacked polaroid cards into an open exhibition spread upon container hover or keyboard focus.
- **SaaS Glassmorphic Card:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), glowing shadows, and authentic polaroid frames.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Badge accent color */
    --em-speed: 0.5s;                 /* Fan-out transition duration */
}
