# CSS Slide-Up Badge (Product Catalog Layout)

An intermediate, high-performance product card component built completely with pure CSS, tailored specifically for e-commerce and product catalog showcases. Features a smooth slide-up badge entrance on card hover.

## 🚀 Features

- **Zero JavaScript:** Built entirely using pure CSS hover states (`:hover`, `:focus-visible`) and transition timing curves.
- **Slide-Up Badge Motion:** The product badge hides below the image wrapper (`transform: translateY(40px)`, `opacity: 0`) and smoothly slides up into full view (`translateY(0)`, `opacity: 1`) when the user hovers or focuses on the card.
- **SaaS Glassmorphism:** Styled with modern frosted glass cards (`backdrop-filter: blur(16px)`), glowing accents, and refined typographic hierarchy.
- **Accessible & Responsive:** Fully keyboard navigable via `focus-visible`. Includes a strict `@media (prefers-reduced-motion: reduce)` override that sets the badge to full visibility immediately without sliding animations for sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Apply the `.em-product-card` class to your catalog items and nest `.em-slide-up-badge` inside the image container.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Badge background & glow color */
    --em-speed: 0.4s;                 /* Slide transition speed */
}
