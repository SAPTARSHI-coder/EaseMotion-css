# CSS Background: Bouncing Spring

A smooth, high-performance, and accessible pure CSS background animation featuring dynamic bouncing spring physics and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, cubic-bezier spring easing, and hardware-accelerated transforms (`translateY`, `scaleY`).
- **Bouncing Spring Effect:** Rhythmic emerald glowing spring dots bouncing and squashing dynamically across the viewport background.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #10b981;            /* Accent emerald and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
