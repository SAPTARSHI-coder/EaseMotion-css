# CSS Testimonial Carousel

An advanced, high-performance testimonial quote carousel component built completely with pure CSS, tailored specifically for product landing pages, customer reviews, and modern web applications.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS radio inputs, sibling selectors (`#slide-x:checked ~ .em-carousel-card .em-carousel-track`), and smooth translation keyframes.
- **Interactive & Accessible Pagination:** Custom pagination dot indicators that respond to click and keyboard focus events.
- **SaaS Glassmorphic Card:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), glowing shadows, and custom avatar gradients.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Active pagination dot accent color */
    --em-speed: 0.6s;                 /* Slide transition speed */
}
