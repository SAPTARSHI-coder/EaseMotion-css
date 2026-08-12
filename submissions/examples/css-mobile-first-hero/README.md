# CSS Mobile-first Hero

A smooth, high-performance, and accessible pure CSS mobile-first responsive hero section component that transitions from stacked layout on mobile devices to side-by-side layout on desktop, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS Flexbox, clamp typography, and hardware-accelerated transitions.
- **Mobile-First Responsive Layout:** Automatically stacks content vertically on mobile viewports and transitions into an expansive side-by-side dual column layout on desktop screens (`@media (min-width: 900px)`).
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
