# CSS Background: Neumorphic Soft Shadow

A smooth, high-performance, and accessible pure CSS background animation featuring dynamic neumorphic soft shadow styling and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes`, dual-layered shadow depth variables, and hardware-accelerated transforms.
- **Neumorphic Soft Shadow Effect:** Extruded soft-shadow elements floating and morphing gracefully across the dark mode viewport background.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #38bdf8;            /* Accent sky blue */
    --em-speed: 0.4s;                 /* Transition speed */
}
