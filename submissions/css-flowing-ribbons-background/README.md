# CSS Flowing Ribbons Background

An advanced, high-performance atmospheric background component featuring colorful ribbon shapes that slowly flow, twist, and morph built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS keyframe animations, blurred gradient shapes (`filter: blur(100px)`), and smooth glassmorphic card transitions.
- **Organic Flowing Motion:** Continuous multi-axis translation, rotation, and scaling keyframe loops simulating fluid, twisting ribbons.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #8b5cf6;            /* Accent ribbon and button color */
    --em-speed: 0.4s;                 /* Card elevation transition speed */
}
