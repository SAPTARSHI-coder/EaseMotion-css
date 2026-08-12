# CSS FAQ Search Results

An advanced, high-performance FAQ search results component featuring semantic question blocks and query keyword highlighting within answers, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native HTML semantic tags (`<mark>`) and CSS styling.
- **Keyword Highlight Styling:** Customized background highlighting for searched terms (`.em-highlight`) to improve readability and search UX.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA feed roles and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #14b8a6;            /* Accent highlight and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
