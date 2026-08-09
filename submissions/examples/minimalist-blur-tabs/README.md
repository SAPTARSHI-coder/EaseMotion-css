# CSS Minimalist Blur-Entrance Tabs

A highly refined, purely CSS-driven tabbed interface designed for modern, minimalist tech environments (inspired by developer tools like Vercel and Linear). It features stark monochromatic contrast, clean typography, and a highly polished blur-entrance animation.

## 🚀 Features

- **Zero-JS State Management:** Built using the classic hidden `<input type="radio">` trick combined with CSS general sibling combinators (`~`) for lightweight, robust state routing.
- **Sophisticated Blur-Entrance:** When toggled, the content panels enter with a custom `@keyframes` animation utilizing `filter: blur()`, `opacity`, and a subtle Y-axis translation for a premium, snappy feel.
- **Minimalist Aesthetic:** Styled with high-contrast monochrome tones, thin borders, and an animated underline indicator that transitions smoothly from the origin.
- **Accessible & Responsive:** Fluidly adapts to smaller viewports. Implements `tabindex="0"` on labels with clean `:focus-visible` states for keyboard users, and strictly honors `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage

Implement the HTML structure from `demo.html` and link the styles from `style.css`. 

### CSS Custom Properties
Easily modify the aesthetic and animation behavior by adjusting the variables in the `:root` pseudo-class:

```css
:root {
    --em-bg-app: #000000;             /* Main background */
    --em-border-color: #222222;       /* Subtle panel borders */
    --em-blur-radius: 8px;            /* Intensity of entrance blur */
    --em-transition-duration: 0.5s;   /* Snappy animation timing */
}
