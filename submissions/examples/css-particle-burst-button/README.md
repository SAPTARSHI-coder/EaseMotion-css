# CSS Particle Burst Button

A highly satisfying button click effect that emits a colorful particle burst, achieved entirely through advanced CSS shadow manipulation without a single line of JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or DOM element generation).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--btn-bg`, `--particle-1`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`) with built-in dark and light mode definitions.
- **Single Div Particles (Documented in CSS)**: 
- Creating dozens of empty HTML `<div>` elements just for decorative particles litters the DOM and hurts performance.
- This component utilizes a single `::before` pseudo-element on the `.particles` container.
- It generates the "particles" entirely using multiple comma-separated `box-shadow` layers.
- **Radial Explosion Animation**: 
- The button uses a hidden checkbox hack (`<input type="checkbox">`) to track the click event.
- When clicked (checked), a CSS `@keyframes` animation fires on the pseudo-element.
- The animation starts with all shadows stacked perfectly in the center (`0 0`).
- By the end of the animation (100%), the X and Y offsets of each box-shadow layer are pushed far outward in a radial pattern (e.g., Top Right is `56px -56px`), while the opacity fades to 0. 
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the button pulse and the particle explosion animations are completely disabled.

## Usage
Open `demo.html` in your browser. You will see a primary "Click Me" button. Clicking it triggers a satisfying, springy scale-down pulse on the button itself, while simultaneously exploding 8 colored particles outward radially from behind the button. 

## Files
- `demo.html`: The HTML structure for the component, detailing the Checkbox Hack necessary for detecting the click purely in CSS.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics explaining the `box-shadow` radial explosion technique.
