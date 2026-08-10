# CSS Slot Machine Reels

An advanced, high-performance gamification component featuring three spinning slot machine reels with smooth vertical keyframe scrolling and interactive stop states, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes` animations, staggered animation delays, and `animation-play-state: paused` on hover.
- **Dynamic Reel Animation:** Vertical emoji strips scrolling continuously simulating mechanical slot machine behavior.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #eab308;            /* Slot accent and button color */
    --em-speed: 0.4s;                 /* Card transition speed */
}
