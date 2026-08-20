# CSS Ripple-Wave Modal (Minimalist Tech Layout)

An intermediate, high-performance modal component built completely with pure CSS, tailored specifically for minimalist tech showcases and landing pages. Features a smooth CSS target state trigger and an expanding ripple-wave opening animation.

## 🚀 Features

- **Zero JavaScript:** Built entirely using pure CSS target pseudo-classes (`:target`), custom properties, and keyframe animations.
- **Ripple-Wave Expansion:** Opening the modal triggers an atmospheric `@keyframes em-ripple-wave` expanding radial gradient animation from the center of the dialog.
- **SaaS Glassmorphism:** Styled with modern frosted glass layers (`backdrop-filter: blur(20px)`), subtle borders, and glowing container drop-shadows.
- **Accessible & Responsive:** Fully responsive across all device viewports with centered flex layouts. Includes a strict `@media (prefers-reduced-motion: reduce)` override that neutralizes scaling and ripple animations for motion-sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Trigger the modal using an anchor link targeting `#open-modal` and close it using `#` or a close button.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Primary action & wave color */
    --em-speed: 0.5s;                 /* Modal transition speed */
}
