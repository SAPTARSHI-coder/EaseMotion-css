# ease-data-export-progress-ij

Data export progress with animated bar fill.

## CSS Custom Properties

| Property          | Default  | Description              |
|------------------|----------|--------------------------|
| `--bar-color`     | #22d3ee  | Start color of fill      |
| `--bar-bg`        | #1e293b  | Background of bar track  |
| `--fill-color`    | #06b6d4  | End color of fill        |
| `--fill-duration` | 2s       | Fill animation duration  |

## Usage

```html
<link rel="stylesheet" href="path/to/style.css">

<div class="bar-wrapper">
  <div class="bar-fill" style="width: 50%;"></div>
</div>
```

Update `width` on `.bar-fill` programmatically. The shimmer overlay animates automatically.
