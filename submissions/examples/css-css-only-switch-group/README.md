# CSS CSS-Only Switch Group

An advanced, high-performance exclusive radio-style switch group component built entirely with pure CSS, tailored specifically for settings panels, preference forms, and modern UI configurations.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS sibling selectors (`input:checked ~ .em-switch-slider`), hidden radio inputs, and custom transition timing curves.
- **Exclusive Selection Logic:** Native radio button behavior ensures exclusive toggling without a single line of JavaScript.
- **SaaS Glassmorphism:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), subtle borders, and smooth hover translations.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Active switch track color */
    --em-speed: 0.3s;                 /* Toggle transition speed */
}
