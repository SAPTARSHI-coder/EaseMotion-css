# CSS Animated Background Lines

An advanced, high-performance diagonal animated background lines component built completely with pure CSS, tailored specifically for AI platforms, futuristic landing pages, and tech aesthetics.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS linear gradients, rotational transforms (`rotate(35deg)`), and smooth keyframe animations.
- **Futuristic AI Aesthetic:** Vertical-to-diagonal gliding light beams creating immersive background depth.
- **SaaS Glassmorphic Card:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), glowing shadows, and clean typography.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the animation via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Button & badge highlight color */
    --em-speed: 8s;                   /* Line glide animation duration */
}
