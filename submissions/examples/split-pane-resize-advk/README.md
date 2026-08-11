# Split Pane

## What does this do?

A resizable two-pane layout where the divider is a native range input, making the
split keyboard-adjustable.

## How is it used?

```html
<div class="spl" style="--split:45%">
  <section class="spl-p">Left</section>
  <input class="spl-h" type="range" min="15" max="85" value="45" aria-label="Resize panes" />
  <section class="spl-p">Right</section>
</div>
```

## Why is it useful?

Split panes are the standard example of a mouse-only widget. The usual build is a
`<div>` divider with `mousedown`/`mousemove`/`mouseup`, which means the split
cannot be adjusted without a pointer, breaks if the pointer leaves the window
mid-drag, and needs a parallel touch implementation.

A range input is already a "pick a value between two bounds" control, which is
exactly what a divider is. Dragging, touch, and arrow-key stepping come from the
browser, and the current split is announced as a percentage rather than being
invisible to assistive technology.

Stretching the input across the middle grid column with transparent thumbs means
the visible divider is entirely CSS, while the real control underneath keeps all
its native behaviour. `min` and `max` of 15/85 prevent either pane collapsing to
nothing, which a hand-rolled drag has to clamp manually.

Below 30rem the grid switches to rows and the divider becomes horizontal, since a
side-by-side split on a phone leaves both panes too narrow to use.
