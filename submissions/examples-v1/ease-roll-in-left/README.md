# ease-roll-in-left — Roll In from Left with Matching Rotation

Enter animation: `translateX(-100%) + rotate(-120deg)` → `translateX(0) + rotate(0)` with `ease-out` timing. Rotation speed matches horizontal movement for a physically correct feel.

## Acceptance Criteria

- ✅ `translateX(-100%) + rotate(-120deg)` → `translateX(0) + rotate(0)`
- ✅ Smooth `ease-out` timing
- ✅ Rotation feels physically correct — both translate and rotate use the same `ease-out` curve so they decelerate together

## Classes

| Class | Distance | Rotation | Duration |
|-------|----------|----------|----------|
| `.ease-roll-in-left` | -100% | -120° | 0.6s |
| `+ .ease-roll-in-left-sm` | -50% | -60° | 0.6s |
| `+ .ease-roll-in-left-fast` | -100% | -120° | 0.4s |
| `+ .ease-roll-in-left-slow` | -100% | -120° | 1s |

## CSS Custom Properties

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-roll-in-left-distance` | `100%` | Start translateX magnitude |
| `--ease-roll-in-left-rotation` | `120deg` | Start rotation magnitude (applied negative) |
| `--ease-roll-in-left-duration` | `0.6s` | Duration |

## Physical Correctness

The rotation angle (120°) is proportional to the distance (100%). Both use `ease-out` timing so they decelerate at the same rate — the ball naturally slows as it arrives, with no visual disconnect between spin and horizontal movement.

## Usage

```html
<div class="ease-roll-in-left">Rolls in from left</div>

<!-- Full rotation -->
<div class="ease-roll-in-left" style="--ease-roll-in-left-rotation: 360deg;">
  Full spin entry
</div>
```

Closes #11843
