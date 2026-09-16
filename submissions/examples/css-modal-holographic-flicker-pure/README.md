# CSS Modal: Holographic Flicker

A sci-fi, JavaScript-free modal utilizing the CSS checkbox hack, featuring aggressive scanlines, cyan neon glows, and erratic CSS opacity flickering to simulate an unstable holographic projection.

## Features
- Pure CSS and HTML implementation. No JavaScript required to open or close the modal.
- **Component Architecture**: 
  - **The Checkbox Hack**: The core functional logic relies on a hidden `<input type="checkbox">` and the general sibling combinator (`~`). When the user clicks the `<label>` button to open the modal, or clicks the backdrop/dismiss buttons to close it, they are actually toggling this hidden checkbox.
  - **Scanline Projection**: A `.scanlines` container sits over the modal background using a tightly packed `repeating-linear-gradient` to simulate the raster lines of a holographic projector. The `background-position` is animated downwards over 8 seconds to give the illusion of scrolling data/light.
  - **Holographic Flicker**: The core aesthetic relies on `@keyframes holographic-flicker`. This is a highly irregular, stepped keyframe animation that rapidly drops opacity (from `1` down to `0.4` and sometimes `0.1`) at very specific percentage intervals to simulate a failing or low-bandwidth projection.
  - **Staggered Instability**: Different elements (the modal card, the recording status, the primary button) have the flicker animation applied with different durations (`2s`, `4s`, `6s`) and directions (`alternate`, `alternate-reverse`). This staggering prevents the flickering from looking uniform and makes the "damage" feel organic and chaotic.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The modal is inherently designed for a dark aesthetic, utilizing a stark black background to ensure the cyan hologram glows appear physically bright.
- Fully accessible semantic structure. The modal is designated with `role="dialog"` and `aria-modal="true"`. The decorative scanlines are hidden from screen readers using `aria-hidden="true"`. Honors the `prefers-reduced-motion` accessibility standard by freezing the scrolling scanlines, disabling all flicker animations, and removing the modal pop-in transition for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the "Project Hologram" button to trigger the checkbox hack and reveal the modal.

## Files
- `demo.html`: The HTML structure defining the checkbox logic, the modal overlay, the scanlines, and the system content.
- `style.css`: The styling, the `:checked` sibling selector logic, the `repeating-linear-gradient` scrolling scanlines, and the highly irregular `holographic-flicker` keyframes.
