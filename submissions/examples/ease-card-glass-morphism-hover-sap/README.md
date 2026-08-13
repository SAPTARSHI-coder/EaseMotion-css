# Card Glass Morphism Hover

Frosted-glass cards over a gradient background that become more
opaque/blurred and lift slightly on hover or keyboard focus.

**Level:** Intermediate

## Usage

Apply `.glass-card` to any card over a colorful/textured background —
the glass effect relies on `backdrop-filter` picking up what's behind it,
so it needs non-flat content underneath to read well.

## Accessibility

- Effect appears on `:focus-visible` as well as `:hover`, and a separate
  visible outline is shown, so keyboard users get equal feedback.
- Text uses a semi-opaque white (`rgba(255,255,255,0.85)`) rather than a
  faint tint, and the glass background itself becomes more opaque on
  hover/focus, both of which help maintain contrast against varying
  background content — actual contrast should still be verified against
  the specific background image/gradient used in production.
- `prefers-reduced-motion` removes the lift `transform`, keeping only the
  background opacity/blur change as feedback.

## Notes

- Requires `-webkit-backdrop-filter` alongside `backdrop-filter` for Safari
  support.
- Glassmorphism effects are inherently background-dependent for contrast —
  this component looks best over colorful, sufficiently busy backgrounds
  (as in this demo) and needs contrast-checking if reused over a different,
  potentially lower-contrast background.
- `backdrop-filter` is a moderately expensive CSS property to animate;
  transitioning its blur radius (as done here) is acceptable for a handful
  of cards but should be used sparingly on pages with many simultaneous
  glass elements.