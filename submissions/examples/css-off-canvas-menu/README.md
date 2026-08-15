# CSS Off-canvas Menu

A smooth, high-performance, and accessible pure CSS off-canvas slide-in navigation menu component for mobile and responsive layouts, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS state selectors (`:checked`), smooth cubic-bezier transforms, and hardware-accelerated transitions.
- **Off-canvas Slide-in Effect:** Slide-in navigation drawer with a frosted glass backdrop overlay and animated hamburger icon toggle.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #3b82f6;            /* Accent blue color */
    --em-speed: 0.4s;                 /* Transition speed */
}
