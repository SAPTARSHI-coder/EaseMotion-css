# CSS Background: Velvet Smooth Transition

A smooth, high-performance, and accessible pure CSS background animation featuring fluid velvet smooth gradient color-shift styling and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, heavy hardware-accelerated blur effects, and smooth transform shifts.
- **Velvet Smooth Transition Effect:** Organic color gradients drifting and morphing fluidly in the viewport background.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #a855f7;            /* Accent purple and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
