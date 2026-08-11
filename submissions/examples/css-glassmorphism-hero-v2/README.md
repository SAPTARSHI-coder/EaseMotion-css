# CSS Glassmorphism Hero v2

An advanced, high-performance second-generation glass hero component featuring multiple floating panels, multi-layered backdrop filters, and ambient glowing orbs, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS backdrop filters (`backdrop-filter: blur(25px)`), rgba transparency layers, and smooth floating keyframe animations.
- **Floating Glass Panels:** Includes absolute-positioned stat and status panels that hover gracefully around the central hero card.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Primary action button and highlight color */
    --em-speed: 0.4s;                 /* Card elevation speed */
}
