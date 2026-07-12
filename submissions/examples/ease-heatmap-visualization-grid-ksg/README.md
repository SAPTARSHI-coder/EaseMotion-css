# ease-heatmap-visualization-grid

## What does this do?
A fully CSS-driven heatmap visualization grid with staggered cell-reveal animation,
a 7-step color-temperature intensity scale, CSS-variable-based swappable color themes,
tooltip-on-hover, and labeled row/column axes — suitable for displaying any
two-dimensional density or frequency dataset.

## How is it used?

### Minimal structure

```html
<!-- Wrapper — add a theme class to override the color scale -->
<div class="heatmap-grid-wrapper">

  <!-- Optional header -->
  <div class="heatmap-grid-header">
    <div class="heatmap-grid-title">Your Title</div>
    <div class="heatmap-grid-subtitle">Your subtitle / date range</div>
  </div>

  <!-- Axis layout -->
  <div class="heatmap-axis-layout">

    <!-- Y-axis row labels -->
    <div class="heatmap-y-axis">
      <div class="heatmap-y-label">Label A</div>
      <div class="heatmap-y-label">Label B</div>
    </div>

    <div class="heatmap-main">

      <!-- X-axis column labels -->
      <div class="heatmap-x-axis">
        <div class="heatmap-x-label">Col 1</div>
        <div class="heatmap-x-label">Col 2</div>
      </div>

      <!-- One .heatmap-row per Y value -->
      <div class="heatmap-row">
        <!-- Each cell: intensity class + stagger delay + tooltip -->
        <div class="hg-cell hg-lvl-3 hg-d-0" data-tip="Col 1 · Label A · 680"></div>
        <div class="hg-cell hg-lvl-5 hg-d-6" data-tip="Col 2 · Label A · 1.8k"></div>
      </div>

      <div class="heatmap-row">
        <div class="hg-cell hg-lvl-1 hg-d-1" data-tip="Col 1 · Label B · 95"></div>
        <div class="hg-cell hg-lvl-0 hg-d-7" data-tip="Col 2 · Label B · 0"></div>
      </div>

    </div>
  </div>

  <!-- Legend -->
  <div class="heatmap-legend">
    <span class="heatmap-legend-label">Less</span>
    <div class="heatmap-legend-scale">
      <div class="hg-legend-swatch hg-swatch-0"></div>
      <div class="hg-legend-swatch hg-swatch-1"></div>
      <div class="hg-legend-swatch hg-swatch-2"></div>
      <div class="hg-legend-swatch hg-swatch-3"></div>
      <div class="hg-legend-swatch hg-swatch-4"></div>
      <div class="hg-legend-swatch hg-swatch-5"></div>
      <div class="hg-legend-swatch hg-swatch-6"></div>
    </div>
    <span class="heatmap-legend-text">More</span>
  </div>

</div>
```

### Intensity classes (`.hg-lvl-{0–6}`)

| Class | Meaning |
|---|---|
| `hg-lvl-0` | Empty / no data |
| `hg-lvl-1` | Very low |
| `hg-lvl-2` | Low |
| `hg-lvl-3` | Medium |
| `hg-lvl-4` | High |
| `hg-lvl-5` | Very high |
| `hg-lvl-6` | Peak |

### Stagger delay classes (`.hg-d-{0–47}`)
Assign `.hg-d-{column_index}` to each cell. Column 0 appears first; each
subsequent class adds 30 ms delay so the grid reveals left-to-right
with a wave effect.

### Color themes
Add a modifier class to `.heatmap-grid-wrapper`:

```html
<!-- Default thermal (blue → red) — no extra class needed -->
<div class="heatmap-grid-wrapper"> … </div>

<!-- Purple spectrum -->
<div class="heatmap-grid-wrapper heatmap-theme-purple"> … </div>

<!-- Green mono -->
<div class="heatmap-grid-wrapper heatmap-theme-green"> … </div>
```

### Tooltip
Add `data-tip="your label"` to any `.hg-cell` and the tooltip appears on
hover via a pure CSS `::after` pseudo-element — no JavaScript required.

## Why is it useful?
EaseMotion CSS already has GitHub-style contribution grids. This component is
deliberately different:

| Feature | This component | Existing submissions |
|---|---|---|
| Color scale | 7-step thermal cool→hot | 5-step green only |
| Color themes | 3 swappable via CSS custom properties | Fixed green palette |
| Axis labels | Named row + column axes | No axis labels |
| Tooltip | CSS-only `data-tip` on every cell | No tooltip |
| Stagger reveal | Column-wave (left → right) | Row pop-in |
| Use case | General 2-D data visualization | GitHub contribution tracking |

The component is useful for dashboards, analytics panels, server monitoring
widgets, calendar-based frequency views, and any interface that needs to
communicate density across two dimensions.

## Accessibility
- `role="row"` and `role="gridcell"` on all structural elements.
- `aria-label` on meaningful cells; `aria-hidden` on decorative axis labels.
- `tabindex="0"` on every cell so keyboard users can navigate and trigger
  focus-visible tooltips.
- Full `prefers-reduced-motion: reduce` support — animations are disabled and
  cells appear instantly; hover still brightens cells slightly via `filter`.

## Tech Stack
- HTML5
- CSS3 — custom properties, `clip-path`, `@keyframes`, `::after` tooltips
- Minimal JS in demo only (3-line theme class swap) — the CSS component itself
  requires zero JavaScript

## Preview
Open `demo.html` directly in any modern browser. Click the theme buttons to
switch color scales; hover cells to read values.

## Contribution Notes
- Class names (`heatmap-grid-wrapper`, `hg-cell`, `hg-lvl-*`, etc.) are
  contributor-style; the maintainer will rename to `ease-*` convention before merging.
- Unique suffix `-ksg` appended per contribution policy to avoid naming conflicts.
