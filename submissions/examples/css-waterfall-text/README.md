# CSS Waterfall Text

An advanced, high-performance typography animation component where individual letters cascade downwards like a waterfall using custom CSS variables and staggered keyframes, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, inline custom variables (`--i`), and `calc()` staggered animation delays.
- **Cascading Waterfall Effect:** Smooth vertical translation and cyan glow refractions dropping letter by letter continuously.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Assign `--i` index variables to each letter span.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #06b6d4;            /* Waterfall cyan accent and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
