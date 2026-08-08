# CSS Elastic-Slide Pricing Table (SaaS Showcase Layout)

An intermediate, high-performance pricing table component built completely with pure CSS, tailored specifically for SaaS products, landing pages, and modern tech showcases. Features smooth elastic-slide hover mechanics and glassmorphic pricing tiers.

## 🚀 Features

- **Zero JavaScript:** Built entirely using pure CSS transitions, custom properties, and performant transform timelines.
- **Elastic-Slide Hover Motion:** Pricing cards elevate with a spring-like bounce (`cubic-bezier(0.34, 1.56, 0.64, 1)`) on hover, creating an organic, tactile feedback loop.
- **SaaS Glassmorphism:** Styled with modern glassmorphic cards (`backdrop-filter: blur(16px)`), distinct featured plan highlights, checkmark feature lists, and glowing action buttons.
- **Accessible & Responsive:** Fluidly scales across desktop, tablet, and mobile viewports with an intuitive responsive grid stack. Includes a strict `@media (prefers-reduced-motion: reduce)` override that halts hover transformations for sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Customize the tier names, prices, and feature lists to match your product suite.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Primary button & badge color */
    --em-speed: 0.5s;                 /* Card transition speed */
}
