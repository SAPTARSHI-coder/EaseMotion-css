# SVG Loading Bar

An indeterminate loading bar built as an SVG rect that sweeps and scales
across the track in a loop, for use when progress percentage is unknown.

**Level:** Beginner

## Usage

Drop the `<svg class="svg-loader">` markup anywhere loading state needs to
be shown. It's self-contained and requires no JS to animate.

## Accessibility

- Uses `role="progressbar"` with an `aria-label` describing what's loading;
  `aria-valuemin`/`aria-valuemax` are included, but `aria-valuenow` is
  intentionally omitted since this is an indeterminate (unknown-progress)
  indicator — per ARIA guidance, omitting `aria-valuenow` is how an
  indeterminate progressbar is correctly represented.
- `prefers-reduced-motion` stops the sweeping animation and shows a static
  partial-fill bar instead, so there's still a visible "loading" cue without
  continuous motion.

## Notes

- Animates via CSS `transform: scaleX()` + `translateX()` on the SVG rect
  (using `transform-box: fill-box` so the transform origin is relative to
  the shape itself, not the SVG viewport), rather than animating `width`/`x`
  attributes directly — keeps it GPU-accelerated.
- Because this represents an indeterminate state, no JS progress-tracking
  logic is included; pair with a "determinate" progress bar component (like
  `ease-liquid-progress-bar-sap`) when the percentage is actually known.