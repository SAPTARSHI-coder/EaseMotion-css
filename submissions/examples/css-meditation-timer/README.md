# CSS Meditation Timer

An advanced, high-performance guided breathing and meditation timer featuring a smooth expanding and contracting circular animation ring, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes` animations, scaling transformations, and glowing box-shadows.
- **Calming Breathing Rhythm:** Continuous 6-second expansion and contraction cycle designed for relaxation and focus exercises.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA timer roles and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #38bdf8;            /* Accent sky blue and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
