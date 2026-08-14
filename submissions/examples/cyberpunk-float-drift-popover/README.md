# CSS Float-Drift Popover (Cyberpunk Layout)

An advanced, highly-interactive popover component designed for Cyberpunk and futuristic HUD interfaces. It combines a snappy entrance transition with a continuous, fluid drifting animation while active.

## 🚀 Features

- **Zero JavaScript:** Utilizes the CSS hidden-checkbox hack (`input type="checkbox"`) linked to a stylized label, allowing the popover to toggle and maintain state purely via CSS.
- **Dual-Animation Architecture:** Employs a nested wrapper system. The outer `.cp-popover-wrapper` handles the entrance transition (sliding up and fading in), while the inner `.cp-popover-floater` executes a continuous `@keyframes cp-drift` animation, creating a floating holographic effect without animation conflicts.
- **Cyberpunk Aesthetics:** Extensively uses `clip-path: polygon()` for chamfered corners on both the trigger button and the popover body. Incorporates neon color palettes, CSS grid background generation, and an active decorative CSS barcode.
- **Advanced State Selectors:** The drifting animation is paused by default (`animation-play-state: paused`) and only begins running when the hidden toggle is `:checked`, saving rendering resources when the popover is hidden.
- **Accessible & Responsive:** Features `tabindex="0"` for keyboard navigation with distinct `:focus-visible` outlines. Includes a mobile media query that converts the popover to a fixed-bottom sheet on small viewports. Fully respects `@media (prefers-reduced-motion: reduce)` by disabling the continuous drift and snapping entrance transitions to simple fades.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Click the "Inspect Node" button to toggle the popover on and off. 

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --cp-neon-cyan: #00f3ff;          /* Primary highlight */
    --cp-neon-magenta: #ff00ea;       /* Secondary highlight */
    --cp-anim-speed: 0.4s;            /* Entrance transition duration */
    --cp-drift-speed: 6s;             /* Speed of the continuous float */
}
