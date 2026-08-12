# CSS Responsive Cards Auto-fit

A smooth, high-performance, and accessible pure CSS auto-fitting responsive card grid component utilizing CSS Grid auto-fit and minmax, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS Grid auto-fit features (`grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))`) for responsive layouts without media queries.
- **Auto-fit Grid Effect:** Fluidly adapts column counts across different screen resolutions dynamically.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #a855f7;            /* Accent purple color */
    --em-speed: 0.4s;                 /* Transition speed */
}
