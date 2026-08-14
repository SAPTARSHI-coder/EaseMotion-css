# CSS Modal: Morphing Shape

An organic, JavaScript-free modal utilizing the CSS checkbox hack, featuring continuous background shape manipulation via complex CSS border-radius animations.

## Features
- Pure CSS and HTML implementation. No JavaScript required to open or close the modal.
- **Component Architecture**: 
  - **The Checkbox Hack**: The core functional logic relies on a hidden `<input type="checkbox">` and the general sibling combinator (`~`). When the user clicks the `<label>` button to open the modal, or clicks the backdrop/dismiss buttons to close it, they are actually toggling this hidden checkbox.
  - **The Morphing Mechanism**: The organic movement is achieved entirely without SVGs or JS libraries. Instead, it relies on animating complex, 8-point `border-radius` values using CSS `@keyframes`. For example: `border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%`. By transitioning between asymmetrical shapes, the browser interpolates the curves to simulate a sloshing liquid blob.
  - **Background Integration**: The modal card itself utilizes `backdrop-filter: blur(16px)` to act as frosted glass. The morphing shapes (`.morph-shape`) sit *behind* the card (via `z-index: -1`) and are slightly blurred themselves. Their gradients shine through the frosted glass of the modal.
  - **Component Consistency**: The trigger button and the primary modal action button share the `.morphing-border` class, meaning they also utilize the 8-point `border-radius` animation to stay on theme.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The modal fully supports the OS-level system theme (`prefers-color-scheme: dark`), adjusting background colors and text contrast while maintaining the vivid pink/purple and cyan/blue gradients of the morphing blobs.
- Fully accessible semantic structure. The modal is designated with `role="dialog"` and `aria-modal="true"`. The decorative background shapes are hidden from screen readers using `aria-hidden="true"`. Honors the `prefers-reduced-motion` accessibility standard by freezing the infinite morphing animations and reverting to standard rounded corners (`border-radius: 24px`) for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the "Summon Blob" button to trigger the checkbox hack and reveal the morphing modal.

## Files
- `demo.html`: The HTML structure defining the checkbox logic, the modal overlay, and the morphing background shapes.
- `style.css`: The styling, the `:checked` sibling selector logic, the `backdrop-filter` properties, and the highly specific `border-radius` keyframe animations.
