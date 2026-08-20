# Highlight on Hover Row — #36728

Table-like rows that reveal an animated highlight (colored left border + background shift) on hover.

## CSS Custom Properties

| Property           | Default    | Description                          |
|--------------------|------------|--------------------------------------|
| `--row-bg`         | `#1e1e2e`  | Default row background               |
| `--row-hover-bg`   | `#2a2a3d`  | Row background on hover              |
| `--highlight-color`| `#7c6ff0`  | Animated border/glow accent color    |
| `--transition-speed` | `0.3s`   | Duration of hover transitions        |

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="table">
  <div class="row">Item one</div>
  <div class="row">Item two</div>
  <div class="row">Item three</div>
</div>
```

Rows animate a left-border accent and background on hover.
