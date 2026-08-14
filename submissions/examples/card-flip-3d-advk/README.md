# 3D Flip Card

## What does this do?

A card that rotates in 3D to reveal a reverse face, driven by `aria-pressed` on a
real button.

## How is it used?

```html
<div class="flc">
  <button class="flc-in" type="button" aria-pressed="false">
    <span class="flc-face flc-face--front">Front</span>
    <span class="flc-face flc-face--back">Back</span>
  </button>
</div>
```

Toggling `aria-pressed` flips the card; no other state is needed.

## Why is it useful?

Flip cards are usually done with `:hover` on a `div`, which makes them
unreachable by keyboard and unusable on touch, where there is no hover state to
enter or leave. Using a `<button>` with `aria-pressed` gives click, Enter, Space
and touch for free, and announces the flipped state rather than leaving it purely
visual.

Keeping both faces in the DOM at all times — rather than swapping content — means
the reverse text is present for find-in-page and screen readers regardless of
which side is showing, so the card is not hiding information behind an
interaction.

The reduced-motion path is a genuine redesign rather than a disabled animation.
`backface-visibility` is switched back on and the rotation dropped, so the faces
crossfade in place. Simply removing the transform would leave both faces stacked
and visible simultaneously, which is why the two properties have to change
together.
