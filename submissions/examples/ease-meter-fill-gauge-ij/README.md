# Meter Fill Gauge

Animated fill gauge meter using SVG stroke-dasharray. Supports circular and semi-circular variants with smooth cubic-bezier animation to target values.

## Features

- Circular and semi-circular gauge variants
- SVG-based with conic-gradient-like fill using stroke-dasharray
- Animate to target value with cubic ease-out
- Click gauge for random values or use range slider
- Gradient fill color via custom property

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="gauge circular" id="myGauge">
  <svg viewBox="0 0 120 120">
    <circle class="track" cx="60" cy="60" r="50"/>
    <circle class="fill" cx="60" cy="60" r="50"/>
  </svg>
  <span class="value">0%</span>
</div>

<script>
  animateTo('myGauge', 75);
</script>
```

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--mfg-duration` | `1s` | Animation duration |
| `--mfg-fill-color` | `#3498db` | Gauge fill color |
| `--mfg-track-color` | `#e9ecef` | Track background color |
| `--mfg-text-color` | `#1a1a2e` | Value text color |
| `--mfg-size` | `160px` | Gauge container size |
