# CSS Split Navigation

An advanced, high-performance navigation component split into two distinct halves that smoothly separate on hover or interaction, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS flexbox alignment, translation transforms (`translateX`), and smooth cubic-bezier transitions.
- **Dynamic Half Separation:** Halves slide apart outward in opposite directions while the central divider scales down on container interaction.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes (`role="navigation"`) and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #a855f7;            /* Accent highlight and button color */
    --em-speed: 0.4s;                 /* Card transition speed */
}
