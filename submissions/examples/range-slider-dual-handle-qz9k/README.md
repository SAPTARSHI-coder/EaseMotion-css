# Dual Handle Range

## What does this do?

A min/max price range slider built from two overlapping native
`<input type="range">` elements sharing one visual track, instead of a
custom-built drag implementation.

## How is it used?

```html
<div class="drh-slider">
  <div class="drh-track" id="drh-track"><div class="drh-range" id="drh-range"></div></div>
  <input type="range" id="drh-min" class="drh-input drh-input-min" min="0" max="100" value="20" oninput="drhUpdate()" />
  <input type="range" id="drh-max" class="drh-input drh-input-max" min="0" max="100" value="80" oninput="drhUpdate()" />
</div>
```

`drhUpdate` clamps the two values so they can't fully cross (a 5-unit
minimum gap), then positions `.drh-range` — a visual overlay showing the
selected span — between them.

## Why is it useful?

Two full-width overlapping range inputs stacked on top of each other have
an obvious problem: whichever input is on top in the DOM (or has the
higher effective hit area at a given click point) captures every click,
making the other handle undraggable. Setting `pointer-events: none` on the
inputs themselves and restoring `pointer-events: auto` only on their
`::-webkit-slider-thumb`/`::-moz-range-thumb` pseudo-elements means each
input's hit area shrinks down to just its own thumb — a click anywhere
else on the track passes through to whichever input's thumb is actually
under the pointer, so both handles stay independently draggable regardless
of stacking order.

Using two real `<input type="range">` elements (rather than a fully custom
pointer-drag implementation) means both handles get native keyboard
support — Tab between them, arrow keys to nudge — for free, along with
correct behaviour on touch devices without any gesture code of this
component's own. The 5-unit minimum gap enforced in `drhUpdate` prevents an
ambiguous state where "min" and "max" would represent the same or
inverted values.
