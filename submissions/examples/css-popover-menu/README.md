# CSS CSS-Only Popover Menu

An advanced, high-performance popover menu component built utilizing the native HTML `popover` attribute and styled entirely with modern CSS features.

## 🚀 Features

- **Zero JavaScript Required:** Leverages native HTML Popover API (`popover`, `popovertarget`, `popovertargetaction`) without custom JS handlers.
- **Smooth Entry/Exit Animations:** Implements `@starting-style` and discrete property transitions (`allow-discrete`) for fluid popover opening and closing animations.
- **Backdrop Blur Integration:** Styled with custom `::backdrop` blur overlays and glassmorphic card aesthetics.
- **Accessible & Responsive:** Fully responsive across all viewports with keyboard focus states and native top-layer rendering. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Primary button and highlight color */
    --em-speed: 0.3s;                 /* Popover transition speed */
}
