# CSS Modal: Velvet Smooth Transition

A luxurious, JavaScript-free modal utilizing the CSS checkbox hack. Features deep, rich colors and ultra-smooth, long-duration transitions combining scale, opacity, and blur filters to create a cinematic "focus pull" effect.

## Features
- Pure CSS and HTML implementation. No JavaScript required to open or close the modal.
- **Component Architecture**: 
  - **The Checkbox Hack**: The core functional logic relies on a hidden `<input type="checkbox">` and the general sibling combinator (`~`). When the user clicks the `<label>` button to open the modal, or clicks the backdrop/dismiss buttons to close it, they are actually toggling this hidden checkbox.
  - **The Cinematic Entrance**: This modal explicitly avoids snappy or bouncy physics. Instead, it aims for weight and elegance. The `.modal-card` transition uses a long duration (`0.8s`) and a custom cubic-bezier (`0.25, 1, 0.5, 1`) that accelerates very slowly and decelerates gracefully.
  - **Focus Pull Effect**: The initial state of the modal is slightly scaled up (`1.05`) and heavily blurred (`filter: blur(10px)`). When the modal opens, the `transform` and `filter` properties animate into place, simulating a camera pulling focus onto the modal while the heavy, dark backdrop obscures the rest of the application.
  - **Component Consistency**: This same `--velvet-ease` variable is applied to the hover states of all the buttons in the UI, ensuring the entire interaction model feels consistently smooth and deliberate.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The modal fully supports the OS-level system theme (`prefers-color-scheme: light/dark`). The default aesthetic leans heavily into dark mode (deep plums, burgundies, and golds) to fit the "velvet" naming, but automatically adjusts to a lighter cream/gold palette if the user forces a light theme.
- Fully accessible semantic structure. The modal is designated with `role="dialog"` and `aria-modal="true"`. Honors the `prefers-reduced-motion` accessibility standard by freezing the scale/blur transitions and instantly displaying the modal for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the "Reveal Experience" button to trigger the checkbox hack and reveal the cinematic modal.

## Files
- `demo.html`: The HTML structure defining the checkbox logic, the modal overlay, and the semantic modal content.
- `style.css`: The styling, the `:checked` sibling selector logic, the `filter: blur()` properties, and the highly specific `cubic-bezier` timing functions.
