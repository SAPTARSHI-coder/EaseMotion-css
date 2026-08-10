# CSS Custom Highlight API

An advanced typography component showcasing modern text highlighting and styling utilizing the CSS Custom Highlight API (`::highlight`), built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Provides clean fallback and demonstration markup simulating custom range styling via standard CSS classes and native `::highlight()` pseudo-element selectors.
- **Dynamic Text Styling:** Enhances readability and search result highlighting without altering DOM tree integrity.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #10b981;            /* Highlight and button accent color */
    --em-speed: 0.4s;                 /* Card transition speed */
}
