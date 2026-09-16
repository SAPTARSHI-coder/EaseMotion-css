# Scroll Progress Circle

A fixed circular scroll-progress indicator (an SVG ring that fills as the
page scrolls) that doubles as a "back to top" button, appearing once the
user has scrolled past a threshold.

**Level:** Intermediate

## Usage

The SVG ring's `stroke-dasharray`/`stroke-dashoffset` are set from the
circle's circumference; `stroke-dashoffset` is recalculated on every scroll
event to reflect scroll percentage. The whole thing is a `<button>` that
scrolls smoothly to top on click.

## Accessibility

- The whole indicator is a real `<button>` with a descriptive `aria-label`
  ("Scroll progress. Click to return to top.") and a `title` tooltip, so its
  dual purpose (progress display + action) is clearly communicated.
- The button is only interactive/visible (`pointer-events: auto`,
  `opacity: 1`) once actually shown (`is-visible`), so it can't be
  accidentally tabbed to or clicked while hidden near the top of the page.
- Scroll listener is `{ passive: true }`, and `updateProgress()` also runs
  once on load so the initial state (hidden, 0% progress) is correct
  immediately.
- `prefers-reduced-motion` removes the show/hide fade transition on the
  button itself; the `window.scrollTo` smooth-scroll behavior on click is a
  direct user-initiated action already gated by the button being visible,
  and browsers that respect `prefers-reduced-motion` at the OS level will
  typically already reduce or skip native smooth-scroll behavior.

## Notes

- `stroke-dasharray`/`circumference` is computed once from the circle's
  radius in JS at load time, avoiding a hardcoded circumference value that
  could drift out of sync if the radius is ever changed in CSS.
- The progress SVG is visually `rotate(-90deg)` so the fill starts from the
  top (12 o'clock) rather than the default 3 o'clock start point of SVG circles.