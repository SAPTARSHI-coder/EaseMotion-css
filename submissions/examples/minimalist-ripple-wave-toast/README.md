# CSS Ripple-Wave Toast (Minimalist Tech Layout)

An intermediate, high-performance toast notification component built completely with pure CSS, tailored specifically for minimalist tech showcases and landing pages. Features a smooth, continuous expanding ripple-wave animation.

## 🚀 Features

- **Zero JavaScript:** Built entirely using pure CSS keyframe animations and custom properties.
- **Ripple-Wave Effect:** The toast notification features a custom `@keyframes em-ripple-wave` animation that periodically emits an expanding radial wave from the icon container.
- **SaaS Glassmorphism:** Styled with modern frosted glass layers (`backdrop-filter: blur(20px)`), subtle borders, live indicator dots, and glowing container drop-shadows.
- **Accessible & Responsive:** Fully responsive across all device viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override that halts ripple animations for motion-sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Customize the title, description, and status indicator to match your application logs.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Primary icon & wave color */
    --em-speed: 0.6s;                 /* Transition speed */
}
