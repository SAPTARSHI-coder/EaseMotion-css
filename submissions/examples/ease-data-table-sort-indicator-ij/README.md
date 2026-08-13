# Data Table Sort Indicator

Sortable data table with animated column sort indicators and smooth row repositioning.

## Features

- Click column headers to toggle ascending / descending sort
- Sort arrow rotates 180° on direction change via CSS `transform`
- Rows smoothly transition to new positions after re-sort
- Fully customizable via CSS custom properties

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--sort-duration` | `0.25s` | Duration of sort arrow and row transitions |
| `--sort-header-bg` | `#1e1e2a` | Table header background |
| `--sort-arrow-color` | `#6366f1` | Active sort arrow color |
| `--sort-row-hover` | `#2a2a3a` | Row hover background |
| `--sort-border` | `#2d2d3d` | Table cell border color |

## Usage

```html
<link rel="stylesheet" href="style.css">
```

Add `data-col` and `data-sort` attributes to `<th>` elements. Each header must contain a `.sort-arrow` span. Clicking a header sorts the column and updates the arrow direction.
