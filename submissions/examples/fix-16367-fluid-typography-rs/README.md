# Fix: Fluid Typography Scale Utility Classes

## Description
This adds utility classes for fluid typography, allowing text to seamlessly scale between a defined minimum and maximum size based on the viewport width.

## How it works
- Uses the CSS `clamp()` function.
- Viewport units (`vw`) dictate the scaling factor, ensuring fluid resizing across devices without needing media queries.
