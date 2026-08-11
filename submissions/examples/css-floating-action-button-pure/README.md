# CSS Floating Action Button

A pure CSS Material Design Floating Action Button (FAB) featuring a staggered expandable menu, tooltips, and a click ripple effect, built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript click listeners for the menu or the ripple effect).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--fab-main-bg`, `--fab-item-bg`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`).
- **Checkbox Hack State Management (Documented in Code)**: 
- The entire expand/collapse logic is handled via a hidden `<input type="checkbox">` linked to a `<label>` (the main FAB).
- When clicked, the checkbox state toggles, allowing us to use the CSS sibling selector (`.fab-checkbox:checked + .fab-container`) to trigger transformations on the menu items and the icon itself.
- **Staggered Animations**: The child menu buttons use staggered `transition-delay` values (0.05s, 0.1s, 0.15s) so they pop out sequentially from bottom to top, perfectly mimicking the Material Design motion specs.
- **Pure CSS Ripple**: The click ripple is achieved using the `:active` pseudo-class triggering a rapid width/height scale of an `::after` element, which gracefully fades out when the click is released.
- Fully accessible with `prefers-reduced-motion` support. Tooltips are generated via CSS `::before` pseudo-elements.

## Usage
Open `demo.html` in your browser. Click the main FAB (the plus icon) to watch it rotate into a close icon while smoothly popping out three sub-action buttons. Hover over the sub-action buttons to see CSS-only tooltips. Click the main FAB to see the CSS-only ripple effect.

## Files
- `demo.html`: The HTML structure containing the hidden checkbox and the SVG icons.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the checkbox hack and staggered delays.
