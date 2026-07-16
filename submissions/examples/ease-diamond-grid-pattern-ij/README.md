# Diamond Grid Pattern

A staggered diamond grid entrance animation using CSS clip-path.

## CSS Custom Properties

| Variable            | Default    | Description                   |
|---------------------|------------|-------------------------------|
| `--diamond-color`   | `#7c3aed`  | Fill color of each diamond    |
| `--grid-bg`         | `#0f0f1a`  | Card background color         |
| `--diamond-size`    | `40px`     | Width and height of diamonds  |
| `--stagger-duration`| `0.6s`     | Duration of each diamond's entrance |

## Usage

```html
<link rel="stylesheet" href="style.css">
<div class="card">
  <div class="diamond-grid">
    <div class="diamond" style="--i:0"></div>
    <!-- add more diamonds with incremental --i -->
  </div>
</div>
```

Each diamond uses `--i` for stagger delay. The grid rotates 45° to form the diamond pattern.
