# Cyberpunk Carousel (Pure CSS)

## Abstract

The Cyberpunk Carousel is a zero-JavaScript, pure CSS interactive component created for EaseMotion CSS (Issue #79965). Built around a neon brutalist design aesthetic, it achieves hardware-accelerated carousel sliding, active glitch animations, and angular geometric cutouts entirely through standard CSS layout and state mechanics.

## Clip-Path Geometry

To achieve the signature cyberpunk angled corners and industrial bevel cuts without importing heavy SVG assets or raster images, the component utilizes CSS `clip-path: polygon(...)`.

- **Viewport Geometry**: The main viewport container uses `clip-path: polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)`, slicing off top-right and bottom-left corners to create an asymmetric cybernetic frame.
- **Button Geometry**: Each navigation button features a chamfered notch generated using `clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)`, maintaining consistent brutalist geometry across interactive states.

## Radio-State Translation Engine

State management for slide transitions and active control styling is driven completely through the CSS checkbox/radio hack:

1. **Hidden State Controllers**: Un-rendered `<input type="radio" name="cyber-slider">` elements are placed at the root of `.ease-cyber-wrapper`.
2. **Subsequent Sibling Combinator (`~`)**: When a radio controller is selected (`:checked`), the general sibling selector targets the downstream `.ease-carousel-track` and applies horizontal translation transforms (`translateX(0%)`, `translateX(-33.333%)`, or `translateX(-66.666%)`).
3. **Control Mapping**: `<label>` elements linked to the hidden radio buttons via `for="..."` act as click targets. CSS rules target the matching label when its respective radio input is `:checked`, applying active glitch keyframe animations and neon color fills without requiring JavaScript event listeners.
