# CSS Disco Ball Background

An advanced, high-performance atmospheric background component featuring bouncing disco ball light reflections and shimmering refractions built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS keyframe animations, blurred colorful light nodes (`filter: blur(12px)`), and smooth glassmorphic card transitions.
- **Bouncing Multi-Directional Reflections:** Continuous multi-axis translation and scaling keyframe loops simulating bouncing disco lights across the viewport.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #ec4899;            /* Accent reflection and button color */
    --em-speed: 0.4s;                 /* Card elevation transition speed */
}
