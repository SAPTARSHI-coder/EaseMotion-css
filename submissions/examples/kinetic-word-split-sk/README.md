# Kinetic Word Split Animation

Four per-character stagger animation variants using inline `--i` custom property as the stagger index.

## Classes

| Class | Animation |
|---|---|
| `ease-wave-text` | `translateY + rotateX` flip with perspective |
| `ease-elastic-text` | `scale(0)` → `scale(1)` with spring `linear()` easing |
| `ease-blur-text` | `filter: blur(12px)` → `blur(0)` fade |
| `ease-redact-text` | Background-color → transparent "redact reveal" |

## Usage

```html
<h2 class="ease-wave-text">
  <span style="--i:0">E</span>
  <span style="--i:1">a</span>
  <span style="--i:2">s</span>
  <!-- ... -->
</h2>
```

Each `<span>` uses `animation-delay: calc(var(--i) * 0.04s)` — the `--i` index is the only per-character data needed. The pattern works identically for card grids, list items, or any staggered set.

Closes #9605
