# Star Rating

## Summary

A pure CSS star rating component submitted for issue #86805 (Category:
Toggle). Hoverable, fills left to right, with a pop animation on
selection — no JS dependency.

## How it works

- Five `<input type="radio">` + `<label>` pairs share one `name`, so
  only one can be selected (native toggle behavior).
- The container uses `flex-direction: row-reverse`, so the *last*
  radio in the DOM renders as the *first* (leftmost) star on screen.
- `label:hover ~ label` and `input:checked ~ label` use the general
  sibling combinator to color every star that comes *after* the
  hovered/checked one in the DOM — which, thanks to the reversed flex
  order, are the stars visually to its *left*. This produces the
  left-to-right fill effect with zero JS.
- `input:checked + label` (adjacent sibling) isolates just the
  specifically selected star so only it gets the `ease-star-pop`
  keyframe animation, rather than every filled star re-popping.
- `prefers-reduced-motion` disables both the pop animation and hover
  transform for users who request reduced motion.

## Classes

- `ease-star-rating` — flex container (row-reverse), holds the
  radio/label pairs
- `ease-star-rating label` — individual star glyph
- `ease-star-rating-value` — optional helper text under the stars

## Files

- `demo.html` — live demo with an unrated example and a pre-selected
  (checked) example
- `style.css` — original CSS, single component

Relates to issue #86805.
