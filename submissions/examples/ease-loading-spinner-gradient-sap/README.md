# Loading Spinner Gradient

A smooth ring spinner built entirely from a masked conic-gradient (no
border-trick, no SVG), giving a soft gradient fade around the ring instead
of a hard color break.

**Level:** Beginner

## Usage

Drop the `.spinner` markup anywhere a loading state needs indicating; it's
self-contained and animates automatically.

## Accessibility

- Container uses `role="status" aria-live="polite"` with a visually hidden
  `.sr-only` "Loading" text, so screen readers get a single clear
  announcement rather than trying to interpret a spinning gradient ring.
- `prefers-reduced-motion` stops the rotation and replaces it with a
  static gradient ring, so a visible (if non-animated) loading cue remains
  instead of disappearing entirely.

## Notes

- The ring shape is achieved via a `mask`/`-webkit-mask` radial-gradient
  cutout on a solid circular `conic-gradient` background, rather than the
  more common `border` + `border-color: transparent` spinner technique —
  this allows a smooth gradient fade around the ring rather than a hard
  edge between filled and transparent border segments.
- This is a generic, content-agnostic loading indicator; toggle its
  presence from real loading-state logic in actual usage.