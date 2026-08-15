# CSS User Mention Tag

An advanced, high-performance `@mention` user tag pill component featuring an immersive profile hover card built completely with pure CSS, tailored specifically for chat apps, comments, and collaborative platforms.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS hover and focus states (`:hover`, `:focus-visible`), opacity transitions, and transform translations.
- **Rich Profile Hover Card:** Displays user avatar gradients, full name, handle, biography, follower statistics, and action buttons upon hovering over the mention pill.
- **SaaS Glassmorphic Card:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), glowing shadows, and clean typography.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Button and tag highlight accent color */
    --em-speed: 0.3s;                 /* Hover card reveal transition duration */
}
