# ease-scroll-reveal-clip-circle-sap

An image that reveals through an expanding circular iris wipe as it scrolls into view, like a camera aperture opening.

## Notes
- `clip-path: circle()` animates its radius from 0% to 75% (slightly beyond half the diagonal isn't needed since the container clips excess), producing an iris-style reveal.
- Respects `prefers-reduced-motion`: transition removed, image displays fully revealed immediately.