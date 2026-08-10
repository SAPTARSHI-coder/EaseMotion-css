# CSS 3D-Flip Hero Section (SaaS Showcase Layout)

An intermediate, high-performance hero section component built completely with pure CSS, tailored specifically for SaaS products, landing pages, and modern tech showcases. Features an interactive 3D perspective card flip on hover.

## 🚀 Features

- **Zero JavaScript:** Built entirely using pure CSS transitions, custom properties, and native 3D transforms.
- **3D Perspective Flip:** The preview card utilizes `perspective: 1000px`, `transform-style: preserve-3d`, and `backface-visibility: hidden` to execute a buttery-smooth 180-degree horizontal flip on hover.
- **SaaS Glassmorphism:** Styled with modern frosted glass card faces (`backdrop-filter: blur(20px)`), glowing action buttons, gradient typography, and dual-sided interactive code views.
- **Accessible & Responsive:** Fluidly adapts across desktop, tablet, and mobile viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override that disables 3D rotations and hides alternate card backs for motion-sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Customize the title, badge text, and front/back card content blocks to match your product suite.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Primary button & glow color */
    --em-speed: 0.6s;                 /* Card flip transition speed */
}
