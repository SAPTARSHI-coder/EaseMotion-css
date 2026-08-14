# CSS Modal: Subtle Elevate

A smooth, high-performance, and accessible pure CSS modal and dialog component featuring subtle elevation styling, backdrop blur, and dark mode compatibility, built completely with vanilla CSS (`:target` state mechanism).

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `:target` pseudo-classes, smooth hardware-accelerated transitions, and scale transformations.
- **Subtle Elevate Effect:** Clean glassmorphic overlay combined with a smoothly elevating modal dialog box.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #38bdf8;            /* Accent sky blue and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
