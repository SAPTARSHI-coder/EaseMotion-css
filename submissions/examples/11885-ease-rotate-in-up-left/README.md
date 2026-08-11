# Animation: ease-rotate-in-up-left

This submission implements the `ease-rotate-in-up-left` entrance utility for issue **#11885**.

## Description

The `ease-rotate-in-up-left` animation rotates an element into view from the lower-right corner. It starts at `rotate(45deg)` with `transform-origin: left top` and `opacity: 0`, and smoothly transitions to its normal placement with `rotate(0deg)` and `opacity: 1`. 

## Acceptance Criteria
- Starting state: `rotate(45deg) + opacity(0)` with `transform-origin: left top`
- Ending state: `rotate(0deg) + opacity(1)`
- Origin variant (left top).
- Focus visible indicators and reduced-motion override included.
