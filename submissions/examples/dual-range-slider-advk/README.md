# Dual Range Slider

## What does this do?

A two-thumb min/max filter built from two overlaid native range inputs.

## How is it used?

```html
<div class="drs" style="--lo:20%; --hi:70%">
  <span class="drs-track" aria-hidden="true"></span>
  <span class="drs-fill" aria-hidden="true"></span>
  <input class="drs-i drs-i--lo" type="range" min="0" max="100" value="20" aria-label="Minimum price" />
  <input class="drs-i drs-i--hi" type="range" min="0" max="100" value="70" aria-label="Maximum price" />
</div>
```

## Why is it useful?

There is no native two-thumb range input, so this is almost always a JavaScript
widget built from divs — which means no keyboard support, no announced values,
and a custom drag implementation per project.

Stacking two real inputs keeps both thumbs as genuine controls: each is
independently focusable, steppable with arrow keys, and announced with its own
label and current value. A screen reader user can set a price range, which the div
version makes impossible.

The technique that makes the overlay work is `pointer-events: none` on the input
element with `pointer-events: auto` restored on the thumb pseudo-elements. Without
it the upper input's invisible body covers the entire track and the lower thumb
becomes ungrabbable across most of its range — the single most common bug in
hand-rolled dual sliders.

Each input clamps against the other on `input`, so the thumbs cannot cross and
produce an inverted range. The fill between them is a separate element positioned
from `--lo` and `--hi`, so it needs no gradient recalculation.
