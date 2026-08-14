# CSS Fade-Out Tabs (Product Catalog)

A sleek, pure CSS tabbed component engineered specifically for e-commerce and product catalog layouts. It utilizes a refined fade and slight blur transition to elegantly reveal product grids without jarring structural shifts.

## 🚀 Features

- **Zero JavaScript:** Built entirely using HTML state management via hidden radio inputs, ensuring lightning-fast load times critical for e-commerce conversions.
- **E-Commerce Aesthetics:** Features a highly minimalist, monochromatic design that lets product photography stand out. Includes a responsive CSS Grid layout for `.product-card` items and clean "Add to Cart" ghost buttons.
- **Fade Transition:** Employs a custom `@keyframes` sequence (`em-fade-transition`) that combines opacity fading with a subtle CSS blur filter for a premium, high-end reveal effect.
- **Accessible & Responsive:** Adapts to mobile devices by stacking tab headers and switching the product grid to a single column. Fully keyboard navigable via `tabindex="0"` and completely respects `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage

Copy the HTML from `demo.html` and link the styles from `style.css`. The structure accommodates standard product catalog elements like images, titles, prices, and CTA buttons.

### CSS Custom Properties
Adjust the primary branding and animation timing via the `:root` pseudo-class:

```css
:root {
    --em-cat-accent: #000000;         /* Main brand color */
    --em-fade-duration: 0.5s;         /* Speed of the fade transition */
    --em-fade-easing: cubic-bezier(0.4, 0, 0.2, 1); /* Animation easing */
}
