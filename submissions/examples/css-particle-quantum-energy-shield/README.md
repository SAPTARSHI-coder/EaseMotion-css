# CSS Particle Effect: Quantum Energy Shield

A smooth, high-performance, and accessible pure CSS particle animation featuring glowing quantum energy shield styling and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, custom variable offsets (`--x`, `--y`, `--d`, `--s`), and hardware-accelerated transforms.
- **Quantum Energy Shield Particle Effect:** Luminous cyan glowing particle dots floating, scaling, and pulsing organically across the viewport background.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #06b6d4;            /* Accent cyan and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
