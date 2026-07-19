# Animation: ease-rotate-in-down-left

This submission implements the `ease-rotate-in-down-left` entrance utility for issue **#11882**.

## Description

The `ease-rotate-in-down-left` animation rotates an element into view from the upper-right corner. It starts at `rotate(-45deg)` with `transform-origin: left bottom` and `opacity: 0`, and smoothly transitions to its normal placement with `rotate(0deg)` and `opacity: 1`. 

## Acceptance Criteria
- Starting state: `rotate(-45deg) + opacity(0)` with `transform-origin: left bottom`
- Ending state: `rotate(0deg) + opacity(1)`
- Origin variant (left bottom).
- Focus visible indicators and reduced-motion override included.
