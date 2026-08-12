# CSS Background: 3D Perspective Tilt

A smooth, high-performance, and accessible pure CSS background animation featuring dynamic 3D perspective grids and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, `perspective`, and hardware-accelerated 3D rotations (`rotateX`, `rotateY`, `rotateZ`).
- **3D Perspective Effect:** Overlapping glowing amber grid planes tilting and swaying in 3D space, masked elegantly to fade at the edges.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #f59e0b;            /* Accent amber and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
