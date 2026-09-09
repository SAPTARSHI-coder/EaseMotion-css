# CSS Loader: Retro Arcade Pixel

An 8-bit inspired loading bar utilizing CSS stepped keyframes and box-shadow pixel art to simulate a classic arcade "Insert Coin" experience.

## Features
- Pure CSS and HTML implementation without any JavaScript or SVG assets.
- **Component Architecture**: 
  - **The Stepped Keyframes**: The core 8-bit mechanical feel is achieved using the `steps()` timing function in the `@keyframes` animation, rather than the default `ease` or `linear`. By using `animation: fill-bar 3s steps(10)`, the loading bar doesn't grow smoothly; instead, it jumps forward in 10 discrete, chunky blocks, exactly simulating low-resolution arcade graphics rendering.
  - **The Pixel Cursor**: A solid red square (`.pixel-cursor`) sits at the leading edge of the progress bar. It utilizes the exact same `steps(10)` keyframe timing as the bar fill, ensuring they march forward in perfect lockstep.
  - **The 8-Bit Typography**: The "INSERT COIN" text utilizes the `Press Start 2P` font from Google Fonts. A classic terminal underscore cursor (`<span class="blink">_</span>`) blinks at the end using a separate `steps(2, start)` animation.
  - **Box-Shadow Borders**: To maintain the sharp, pixelated aesthetic, no `border-radius` is used anywhere. Instead, inset and offset `box-shadow`s are used to create the inner depth of the loading track and the 3D blocky highlight on the red cursor.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The component defaults to a dark arcade cabinet theme, but safely adapts the outer body background for light mode environments.
- Fully accessible semantic structure. The decorative loading track is hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by freezing the progress bar at 50% and stopping the blinking cursor for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the retro arcade loading animation.

## Files
- `demo.html`: The HTML structure defining the track, the fill bar, the cursor block, and the 8-bit text.
- `style.css`: The styling, the custom arcade font import, and the `steps()` timing function animations.
