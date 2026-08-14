# CSS Tarot Card

An advanced, high-performance mystical tarot card component featuring ornate golden borders, inner dashed frames, symbols, and 3D hover elevation, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS 3D transforms (`rotateX`, `rotateY`, `translateY`), gradients, and box-shadows.
- **Ornate Golden Foil Styling:** Detailed dashed borders, golden typography, and dark mystic backgrounds simulating premium physical tarot cards.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #d97706;            /* Accent gold color and button background */
    --em-speed: 0.4s;                 /* Card transition speed */
}
