# CSS Ripple Click Effect

An advanced, high-performance Material Design ripple click effect component built completely with pure CSS, tailored specifically for buttons, interactive cards, and touch feedback.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS active states (`:active`), overflow clipping containers, and smooth keyframe expansions (`@keyframes em-ripple-expand`).
- **Material Design Feedback:** Generates an expanding translucent white wave upon click interaction for professional UI responsiveness.
- **SaaS Glassmorphic Card:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), glowing shadows, and clean typography.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Button background accent color */
    --em-speed: 0.6s;                 /* Ripple expansion duration */
}
