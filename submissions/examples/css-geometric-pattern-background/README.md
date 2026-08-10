# CSS Geometric Pattern Background

An advanced, high-performance animated geometric grid pattern background component built completely with pure CSS, tailored specifically for modern web backgrounds and tech landing pages.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS linear gradients, grid background sizing, rotational transforms (`rotate(15deg)`), and continuous pan keyframes.
- **Continuous Panning Grid:** Smooth infinite background displacement creating a dynamic cyber/tech aesthetic.
- **SaaS Glassmorphic Card:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), glowing shadows, and clean typography.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the animation via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Button & badge highlight color */
    --em-speed: 20s;                  /* Grid panning duration */
}
