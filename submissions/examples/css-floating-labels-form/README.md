# CSS Floating Labels Form

An advanced, high-performance floating labels form component built completely with pure CSS, tailored specifically for modern contact forms, login screens, and user registration flows.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS pseudo-classes (`:focus`, `:not(:placeholder-shown)`) and smooth transform transitions.
- **Floating Animation:** Smoothly floats input labels upwards when fields are focused or contain text.
- **SaaS Glassmorphic Card:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), glowing shadows, and clean typography.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Focus border and floating label color */
    --em-speed: 0.3s;                 /* Float transition duration */
}
