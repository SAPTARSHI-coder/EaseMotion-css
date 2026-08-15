# CSS Brutalist Card Design

An advanced, high-impact neo-brutalist card component featuring raw solid borders, hard offset shadow blocks, and sharp interactive feedback, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS solid borders, offset box-shadows (`8px 8px 0px 0px`), and sharp transform translations.
- **Neo-Brutalist Aesthetic:** High-contrast typography, bold monochrome/yellow palettes, and aggressive geometric depth.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-card-bg: #fef08a;            /* Card background color */
    --em-border: #030712;             /* Raw solid border and shadow color */
    --em-speed: 0.2s;                 /* Hover snap transition speed */
}
