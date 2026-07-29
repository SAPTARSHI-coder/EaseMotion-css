# ease-roll-in-right — Roll In from Right with Rotation

Enter animation: `translateX(100%) + rotate(120deg)` → `translateX(0) + rotate(0)` with `ease-out` timing. Direction variant of `ease-roll-in-left`.

## Acceptance Criteria

- ✅ `translateX(100%) + rotate(120deg)` → `0`
- ✅ Smooth `ease-out` timing

## Classes

| Class | Distance | Rotation | Duration |
|-------|----------|----------|----------|
| `.ease-roll-in-right` | 100% | 120° | 0.6s |
| `+ .ease-roll-in-right-sm` | 50% | 60° | 0.6s |
| `+ .ease-roll-in-right-fast` | 100% | 120° | 0.4s |
| `+ .ease-roll-in-right-slow` | 100% | 120° | 1s |

## CSS Custom Properties

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-roll-in-right-distance` | `100%` | Start translateX |
| `--ease-roll-in-right-rotation` | `120deg` | Start rotation |
| `--ease-roll-in-right-duration` | `0.6s` | Duration |

## Usage

```html
<div class="ease-roll-in-right">Rolls in from right</div>

<!-- Full rotation -->
<div class="ease-roll-in-right" style="--ease-roll-in-right-rotation: 360deg;">
  Full spin entry
</div>
```

Closes #11844
