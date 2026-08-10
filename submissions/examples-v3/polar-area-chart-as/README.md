# Polar Area Chart

### What does this do?

It shows a polar area chart, also called a Nightingale rose. Six wedges share the circle equally by angle, but each extends to a different radius based on its value, over concentric gridlines. A legend names each wedge and the segments brighten on hover.

### How is it used?

```html
<svg viewBox="0 0 220 220">
  <circle cx="110" cy="110" r="46" />
  <path class="s2" d="M110 110 L187 154 A89 89 0 0 1 110 199 Z" />
</svg>
```

Each wedge is an SVG `path` from the center out along an arc whose radius encodes the value. Concentric `circle` gridlines give the scale, and class `s0` through `s5` set the segment colors that the legend mirrors.

### Why is it useful?

Polar area charts compare cyclic data like days or months where each slice keeps a fixed angle but varies in magnitude. This renders one from inline SVG arcs styled with CSS, with no charting library.
