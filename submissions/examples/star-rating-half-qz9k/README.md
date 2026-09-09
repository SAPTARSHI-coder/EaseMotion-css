# Half-Star Rating

## What does this do?

A 5-star rating widget supporting half-point increments (3.5, 4.5), built
from ten real radio inputs — two per visual star, a left half and a right
half — rather than a slider or a JS-computed fractional fill percentage.

## How is it used?

```html
<input type="radio" id="shr-3-5" name="shr-rating" value="3.5" />
<label for="shr-3-5" class="shr-half shr-half--left"><span class="shr-sr">3.5 stars</span></label>
<input type="radio" id="shr-4" name="shr-rating" value="4" />
<label for="shr-4" class="shr-half shr-half--right"><span class="shr-sr">4 stars</span></label>
```

Each label is half the width of a full star glyph, clipped via
`clip-path: inset()` to show only its own half — the left label clips away
the right side of the `★` character, the right label clips away the left
side, so the two halves visually reconstruct one whole star.

## Why is it useful?

A whole-star rating widget's sibling-combinator fill technique (checking
one radio fills every star before it) extends naturally to half-stars only
if there's a real radio input for every half-point value — otherwise the
"fill up to here" logic has nothing to fill up to for a fractional value,
and a common workaround falls back to computing a fill percentage in
JavaScript from a slider's continuous value instead, which loses the pure-
CSS, no-JS quality the whole-star version has. Splitting each visual star
into two half-width, half-clipped labels sharing one glyph means every
half-point value gets its own real radio input, and the exact same
sibling-combinator technique from a whole-star rating applies unmodified —
the widget stays entirely CSS-driven, just with twice as many discrete
steps.

Each half carries its own visually-hidden accessible label ("3.5 stars",
"4 stars") rather than a bare glyph fragment, so a screen reader announces
a specific, meaningful value for every selectable half-star rather than an
ambiguous "half of a star" with no numeric context.
