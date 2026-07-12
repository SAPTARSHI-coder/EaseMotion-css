# Mood Tracker Dots (#36823)

A mood selection widget where emoji dots animate with a scale-and-glow effect on selection.

## CSS Custom Properties

| Prop | Default | Description |
|------|---------|-------------|
| `--dot-size` | `44px` | Diameter of each mood dot |
| `--selected-scale` | `1.35` | Scale factor for the selected dot |
| `--mood-colors` | *(space-separated)* | Color palette for mood dots (applied per-dot via `--mood-color`) |
| `--select-duration` | `0.3s` | Duration of the select animation |

## Usage

```html
<div class="mood-tracker" style="--dot-size: 44px; --selected-scale: 1.35;">
  <button class="mood-dot" style="--mood-color: #f39c12;">😊</button>
  <!-- ... -->
</div>
```

## Features

- Tap-to-select with smooth scale animation
- Glow border effect on the selected dot
- Fully customizable size, scale, and colors
- Dark-theme ready
