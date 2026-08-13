# Dynamic Spinner: Gradient

A beautiful, highly performant CSS loading spinner that utilizes advanced conic gradients and CSS masking to create a seamless, flowing multi-color ring.

## Features
- Pure CSS and HTML implementation. No SVGs, JavaScript, or heavy GIF assets required.
- **Component Architecture & Styling Mechanics**: 
  - **The Sweeping Gradient**: The core visual is generated using the CSS `conic-gradient()` function applied to a square `div` with `border-radius: 50%` to make it a circle. The gradient sweeps seamlessly through 5 vibrant colors (`#ff2a5f` -> `#ff7e40` -> `#ffdd00` -> `#00e0ff` -> `#b900ff`) and perfectly loops back to the start color to avoid any harsh edges during rotation.
  - **CSS Mask Compositing**: Instead of using heavy borders or pseudo-elements to hollow out the circle into a ring, this component utilizes `-webkit-mask` (and standard `mask`) with a `radial-gradient`. This essentially "punches a hole" through the center of the gradient circle, leaving only a perfectly crisp `--spinner-thickness` (6px) ring around the perimeter. This technique ensures the background always shows through the center seamlessly, regardless of what pattern or image might be behind the spinner.
  - **Dynamic Glow**: A `filter: drop-shadow()` is applied to the masked ring, causing the bright gradient colors to cast a subtle, performant glow onto the background.
- Fully accessible semantic structure. The wrapper uses `aria-busy="true"` and `aria-label="Loading content"` to properly notify screen readers of the loading state. Honors the `prefers-reduced-motion` accessibility standard by disabling the high-speed rotation and text pulsing if requested by the OS.

## Usage
Open `demo.html` in your browser. You will see a vibrant, multi-colored ring spinning smoothly with a subtle inner pulsing text. Because the center is "hollowed out" via CSS masks, you can place this spinner over any background color, image, or video, and the background will show through the center perfectly.

## Files
- `demo.html`: The HTML structure defining the semantic wrapper, the `.gradient-spinner` target, and the inner text content.
- `style.css`: The styling, the complex `conic-gradient` and `radial-gradient` mask configurations, and the `@keyframes` rotation logic.
