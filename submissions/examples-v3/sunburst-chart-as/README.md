# Sunburst Chart

### What does this do?

It shows a sunburst chart: a two ring radial hierarchy. The inner ring holds top level categories and the outer ring splits each one into subcategories, with a total in the center. Segments share colors by family and highlight on hover.

### How is it used?

```html
<svg viewBox="0 0 220 220">
  <path class="seg a1" d="M110 18 A92 92 0 0 1 201.82 104.22 L171.88 106.11 A62 62 0 0 0 110 48 Z" />
  <path class="seg a" d="M110 50 A60 60 0 0 1 145.27 158.54 L127.63 134.27 A30 30 0 0 0 110 80 Z" />
</svg>
```

Each segment is an SVG annular sector: two arcs joined by radial lines. Inner segments use a base color and their outer children use lighter shades of the same hue, so the hierarchy is easy to read.

### Why is it useful?

Sunburst charts show hierarchical part to whole data, like budgets, files, or categories with subcategories. This renders one from inline SVG sectors styled with CSS, with no charting library.
