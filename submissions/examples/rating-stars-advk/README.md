# Rating Stars

## What does this do?

A five-star rating input built from radio buttons, plus a read-only display that
renders fractional scores like 4.3.

## How is it used?

```html
<div class="rts">
  <input class="rts-in" type="radio" name="r" id="r5" />
  <label class="rts-star" for="r5" title="5 stars"></label>
  <!-- r4 down to r1, in descending order -->
</div>

<p class="rts-static" style="--score: 4.3" role="img" aria-label="Rated 4.3 out of 5">
  <span></span>
</p>
```

## Why is it useful?

Star ratings have a well-known CSS problem: hovering star 4 must light stars 1
through 4, but CSS sibling combinators only reach *forward*. The usual answers
are `:has()`, which is still not universal, or a pile of JavaScript.

Laying the stars out in descending DOM order and reversing them visually with
`flex-direction: row-reverse` turns "everything to the left" into "everything
after", which the plain `~` combinator handles. The result needs no `:has()`, no
script, and works back to any browser with flexbox.

Using radios rather than clickable spans means the value submits with a form,
arrow keys move between ratings, and the control is announced as a radio group.
Each label carries a `title` so the meaning of an unlabelled shape is available
on hover and to assistive technology.

The read-only display solves fractions with a single overlay clipped by
`width: calc(var(--score) / 5 * 100%)`, so any decimal score works without
per-half-star classes. Both layers are `repeating-linear-gradient`, so five stars
cost two elements rather than ten.
