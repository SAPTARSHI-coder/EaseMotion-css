# CSS Frosted Chip Tag

A collection of dismissible frosted glass tags powered by `backdrop-filter` and the pure CSS hidden checkbox trick.

## Features
- Pure CSS and HTML implementation without any JavaScript listeners.
- **Component Architecture**: 
  - **The Mesh Background**: Glassmorphism requires a visually rich background. This component uses several `.mesh-blob` divs with heavy `filter: blur(60px)` and drifting keyframe animations to create a vibrant canvas underneath the chips.
  - **The Frosted Glass Chip**: The main `.frosted-chip` utilizes `background: rgba(255, 255, 255, 0.4)` and `backdrop-filter: blur(16px)`. A crisp inset shadow (`box-shadow: inset 0 1px 1px rgba(255,255,255,0.8)`) provides the characteristic glass edge lighting.
  - **The CSS Dismiss Animation Trick**: To allow the user to 'close' or dismiss a chip without JavaScript, this component uses the classic CSS checkbox hack. 
    1. A visually hidden `<input type="checkbox">` is placed right before the chip.
    2. The dismiss "X" button inside the chip is actually a `<label>` linked to that checkbox via the `for` attribute.
    3. When the user clicks the X, the hidden checkbox becomes `:checked`.
    4. CSS adjacent sibling combinators (`.chip-checkbox:checked + .frosted-chip`) are then used to fade out the chip, scale it down, and collapse its width/padding to `0`, causing the remaining chips to smoothly slide over and fill the gap.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), adapting the frosted glass from a light translucent white to a dark translucent slate.
- Fully accessible semantic structure. The hidden checkbox remains focusable for keyboard users (`tab`), and the label includes proper `aria-label` tags for screen reader context.

## Usage
Open `demo.html` in your browser. Click the "X" button on any chip to watch it smoothly animate away and collapse its layout space.

## Files
- `demo.html`: The HTML structure defining the background mesh, the hidden checkboxes, and the label structure.
- `style.css`: The styling, the `backdrop-filter` rules, and the adjacent sibling dismiss animation logic.
