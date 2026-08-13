# CSS Code Block Highlight

An advanced, high-performance styled code block component built completely with pure CSS, tailored specifically for developer documentation, code snippets, and technical tutorials.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS styling, custom syntax color tokens, and checkbox state toggles for interactive copy button feedback.
- **Syntax Color Scheme:** Styled with distinct color tokens for selectors (`.em-card`), properties (`position`, `background`), and values (`relative`, `blur(20px)`).
- **macOS Window Header:** Includes classic window controls (red, yellow, green dots) and a filename label.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Primary highlight accent color */
    --em-speed: 0.3s;                 /* Interactive transition speed */
}
