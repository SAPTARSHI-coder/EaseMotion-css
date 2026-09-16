# Rating Hearts

## What does this do?

A five-heart rating widget using the same radio-driven sibling-combinator
fill technique as a star rating, with one addition: the newly selected
heart pulses briefly, distinguishing "just selected" from "hovering."

## How is it used?

```html
<div class="rht-hearts">
  <input type="radio" id="rht-5" name="rht-rating" value="5" />
  <label for="rht-5" class="rht-heart">♥<span class="rht-sr">5 hearts</span></label>
  <!-- ...4 down to 1 -->
</div>
```

Same 5→1 source order, `row-reverse` display as a star rating: sibling
combinators only look at later-in-source elements, so the highest value has
to come first in markup to visually appear last (rightmost after reversal).

## Why is it useful?

Hover-preview and "just selected" often get conflated into one visual
treatment, but they mean different things — one is provisional, the other
is committed. Restricting the pulse keyframe animation to `:checked` (not
`:hover`) keeps that distinction: hovering only shifts colour, and only an
actual selection triggers the emphasis animation, so a user scanning
options with the mouse doesn't see the confirmation cue fire on every
heart they pass over.

The animation also needs to replay if the *same* heart is re-selected (a
common interaction — click a value, decide, click it again to confirm) —
browsers don't restart a CSS animation on an unrelated style recompute
unless `animation-name` itself changes, but re-applying `:checked` after a
brief unchecked state (radio group semantics: selecting a different button
first) does trigger a fresh application, which this relies on rather than
JS-driven class toggling.
