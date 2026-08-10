# ease-roll-out-left — Roll Out to the Left (Exit Animation)

Element exits left while rotating — `translateX(-100%) + rotate(-120deg)` with `ease-in` timing. Exit pair for `.ease-roll-in-right`. Mirrors `ease-roll-out-right`.

## Acceptance Criteria

- ✅ `translateX(-100%) + rotate(-120deg)`
- ✅ `ease-in` timing function
- ✅ Exit pair for `.ease-roll-in-right`

## Classes

| Class | Distance | Rotation | Duration |
|-------|----------|----------|----------|
| `.ease-roll-out-left` | -100% | -120° | 0.6s |
| `+ .ease-roll-out-left-sm` | -50% | -60° | 0.6s |
| `+ .ease-roll-out-left-fast` | -100% | -120° | 0.4s |
| `+ .ease-roll-out-left-slow` | -100% | -120° | 1s |
| `.ease-roll-in-right` | 100% | 120° | 0.6s, ease-out |

## CSS Custom Properties

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-roll-left-distance` | `100%` | TranslateX distance |
| `--ease-roll-left-rotation` | `120deg` | Rotation angle (applied negative) |
| `--ease-roll-left-duration` | `0.6s` | Animation duration |

## Complete Roll Family

| Direction | Exit | Enter |
|-----------|------|-------|
| ← Left | `.ease-roll-out-left` | `.ease-roll-in-left` (from ease-roll-out-right) |
| → Right | `.ease-roll-out-right` | `.ease-roll-in-right` ← included here |

## Usage

```html
<!-- Exit left -->
<div class="ease-roll-out-left">Rolls out left</div>

<!-- Page transition pair -->
<div class="ease-roll-out-left">Old page</div>
<div class="ease-roll-in-right">New page</div>

<!-- Remove after animation -->
<script>
  el.classList.add('ease-roll-out-left');
  el.addEventListener('animationend', () => el.remove(), { once: true });
</script>
```

## Accessibility

`animation-duration` reduced to `1ms` when `prefers-reduced-motion: reduce` is set.

Closes #11845
