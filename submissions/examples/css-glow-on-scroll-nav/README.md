# CSS Glow on Scroll Nav

An advanced, high-performance navigation bar component that dynamically gains a vibrant neon glow and drop-shadow based on the user's scroll position, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using modern CSS Scroll-Driven Animations (`animation-timeline: scroll()`).
- **Dynamic Scroll Glow:** The navigation bar transitions from transparent borders to a glowing box-shadow automatically as the user scrolls down the container.
- **Accessible & Responsive:** Fully responsive mock-browser layout with ARIA landmarks (`role="navigation"`) and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override providing a static glow fallback.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. *Note: The pure CSS scroll timeline feature is supported in modern browsers (Chrome/Edge 115+).*

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #10b981;            /* Scroll glow accent and button color */
    --em-speed: 0.4s;                 /* General hover transition speed */
}
