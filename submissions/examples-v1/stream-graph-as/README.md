# Stream Graph

### What does this do?

It shows a stream graph (a streamgraph): stacked area bands that flow around a central baseline instead of a flat bottom, so each genre's share swells and shrinks over time as an organic ribbon. A legend names each band, and hovering one highlights it while the rest fade.

### How is it used?

```html
<svg viewBox="0 0 300 180">
  <path class="st s0" d="M8 64 L43 63 ... Z" />
  <path class="st s1" d="M8 87 L43 90 ... Z" />
</svg>
```

Each band is an SVG `path` whose top edge runs left to right and bottom edge returns right to left, with the stack centered so the whole shape floats around the middle. Class `s0` to `s4` set the fills, and a hover rule dims the others.

### Why is it useful?

Stream graphs show how several categories change share over time in a flowing, readable way, common in media and trend dashboards. This renders one from inline SVG paths styled with CSS, no charting library.
