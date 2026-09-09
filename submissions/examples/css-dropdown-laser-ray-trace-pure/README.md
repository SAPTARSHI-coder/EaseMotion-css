# CSS Dropdown: Laser Ray Trace

A hardware-accelerated, JavaScript-free dropdown menu. Features a highly performant `conic-gradient` masking technique to simulate a continuous laser beam tracing the menu's border.

## Features
- Pure CSS and HTML implementation. No JavaScript required for the open/close state logic or the border animation.
- **Component Architecture**: 
  - **The Pure CSS Checkbox Hack**: The open/close state of the dropdown is managed entirely via a hidden `<input type="checkbox">` and the CSS general sibling combinator (`~`). When the user clicks the visible `<label>` trigger, it toggles the hidden checkbox, which in turn applies `opacity: 1` and `visibility: visible` to the adjacent dropdown menu.
  - **The Laser Trace Engine**: Animating a gradient along a rounded border is impossible with standard CSS `border` properties. This component achieves it via background compositing:
    1. The outer `.dropdown-menu-wrapper` container serves as the bounding box, utilizing `overflow: hidden`.
    2. Inside it, a massive `.laser-border-engine` child element is created and given a `conic-gradient` background that sweeps from transparent to a solid neon cyan color. This element is rotated infinitely via `@keyframes`.
    3. The inner `.dropdown-menu-inner` element sits directly on top of the spinning laser. It is inset by exactly `2px` (the desired thickness of the laser) using a `margin: 2px` and `width: calc(100% - 4px)`.
    4. **The Result**: The spinning conic gradient is completely hidden by the inset menu *except* for the outer 2px edge. As the gradient spins behind the menu, it looks exactly like a laser beam perfectly tracing the perimeter of the dropdown.
  - **Performance Optimization**: The `@keyframes spin-laser` animation is set to `animation-play-state: paused` by default. It only runs when the dropdown is actually open, saving valuable CPU/GPU cycles.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). 
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the spinning laser animation is disabled, and the `conic-gradient` is swapped for a solid neon color, presenting a static, glowing border.

## Usage
Open `demo.html` in your browser. Click the "Select Protocol" button to open the dropdown menu and trigger the continuous laser trace border animation.

## Files
- `demo.html`: The HTML structure defining the hidden checkbox toggle logic, the spinning gradient engine, and the inset masking menu.
- `style.css`: The styling, the `conic-gradient` definitions, the `inset` masking geometry, and the `animation-play-state` performance optimizations.
