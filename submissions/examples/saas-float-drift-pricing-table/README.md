# CSS Float-Drift Pricing Table (SaaS Showcase Layout)

An intermediate, high-performance pricing table component built completely with pure CSS, tailored specifically for SaaS products, landing pages, and modern tech showcases. Features a continuous floating and drifting animation on the featured plan card.

## 🚀 Features

- **Zero JavaScript:** Built entirely using pure CSS animations, custom properties, and keyframe timelines.
- **Float-Drift Animation:** The featured tier card utilizes a smooth infinite `@keyframes em-float-drift` loop that gently bobs vertically and tilts with a subtle rotation.
- **SaaS Glassmorphism:** Styled with modern glassmorphic cards (`backdrop-filter: blur(16px)`), distinct featured plan highlights, checkmark feature lists, and glowing action buttons.
- **Accessible & Responsive:** Fluidly scales across desktop, tablet, and mobile viewports with an intuitive responsive grid stack. Includes a strict `@media (prefers-reduced-motion: reduce)` override that halts floating animations and hover translations for sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Customize the tier names, prices, and feature lists to match your product suite.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Primary button & badge color */
    --em-speed: 0.4s;                 /* Card transition speed */
}
