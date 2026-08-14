# ease-animated-slider-vertical-sap

A vertically sliding carousel with side dot navigation, transitioning slides via `translateY`.

## Usage
1. Include `style.css`.
2. Add markup: `.vslide` elements inside `.vslide-track`, plus matching `.vdot` controls.
3. Attach the dot click handler from `demo.html`.

## Customization
- Slide height must match the `translateY` step size used in JS.
- Dot position/spacing/active scale.
- Number of slides — dots and slides must stay in sync.

## Notes
- Vertical variant of a standard horizontal carousel, using `translateY` instead of `translateX`; slide height is fixed and used directly as the per-step Y offset.
- Respects `prefers-reduced-motion`: track transition and dot transitions are disabled, navigation remains functional.