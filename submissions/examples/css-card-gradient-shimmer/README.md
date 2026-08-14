# CSS Card: Gradient Shimmer

A premium, high-performance, and accessible pure CSS card component featuring a continuous sweeping gradient shimmer effect, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS keyframe animations (`@keyframes`), linear-gradient background overlays, and absolute positioning.
- **Gradient Shimmer Effect:** A fluid, continuous light-sweep effect that highlights the card surface, perfect for loading states or premium highlights.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Accent indigo color */
    --em-speed: 2s;                  /* Shimmer animation speed */
}
