# Image Compare Slider

## What does this do?

A before/after comparison wipe where the divider position is controlled by a
native `<input type="range">`.

## How is it used?

```html
<div class="ics-frame" style="--pos: 50%">
  <div class="ics-layer ics-layer--before"></div>
  <div class="ics-layer ics-layer--after"></div>
  <span class="ics-divider" aria-hidden="true"></span>
  <input class="ics-range" type="range" min="0" max="100" value="50"
         aria-label="Reveal after image" />
</div>
```

One line of script mirrors the input value onto `--pos`; everything else is CSS.

## Why is it useful?

Comparison sliders are nearly always built from `mousedown`/`mousemove`/`mouseup`
handlers on a `<div>`. That version needs a parallel touch implementation, breaks
when the pointer leaves the frame mid-drag, and is completely inoperable by
keyboard because a `div` has no value and no focus behaviour.

Using a real range input removes all of it. Dragging, touch, and arrow-key
stepping are the browser's job. The control reports its value to assistive
technology as a slider with a percentage, which no amount of `div` plus ARIA
replicates as reliably. The input is stretched over the whole frame at
`opacity: 0`, so the visible handle is styling while the actual control is native.

The wipe itself is `clip-path: inset(0 0 0 var(--pos))`, which is composited and
does not trigger layout, so dragging stays smooth even at large image sizes. No
reduced-motion block is needed because nothing animates on its own — all movement
is directly user-driven, which WCAG 2.3.3 treats differently from autonomous
animation.
