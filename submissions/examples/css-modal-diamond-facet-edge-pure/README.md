# CSS Modal: Diamond Facet

A sharp, JavaScript-free modal utilizing the CSS checkbox hack. Features `clip-path` polygons to create chamfered edges, mimicking a precision-cut gemstone instead of standard rounded corners.

## Features
- Pure CSS and HTML implementation. No JavaScript required to open or close the modal.
- **Component Architecture**: 
  - **The Checkbox Hack**: The core functional logic relies on a hidden `<input type="checkbox">` and the general sibling combinator (`~`). When the user clicks the `<label>` button to open the modal, or clicks the backdrop/dismiss buttons to close it, they are actually toggling this hidden checkbox.
  - **The Facet Geometry**: The `.facet-shape` class uses `clip-path: polygon(...)` to slice off the four corners of the element, creating an octagon. The depth of the cut is easily controllable via the `--cut-size` CSS variable (set to 24px by default).
  - **The Inner Glow (Fake Border)**: Standard CSS borders and `box-shadow` do not respect `clip-path` contours—they get chopped off. To fix this and create the illusion of a glowing 3D crystal edge, an absolutely positioned `.facet-inner-glow` pseudo-element is placed over the modal. It shares the exact same clip-path polygon (adjusted for a 4px inset) and applies an `inset box-shadow` to create the glowing border.
  - **Drop Shadow Filter**: Because standard `box-shadow` is clipped, we use the CSS `filter: drop-shadow(...)` on the `.modal-card` to cast a realistic shadow based on its custom faceted geometry.
  - **Component Consistency**: The trigger button and the primary modal action buttons share the `.facet-shape` (or `.facet-shape-small`) classes, ensuring the entire interaction model feels geometrically consistent.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The modal fully supports the OS-level system theme (`prefers-color-scheme: dark`), adjusting background colors and text contrast while maintaining the vivid cyan/sky blue crystal accents.
- Fully accessible semantic structure. The modal is designated with `role="dialog"` and `aria-modal="true"`. Honors the `prefers-reduced-motion` accessibility standard by freezing the scale/rotate transitions and instantly displaying the modal for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the "Inspect Gem" button to trigger the checkbox hack and reveal the faceted modal.

## Files
- `demo.html`: The HTML structure defining the checkbox logic, the modal overlay, and the inner-glow pseudo-element.
- `style.css`: The styling, the `:checked` sibling selector logic, the `clip-path` geometry math, and the `filter: drop-shadow()` implementation.
