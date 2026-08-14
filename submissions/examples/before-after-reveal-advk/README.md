# Before/After Reveal

## What does this do?

A before/after comparison slider: dragging a handle reveals more or less of
the "after" layer over the "before" layer beneath it, using a range input to
drive a `clip-path: inset()` custom property.

## How is it used?

```html
<div class="bar-compare">
  <div class="bar-layer bar-before">Before</div>
  <div class="bar-layer bar-after" style="--bar-pos: 50%">After</div>
  <input type="range" class="bar-range" min="0" max="100" value="50"
    oninput="this.previousElementSibling.style.setProperty('--bar-pos', this.value + '%')" />
  <div class="bar-handle" style="left: 50%"></div>
</div>
```

The range input is stretched transparent (`opacity: 0`) over the entire
compare area so it captures drag/click input anywhere in the frame, not just
along a thin visible track; a separate `.bar-handle` element supplies the
visible dividing line and thumb.

## Why is it useful?

Building a draggable before/after divider by hand means implementing
pointer capture, drag bounds clamping, and touch support from scratch. Using
a native `<input type="range">` for the interaction gets all of that free —
keyboard arrow-key stepping, touch dragging, and click-to-jump — while its
native visuals are hidden entirely so the custom `.bar-handle` can be styled
independently without fighting the browser's thumb/track rendering across
engines.

Driving the clip with a CSS custom property (`--bar-pos`) rather than
directly setting `clip-path` from JS on every input event keeps the actual
clip-path expression declared once in CSS, so changing the reveal direction
or transition timing later doesn't require touching the script.
