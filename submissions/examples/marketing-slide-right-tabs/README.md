# CSS Slide-Right Tabs (Marketing Landing Page)

A vibrant, high-conversion pure CSS tabbed component explicitly tailored for modern Marketing Landing Pages. It utilizes a bold aesthetic, gradient typography, and a dynamic slide-right feature reveal animation.

## 🚀 Features

- **Zero JavaScript:** Built entirely using HTML state management via hidden radio inputs, ensuring lightning-fast load times critical for marketing pages.
- **Marketing Aesthetics:** Features a bold gradient heading, pill-shaped CTA buttons with hover lift effects, and deep, soft drop-shadows to emphasize the interactive panels.
- **Slide-Right Transition:** Employs a custom `@keyframes` sequence that smoothly translates content from a wide `-50px` offset to create an impactful reveal effect.
- **Responsive & Accessible:** Content automatically centers on mobile, tabs stack vertically for massive touch targets, and full keyboard/reduced-motion accessibility is natively integrated.

## 🛠️ Usage

Copy the HTML from `demo.html` and link the styles from `style.css`. The structure accommodates high-impact copywriting and bold call-to-action buttons inside `.marketing-content`.

### CSS Custom Properties
Configure brand colors and animation specs in the `:root` block to match your product:

```css
:root {
    --em-brand-primary: #ff5e3a;   /* Main gradient brand color */
    --em-brand-secondary: #ff2a5f; /* Secondary gradient brand color */
    --em-slide-offset: -50px;      /* Reveal distance */
}
