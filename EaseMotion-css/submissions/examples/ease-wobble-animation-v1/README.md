# ease-wobble — Left-Right Wobble with Rotation

Combines `translateX` oscillation with `rotate` for a playful, character-like wobble. Distinct from `ease-shake` (pure translateX, no rotation) and `ease-wobble-horizontal` (pure translateX, no rotation, faster).

## Difference from ease-shake

| | `.ease-shake` | `.ease-wobble` |
|--|--------------|----------------|
| Transform | `translateX` only | `translateX` + `rotate` |
| Rotation | None | ±5° (configurable) |
| Duration | 0.5s | 0.7s |
| Feel | Urgent, error | Playful, character |

## Classes

| Class | Duration | Distance | Angle |
|-------|----------|----------|-------|
| `.ease-wobble` | 0.7s | 8px | ±5° |
| `+ .ease-wobble-fast` | 0.4s | 8px | ±5° |
| `+ .ease-wobble-slow` | 1.2s | 8px | ±5° |
| `+ .ease-wobble-strong` | 0.7s | 16px | ±10° |

## CSS Custom Properties

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-wobble-duration` | `0.7s` | Animation duration |
| `--ease-wobble-distance` | `8px` | TranslateX distance |
| `--ease-wobble-angle` | `5deg` | Rotation angle |

## Usage

```html
<!-- Trigger on click -->
<div id="avatar" onclick="
  const el = document.getElementById('avatar');
  el.classList.remove('ease-wobble');
  void el.offsetWidth;
  el.classList.add('ease-wobble');
">🐧</div>

<!-- Custom amplitude -->
<div class="ease-wobble" style="--ease-wobble-distance: 20px; --ease-wobble-angle: 12deg;">
  Big wobble
</div>
```

## Use cases

- Avatar/character click feedback
- Notification bell animation
- Playful button interactions
- Game character reactions
- Mascot animations

## Accessibility

`animation-duration` reduced to `1ms` when `prefers-reduced-motion: reduce` is set.

Closes #11852
