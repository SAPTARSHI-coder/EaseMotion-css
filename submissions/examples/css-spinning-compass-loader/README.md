# CSS Spinning Compass Loader

An elegant, high-performance compass rose loading indicator featuring dual-ring counter-rotations and needle pulsing, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, smooth clip-path geometric needles, and dual-layer rotational animations.
- **Precision Loading Aesthetic:** Multi-layered spinning rings combined with pulsing center points to give a modern navigational loading feel.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes (`role="status"`) and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #06b6d4;            /* Compass ring and needle highlight color */
    --em-speed: 0.4s;                 /* Card hover elevation speed */
}
