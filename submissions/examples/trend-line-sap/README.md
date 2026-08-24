# Trend Line

A compact responsive trend-line visualization with positive, negative, and neutral variants plus animated SVG line drawing.

## Usage

Create a trend line using an SVG path:

```html
<svg
  class="trend-line trend-line--positive"
  viewBox="0 0 320 100"
  preserveAspectRatio="none"
  aria-label="Revenue increased over time"
>
  <path
    class="trend-line__path"
    pathLength="1"
    d="M0 82 C35 70 50 55 80 62 S120 42 150 48 S200 25 230 35 S275 15 320 8"
  />
</svg>
```

## Variants

Positive:

```html
<svg class="trend-line trend-line--positive">...</svg>
```

Negative:

```html
<svg class="trend-line trend-line--negative">...</svg>
```

Neutral:

```html
<svg class="trend-line trend-line--neutral">...</svg>
```

## Sizes

```html
<svg class="trend-line trend-line--small">...</svg>
<svg class="trend-line trend-line--medium">...</svg>
<svg class="trend-line trend-line--large">...</svg>
```

The SVG uses `viewBox` sizing and `preserveAspectRatio="none"` so the visualization can adapt to its available container.

## Why it is useful

Trend lines, also known as sparklines, provide a compact way to communicate the direction and shape of a dataset without the overhead of axes, labels, or a full chart. They are particularly useful inside KPI cards, financial dashboards, analytics tables, and monitoring interfaces.

The demo uses SVG only for describing the line geometry; the visual styling and entrance animation are handled by CSS. No JavaScript, external library, CDN, or charting dependency is required.

The animation uses a normalized SVG path length so the line can draw itself consistently regardless of the path's actual geometry. The component also includes responsive sizing and `prefers-reduced-motion` support.
