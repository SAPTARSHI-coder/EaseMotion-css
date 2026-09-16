# CSS CSS Variable Theming System

An advanced, high-performance multi-theme system component built completely with pure CSS custom properties and HTML input states.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS custom properties (`:root`) and hidden radio input sibling selectors to switch themes instantly.
- **Dynamic Multi-Theme Support:** Seamlessly transitions background colors, glowing accents, glassmorphic cards, and typography across Indigo, Emerald, and Amber color palettes.
- **SaaS Glassmorphic Aesthetics:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), smooth transitions, and glowing shadows.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily configure themes via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Primary theme highlight color */
    --em-speed: 0.4s;                 /* Theme transition duration */
}
