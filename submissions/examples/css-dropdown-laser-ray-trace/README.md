# CSS Dropdown: Laser Ray Trace

A smooth, high-performance, and accessible pure CSS dropdown menu component featuring laser ray trace glowing neon styling and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS pseudo-classes (`:hover`, `:focus-within`), hardware-accelerated transforms, and glowing box-shadows.
- **Laser Ray Trace Dropdown Effect:** Sleek neon border accents and red laser glow highlighting on hover states.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #ef4444;            /* Accent red laser color */
    --em-speed: 0.4s;                 /* Transition speed */
}
