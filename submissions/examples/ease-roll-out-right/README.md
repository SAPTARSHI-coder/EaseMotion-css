# ease-roll-out-right — Roll Out to the Right (Exit Animation)

Element exits right while rotating — `translateX(100%) + rotate(120deg)` with `ease-in` timing. Pairs with `.ease-roll-in-left`.

## Acceptance Criteria

- ✅ `translateX(100%) + rotate(120deg)`
- ✅ `ease-in` timing function
- ✅ Pairs with `.ease-roll-in-left`

## Classes

| Class | Distance | Rotation | Duration |
|-------|----------|----------|----------|
| `.ease-roll-out-right` | 100% | 120° | 0.6s |
| `+ .ease-roll-out-right-sm` | 50% | 60° | 0.6s |
| `+ .ease-roll-out-right-fast` | 100% | 120° | 0.4s |
| `+ .ease-roll-out-right-slow` | 100% | 120° | 1s |
| `.ease-roll-in-left` | 100% | -120° | 0.6s, ease-out |

## CSS Custom Properties

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-roll-out-distance` | `100%` | TranslateX distance |
| `--ease-roll-out-rotation` | `120deg` | Rotation angle |
| `--ease-roll-out-duration` | `0.6s` | Animation duration |

## Usage

```html
<!-- Exit animation -->
<div class="ease-roll-out-right">Rolls out right</div>

<!-- Page transition pair -->
<div class="ease-roll-out-right">Old content</div>
<div class="ease-roll-in-left">New content</div>

<!-- Full rotation -->
<div class="ease-roll-out-right" style="--ease-roll-out-rotation: 360deg;">
  Full spin exit
</div>

<!-- Trigger via JS -->
<script>
  const el = document.getElementById('item');
  el.classList.add('ease-roll-out-right');
  el.addEventListener('animationend', () => el.remove(), { once: true });
</script>
```

## Accessibility

`animation-duration` reduced to `1ms` when `prefers-reduced-motion: reduce` is set.

Closes #11846
