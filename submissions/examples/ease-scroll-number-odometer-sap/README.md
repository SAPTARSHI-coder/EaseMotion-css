# Scroll Number Odometer

A five-digit odometer-style stat that counts up to its target value once
scrolled into view, using `IntersectionObserver` + `requestAnimationFrame`.

**Level:** Intermediate

## Usage

Set the target via `data-target` on `.stat-odometer`. `animate()` runs once
the element crosses 60% visibility, updating each `.od-digit` span's text
per animation frame based on elapsed-time progress.

## Accessibility

- The container has `role="status" aria-live="polite"` with `aria-label`
  updated to the full current numeric value on every frame, so screen
  readers get the actual number rather than needing to interpret five
  separate rapidly-changing digit spans.
- `font-variant-numeric: tabular-nums` keeps digit widths consistent so the
  layout doesn't jitter as values change.
- `prefers-reduced-motion` is checked in JS: the final target value is set
  immediately with no counting animation, and `aria-label` updates once
  with the final value rather than being spammed during a skipped animation.
- The counter only triggers once (`observer.disconnect()`), so scrolling
  back up and down doesn't restart or double-announce it.

## Notes

- Because `aria-live` regions announce on every DOM text change, updating
  `aria-label` on every animation frame during a live count could be noisy
  for screen reader users in a real product; consider updating `aria-label`
  only at animation start/end (rather than every frame) if this becomes a
  production component — flagged here as a refinement rather than assumed solved.
- Digits are pre-split into fixed-width boxes (`padStart(5, '0')`), giving a
  consistent 5-digit "odometer" look regardless of the actual number's length.