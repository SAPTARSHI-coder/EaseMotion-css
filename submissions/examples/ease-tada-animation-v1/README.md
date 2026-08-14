# ease-tada — Dramatic Scale + Rotation Attention Seeker

A punchy scale + rotation wobble animation that grabs attention — shrinks slightly, explodes outward with alternating rotations, then settles. Inspired by celebrate animations. Fast at 0.8s.

## Classes

| Class | Scale | Angle | Duration |
|-------|-------|-------|----------|
| `.ease-tada` | 1.1 | ±3° | 0.8s |
| `.ease-tada` + `.ease-tada-sm` | 1.05 | ±1.5° | 0.8s |
| `.ease-tada` + `.ease-tada-lg` | 1.2 | ±6° | 0.8s |
| `.ease-tada` + `.ease-tada-repeat` | 1.1 | ±3° | 0.8s × 3 |

## CSS Custom Properties

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-tada-duration` | `0.8s` | Animation duration |
| `--ease-tada-scale` | `1.1` | Peak scale value |
| `--ease-tada-angle` | `3deg` | Peak rotation angle |

## Acceptance Criteria

- ✅ `scale(0.9)` → `scale(1.1)` + alternating rotations → settle at `scale(1)`
- ✅ Fast and punchy — 0.8s default duration
- ✅ Triggered by adding `.ease-tada` class

## Usage

```html
<!-- Trigger on class add -->
<div id="badge" class="my-badge">🏆 Achievement</div>
<script>
  const el = document.getElementById('badge');
  el.classList.remove('ease-tada');
  void el.offsetWidth; // reflow to retrigger
  el.classList.add('ease-tada');
</script>

<!-- Dramatic version for achievements -->
<div class="ease-tada ease-tada-lg">🎉 Level Up!</div>

<!-- Repeat 3 times for persistent attention -->
<div class="ease-tada ease-tada-repeat">New message!</div>

<!-- Custom intensity -->
<div class="ease-tada" style="--ease-tada-scale: 1.3; --ease-tada-angle: 8deg;">
  Big tada
</div>
```

## Use cases

- Achievement unlocks and success states
- CTA button attention seeking
- Emoji reactions
- Notification badges
- Like/favourite button feedback
- Form submission success

## Accessibility

`animation-duration` reduced to `1ms` when `prefers-reduced-motion: reduce` is set.

Closes #11855
