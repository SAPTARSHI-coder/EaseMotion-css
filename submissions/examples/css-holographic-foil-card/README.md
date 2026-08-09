# CSS Holographic Foil Card

An advanced, high-performance card component built completely with pure CSS, tailored specifically for collectible items, digital cards, and modern UI showcases. Features an animated rainbow holographic foil shimmer effect.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS multi-stop linear gradients, blend modes (`mix-blend-mode: color-dodge`), and smooth keyframe animations.
- **Iridescent Shimmer:** Shifting rainbow spectrum layer simulating authentic foil trading cards.
- **SaaS Glassmorphism:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), subtle borders, and glowing purple accents.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the card via `:root` variables:

```css
:root {
    --em-accent: #a855f7;            /* Badge highlight color */
    --em-speed: 6s;                   /* Foil animation cycle speed */
}
