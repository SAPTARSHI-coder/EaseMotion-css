# CSS Modal: Bouncing Spring

A playful, JavaScript-free modal utilizing the CSS checkbox hack, featuring a heavily over-tuned `cubic-bezier` timing function to simulate a physical spring entrance.

## Features
- Pure CSS and HTML implementation. No JavaScript required to open or close the modal.
- **Component Architecture**: 
  - **The Checkbox Hack**: The core functional logic relies on a hidden `<input type="checkbox">` and the general sibling combinator (`~`). When the user clicks the `<label>` button to open the modal, or clicks the backdrop/dismiss buttons to close it, they are actually toggling this hidden checkbox.
  - **The Spring Physics**: The elasticity is achieved entirely through a custom CSS transition timing function: `cubic-bezier(0.68, -0.6, 0.32, 1.6)`. 
  - **The Snap Effect**: Because the final value of the bezier curve (`1.6`) exceeds the standard `1.0` (100%), it causes the animated property to overshoot its final destination before snapping back into place. When applied to `transform: scale()`, this means the modal scales up slightly past its target size and then bounces back down, perfectly mimicking a physical spring uncoiling.
  - **Component Consistency**: This same `--bounce-easing` variable is applied to the hover and active states of all the buttons in the UI, ensuring the entire interaction model feels consistently elastic and playful.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The modal fully supports the OS-level system theme (`prefers-color-scheme: dark`), adjusting background colors and text contrast while maintaining the vibrant emerald green accent colors.
- Fully accessible semantic structure. The modal is designated with `role="dialog"` and `aria-modal="true"`. Honors the `prefers-reduced-motion` accessibility standard by completely freezing the bouncy bezier curves and removing the modal pop-in transition for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the "Trigger Spring" button to trigger the checkbox hack and reveal the bouncing modal.

## Files
- `demo.html`: The HTML structure defining the checkbox logic, the modal overlay, and the semantic modal content.
- `style.css`: The styling, the `:checked` sibling selector logic, and the physics-based `cubic-bezier` timing functions.
