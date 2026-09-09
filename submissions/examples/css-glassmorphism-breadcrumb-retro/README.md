# CSS Glassmorphism Breadcrumb: Retro

A high-performance, accessible pure CSS breadcrumb component featuring retro amber styling and frosted glassmorphism surfaces, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS flex layouts, pseudo-element dividers (`:after`), and backdrop blur filters.
- **Retro Glassmorphism Effect:** Warm amber tones paired with semi-transparent frosted glass panels and subtle text-shadow glows.
- **Dark Mode Compatible & Responsive:** Optimized retro dark theme styling that wraps and scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #f59e0b;            /* Retro Amber Accent */
    --em-speed: 0.3s;                 /* Transition speed */
}
