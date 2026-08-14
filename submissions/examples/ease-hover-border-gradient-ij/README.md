# hover-border-gradient (#36732)

Hover border gradient with animated color sweep. On hover, a conic-gradient border animates around the card.

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--border-width` | `3px` | Thickness of the gradient border |
| `--gradient-start` | `#ff6b6b` | First gradient color |
| `--gradient-end` | `#48dbfb` | Second gradient color |
| `--sweep-duration` | `2s` | Duration of one full rotation |

## Usage

```html
<div class="card" style="--border-width: 4px; --gradient-start: #f093fb; --gradient-end: #f5576c; --sweep-duration: 3s;">
  <div class="content">…</div>
</div>
```

The border uses `mask-composite` to create a border-only gradient that rotates via `@keyframes sweep`.
