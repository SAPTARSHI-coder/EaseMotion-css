# CSS Circular Radial Menu

A pure CSS interactive menu that expands satellite buttons outward in a perfect circle using the hidden checkbox hack and trigonometric transforms, built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or math).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--menu-bg`, `--item-bg`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`).
- **Radial Architecture (Documented in Code)**: 
- **State Management**: We use the CSS hidden checkbox hack (`input[type="checkbox"]:checked`). The central button is a `<label>` linked to this checkbox, toggling its state on click.
- **Trigonometric Positioning**: When the menu is toggled open, we use the general sibling selector (`~`) to animate each satellite `.menu-item` outward. 
- To position the items in a perfect circle without warping the icons, we use a chained transform: `transform: rotate(Ndeg) translateX(var(--radius)) rotate(-Ndeg)`.
  1. The first `rotate(Ndeg)` aims the item outwards from the center (e.g., 60deg, 120deg).
  2. The `translateX()` pushes it out along that path.
  3. The final `rotate(-Ndeg)` precisely counters the first rotation, ensuring the icon inside remains perfectly upright to the user.
- **Cascading Delays**: Staggered `transition-delay` values give the menu a fluid, popping-open effect.
- Fully accessible with `prefers-reduced-motion` support. The expansion animations are disabled for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the central hamburger button to toggle the radial menu. The hamburger will smoothly morph into an 'X', and the satellite icons will pop outward in a circle.

## Files
- `demo.html`: The HTML structure containing the hidden checkbox, the center button, and the 6 satellite items.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the chained `transform` trigonometric trick.
