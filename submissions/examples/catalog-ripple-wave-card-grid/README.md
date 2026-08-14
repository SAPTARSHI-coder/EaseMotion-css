# CSS Ripple-Wave Card Grid (Product Catalog Layout)

An intermediate, high-performance product catalog card grid component built completely with pure CSS, tailored specifically for e-commerce and modern tech showcases. Features a sequential ripple-wave load animation sequence across grid items.

## 🚀 Features

- **Zero JavaScript:** Built entirely using pure CSS animations, custom properties, and staggered `animation-delay` rules.
- **Ripple-Wave Entrance:** Grid cards cascade into view sequentially using `@keyframes em-ripple-wave` paired with a refined `cubic-bezier(0.16, 1, 0.3, 1)` easing curve for an organic wave effect.
- **SaaS Glassmorphism:** Styled with modern frosted glass cards (`backdrop-filter: blur(16px)`), subtle borders, and smooth card elevation on hover.
- **Accessible & Responsive:** Fully keyboard navigable via `focus-visible` with a responsive grid layout that stacks vertically on mobile viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override that halts load animations and hover shifts for sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Apply the `.em-ripple-item` class to each product card inside `.em-card-grid` to trigger the wave sequence.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Badge accent & glow color */
    --em-speed: 0.6s;                 /* Animation duration */
}
