# Progress Bar

## Summary

A pure CSS progress bar submitted for issue #88575. No spec was
given beyond "advanced component," so this covers a commonly
requested pattern: an animated, accessible progress indicator with
zero JS, supporting both determinate and indeterminate states.

## How it works

- `.ease-progress` is the track; `.ease-progress-bar` is the fill,
  sized via an inline `width` style (or a CSS var, if preferred by
  the consumer) for the determinate case.
- A repeating diagonal `linear-gradient` background creates the
  "stripes," animated via `background-position` in
  `ease-progress-stripes` for a subtle sense of motion even on a
  static value.
- `.ease-progress-indeterminate` overrides the bar's width and adds
  a second keyframe (`ease-progress-indeterminate`) that slides the
  bar back and forth across the track for loading states with no
  known duration.
- `role="progressbar"` plus `aria-valuenow/min/max` (determinate) or
  `aria-label` (indeterminate) keep it accessible to screen readers.
- `prefers-reduced-motion` disables both animations.

## Classes

- `ease-progress` — track container
- `ease-progress-bar` — the animated fill
- `ease-progress-indeterminate` — modifier for unknown-duration loading
- `ease-progress-label` — optional helper text under the bar

## Files

- `demo.html` — live demo: two determinate bars + one indeterminate
- `style.css` — original CSS, single component

Relates to issue #88575.
