# CSS Comparison Table

An advanced, high-performance side-by-side feature comparison table component featuring checkmarks, column highlights, and scrollable responsive containers, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS table markup, responsive horizontal scrolling wrappers, and hover highlight effects.
- **Featured Column Highlighting:** Distinct column styling (`.em-highlight-col`) to draw user attention to recommended pricing tiers or plans.
- **SaaS Glassmorphic Card:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), glowing shadows, and clean typography.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Badge and focus highlight color */
    --em-speed: 0.3s;                 /* Table row hover transition duration */
}
