# SVG Scale Distortion Fix

A targeted pattern to resolve rendering bugs (sub-pixel blurring and stroke flickering) that occur in Firefox and Safari when an inline `<svg>` is a child of an element undergoing a `transform: scale()` transition.

## Features
- **The Bug**: When a parent button has `transform: scale(1.15)` applied on hover, the browser attempts to scale the child SVG. In Webkit and Gecko engines, this continuous re-rasterization of the vector path during the transition often results in a jagged, flickering, or blurred stroke.
- **The Fix**: We apply `transform: translateZ(0)` and `backface-visibility: hidden` directly to the child `.svg-fixed` element. This forces the browser to promote the SVG to its own hardware-accelerated compositor layer *before* the parent scale happens, ensuring the vector is scaled smoothly on the GPU without triggering layout recalculations or sub-pixel snapping on the CPU.
- **Optimization**: We include `will-change: transform` as a hint to the browser to further optimize the compositor layer.

## Usage
Open `demo.html` in Firefox or Safari.
- Hover over the "Buggy Button" and watch the stroke width of the SVG icon carefully as it scales. You may notice subtle jaggedness or "snapping".
- Hover over the "Fixed Button". The transition should be perfectly buttery smooth.

## Files
- `demo.html`: The HTML structure demonstrating the before-and-after states.
- `style.css`: The styling engine containing the hardware acceleration fixes.
