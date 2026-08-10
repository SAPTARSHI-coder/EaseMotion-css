# CSS Particle Field Background

An infinite, drifting parallax starfield built entirely without JavaScript. This component achieves incredibly high rendering performance by offloading the particle generation to the GPU via CSS `box-shadow` mapping.

## Features
- Pure CSS and HTML (Zero JavaScript required for generating particles or managing the animation loop).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--bg-base`, `--particle-color`) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: light/dark`), flipping to a bright sky blue theme on Light mode.
- **High Performance (Box-Shadow Mapping)**: 
- Traditional JavaScript particle systems inject hundreds of `<canvas>` elements or `<div>` nodes into the DOM, destroying rendering performance.
- This technique uses a single DOM node per depth layer. 
- Hundreds of coordinates are mathematically mapped to a single `box-shadow` CSS rule. The browser handles rendering this complex shadow geometry natively on the GPU, completely bypassing expensive DOM reflows.
- **Infinite Parallax Scrolling**: 
- The background features 3 distinct layers (Background, Midground, Foreground) that animate upward via `transform: translateY()` at different speeds to create a 3D parallax depth effect.
- To create a seamless infinite loop without JS resetting the coordinates, the `::after` pseudo-element on each layer acts as an exact clone of the shadow map, positioned precisely `2000px` (the height of the coordinate grid) below the original.
- As the main div drifts out of view upwards, the clone seamlessly takes its place.
- Fully accessible with `prefers-reduced-motion` support. The drifting animation is completely disabled for motion-sensitive users, leaving a static, beautiful starry night sky.

## Usage
Open `demo.html` in your browser. You will see a dark, modern content card floating over an infinite, drifting particle field. Toggle your operating system's Light mode to see the theme cleanly transition into a bright blue sky effect.

## Files
- `demo.html`: The minimal HTML structure requiring only 3 empty `<div>` tags for the depth layers.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the `box-shadow` mapping and the `::after` infinite loop trick.
