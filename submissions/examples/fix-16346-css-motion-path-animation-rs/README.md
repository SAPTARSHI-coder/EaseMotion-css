# CSS Motion Path Animation Utilities

This submission adds CSS utility classes to animate elements along complex geometric paths using the `offset-path` and `offset-distance` properties.

## Bug / Feature Description
Traditionally, animating an element along a curved path required manipulating `transform: translate()` with JavaScript algorithms to calculate X/Y coordinates at different timestamps. CSS Motion Path solves this by allowing developers to plug in standard SVG `path()` data and animate the element across it natively.

## Fix / Implementation Details
- Added `.ease-animate-motion-path` and `.ease-animate-motion-path-loop` utility classes which define the standard 0% to 100% `offset-distance` keyframes.
- Included `offset-rotate: auto` automatically so elements orient their rotation correctly depending on the curvature of the path.
- Included some pre-defined path utilities: `.ease-path-wave`, `.ease-path-circle`, and `.ease-path-infinity`.
- In the demo, showcased how to combine `offset-path` with an absolutely positioned container to trace over a visible SVG dotted line.

## How to Test
1. Open `demo.html` in your browser.
2. Observe the blue arrow navigating back and forth across the bezier wave path. Notice how the arrow correctly rotates itself to follow the path angle.
3. Observe the pink dot smoothly traversing an infinity loop continuously.
