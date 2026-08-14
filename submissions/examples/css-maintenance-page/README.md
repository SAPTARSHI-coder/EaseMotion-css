# CSS Maintenance Page

An advanced, high-performance maintenance and coming soon page component featuring a countdown timer grid, built completely with pure CSS, tailored specifically for product launches and server maintenance notices.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS grid layouts, responsive breakpoints, and hover elevation states.
- **Responsive Countdown Grid:** Clean 4-column countdown timer block that gracefully stacks into a 2x2 grid on mobile viewports.
- **SaaS Glassmorphic Card:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), glowing shadows, and clean typography.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Button and badge highlight color */
    --em-speed: 0.4s;                 /* Hover transition duration */
}
