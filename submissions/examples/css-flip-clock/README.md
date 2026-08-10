# CSS Flip Clock

A pure CSS implementation of a classic mechanical flip clock using advanced 3D CSS transforms and animations.

## Features
- Pure CSS and HTML (Zero JavaScript required for the 3D flipping animation).
- **Retro Aesthetic**: Utilizes the `Oswald` condensed font, a dark modern palette (`#2a2a31`), and a distinct center split line to emulate the physical split-flap displays found in retro train stations and alarm clocks.
- **True 3D Transforms**: 
- The container uses CSS `perspective: 1000px` to establish a 3D rendering context.
- Each number card is split into a static top half, a static bottom half, and an animated "flipping" half.
- The flipping mechanism utilizes `transform-origin: bottom;` to ensure the top card hinges downward exactly at the center split line.
- The animation rotates the card along the X-axis (`transform: rotateX(-180deg)`) simulating physical gravity.
- **Realistic Lighting**: CSS pseudo-elements (`::after`) are used to overlay linear gradients that fade in and out during the rotation keyframes (`shadow-top`, `shadow-back`). This fakes the effect of dynamic ambient lighting casting shadows as the physical card changes its angle relative to a light source.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the 3D rotation animations and the blinking colon divider are completely disabled.

## Usage
Open `demo.html` in your browser. You will see a large digital clock interface. The "Seconds" unit on the far right will continuously loop through a realistic 3D flipping animation, while the Hours and Minutes units will demonstrate a staggered, one-off time change (e.g., flipping from 09:24 to 10:25) shortly after the page loads.

## Files
- `demo.html`: The HTML structure for the clock, detailing the complex nesting required for 3D flip cards (separate divs for the top, bottom, and the back-face of the flipping card).
- `style.css`: The styling, font configuration, 3D `perspective` setup, and the highly specific `@keyframes` managing the `rotateX` transforms and dynamic lighting shadows.
