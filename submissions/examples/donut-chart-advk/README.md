# Donut Chart

## What does this do?

A segmented donut chart drawn with a single `conic-gradient`, sweeping in on
load, with a value in the centre.

## How is it used?

```html
<div class="dnt" style="--a:42%; --b:69%; --c:88%"
     role="img" aria-label="core 42 percent, components 27 percent, engine 19 percent, other 12 percent">
  <span class="dnt-hole"><b>18.4</b><small>kB</small></span>
</div>
```

`--a`, `--b`, `--c` are **cumulative** boundaries, not slice widths: for slices of
42/27/19/12 they are 42%, 69%, 88%.

## Why is it useful?

Charting libraries are heavy for a single donut, and the SVG alternative needs
`stroke-dasharray` arithmetic per slice plus a rotation offset for each. A
`conic-gradient` with hard stops expresses the whole chart in one declaration,
and the browser handles the geometry.

Using cumulative boundaries rather than widths is what keeps it declarative — each
stop is simply where the previous one ended, so a template can emit a running sum
without any per-slice rotation.

The hole is a real inner element rather than a `mask`, which is a deliberate
trade: a masked donut is transparent in the middle and cannot hold a label, while
an inner disc can carry the total, which is the number people actually want.

`role="img"` with a full `aria-label` matters here more than usual — a gradient is
completely opaque to assistive technology, so without it the chart conveys nothing.
Under `forced-colors` the gradient is dropped for a plain bordered ring, since
conic gradients are not painted in High Contrast, and the legend swatches keep
`forced-color-adjust: none` so the colour key stays meaningful.
