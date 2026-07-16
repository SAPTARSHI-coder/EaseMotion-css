# Morphing SVG Shape Animation Classes

This submission adds CSS utility classes to effortlessly create organic, morphing blob animations using SVG paths. 

## Bug / Feature Description
Blob and organic shape morphing are widely used in modern web design for backgrounds, avatars, and hero image enclosures. Instead of bringing in a heavy JS library (like anime.js or GSAP), modern browsers support animating the SVG `d` attribute directly via CSS.

## Fix / Implementation Details
- Added `.ease-animate-morph`, `.ease-animate-morph-fast`, and `.ease-animate-morph-slow` utility classes.
- Created a generic `@keyframes ease-morph-blob` containing three distinct organic blob paths that smoothly transition.
- Added an `.ease-hover-morph` utility that uses CSS `transition` on the `d` attribute to change shapes specifically when hovered.
- Demonstrated these classes with varying speeds and interactive triggers in the demo file.

> **Note:** For `d` path morphing to work natively in CSS, the path data in all keyframes must have the exact same number and sequence of drawing commands.

## How to Test
1. Open `demo.html` in a modern browser (Chrome, Edge, Firefox).
2. Observe the continuous morphing of the "Continuous Blob" and "Fast Morph" SVG shapes.
3. Hover your mouse over the third shape to see it smoothly transition to a completely different organic path structure via pure CSS hover.
