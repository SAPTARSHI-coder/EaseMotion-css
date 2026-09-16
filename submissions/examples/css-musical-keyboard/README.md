# CSS Musical Keyboard

An advanced, high-performance interactive piano keyboard component featuring realistic tactile key-press depressions, hover states, and absolute positioning for sharp keys, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS pseudo-classes (`:hover`, `:focus-visible`), relative/absolute positioning, and tactile translation transforms (`translateY`).
- **Realistic Piano Layout:** Distinct white and black key dimensions with precise positioning simulating physical piano key mechanics.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard navigation (`tabindex="0"`). Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #f43f5e;            /* Accent theme and button color */
    --em-speed: 0.4s;                 /* Card transition speed */
}
