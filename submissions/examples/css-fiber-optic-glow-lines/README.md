# CSS Fiber Optic Glow Lines

An advanced, high-performance background animation component built completely with pure CSS, tailored specifically for high-tech portfolios, futuristic dashboards, and modern landing pages. Features animated fiber optic glowing line trails sweeping across the background.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS keyframe timelines, linear gradients, and drop-shadow filters.
- **Glowing Light Trails:** Multi-layered horizontal light beams (`@keyframes em-fiber-pulse`) crossing the viewport at contrasting speeds with atmospheric bloom effects.
- **SaaS Glassmorphic Content Card:** Centered foreground card styled with frosted glass effects (`backdrop-filter: blur(16px)`), subtle borders, and glowing cyan accents.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA region landmarks and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override that halts trail animations for motion-sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #38bdf8;            /* Glow trail & badge color */
    --em-speed: 4s;                   /* Animation duration */
}
