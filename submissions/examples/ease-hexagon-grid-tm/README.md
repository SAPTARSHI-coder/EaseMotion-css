# CSS Glowing Hexagon Grid

**Issue:** [#64130](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64130)

A hexagonal grid layout with CSS clip-path polygons and glow-on-hover
effects. Each hex cell scales and glows when hovered.

## Design Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `--hex-bg` | `#07090f` | Page background |
| `--hex-primary` | `#3b82f6` | Primary glow color |
| `--hex-secondary` | `#06b6d4` | Secondary glow color |
| `--hex-surface` | `#0f1420` | Hex cell fill |
| `--hex-cell-size` | `90px` | Hex cell width |

## Variants

| Variant | Description |
|---------|-------------|
| `blue-glow` | Blue gradient glow |
| `cyan-glow` | Cyan gradient glow |
| `purple-glow` | Purple gradient glow |
| `emerald-glow` | Green gradient glow |
| `pulse` | Subtle pulse animation |

## Usage

```html
<link rel="stylesheet" href="style.css">
```

## Accessibility

- `prefers-reduced-motion`: Disables hover animations
- Semantic heading hierarchy
- High contrast text on dark hex background
