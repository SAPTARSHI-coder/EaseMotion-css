# CSS Elastic-Slide Hero Section (SaaS Showcase Layout)

An intermediate, high-performance hero section component built completely with pure CSS, tailored specifically for SaaS products, landing pages, and modern tech showcases. Features a staggered elastic slide-up entrance animation sequence.

## 🚀 Features

- **Zero JavaScript:** Built entirely using pure CSS animations, custom properties, and `animation-delay` orchestration.
- **Elastic-Slide Animation:** The hero content items utilize a custom `@keyframes em-elastic-slide-up` paired with an organic `cubic-bezier(0.34, 1.56, 0.64, 1)` timing function, creating a snappy, spring-like load sequence.
- **SaaS Glassmorphism:** Styled with modern frosted glass preview cards (`backdrop-filter: blur(20px)`), multi-stop linear gradient typography, and elegant glowing action buttons.
- **Accessible & Responsive:** Fluidly adapts across desktop, tablet, and mobile viewports with flexible wrapping and stacked action buttons on smaller screens. Includes a strict `@media (prefers-reduced-motion: reduce)` override that halts load animations and hover translations for sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Customize the title, badge text, and preview code blocks to match your product suite.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Primary button & glow color */
    --em-speed: 0.8s;                 /* Entrance animation speed */
}
