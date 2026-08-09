# CSS Micro-interaction Collection

An advanced library of micro-interaction animations built completely with pure CSS, tailored specifically for UI feedback states, action toggles, and modern web applications.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS pseudo-classes (`:checked`, `:hover`), keyframe timelines, and custom properties.
- **Micro-Interaction UI States:** Features animated feedback items including heart pops, bookmark spring rotations, notification bell shakes, and pulsing status dots.
- **Light & Dark Mode Support:** Automatically adapts to user system preferences using `@media (prefers-color-scheme: dark)` and CSS variables.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the micro-interactions via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Primary theme highlight */
    --em-like: #f43f5e;              /* Heart active color */
}
