# Pulse Animation Safari Glitch Investigation

This submission isolates and resolves the reported Safari rendering glitch for the Pulse animation, as described in Issue #48446.

## Problem Description
Users reported that the Pulse animation occasionally stutters, flickers, or drops frames in Safari (macOS and iOS). The root cause of this is often related to how WebKit handles layout and paint phases during CSS transforms and box-shadow animations. Without forcing hardware acceleration, Safari may attempt to rasterize the element continuously, leading to stuttering.

## Reproduction Steps
1. Open `demo.html` in Safari on macOS or iOS.
2. Observe the pulse animation on the button element.

## Solution & Rendering Optimizations
To fix the Safari rendering glitch without breaking other browsers, the following GPU acceleration techniques were applied in `style.css`:
- `transform: translateZ(0)` applied to the element and keyframes forces the browser to composite the layer using hardware acceleration (GPU).
- `backface-visibility: hidden` prevents flickering during transforms on Safari.
- `will-change: transform` hints to the browser ahead of time that the element will undergo transform changes, allowing it to optimize resources.

## Cross-Browser Testing
- **Safari (macOS):** Tested, smooth rendering, no flickering.
- **Safari (iOS):** Tested, smooth rendering.
- **Chrome:** Tested, functions normally, no regression.
- **Firefox:** Tested, functions normally.
- **Edge:** Tested, functions normally.

These fixes have been tested and verified to improve Safari's animation smoothness without negatively impacting performance on Chrome, Firefox, or Edge.
