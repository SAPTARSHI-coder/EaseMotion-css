# Pure CSS Accordion

## Summary

A fully JavaScript-free accordion component. Panels expand and collapse with
a smooth height animation, driven entirely by CSS using the
`grid-template-rows: 0fr → 1fr` technique.

## Why "advanced"

`height: auto` cannot be animated by CSS transitions, which is why most
accordions either skip the animation or reach for JavaScript to measure
`scrollHeight`. This component sidesteps that entirely:

- Each panel is wrapped in a single-column CSS grid.
- The grid's row track transitions between `0fr` (collapsed) and `1fr`
  (expanded) — grid track sizes are animatable, so the browser interpolates
  the height smoothly with no measurement and no JS.
- Hidden radio inputs (`name="pca-group"`) track which panel is open,
  giving native, exclusive open/close behavior and full keyboard support
  (`Tab` + `Space`/`Enter`) for free.

## Files

- `demo.html` — 3-item FAQ-style accordion
- `style.css` — accordion structure, grid animation, focus states

## Accessibility

- Uses real `<label for>` / `<input type="radio">` pairing, so it's operable
  by keyboard and works with screen readers without extra ARIA wiring.
- `:focus-visible` outline included for keyboard users.

## Notes for maintainer review

Filed against issue #88584 ("Add pure CSS advanced component"). The original
issue body didn't specify which component to build, so this submission picks
a concrete, genuinely advanced pure-CSS pattern (animatable accordion via
grid tracks) rather than a placeholder. Happy to adjust naming/structure to
match `ease-*` conventions if the maintainer wants to standardize it.
