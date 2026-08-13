# CSS Gradient Card Border

An advanced, high-performance card component built completely with pure CSS, tailored specifically for glowing gradient borders, modern UI containers, and featured cards.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS pseudo-elements (`::before`), conic gradients, and smooth spin keyframes.
- **Animated Conic Gradient Border:** Rotating multi-stop color gradient border that provides a sleek glowing aura.
- **SaaS Glassmorphism & Depth:** Styled with solid dark backdrops, subtle elevation shadows, and hover transitions.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the card via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Badge & button color */
    --em-speed: 4s;                   /* Border spin cycle speed */
}
