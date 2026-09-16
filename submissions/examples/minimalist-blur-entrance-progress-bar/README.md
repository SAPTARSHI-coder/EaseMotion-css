# CSS Blur-Entrance Progress Bar (Minimalist Tech Layout)

An advanced, high-performance progress bar component built completely with pure CSS, tailored for Minimalist Tech and modern SaaS interfaces. Features a smooth gaussian blur dissolve entrance and precise bar expansion animations.

## 🚀 Features

- **Zero JavaScript:** Built entirely using pure CSS animations, custom properties, and keyframe timelines.
- **Blur-Entrance Effect:** The component container initializes with `filter: blur(12px)` and low opacity, smoothly transitioning into sharp focus (`blur(0px)`) upon load using a sophisticated spring-like easing curve.
- **Minimalist Aesthetics:** Employs subtle glassmorphism (`backdrop-filter: blur(16px)`), tabular numerals, and refined typographic hierarchy optimized for modern tech layouts.
- **Accessible & Responsive:** Fluidly scales across all device viewports. Includes a comprehensive `@media (prefers-reduced-motion: reduce)` block that strips out entrance blurs, translations, and scale animations instantly for users with vestibular sensitivities.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Adjust the width percentage on `.mt-progress-fill` to represent your target completion value.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --mt-accent: #3b82f6;            /* Progress fill color */
    --mt-speed: 1.2s;                 /* Entrance blur duration */
}
