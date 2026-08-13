# Star Rating Hover

## What does this do?

A 5-star rating widget built from radio inputs and labels, with no
JavaScript. Hovering or focusing a star previews the fill up to that star;
selecting one keeps the fill after the pointer leaves.

## How is it used?

```html
<div class="srh-stars">
  <input type="radio" id="srh-5" name="srh-rating" value="5" />
  <label for="srh-5" class="srh-star">★<span class="srh-sr">5 stars</span></label>
  <!-- ...4 down to 1, in that source order -->
</div>
```

Stars must be written 5 → 1 in the DOM and displayed reversed with
`flex-direction: row-reverse`. That ordering is what lets `~` (general
sibling) and `:hover`/`:checked` select "this star and every star that
should also light up," since CSS can only combine with later siblings.

## Why is it useful?

Most star ratings reach for JavaScript to track a hovered index and re-render
fill state. Reordering the markup avoids that: the browser's own sibling
combinators do the "fill up to here" logic, so the widget keeps working with
CSS disabled down to plain radio buttons, and there's no hydration mismatch
between server-rendered and client-rendered fill state.

Each input carries a visually-hidden accessible label (`5 stars`, `4 stars`,
...) via `.srh-sr`, so screen readers announce a meaningful value rather than
a bare glyph, and `:focus-visible` gives keyboard users the same preview
hover users get.
