# CSS Glassmorphism Profile Card

An advanced, high-performance frosted glass profile card component featuring multi-layered blur, transparency effects, and glowing borders, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS backdrop filters (`backdrop-filter: blur(25px)`), rgba transparency layers, and smooth cubic-bezier hover transitions.
- **Frosted Glass Aesthetic:** Deep translucent backgrounds paired with subtle inset highlight borders for a premium SaaS look.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Primary button and role accent color */
    --em-speed: 0.4s;                 /* Card hover elevation duration */
}
