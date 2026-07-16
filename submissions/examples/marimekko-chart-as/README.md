# Marimekko Chart

### What does this do?

It shows a Marimekko (Mekko) chart: a set of stacked bars where each column has a different width for one dimension and stacks to full height for another. Here the column widths show each region's share of revenue and the stacked segments show the tier mix within each region, with axis labels and a legend.

### How is it used?

```html
<div class="mk-col" style="--w: 34;">
  <span class="seg a" style="--h: 50%;">50</span>
  <span class="seg b" style="--h: 30%;">30</span>
  <span class="seg c" style="--h: 20%;">20</span>
</div>
```

Each column takes its width from `flex: var(--w) 0 0`, so wider columns represent larger regions, and each segment takes `height: var(--h)` to fill the column to 100 percent. The x labels share the same `--w` so they line up under their columns.

### Why is it useful?

Marimekko charts encode two proportions at once, showing both segment size and category share, common in market and revenue analysis. This renders one purely with flexbox from width and height custom properties, no charting library.
