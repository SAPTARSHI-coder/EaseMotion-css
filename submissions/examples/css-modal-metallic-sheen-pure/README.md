# CSS Modal: Metallic Sheen

A premium, industrial-styled, JavaScript-free modal utilizing the CSS checkbox hack. Features an animated linear gradient and background positioning to simulate light reflecting off a polished metallic surface.

## Features
- Pure CSS and HTML implementation. No JavaScript required to open or close the modal.
- **Component Architecture**: 
  - **The Checkbox Hack**: The core functional logic relies on a hidden `<input type="checkbox">` and the general sibling combinator (`~`). When the user clicks the `<label>` button to open the modal, or clicks the backdrop/dismiss buttons to close it, they are actually toggling this hidden checkbox.
  - **The Metallic Surface**: The `.metallic-surface` class applies a complex, multi-stop `linear-gradient` representing brushed metal (alternating dark, base, and bright highlight colors). 
  - **The GPU-Accelerated Sheen**: Real metal shines when light travels across it. To simulate this without expensive 3D rendering, the `linear-gradient` is assigned a `background-size: 200% auto`. This makes the gradient twice as wide as the element. The `.sheen-animation` class then uses an infinite `@keyframes` animation to shift the `background-position` from `0%` to `100%`, dragging the bright highlight stops across the UI to create a performant reflection.
  - **The Bezel Design**: To make the modal look machined, the `.modal-card` applies the metallic surface, but the inner `.modal-content` has a solid, dark background color and a `margin: 4px`. This exposes a 4px rim of the metallic parent, creating a polished metal bezel.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The modal fully supports the OS-level system theme (`prefers-color-scheme: light/dark`). The gradient stops automatically shift lighter or darker depending on the active theme to maintain realistic metal contrast.
- Fully accessible semantic structure. The modal is designated with `role="dialog"` and `aria-modal="true"`. Honors the `prefers-reduced-motion` accessibility standard by completely disabling the background-position sheen animation and the 3D hatch rotation entrance for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Notice the light traveling across the "Unlock Vault" button. Click it to trigger the checkbox hack and reveal the metallic modal.

## Files
- `demo.html`: The HTML structure defining the checkbox logic, the modal overlay, and the semantic modal content.
- `style.css`: The styling, the `:checked` sibling selector logic, the multi-stop linear gradients, and the `background-position` animation keyframes.
