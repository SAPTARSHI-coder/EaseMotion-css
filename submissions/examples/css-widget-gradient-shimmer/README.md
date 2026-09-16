# CSS Widget: Gradient Shimmer

A smooth, high-performance, and accessible pure CSS dashboard widget component featuring dynamic gradient shimmer loading placeholders and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, background-position gradient animations, and hardware-accelerated transforms.
- **Gradient Shimmer Loading Effect:** Fluid shimmering light wave passing across placeholder skeleton lines to simulate live data fetching.
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
