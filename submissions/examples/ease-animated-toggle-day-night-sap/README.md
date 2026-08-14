# Animated Toggle Day Night

A toggle switch styled as a sun/moon sliding across a sky, morphing color
and craters/glow, while the whole page background crossfades between a day
and night gradient.

**Level:** Advanced

## Usage

The switch is `role="switch" aria-checked`. Clicking toggles state, flips
`is-night` on the page wrapper (driving the background/text color
crossfade), and slides/morphs the sun-to-moon `.celestial` element plus
fading in star dots.

## Accessibility

- Implemented as `role="switch"` with `aria-checked` kept in sync and
  `aria-label` describing the next action ("Switch to night mode"/"Switch
  to day mode").
- Fully keyboard-operable as a real `<button>`, with `:focus-visible` outline shown.
- Text color also crossfades between light/dark variants alongside the
  background, so contrast is maintained in both day and night states rather
  than only styling the toggle itself.
- `prefers-reduced-motion` removes all transitions (background, text color,
  celestial slide/morph, star fade); the correct end state for
  day/night still applies immediately based on toggle state.

## Notes

- The sun-to-moon morph uses `box-shadow: inset` to fake craters on the
  "moon" state rather than swapping to a different image/icon, keeping it a
  single continuously-animating element.
- Star opacity transitions have a slight delay (`0.2s`) relative to the
  background so they fade in just as the sky has visually darkened enough
  to read against, rather than appearing prematurely against a still-light background.
- This toggle also demonstrates page-wide theme switching triggered from a
  single control, similar in spirit to `ease-toggle-theme-switch-sap` but
  with a much more elaborate, illustrated toggle control itself.