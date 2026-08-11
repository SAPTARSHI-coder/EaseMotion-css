# CSS Full-bleed Layout

An advanced, high-performance edge-to-edge section layout component built completely with pure CSS, tailored specifically for hero banners, callout sections, and immersive web layouts.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS viewport units (`100vw`) and negative margin breakout techniques (`margin-left: -50vw`).
- **Centered Flow Integration:** Allows breakout edge-to-edge full-bleed banners to exist seamlessly within a standard centered content wrapper.
- **SaaS Glassmorphism & Gradients:** Styled with frosted glass cards, gradient backgrounds, and subtle borders.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the layout via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Primary tag highlight color */
}
