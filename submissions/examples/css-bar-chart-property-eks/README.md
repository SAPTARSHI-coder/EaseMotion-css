# CSS Bar Chart with @property Animated Bars

## What does this do?

A pure CSS horizontal bar chart using `@property` for animated bar growth, CSS Grid for chart layout, and `color-mix()` for color scales. No JavaScript, no SVG, no canvas — just CSS.

## How is it used?

```html
<div class="chart-grid">
  <div class="y-axis">
    <span>$50k</span>
    <span>$40k</span>
    <span>$30k</span>
    <span>$20k</span>
    <span>$10k</span>
    <span>$0</span>
  </div>

  <div class="bar-column">
    <div class="bar-label">Jul</div>
    <div class="bar bar-jul" style="--bar-value: 42" role="img" aria-label="July: $42,000">
      <span class="bar-value">$42k</span>
    </div>
  </div>
  <!-- More bars... -->
</div>
```

Each bar accepts `--bar-value` (0–50) via inline `style`, which maps to `calc(var(--bar-value) * 2%)` height. Bars animate in on load with staggered delays.

Two chart variants are included: a single-series revenue chart and a stacked completion/pending chart.

## Why is it useful?

Data visualization typically requires JavaScript libraries (D3, Chart.js) or SVG. This submission proves that simple bar charts are possible in pure CSS:

- **`@property`** — registers `--bar-pct` as an animatable `<number>`, allowing CSS transitions on custom properties
- **CSS Grid** — aligns bars, labels, and y-axis markers in a clean declarative layout
- **`color-mix()`** — generates light/dark variants from a single base color for gradient bars
- **Staggered animations** — CSS `animation-delay` offsets per bar for a sequential reveal
- **Accessible** — each bar has `role="img"` and `aria-label`, the grid has `role="img"` with descriptive labels

This fits EaseMotion's philosophy: expressive, readable code that leverages the platform — no build tools, no JavaScript rendering, just CSS.
