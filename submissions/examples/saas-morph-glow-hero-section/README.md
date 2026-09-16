# CSS Morph-Glow Hero Section (SaaS Showcase Layout)

An advanced, high-performance hero section component built completely with pure CSS, tailored specifically for SaaS products, landing pages, and modern tech showcases. Features an animated morphing background glow orb and glassmorphic preview cards.

## 🚀 Features

- **Zero JavaScript:** Built entirely using pure CSS animations, custom properties, and keyframe timelines.
- **Morphing Glow Orb:** A dynamic background ambient light element utilizing keyframe animations (`@keyframes em-orb-morph`) to smoothly morph its shape and scale, creating a high-end organic glow effect.
- **SaaS Glassmorphic Aesthetics:** Styled with modern glassmorphic cards (`backdrop-filter: blur(20px)`), glowing action buttons, gradient typography, and a built-in interactive code preview frame.
- **Accessible & Responsive:** Fluidly adapts across desktop, tablet, and mobile viewports with flexible wrapping and stacked action buttons on smaller screens. Includes a strict `@media (prefers-reduced-motion: reduce)` override that halts background glow morphing and hover translations for sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Customize the title, badge text, and preview code blocks to match your product suite.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Primary button & glow color */
    --em-secondary-glow: #ec4899;     /* Secondary gradient hue */
}
