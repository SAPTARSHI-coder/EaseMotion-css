# CSS 3D Effect: Minimalist Outline

A smooth, high-performance, and accessible pure CSS 3D animation featuring minimalist outline geometry and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, 3D spatial transformations (`perspective`, `rotateX`, `rotateY`, `rotateZ`, `translateZ`), and hardware-accelerated animations.
- **Minimalist Outline Effect:** Subtle rotating outline rings creating a structured, clean architectural aesthetic in the background.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #f8fafc;            /* Accent outline and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
