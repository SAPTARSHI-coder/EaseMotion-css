# CSS Modal: Liquid Wave Fill

An organic, JavaScript-free modal utilizing the CSS checkbox hack. Features rotating CSS "squircles" masked by `overflow: hidden` to simulate a rising liquid wave inside the modal card.

## Features
- Pure CSS and HTML implementation. No JavaScript required to open or close the modal.
- **Component Architecture**: 
  - **The Checkbox Hack**: The core functional logic relies on a hidden `<input type="checkbox">` and the general sibling combinator (`~`). When the user clicks the `<label>` button to open the modal, or clicks the backdrop/dismiss buttons to close it, they are actually toggling this hidden checkbox.
  - **The Liquid Effect (Rotating Squircles)**: The illusion of sloshing liquid is achieved without complex SVGs. Instead, two very large `div` elements (`.liquid-wave`) are positioned inside a `.liquid-bg` container. These divs are given `border-radius: 40%` (making them rounded squares, or "squircles") and are set to endlessly rotate via CSS `@keyframes`.
  - **The Masking**: The main `.modal-card` has `overflow: hidden`. Because the rotating squircles are massive (`800px` by `800px`), you only see their top edges moving inside the card, which perfectly mimics a rolling wave.
  - **The Fill Animation**: When the modal is closed, the waves are translated far below the card (`top: 150%`). When the checkbox is toggled to open the modal, the waves transition their `top` property upwards (`top: 35%`), filling the modal with "liquid".
  - **Button Hover Effect**: The trigger button utilizes the exact same rotating squircle technique on hover to fill the button with liquid, hinting at the modal's internal behavior.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The modal fully supports the OS-level system theme (`prefers-color-scheme: dark`), adjusting background colors, text contrast, and tweaking the sky blue liquid opacities for optimal rendering in both light and dark environments.
- Fully accessible semantic structure. The modal is designated with `role="dialog"` and `aria-modal="true"`. The decorative liquid layers are hidden from screen readers using `aria-hidden="true"`. Honors the `prefers-reduced-motion` accessibility standard by freezing the infinite rotation animations and removing the modal pop-in transition for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Hover over the "Fill Reservoir" button to see the micro-interaction, then click it to trigger the checkbox hack and reveal the modal filling with liquid.

## Files
- `demo.html`: The HTML structure defining the checkbox logic, the modal overlay, and the rotating `.liquid-wave` shapes.
- `style.css`: The styling, the `:checked` sibling selector logic, the `overflow: hidden` masking, and the infinite `rotate-liquid` keyframes.
