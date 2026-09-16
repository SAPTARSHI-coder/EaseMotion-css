# CSS Checkbox Ripple Check

A meticulously crafted, JavaScript-free custom checkbox featuring a material-design-inspired ripple burst and an SVG "draw" animation upon selection.

## Features
- Pure CSS and HTML implementation. No JavaScript event listeners are required to track state or trigger animations.
- **Component Architecture & Animation Techniques**: 
  - **Native State Binding**: The component uses a hidden `<input type="checkbox">` wrapped inside a `<label>`. This allows clicking anywhere on the label to natively toggle the input's `:checked` state, which we use to drive all CSS animations.
  - **The Ripple Effect**: An absolutely positioned `.ripple` element sits behind the visual checkbox box. When the input is checked (`input:checked ~ .checkmark-box .ripple`), an `@keyframes` animation (`ripple-burst`) scales the element from `0` to `2.5` while simultaneously fading its `opacity` to `0`. This creates a satisfying, organic burst of color radiating outward.
  - **SVG Draw Animation**: The checkmark itself is an inline SVG. By manipulating `stroke-dasharray` (creating dashes) and `stroke-dashoffset` (pushing the dash off-screen), the SVG is initially hidden. On check, the `draw-check` animation brings the `stroke-dashoffset` to `0`, creating the illusion that the checkmark is being hand-drawn onto the screen.
- **Theming & States**: 
  - Configured via CSS Custom Properties at the `:root` level. 
  - Includes full styling for `hover`, `focus-visible` (for keyboard accessibility), and `disabled` states.
  - Fully supports automatic OS-level Dark Mode via `@media (prefers-color-scheme: dark)`.
- Fully accessible semantic structure. Because it relies on a real `<input type="checkbox">`, it natively supports Spacebar toggling and form submission. Honors the `prefers-reduced-motion` accessibility standard by disabling the ripple completely and instantly revealing the checkmark without the draw animation if requested by the OS.

## Usage
Open `demo.html` in your browser. Click the labels to observe the blue ripple burst from behind the checkbox, followed milliseconds later by the white checkmark drawing itself into existence. Try using the `Tab` key to focus the checkbox and press `Space` to toggle it, observing the accessible focus ring.

## Files
- `demo.html`: The HTML structure defining the `<label>`, the hidden input, and the inline SVG checkmark.
- `style.css`: The styling, the `:checked` state management, the `@keyframes` for the ripple, and the `stroke-dashoffset` trick for drawing the SVG.
