# CSS Electric Shock Text

An advanced, high-performance interactive typography component featuring high-voltage electrical lighting glow and jittery crackling animations on hover, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS text-shadow layering, keyframe jitter animations (`skew` and `translate`), and step-based timing functions.
- **High-Voltage Glow:** Intense multi-layer cyan text shadows simulate crackling electrical discharges upon hover.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #38bdf8;            /* Electric glow accent and button color */
    --em-speed: 0.4s;                 /* Card transition speed */
}
