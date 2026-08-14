# Energy Bar Fill

Animated energy bar fill with gauge level transition. Features a shimmer highlight overlay and smooth cubic-bezier overflow animation when filling.

## Features

- Animated gauge fill with configurable level
- Shimmer sweep effect on fill
- 4 themed bar variants (Health, Mana, Stamina, Shield)
- Range slider or programmatic control
- Dark theme card grid layout

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="ebf-bar" id="myBar">
  <div class="ebf-fill" style="--fill-level: 0.75;"></div>
  <span class="ebf-label">75%</span>
</div>

<script>
  setEnergy('myBar', 75);
</script>
```

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--bar-bg` | `#1e1e2e` | Bar track background |
| `--fill-color` | `#22c55e` | Fill color |
| `--fill-level` | `0.5` | Current fill level (0–1) |
| `--fill-duration` | `1.2s` | Fill animation duration |
