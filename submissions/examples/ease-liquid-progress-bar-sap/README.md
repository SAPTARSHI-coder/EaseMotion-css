# Liquid Progress Bar

A progress bar with an animated wavy liquid fill that rises and scrolls
horizontally to simulate water/liquid filling a container.

**Level:** Intermediate

## Usage

Set the fill amount via the `--value` CSS custom property on `.liquid-fill`
(e.g. `--value: 65%`), and update `aria-valuenow` + the label text alongside it.

## Accessibility

- Uses `role="progressbar"` with `aria-valuemin`, `aria-valuemax`, `aria-valuenow`.
- `prefers-reduced-motion` disables the wave scroll animation and the width
  transition, leaving a static filled bar.

## Notes

- The wave graphic is a repeating SVG path scrolled via `transform: translateX`
  at 200% width, looped seamlessly at the 50% mark.
- Fill width transitions are handled separately from the wave animation so
  disabling motion doesn't prevent the bar from still reflecting the correct
  value (it just snaps instead of animating).