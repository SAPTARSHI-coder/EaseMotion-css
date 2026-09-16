# Split-Flap Counter

## What does this do?

A digit display that flips like a mechanical split-flap (departure board)
counter: when a digit changes, its card rotates down on the X-axis to
reveal the new value underneath, instead of just cross-fading or swapping
text.

## How is it used?

```html
<span class="sfc-digit">
  <span class="sfc-current">0</span>
  <span class="sfc-next">0</span>
</span>
<script>sfcSet(digitEl, 7);</script>
```

`sfcSet` writes the target digit into `.sfc-next` first, retriggers the flip
animation via a forced reflow (`void el.offsetWidth`), then commits the new
value into `.sfc-current` once the flip's `animationend` fires — so the
visible digit only changes at the exact moment the card has rotated past
90° and would show the back face anyway.

## Why is it useful?

A naive digit-flip effect just cross-fades old and new text, which reads as
a dissolve rather than a mechanical flip. Stacking `.sfc-next` exactly
behind `.sfc-current` and rotating only the front card means the new digit
is genuinely revealed by the old one rotating away, matching how a real
split-flap display works: the front card's back face is a different colour
from its front, so the flip has two visually distinct halves rather than
one card just disappearing.

The forced reflow (`void el.offsetWidth`) between removing and re-adding the
`sfc-flip` class is necessary because otherwise the browser can coalesce the
two class changes into one paint and the animation never restarts on a
second flip of the same digit.
