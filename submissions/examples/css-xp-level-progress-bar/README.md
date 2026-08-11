# CSS XP/Level Progress Bar

An advanced, high-performance gaming-style XP and level progress bar component built completely with pure CSS, tailored specifically for RPG dashboards, gaming platforms, and gamified web apps.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS gradient fills, box-shadow glows, and smooth keyframe animations.
- **Gaming Glow Animation:** Features a pulsating neon box-shadow glow effect (`@keyframes em-xp-pulse`) simulating active experience gains.
- **SaaS Glassmorphic Card:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), glowing shadows, and clean typography.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Primary badge & accent color */
    --em-speed: 1.5s;                 /* Glow pulse animation duration */
}
