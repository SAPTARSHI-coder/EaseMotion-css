# CSS Background: Liquid Wave Fill

A smooth, high-performance, and accessible pure CSS background animation featuring continuous liquid wave fill styling and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, repeating radial gradient waves, and hardware-accelerated horizontal translations.
- **Liquid Wave Fill Effect:** Flowing luminous blue and cyan wave layers undulating continuously across the viewport background.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #0284c7;            /* Accent blue and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
