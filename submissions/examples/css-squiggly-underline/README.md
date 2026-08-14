# CSS Squiggly Underline

An advanced, high-performance animated squiggly underline component built completely with pure CSS, tailored specifically for interactive text links, typography highlights, and modern web applications.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native repeating radial gradients (`radial-gradient`), background sizing, and smooth background position shifts.
- **Animated Wavy Underline:** Dynamic squiggly underline that shifts its wave pattern smoothly upon mouse hover or keyboard focus.
- **SaaS Glassmorphism:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), subtle borders, and glowing indigo accents.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Underline wave color */
    --em-speed: 0.4s;                 /* Hover shift transition duration */
}
