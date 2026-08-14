# CSS Modal: Floating Elevation

A serene, JavaScript-free modal utilizing the CSS checkbox hack. Features infinite `@keyframes` to create a gentle hovering effect, perfectly simulating physical detachment from the background via dynamic drop shadows.

## Features
- Pure CSS and HTML implementation. No JavaScript required to open or close the modal.
- **Component Architecture**: 
  - **The Checkbox Hack**: The core functional logic relies on a hidden `<input type="checkbox">` and the general sibling combinator (`~`). When the user clicks the `<label>` button to open the modal, or clicks the backdrop/dismiss buttons to close it, they are actually toggling this hidden checkbox.
  - **The Hover Animation**: The `.float-animation` class applies an infinite, alternating CSS animation (`@keyframes hover-float`). 
  - **Dynamic Shadows (The Physics Engine)**: True elevation in UI design requires accurate shadows. In the `hover-float` keyframes, as the modal translates upwards on the Y-axis (`translateY(-12px)`), the `box-shadow` simultaneously expands in blur radius and decreases in opacity (`var(--shadow-color-loose)`). As it translates downwards, the shadow tightens and darkens (`var(--shadow-color-tight)`). This mirrors how a physical light source casts a shadow.
  - **Component Consistency**: The trigger button shares the `.float-animation` class, ensuring the hovering physics remain conceptually consistent across the interface.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The modal fully supports the OS-level system theme (`prefers-color-scheme: dark`). *Note: Shadows in dark mode require significantly darker color values (closer to pure black) and higher opacities to remain visible against dark slates/grays. The custom properties handle this calculation automatically.*
- Fully accessible semantic structure. The modal is designated with `role="dialog"` and `aria-modal="true"`. Honors the `prefers-reduced-motion` accessibility standard by freezing the infinite float animation, translating the card to `0px`, and locking in a static, soft drop shadow for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the "Levitate Modal" button to trigger the checkbox hack and reveal the floating modal.

## Files
- `demo.html`: The HTML structure defining the checkbox logic, the modal overlay, and the floating elements.
- `style.css`: The styling, the `:checked` sibling selector logic, and the physics-based `hover-float` keyframes.
