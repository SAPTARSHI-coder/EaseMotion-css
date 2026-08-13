# CSS Hourglass Loader

A classic, pure CSS hourglass loading animation complete with dropping sand particles, synchronized emptying/filling chambers, and a 180-degree flip mechanism.

## Features
- Pure CSS and HTML (Zero JavaScript or complex SVG manipulation).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--sand-color`, `--glass-color`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`) and includes a beautiful glassmorphism blur backdrop.
- **Hourglass Mechanics (Documented in Code)**: 
  - **The Glass**: The top and bottom glass chambers are drawn natively in CSS using the `clip-path: polygon()` property to cut out perfectly symmetrical triangles.
  - **The Sand Physics**: Four separate `@keyframes` animations run in perfect sync across a `4s` duration loop:
    1. The Top Sand uses `transform: scaleY()` shrinking from `1` to `0` to simulate emptying.
    2. The Bottom Sand uses `transform: scaleY()` growing from `0` to `1` to simulate filling.
    3. The Sand Stream fades in and drops a thin line down the neck, retracting cleanly at the end.
    4. The entire parent `.hourglass` wrapper rotates `180deg` precisely when the top chamber hits `0`, resetting the visual state flawlessly for the next loop.
- Fully accessible with `prefers-reduced-motion` support. The animations are disabled and the hourglass defaults to a static "half-full" state for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Watch the continuous, smooth loop of the sand emptying, filling, and the hourglass flipping.

## Files
- `demo.html`: The HTML structure containing the glass chambers and sand particle divs.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the synchronized keyframe animations.
