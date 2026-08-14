# CSS HTTP Method Badge

An advanced, high-performance color-coded HTTP method badge component tailored for API documentation, endpoint lists, and developer dashboards, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS flexbox layouts, semantic span badges, and custom color themes.
- **Semantic Method Color Coding:** Distinct high-contrast themes for GET (Emerald), POST (Blue), PUT (Amber), and DELETE (Rose).
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA list roles and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #3b82f6;            /* Accent primary and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
