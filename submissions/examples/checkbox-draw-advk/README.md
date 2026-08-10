# Drawn Checkbox

## What does this do?

A checkbox whose tick is stroked on along its own path instead of appearing or
fading in.

## How is it used?

```html
<label class="cbd">
  <input type="checkbox" />
  <span class="cbd-box">
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <polyline points="4,10.5 8.5,15 16,5.5" />
    </svg>
  </span>
  Task label
</label>
```

## Why is it useful?

A tick that fades in gives no sense of the action being completed; a tick that
draws reads as the mark being made. The technique is `stroke-dasharray` set to
the path length with a matching `stroke-dashoffset`, animated to zero — the
dash pattern is longer than the path, so reducing the offset slides the visible
segment along it.

`overflow: visible` on the SVG matters: the round line caps extend slightly past
the declared viewBox, and without it the tips of the tick are clipped.

The native input remains the control and is only visually hidden, so checked
state, keyboard activation, form submission and label association all come from
the platform. The 60ms transition delay lets the box background finish filling
before the stroke starts, so the tick is never drawn against a half-coloured
background.

Under `forced-colors` the stroke switches to `HighlightText` against a `Highlight`
fill, which keeps the tick visible — a white stroke would vanish once the system
substitutes the box colour.
