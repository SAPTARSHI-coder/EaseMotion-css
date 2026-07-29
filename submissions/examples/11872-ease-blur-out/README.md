# Animation: ease-blur-out

This submission implements the `ease-blur-out` exit utility for issue **#11872**.

## Description

The `ease-blur-out` animation provides a quick, clean exit effect by blurring and fading out an element simultaneously. It transitions from `filter: blur(0px)` and `opacity: 1` to `filter: blur(8px)` and `opacity: 0` rapidly. This is a simpler and faster variant compared to `ease-focus-out`, making it suitable for fast-dismissing UI components like tooltips, popovers, or alert banners.

## Acceptance Criteria
- Ending state: `filter: blur(8px) + opacity(0)`
- Animation speed: Fast and clean exit.
- Simpler/faster than `ease-focus-out` (starts with smaller blur radius and executes quicker).
- Focus visible indicators and reduced-motion override included.
