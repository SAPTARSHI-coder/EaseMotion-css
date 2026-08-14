# CSS Blur-Entrance Badge (Product Catalog Layout)

An intermediate, high-performance product card component built completely with pure CSS, tailored specifically for e-commerce and product catalog showcases. Features a smooth gaussian blur dissolve entrance animation on load.

## 🚀 Features

- **Zero JavaScript:** Built entirely using pure CSS animations, custom properties, and keyframe timelines.
- **Blur-Entrance Dissolve:** The product badge initializes with `filter: blur(12px)`, low opacity, and a slight vertical offset, smoothly dissolving into crisp focus (`blur(0px)`, opacity `1`) on page load.
- **SaaS Glassmorphism:** Styled with modern frosted glass cards (`backdrop-filter: blur(16px)`), glowing accents, and refined typographic hierarchy.
- **Accessible & Responsive:** Fully keyboard navigable via `focus-visible`. Includes a strict `@media (prefers-reduced-motion: reduce)` override that strips out the entrance blur and sets the badge to full visibility immediately for motion-sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Apply the `.em-product-card` class to your catalog items and nest `.em-blur-badge` inside the image container.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Badge background & glow color */
    --em-speed: 0.8s;                 /* Entrance animation speed */
}
