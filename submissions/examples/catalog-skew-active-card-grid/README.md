# CSS Skew-Active Card Grid (Product Catalog Layout)

An intermediate, high-performance product catalog card grid component built completely with pure CSS, tailored specifically for e-commerce and modern tech showcases. Features dynamic geometric skew transforms on hover.

## 🚀 Features

- **Zero JavaScript:** Built entirely using pure CSS hover and focus states (`:hover`, `:focus-visible`) and transition timing curves.
- **Skew-Active Mechanics:** The product card tilts dynamically with `transform: skewX(-4deg) translateY(-6px)` on hover, while internal content uses a counter-skew (`skewX(4deg)`) to keep typography perfectly readable and sharp.
- **SaaS Glassmorphism:** Styled with modern frosted glass cards (`backdrop-filter: blur(16px)`), subtle borders, glowing accent drop-shadows, and smooth elevation.
- **Accessible & Responsive:** Fully keyboard navigable via `focus-visible` with a responsive grid layout that stacks vertically on mobile viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override that neutralizes skew transforms for sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Wrap product card contents inside `.em-card-inner` to enable counter-skew text protection.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Badge accent & glow color */
    --em-speed: 0.4s;                 /* Transition duration */
}
