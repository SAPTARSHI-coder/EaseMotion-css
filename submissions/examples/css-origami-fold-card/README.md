# CSS Origami Fold Card

An advanced, high-performance 3D perspective card component that unfolds from an origami-folded state on hover, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS 3D perspective (`perspective: 1000px`), transform origins, and `rotateX` transformations.
- **Origami Unfolding Effect:** Flaps smoothly rotate from a folded 75-degree angle down to a flat 0-degree view upon container interaction.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #f59e0b;            /* Origami card accent highlight color */
    --em-speed: 0.4s;                 /* Card transition speed */
}
