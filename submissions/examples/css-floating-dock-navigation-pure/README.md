# CSS Floating Dock Navigation

A pure CSS implementation of a macOS-style floating dock navigation bar featuring dynamic reactive scaling, built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript coordinate tracking or math for the reactive scaling).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--dock-bg`, `--bg-base`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`).
- **Reactive Dock Scaling (Documented in Code)**: 
- This component creates the iconic macOS dock wave effect utilizing the modern CSS `:has()` relational pseudo-class.
- **Rule 1**: When an item is hovered, it scales up massively (`transform: scale(1.5)`).
- **Rule 2**: We target the item *immediately preceding* the hovered item using `.dock-item:has(+ .dock-item:hover)` and scale it up slightly (`1.2`).
- **Rule 3**: We target the item *immediately following* the hovered item using the adjacent sibling selector `.dock-item:hover + .dock-item` and scale it up slightly (`1.2`).
- The combination of these three rules creates a seamless mathematical wave across the dock as your mouse moves.
- Fully accessible with `prefers-reduced-motion` support. The scaling animations are completely disabled for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Move your mouse rapidly across the dock items to see them scale reactively, creating a smooth, physics-like wave.

## Files
- `demo.html`: The HTML structure containing the list of dock buttons and SVG icons.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the CSS `:has()` trick.
