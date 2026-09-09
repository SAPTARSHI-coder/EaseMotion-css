# CSS Release Notes Card

An advanced, high-performance software release notes component featuring version tagging, timestamps, and structured changelog lists, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using semantic HTML lists, flexbox containers, and clean CSS styling.
- **Structured Changelog Layout:** Highlights version numbers, release dates, and itemized feature updates in an organized glassmorphic card.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA feed roles and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #8b5cf6;            /* Release notes accent and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
