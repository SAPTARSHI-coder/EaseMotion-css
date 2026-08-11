# CSS Kinetic Typography

An advanced, high-performance animation component built completely with pure CSS, tailored specifically for landing page heroes, dynamic banners, and modern portfolios. Features rhythmic text transformations and translations.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS keyframe timelines, linear gradients, and staggered animation delays.
- **Rhythmic Kinetic Motion:** Words dynamically scale, translate vertically, blur, and fade in sequence (`@keyframes em-kinetic-transform`) for a fluid typography effect.
- **SaaS Glassmorphism:** Styled with modern frosted glass cards (`backdrop-filter: blur(20px)`), glowing indigo accents, and gradient-clipped typography.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA landmarks and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override that halts transformations for motion-sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Adjust `--delay` custom properties on each `.em-word` element to customize staggering.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Accent glow & badge color */
    --em-speed: 3s;                   /* Animation duration */
}
