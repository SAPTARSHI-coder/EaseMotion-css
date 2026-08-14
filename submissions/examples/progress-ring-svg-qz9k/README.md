# SVG Progress Ring

## What does this do?

A circular progress indicator built from an SVG `<circle>` whose visible
arc length is controlled by `stroke-dasharray`/`stroke-dashoffset`, with
the full circumference computed from the circle's own radius rather than
measured and hard-coded.

## How is it used?

```js
var PRS_RADIUS = 42;
var PRS_CIRCUMFERENCE = 2 * Math.PI * PRS_RADIUS;

function prsSet(percent) {
  var offset = PRS_CIRCUMFERENCE - (percent / 100) * PRS_CIRCUMFERENCE;
  circle.style.strokeDashoffset = offset;
}
```

```html
<circle id="prs-circle" class="prs-fill" cx="50" cy="50" r="42" />
```

`stroke-dasharray` is set to the full circumference (making the dash
pattern one long dash equal to the whole circle), and `stroke-dashoffset`
shifts how much of that dash is hidden — offsetting by the full
circumference hides the entire stroke; offsetting by 0 shows all of it.

## Why is it useful?

The circumference of a `stroke-dasharray`-based progress ring is often
hard-coded as a measured or guessed pixel value (`stroke-dasharray:
264`), which works for exactly one radius — resizing the ring, or reusing
the same technique at a different radius elsewhere on the page, silently
breaks unless someone re-measures and updates that number by hand.
Deriving it as `2 * Math.PI * radius` from the circle's actual `r`
attribute means the fill math is always correct for whatever radius the
circle happens to have, with the relationship between size and
circumference expressed as real geometry rather than a value that has to
be kept in sync by memory.

Using `role="progressbar"` with `aria-valuenow` on the `<svg>` itself
(updated on every `prsSet` call) exposes the current percentage to
assistive technology independent of the visual ring — a screen reader
announces the actual numeric value rather than needing to interpret an arc
length, which conveys nothing meaningful non-visually on its own.
