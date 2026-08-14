# CSS Modal: Origami Paper Fold

A tactile, JavaScript-free modal utilizing the CSS checkbox hack. Features 3D CSS transforms and perspective rotations to simulate a piece of paper dropping down and unfolding towards the viewer.

## Features
- Pure CSS and HTML implementation. No JavaScript required to open or close the modal.
- **Component Architecture**: 
  - **The Checkbox Hack**: The core functional logic relies on a hidden `<input type="checkbox">` and the general sibling combinator (`~`). When the user clicks the `<label>` button to open the modal, or clicks the backdrop/dismiss buttons to close it, they are actually toggling this hidden checkbox.
  - **3D Transform Context**: The `.modal-perspective-wrapper` provides the 3D space for the animation by applying `perspective: 1200px`. Without this, the `rotateX` animation would look entirely flat.
  - **The Unfold Physics**: The `.modal-card` utilizes `transform-origin: 50% 0%` (setting the rotation pivot point to the top edge). The initial closed state is set to `rotateX(-90deg)`, swinging it up towards the ceiling so it is invisible edge-on. When the checkbox is toggled, it animates back to `rotateX(0deg)`, simulating a flap of paper dropping down.
  - **Dynamic Shadows**: To enhance the 3D illusion, the `box-shadow` is heavily pronounced when the modal is folded up, and softly disperses as it unfolds flat, mimicking physical depth changes relative to a light source.
  - **The Crease**: A subtle, absolutely positioned `.paper-crease` div with a slight highlight runs across the center of the modal, visually reinforcing the concept that this "paper" was previously folded.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The modal fully supports the OS-level system theme (`prefers-color-scheme: dark`), adjusting background colors and text contrast while maintaining the organic rust/terracotta accent colors and the paper-like off-white/slate backgrounds.
- Fully accessible semantic structure. The modal is designated with `role="dialog"` and `aria-modal="true"`. Honors the `prefers-reduced-motion` accessibility standard by freezing the 3D rotation transition and instantly displaying the flat modal for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the "Unfold Message" button to trigger the checkbox hack and reveal the origami modal.

## Files
- `demo.html`: The HTML structure defining the checkbox logic, the modal overlay, the perspective wrapper, and the crease pseudo-element.
- `style.css`: The styling, the `:checked` sibling selector logic, the `transform-origin` geometry, and the `rotateX` animations.
