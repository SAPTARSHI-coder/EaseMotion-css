# CSS Button: Minimalist Outline

A smooth, high-performance, and accessible pure CSS button component featuring Minimalist Outline styling with clean borders and subtle background fill transitions, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS transitions, border properties, and hardware-accelerated transforms.
- **Minimalist Outline Hover Effect:** Smooth state transition from transparent outline styling to solid accent fill with elevation shadows.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #38bdf8;            /* Accent blue color */
    --em-speed: 0.4s;                 /* Transition speed */
}
