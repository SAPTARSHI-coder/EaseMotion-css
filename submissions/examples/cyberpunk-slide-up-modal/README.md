# CSS Slide-Up Modal (Cyberpunk Layout)

An advanced, pure CSS modal component tailored for Cyberpunk and futuristic UI themes. It features a sleek slide-up entrance animation from the bottom of the viewport, complete with neon accents, geometric cut-paths, and an animated scanline.

## 🚀 Features

- **Zero JavaScript:** Built using the CSS hidden-checkbox hack (`input type="checkbox"`) to robustly handle the open/close state logic of the modal natively in CSS.
- **Smooth Slide-Up Animation:** Utilizes `transform: translateY(100%)` to `translateY(0)` coupled with a fluid `cubic-bezier(0.16, 1, 0.3, 1)` easing curve for a modern, snappy slide-in effect from the bottom edge.
- **Cyberpunk Geometry & Glow:** Uses `clip-path: polygon()` to apply signature chamfered edges to the modal housing and action buttons. Leverages layered `text-shadow` and `box-shadow` for authentic neon glows.
- **Immersive Details:** Includes an animated CSS `.cp-scanline` that sweeps across the modal body and pulsing text elements to simulate an active terminal interface.
- **Accessible & Responsive:** Contains `tabindex="0"` for full keyboard navigation, mobile layout reflowing (stacking buttons), and strict `@media (prefers-reduced-motion: reduce)` support to instantly disable slide transitions and infinite animations for sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. The modal is activated via the `.cp-trigger` label and can be dismissed by clicking the background overlay, the exit icon, or the abort button.

### CSS Custom Properties
Configure the neon colors and animation speed in `:root`:

```css
:root {
    --cp-cyan: #0ff;          /* Primary UI highlight */
    --cp-magenta: #f0f;       /* Accent & border color */
    --cp-speed: 0.5s;         /* Modal slide entrance speed */
}
