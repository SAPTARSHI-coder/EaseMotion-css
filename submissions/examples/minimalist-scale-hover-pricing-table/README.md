# CSS Scale-Hover Pricing Table (Minimalist Tech Layout)

An easy, high-performance pricing table component built completely with pure CSS, tailored specifically for minimalist tech landing pages and product showcases. Features smooth card scaling and elevation on hover and keyboard focus.

## 🚀 Features

- **Zero JavaScript:** Built entirely using pure CSS transitions, custom properties, and native hover/focus states (`:hover`, `:focus-visible`).
- **Scale-Hover Interaction:** Pricing cards dynamically lift and scale up (`transform: translateY(-8px) scale(1.02)`), accompanied by glowing drop-shadows and subtle border highlights.
- **SaaS Glassmorphism:** Styled with modern frosted glass cards (`backdrop-filter: blur(16px)`), distinct featured plan highlights, checkmark feature lists, and glowing action buttons.
- **Accessible & Responsive:** Fully keyboard navigable via `focus-visible` with an intuitive responsive grid stack. Includes a strict `@media (prefers-reduced-motion: reduce)` override that neutralizes scale and lift transforms for sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Apply the `.em-pricing-card` class to your pricing cards inside `.em-pricing-grid`.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Primary button & badge color */
    --em-speed: 0.35s;                /* Scale transition speed */
}
