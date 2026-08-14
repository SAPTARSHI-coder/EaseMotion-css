# Scroll Count Progress

Combines a fixed top scroll-progress bar with a stat number that counts up
from 0 to its target once scrolled into view, using `IntersectionObserver`.

**Level:** Intermediate

## Usage

`.top-progress` width is updated on every scroll event based on
`scrollY / scrollable-height`. The stat number reads its target from
`data-target` on `#statNumber` and animates via `requestAnimationFrame`
once its container crosses 60% visibility.

## Accessibility

- `font-variant-numeric: tabular-nums` keeps digit width consistent so the
  counting number doesn't jitter/reflow surrounding layout as it changes.
- `prefers-reduced-motion` is checked in JS: motion-reduced users get the
  final target number rendered immediately instead of the count-up animation.
- The top progress bar's own `width` transition is also disabled under
  reduced motion (updates instantly per scroll event instead of easing).
- The counter only runs once (`observer.disconnect()` after triggering), so
  scrolling back up and down doesn't repeatedly restart it.

## Notes

- Progress bar calculation guards against division by zero when the page
  isn't tall enough to scroll (`scrollable > 0 ? ... : 0`).
- Count-up uses `requestAnimationFrame` with an elapsed-time-based progress
  calculation (not a fixed frame count), so it animates at a consistent
  duration regardless of display refresh rate.