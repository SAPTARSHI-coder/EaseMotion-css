# Gauge Meter

## What does this do?

A half-circle gauge with a filled arc and a rotating needle, both driven by one
value property.

## How is it used?

```html
<div class="ggm" style="--v:0.72" role="img" aria-label="Memory 72 percent, warning">
  <span class="ggm-needle"></span>
  <span class="ggm-hub"></span>
</div>
```

`--v` is a 0–1 fraction. Add `ggm--warn` or `ggm--crit` for the threshold tints.

## Why is it useful?

Gauges are common in dashboards and usually arrive via a charting library or as a
static SVG that has to be regenerated per value.

The arc uses `conic-gradient(from 270deg, ...)` with the sweep expressed as
`calc(var(--v) * 180deg)`, so only half the circle is coloured and the parent's
`border-radius: 8rem 8rem 0 0` plus `overflow: hidden` clips away the unused half.
The `mask` turns the disc into a ring.

The important property is that the needle rotates from the *same* `--v`:
`rotate: calc(-90deg + var(--v) * 180deg)`. Gauges built as two components — an
arc from data and a needle positioned separately — drift apart the moment someone
edits one and not the other, and the resulting dial is subtly wrong in a way
nobody notices. Deriving both from one value makes that impossible.

`role="img"` with a label carrying both the number and the severity word means the
reading is available without seeing the dial, and the threshold is communicated by
text rather than by tint alone.
