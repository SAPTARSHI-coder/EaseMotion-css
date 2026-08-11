# CSS Starfield Background

An advanced, high-performance twinkling starfield background component built completely with pure CSS, tailored specifically for dark themes, space-themed sites, and modern landing pages.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native multi-layered CSS box-shadows and smooth keyframe opacity/scale pulse animations.
- **Multi-Layered Depth:** Features small, medium, and large glowing star tiers moving at staggered animation speeds to create realistic cosmic depth.
- **SaaS Glassmorphic Card:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), glowing shadows, and clean typography.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the animation via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Button highlight accent color */
    --em-speed: 4s;                   /* Star twinkling cycle duration */
}
