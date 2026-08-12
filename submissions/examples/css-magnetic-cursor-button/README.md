# CSS Magnetic Hover Button

A pure CSS implementation of the popular "magnetic" cursor-following button effect, built entirely without JavaScript by utilizing an invisible tracking grid.

## Features
- Pure CSS and HTML (Zero JavaScript required for math, coordinate calculations, or event listeners).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--btn-bg`, `--magnetic-pull`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`).
- **Invisible Grid Tracking Architecture (Documented in Code)**: 
- Traditionally, this effect requires complex JavaScript `mousemove` listeners to calculate the exact X/Y coordinates of the cursor relative to the button's center.
- This component mimics that behavior in pure CSS by creating an invisible `3x3` CSS Grid (`.magnetic-wrapper`) that defines the "capture area" around the button.
- The 9 cells of the grid act as invisible `.tracker` elements.
- **CSS `:has()` Pseudo-Class Logic**: 
- We use the modern CSS `:has()` selector on the wrapper to detect if any of the invisible grid cells are currently being hovered by the mouse.
- If a cell is hovered (e.g. `.tracker.top-left`), we target the actual button (`.magnetic-btn`) and apply a `transform: translate` to pull it toward that specific quadrant.
- **Inner Parallax Effect**: The text and icon inside the button also shift slightly when the button is pulled, adding a premium 3D jelly feel to the interaction.
- Fully accessible with `prefers-reduced-motion` support. The magnetic pulling and scaling animations are completely disabled for motion-sensitive users, leaving a standard, elegant hover state.

## Usage
Open `demo.html` in your browser. Move your mouse *near* the button, without actually touching it, to see the button physically reach out toward your cursor. Hovering directly over the button will scale it up nicely.

## Files
- `demo.html`: The HTML structure detailing the invisible 3x3 tracking grid.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the CSS `:has()` logic and `transform` keyframes.
