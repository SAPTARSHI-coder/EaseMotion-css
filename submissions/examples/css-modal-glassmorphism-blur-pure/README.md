# CSS Modal: Glassmorphism Blur

An elegant, JavaScript-free modal utilizing the CSS checkbox hack, featuring premium frosted glass aesthetics (`backdrop-filter`) and smooth CSS transitions.

## Features
- Pure CSS and HTML implementation. No JavaScript required to open or close the modal.
- **Component Architecture**: 
  - **The Checkbox Hack**: The core functional logic relies on a hidden `<input type="checkbox">` and the general sibling combinator (`~`). When the user clicks the `<label>` button to open the modal, or clicks the backdrop/dismiss buttons to close it, they are actually toggling this hidden checkbox.
  - **Frosted Glass**: The modal card utilizes `backdrop-filter: blur(24px) saturate(180%)` combined with a semi-transparent white (or dark) background color. This creates the signature "frosted glass" look that blurs any content sitting behind the modal.
  - **Abstract Background Shapes**: To properly demonstrate the blurring effect, the demo area includes two slowly floating gradient shapes (`.shape-1`, `.shape-2`) that drift behind the modal.
  - **Smooth Entrance**: When triggered, the modal utilizes a high-quality `cubic-bezier` timing function to scale up from `0.9` and translate upwards simultaneously, creating a very polished, app-like pop-in animation.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The glassmorphism effect automatically adapts to the OS-level system theme (`prefers-color-scheme: dark`), shifting the semi-transparent backgrounds and text colors to maintain perfect contrast and legibility while preserving the blur effect.
- Fully accessible semantic structure. The modal is designated with `role="dialog"` and `aria-modal="true"`. Honors the `prefers-reduced-motion` accessibility standard by freezing the floating background shapes and removing the modal pop-in transition for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the "Reveal Glass Modal" button to trigger the checkbox hack and reveal the modal over the floating background shapes.

## Files
- `demo.html`: The HTML structure defining the checkbox logic, the modal overlay, and the abstract background shapes.
- `style.css`: The styling, the `:checked` sibling selector logic, the `backdrop-filter` glassmorphism properties, and the `cubic-bezier` entrance animations.
