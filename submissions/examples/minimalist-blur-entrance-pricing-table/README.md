# CSS Blur-Entrance Pricing Table (Minimalist Tech Layout)

An intermediate, high-performance pricing table component built completely with pure CSS, tailored specifically for minimalist tech landing pages and product showcases. Features a smooth gaussian blur dissolve entrance animation sequence.

## 🚀 Features

- **Zero JavaScript:** Built entirely using pure CSS animations, custom properties, and staggered `animation-delay` rules.
- **Blur-Entrance Dissolve:** Pricing cards initialize with `filter: blur(12px)` and a slight vertical offset, smoothly dissolving into crisp focus (`blur(0px)`, opacity `1`) on page load.
- **SaaS Glassmorphism:** Styled with modern frosted glass cards (`backdrop-filter: blur(16px)`), distinct featured plan highlights, checkmark feature lists, and glowing action buttons.
- **Accessible & Responsive:** Fluidly scales across desktop, tablet, and mobile viewports with an intuitive responsive grid stack. Includes a strict `@media (prefers-reduced-motion: reduce)` override that bypasses entrance blurs and hover translations for sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Apply the `.em-blur-item` class to each pricing card inside `.em-pricing-grid` to trigger the staggered dissolve sequence.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Primary button & badge color */
    --em-speed: 0.8s;                 /* Entrance animation speed */
}
