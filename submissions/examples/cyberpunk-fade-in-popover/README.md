# CSS Fade-In Popover (Cyberpunk Layout)

An advanced, high-performance popover component built completely with pure CSS, tailored specifically for Cyberpunk and futuristic HUD interfaces. It provides a sleek fade-in and vertical slide-up reveal sequence.

## 🚀 Features

- **Zero JavaScript:** Employs the CSS hidden-checkbox hack (`input type="checkbox"`) linked to a stylized button label to manage open/close toggle logic entirely natively.
- **Fade & Shift Transition:** Combines smooth `opacity` changes with a subtle `translateY` offset transition, creating a crisp, lightweight fade-in entrance when toggled.
- **Cyberpunk Aesthetics:** Avoids traditional rounded corners in favor of `clip-path: polygon()` to forge chamfered UI geometry. Incorporates neon borders, a glowing status indicator dot, and diagnostic stat rows.
- **Accessible & Responsive:** Includes `tabindex="0"` on the trigger label for full keyboard navigation and `:focus-visible` styling. Automatically resizes for narrow mobile viewports and includes a strict `@media (prefers-reduced-motion: reduce)` block to strip out the translation shift and flashing keyframes.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Click the "ACCESS TELEMETRY" button to reveal or hide the diagnostic popover box.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --cp-neon-green: #0ff0fc;         /* Primary neon highlight */
    --cp-neon-purple: #b000ff;      /* Secondary accent color */
    --cp-anim-speed: 0.3s;            /* Popover fade transition speed */
}
