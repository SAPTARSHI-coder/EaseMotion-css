# CSS Form: Retro Arcade Pixel

A highly stylized, JavaScript-free form layout that perfectly captures the 8-bit aesthetic of classic arcade games using pure CSS geometry and web fonts.

## Features
- Pure CSS and HTML implementation. No external images, SVGs, or Canvas elements are used to create the pixel art styling.
- **Component Architecture & Styling Mechanics**: 
  - **CSS Pixel Borders**: The jagged, stair-step corners characteristic of 8-bit pixel art are achieved using a combination of `box-shadow` and pseudo-elements. The `.pixel-input-wrapper` uses 4 inward-facing `inset` shadows to create a thick border. Then, the `::before` and `::after` pseudo-elements are positioned over the 4 corners, colored to match the background, effectively "biting out" the corners to create the pixelated stair-step effect.
  - **The `:has()` Selector for Focus**: To highlight the pixel border when the native text input is focused, the modern `:has()` selector is used (`.pixel-input-wrapper:has(.pixel-input:focus)`). This allows the parent wrapper to react to the state of its child input, changing the border color to neon cyan without needing JavaScript event listeners.
  - **Arcade Typography & Effects**: Uses the Google Font `'Press Start 2P'` with `-webkit-font-smoothing: none;` to ensure crisp, non-anti-aliased edges on the text. Features a classic blinking "INSERT COIN" prompt using a `steps(2)` keyframe animation for authenticity.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes high-contrast neon colors (Cyan, Magenta/Pink, Yellow) against a pitch-black background. Note: Because arcade cabinets are inherently dark, this component enforces a dark theme universally, ignoring the user's OS light-mode preference to maintain stylistic integrity.
- Fully accessible semantic structure. Standard `<form>` and `<input>` tags. Honors the `prefers-reduced-motion` accessibility standard by disabling the blinking text animation if requested by the OS.

## Usage
Open `demo.html` in your browser. Click into the "ENTER INITIALS" input field. Notice how the parent pixelated border turns neon cyan to indicate focus. Click the "PRESS START" button to see the 3D-pixel press-down effect.

## Files
- `demo.html`: The HTML structure defining the arcade cabinet wrapper, the form inputs, and the "insert coin" footer.
- `style.css`: The styling, the `box-shadow` pixel hacking, the `:has()` focus logic, and the retro animations.
