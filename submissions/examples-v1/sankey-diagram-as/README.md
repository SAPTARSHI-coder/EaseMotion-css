# Sankey Diagram

### What does this do?

It shows a Sankey diagram of traffic flowing from sources to outcomes. Source and outcome nodes stand as bars on each side, and curved ribbons connect them with a thickness that reflects the size of each flow. Ribbons brighten on hover.

### How is it used?

```html
<svg viewBox="0 0 300 240">
  <path class="fl a" d="M36 50 C150 50 150 80 264 80 L264 160 C150 160 150 130 36 130 Z" />
  <rect class="nd a" x="20" y="10" width="16" height="120" />
</svg>
```

Each flow is a filled SVG `path` built from two bezier curves (a top and a bottom edge) so it reads as a smooth ribbon between a segment of a source node and a segment of a target node. Node `rect` bars mark the totals, and classes set the colors.

### Why is it useful?

Sankey diagrams show how quantities split and merge across stages, common for traffic, energy, and budget flows. This renders one from inline SVG ribbons and nodes styled with CSS, with no diagram library.
