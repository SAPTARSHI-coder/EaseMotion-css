# CSS Modal: Pulsating Wave

A dynamic, JavaScript-free modal utilizing the CSS checkbox hack, featuring infinite, concentric CSS scale animations to simulate radiating energy waves.

## Features
- Pure CSS and HTML implementation. No JavaScript required to open or close the modal.
- **Component Architecture**: 
  - **The Checkbox Hack**: The core functional logic relies on a hidden `<input type="checkbox">` and the general sibling combinator (`~`). When the user clicks the `<label>` button to open the modal, or clicks the backdrop/dismiss buttons to close it, they are actually toggling this hidden checkbox.
  - **Wave Container**: The modal card is wrapped in a `.wave-container`. This container acts as the anchor for the waves. It also handles the smooth scale-up entrance animation (`transform: scale(0.9)` to `scale(1)`).
  - **Concentric Emitters**: Behind the modal card sit three `.wave` divs. They use `position: absolute` and inherit the exact border radius of the main modal card so they perfectly trace its outline.
  - **The Pulsating Animation**: The `@keyframes wave-expand` animation scales these waves outwards (`transform: scale(1.2)`) while simultaneously fading their opacity to `0` and thinning their `border-width`. This perfectly simulates dissipating energy or sound waves.
  - **Staggered Delays**: The three waves share the same 3-second animation but are staggered with `animation-delay` values (0s, 1s, 2s) to create an infinite, continuous ripple effect.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The component fully supports the OS-level system theme (`prefers-color-scheme: dark`), adjusting background colors, text contrast, and the violet wave colors for optimal visibility in low light.
- Fully accessible semantic structure. The modal is designated with `role="dialog"` and `aria-modal="true"`. The decorative waves are hidden from screen readers using `aria-hidden="true"`. Honors the `prefers-reduced-motion` accessibility standard by completely disabling the infinite pulse animations and removing the modal pop-in transition for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the "Emit Signal" button to trigger the checkbox hack and reveal the modal.

## Files
- `demo.html`: The HTML structure defining the checkbox logic, the modal overlay, and the three wave layers.
- `style.css`: The styling, the `:checked` sibling selector logic, the layered z-indexes, and the scaling `wave-expand` keyframes.
