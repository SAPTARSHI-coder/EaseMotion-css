# Sparkline

## What does this do?

Inline trend charts that draw themselves on load, sized to sit alongside text in
a metrics list.

## How is it used?

```html
<svg class="spk" viewBox="0 0 100 28" preserveAspectRatio="none" aria-hidden="true">
  <polyline points="0,22 14,19 28,20 42,12 56,14 70,7 84,9 100,3"/>
</svg>
<b class="spk-v spk-v--up">+18%</b>
```

Add `spk--down` or `spk--flat` to change the trend colour.

## Why is it useful?

Sparklines are usually rendered with a charting library or on a canvas, both of
which are heavy for what is a single polyline, and both produce output that is
invisible to assistive technology.

Two SVG attributes do the real work here. `preserveAspectRatio="none"` lets the
`0 0 100 28` viewBox stretch to whatever inline width it is given, so the same
point list works in a narrow sidebar and a wide table without recomputation. And
`vector-effect: non-scaling-stroke` keeps the line an even 2px after that stretch
— without it the horizontal scaling distorts the stroke into a wedge, which is the
most common defect in stretched SVG charts.

The draw-on animation is `stroke-dashoffset` against a dash pattern longer than
the path, the same technique as the drawn checkbox.

The chart is `aria-hidden` and the trend is carried by the adjacent `+18%` text.
That is deliberate: a polyline has no accessible representation worth exposing,
and the percentage is the information. Colour is paired with a sign (`+`, `-`, `±`)
so the direction does not depend on distinguishing green from red.
