# CSS Glass Effect: Retro Arcade Pixel

A smooth, high-performance, and accessible pure CSS glassmorphism UI component featuring retro arcade pixel glow styling and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, backdrop blur filters, and hardware-accelerated transforms.
- **Glassmorphic Retro Arcade Pixel Effect:** Frosted glass container layered above glowing pink arcade background orbs with energetic box-shadow glows.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #ec4899;            /* Accent pink and button color */
    --em-speed: 0.5s;                 /* Transition speed */
}
