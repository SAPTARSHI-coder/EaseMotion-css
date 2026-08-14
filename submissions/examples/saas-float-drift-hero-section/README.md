# CSS Float-Drift Hero Section (SaaS Showcase Layout)

An intermediate, high-performance hero section component built completely with pure CSS, tailored specifically for SaaS products, landing pages, and modern tech showcases. Features a continuous floating and drifting preview card animation.

## 🚀 Features

- **Zero JavaScript:** Built entirely using pure CSS animations, custom properties, and keyframe timelines.
- **Float-Drift Animation:** The preview card utilizes a smooth infinite `@keyframes em-float-drift` loop that gently bobs vertically and tilts with a subtle rotation.
- **SaaS Glassmorphism:** Styled with modern glassmorphic preview cards (`backdrop-filter: blur(20px)`), glowing action buttons, gradient typography, and a built-in interactive code snippet box.
- **Accessible & Responsive:** Fluidly adapts across desktop, tablet, and mobile viewports with flexible wrapping and stacked action buttons on smaller screens. Includes a strict `@media (prefers-reduced-motion: reduce)` override that halts floating animations and hover translations for sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Customize the title, badge text, and preview code blocks to match your product suite.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Primary button & glow color */
    --em-speed: 0.5s;                 /* Button transition speed */
}
