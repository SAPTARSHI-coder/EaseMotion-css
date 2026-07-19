# ease-wobble-horizontal — Pure Horizontal Wobble

A translateX-only oscillation with no rotation component — faster and denser than `.ease-shake`, ideal for input validation errors, rejected actions, and attention nudges.

## Difference from ease-shake

| | `.ease-shake` | `.ease-wobble-h` |
|--|--------------|-----------------|
| Oscillations | 3 | 9 (denser) |
| Duration | 0.5s | 0.4s (faster) |
| Rotation | None | None |
| Distance | Fixed 6px | Configurable via token |
| Decay | None | Natural decay (tapers off) |

## Classes

| Class | Distance | Duration |
|-------|----------|----------|
| `.ease-wobble-h` | 6px | 0.4s |
| `.ease-wobble-h` + `.ease-wobble-h-sm` | 3px | 0.4s |
| `.ease-wobble-h` + `.ease-wobble-h-lg` | 12px | 0.4s |
| `.ease-wobble-h` + `.ease-wobble-h-slow` | 6px | 0.8s |

## CSS Custom Properties

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-wobble-h-distance` | `6px` | Maximum translateX distance |
| `--ease-wobble-h-duration` | `0.4s` | Animation duration |

## Usage

```html
<!-- Basic wobble -->
<div class="ease-wobble-h">Shake me</div>

<!-- Input validation error pattern -->
<input id="email" class="my-input" />
<script>
  // On validation failure:
  const el = document.getElementById('email');
  el.classList.remove('ease-wobble-h');
  void el.offsetWidth; // reflow to retrigger
  el.classList.add('ease-wobble-h', 'input-error');
  el.addEventListener('animationend', () => {
    el.classList.remove('ease-wobble-h');
  }, { once: true });
</script>

<!-- Custom distance -->
<div class="ease-wobble-h" style="--ease-wobble-h-distance: 20px;">
  Strong wobble
</div>
```

## Accessibility

`animation-duration` reduced to `1ms` when `prefers-reduced-motion: reduce` is set.

Closes #11857
