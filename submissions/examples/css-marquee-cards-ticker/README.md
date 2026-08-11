# CSS Marquee Cards Ticker

An advanced, high-performance continuous horizontal marquee component built completely with pure CSS, tailored specifically for testimonials, product showcases, and partner logos.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS keyframe animations (`translateX`), flexbox tracks, and infinite loop duplication.
- **Pause on Hover:** Automatically pauses the ticker animation on mouse hover or focus for improved readability.
- **Fade Masking:** Utilizes CSS `mask-image` gradients for seamless left and right edge fading.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the marquee via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Tag highlight color */
    --em-speed: 30s;                  /* Ticker scroll duration */
}
