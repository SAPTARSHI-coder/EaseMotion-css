# CSS Collapsible Table on Mobile

An advanced, high-performance responsive data table that gracefully collapses into individual card layouts on mobile viewports, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using CSS media queries and HTML `data-label` attributes to transform table rows into mobile cards.
- **Card-Based Mobile Adaptation:** On small screens (`max-width: 600px`), table headers are hidden and each row is styled as an isolated glassmorphic card with inline labels.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA table roles and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Ensure table cells include `data-label` matching their column headers for mobile view rendering.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #0ea5e9;            /* Accent highlight and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
