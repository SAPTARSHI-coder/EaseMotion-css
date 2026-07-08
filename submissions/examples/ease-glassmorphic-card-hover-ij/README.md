# Glassmorphic Card Hover (#36686)

Glassmorphic card that scales on hover with a backdrop-blur effect. The gradient background shines through the frosted glass panel.

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--card-bg` | `#1a1a2e` | Background color of the outer card container |
| `--glass-blur` | `12px` | Backdrop blur radius for the glass panel |
| `--border-color` | `rgba(255,255,255,0.15)` | Border color of the glass panel |
| `--hover-scale` | `1.05` | Scale factor when hovering the card |

## Usage

```html
<div class="glass-card">
  <div class="glass-card__bg"></div>
  <div class="glass-card__content">…</div>
</div>
```

Apply hover on `.glass-card` to trigger the scale + glass effect.
