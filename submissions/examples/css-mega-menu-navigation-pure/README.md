# CSS Mega Menu Navigation

A pure CSS full-width dropdown mega menu featuring a multi-column layout, smooth hover reveal animations, and a rich featured content card, built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or dropdown math).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--nav-bg`, `--brand-color`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`).
- **Mega Menu Architecture (Documented in Code)**: 
- To achieve a full-width mega menu using pure CSS, the outer `<nav>` element is set to `position: relative;`. 
- The trigger list-item (`.mega-dropdown-trigger`) is kept as `position: static;`.
- The actual hidden `.mega-menu` dropdown inside the list-item is set to `position: absolute; top: 100%; left: 0; width: 100%;`. Because its parent list-item is static, it sizes itself exactly to the boundaries of the outer `<nav>` element, giving us a perfect full-width dropdown.
- **Smooth Animations**: The dropdown reveals on hover using a combination of `opacity`, `visibility`, and `transform: translateY()`. The pointer-events are disabled when hidden to prevent accidental clicks.
- Fully accessible with `prefers-reduced-motion` support. The slide and rotate animations are completely disabled for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Hover over the "Products" link in the navigation bar to see the full-width mega menu smoothly slide into view.

## Files
- `demo.html`: The HTML structure containing the navigation links, the mega menu columns, and the featured card.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the CSS positioning architecture.
