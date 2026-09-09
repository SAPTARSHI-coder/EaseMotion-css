# CSS Subgrid Cards

An advanced, high-performance card grid layout utilizing CSS subgrid (`grid-template-rows: subgrid`) to perfectly align internal card elements across rows, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS Subgrid layout specifications to synchronize internal row heights and content alignment across distinct parent grid tracks.
- **Synchronized Row Heights:** Ensures buttons, titles, and descriptions maintain uniform alignment regardless of content length inside individual cards.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA feed roles and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Subgrid button and accent color */
    --em-speed: 0.4s;                 /* Transition speed */
}
