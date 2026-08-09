# CSS Circular Radial Menu

An advanced, high-performance circular navigation component built completely with pure CSS, tailored specifically for floating action buttons (FAB), circular menus, and modern web applications. Features menu items expanding outward from a central toggle.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS checkbox states (`:checked`), sibling selectors, and spring-like cubic-bezier transition easing.
- **Radial Expansion:** Menu items fan out symmetrically around the center button with smooth scaling and coordinate translation.
- **SaaS Glassmorphic Items:** Styled with frosted glass circular items (`backdrop-filter: blur(12px)`), subtle borders, and glowing indigo shadows.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override that halts spring animations for sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Center button & glow color */
    --em-speed: 0.4s;                 /* Expansion transition duration */
}
