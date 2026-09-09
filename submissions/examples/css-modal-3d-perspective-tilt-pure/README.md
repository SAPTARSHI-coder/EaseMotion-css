# CSS Modal: 3D Perspective Tilt

A dynamic, JavaScript-free modal utilizing the CSS checkbox hack, featuring a 3D perspective wrapper that swings the modal down into view like a hatch.

## Features
- Pure CSS and HTML implementation. No JavaScript required to open or close the modal.
- **Component Architecture**: 
  - **The Checkbox Hack**: The core functional logic relies on a hidden `<input type="checkbox">` and the general sibling combinator (`~`). When the user clicks the `<label>` button to open the modal, or clicks the backdrop/dismiss buttons to close it, they are actually toggling this hidden checkbox.
  - **The 3D Perspective Wrapper**: To achieve a realistic 3D rotation, the modal card is wrapped in a `.perspective-wrapper` parent div that has `perspective: 1000px` applied. This CSS property establishes the depth of the 3D space for its children, making objects appear larger as they rotate toward the viewer and smaller as they rotate away.
  - **The Hatch Hinge**: The modal card (`.modal-card`) is given a `transform-origin: top center`. This acts as the physical hinge.
  - **The Swing Animation**: In its closed state, the modal is rotated backward 90 degrees (`transform: rotateX(-90deg)`), effectively making it invisible as it points straight into the screen. When triggered, the checkbox hack changes the rotation to `rotateX(0deg)`.
  - **Spring Physics**: The entrance utilizes a custom `cubic-bezier(0.34, 1.56, 0.64, 1)` transition timing function. This causes the modal to swing slightly past 0 degrees and bounce back, simulating the heavy weight of a physical hatch dropping into place.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The modal fully supports the OS-level system theme (`prefers-color-scheme: dark`), adjusting background colors and text contrast while preserving the 3D transformation logic.
- Fully accessible semantic structure. The modal is designated with `role="dialog"` and `aria-modal="true"`. Honors the `prefers-reduced-motion` accessibility standard by replacing the 3D swing with a simple, static scale-in animation for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the "Deploy Hatch" button to trigger the checkbox hack and reveal the modal.

## Files
- `demo.html`: The HTML structure defining the checkbox logic, the perspective wrapper, and the swinging modal card.
- `style.css`: The styling, the `:checked` sibling selector logic, the 3D `perspective` and `transform-origin` setups, and the bouncy `cubic-bezier` entrance physics.
