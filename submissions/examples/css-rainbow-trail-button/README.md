# CSS Rainbow Trail Button

An advanced, high-performance interactive call-to-action button featuring a shimmering rainbow spectrum border trail on hover, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS pseudo-elements (`::before`), linear gradients, and background position keyframe animations.
- **Shimmering Spectrum Effect:** Smoothly cycles a multi-stop rainbow gradient around the button border to simulate a glowing color trail upon user interaction.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-speed: 0.4s;                 /* Hover transition speed */
}
