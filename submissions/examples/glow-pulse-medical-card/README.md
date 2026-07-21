# Glow Pulse Medical Card

## Overview

A responsive glow pulse card for medical dashboard UI displaying vital signs. Features pulsing glow animation with three status variants (Stable, Warning, Critical). Keyboard accessible and respects `prefers-reduced-motion`.

## Usage

```html
<div class="medical-card glow-stable">
  <div class="card-label">Heart Rate</div>
  <div class="card-value">72</div>
  <div class="card-unit">bpm</div>
</div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--glow-pulse-duration` | `2s` | Animation duration |
| `--glow-pulse-scale` | `1.02` | Scale factor on pulse |
| `--glow-color` | Variant | Card border color |
| `--glow-shadow` | Variant | Glow shadow color |

## Status Variants

- `.glow-stable` — Green, normal status
- `.glow-warning` — Amber, elevated values
- `.glow-critical` — Red, alert status

## Features

- Pure HTML + CSS
- Three color variants
- Keyboard accessible
- Responsive grid layout
- GPU-accelerated animations
