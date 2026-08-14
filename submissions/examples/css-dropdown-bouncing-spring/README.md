# CSS Dropdown: Bouncing Spring

A smooth, high-performance, and accessible pure CSS dropdown menu component featuring organic spring physics easing and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS pseudo-classes (`:hover`, `:focus-within`), cubic-bezier spring easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`), and hardware-accelerated transforms.
- **Bouncing Spring Dropdown Effect:** Smooth bouncy scaling and translation transitions upon opening/closing.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #10b981;            /* Accent emerald green and trigger color */
    --em-speed: 0.5s;                 /* Transition speed */
}
