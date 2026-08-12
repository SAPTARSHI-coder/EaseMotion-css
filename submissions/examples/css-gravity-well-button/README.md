# CSS Gravity Well Button

An advanced, high-performance interactive button layout where surrounding orbital particles get gravitationally pulled toward the central button on hover, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS container hover selectors (`.em-gravity-container:hover`), transform translations (`translate`), and cubic-bezier easing.
- **Gravitational Attraction Effect:** Surrounding decorative particles simulate physics by sliding inward and scaling down toward the center when the container is hovered.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #8b5cf6;            /* Button gravity well accent color */
    --em-speed: 0.4s;                 /* Transition speed */
}
