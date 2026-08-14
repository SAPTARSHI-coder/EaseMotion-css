# CSS Rotating Cube Hero

An advanced, high-performance 3D rotating cube component featuring unique interactive content on each distinct face, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS 3D perspective (`perspective: 800px`), `transform-style: preserve-3d`, and continuous rotation keyframes.
- **Multi-Face Content Layout:** Six distinct structural cube faces (`front`, `back`, `right`, `left`, `top`, `bottom`) positioned precisely using `rotateY`/`rotateX` and `translateZ`.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #3b82f6;            /* Button and border highlight color */
    --em-speed: 0.4s;                 /* Card transition speed */
}
