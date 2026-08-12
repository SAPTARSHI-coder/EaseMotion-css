# CSS Animated Compass Rose

A pure CSS, fully responsive compass rose built entirely with CSS polygons, featuring an interactive rotational animation, built without JavaScript or SVG assets.

## Features
- Pure CSS and HTML (Zero JavaScript or external images/SVGs for the star).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--compass-bg`, `--point-dark`, etc.). Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a moody, high-contrast dark mode variant.
- **Compass Architecture (Documented in Code)**: 
  - **Typography**: Uses the classic serif `Cinzel` font from Google Fonts for authentic compass directional markers (N, E, S, W).
  - **CSS Polygons for 3D Effect**: The 8-pointed star is built entirely using `clip-path: polygon`. Each point consists of two `<divs>` (a left/light side and a right/dark side) cut into triangles that originate from the center pivot. The right side utilizes `transform: scaleX(-1)` to perfectly mirror the left side's polygon cut.
  - **Rotational Positioning**: The 4 primary and 4 secondary star points are wrapped in containers that are rotated (`0deg`, `45deg`, `90deg`, etc.) into their correct positions around the dial.
  - **Interactive Animation**: On hover, the entire inner `.compass-star` assembly smoothly rotates `360deg` using a custom bouncy `cubic-bezier` timing function.
- Fully accessible with `prefers-reduced-motion` support. The rotational animation is disabled for motion-sensitive users. The `.compass-wrapper` uses `tabindex="0"` and `:focus-within` to ensure keyboard navigators can interact with the component.

## Usage
Open `demo.html` in your browser. Hover your mouse (or tab focus) over the compass to see the central star fluidly spin.

## Files
- `demo.html`: The HTML structure containing the directional labels and the deeply nested polygon layers for the star.
- `style.css`: The styling, robust CSS Custom Property theming blocks, and the heavily commented `clip-path` math required to draw the 3D star.
