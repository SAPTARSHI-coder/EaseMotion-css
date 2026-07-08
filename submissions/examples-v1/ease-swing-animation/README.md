# ease-swing — Pendulum Swing from Top Anchor

A triggered pendulum swing animation using `transform-origin: top center`. Starts at `-15deg`, swings to `+15deg`, then diminishes to 0 via a 10-step geometric decay.

## Acceptance Criteria

- ✅ `transform-origin: top center`
- ✅ `rotate(-15deg)` → `rotate(15deg)` → settle at `0`
- ✅ Diminishing oscillation (geometric decay across 10 keyframe steps)

## Difference from ease-hang and ease-sway

| | `ease-hang` | `ease-sway` | `ease-swing` |
|--|-------------|-------------|--------------|
| Motion | Continuous gentle sway | translateX + rotate | One-shot pendulum burst |
| Trigger | Persistent class | Persistent class | Add class → plays once |
| Feel | Ambient, decoration | Organic, plant-like | Physical, clock pendulum |

## Classes

| Class | Duration | Angle | Notes |
|-------|----------|-------|-------|
| `.ease-swing` | 1s | ±15° | Default one-shot |
| `+ .ease-swing-fast` | 0.5s | ±15° | Quick snap |
| `+ .ease-swing-slow` | 2s | ±15° | Lazy pendulum |
| `+ .ease-swing-wide` | 1s | ±25° | Wide arc |
| `.ease-swing-loop` | 1s | ±15° | Continuous infinite |

## CSS Custom Properties

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-swing-duration` | `1s` | Animation duration |
| `--ease-swing-angle` | `15deg` | Peak rotation angle |

## Usage

```html
<!-- Trigger on click -->
<div id="sign" onclick="
  const el = document.getElementById('sign');
  el.classList.remove('ease-swing');
  void el.offsetWidth;
  el.classList.add('ease-swing');
">🏪 Open</div>

<!-- Continuous pendulum clock -->
<div class="ease-swing-loop" style="--ease-swing-angle: 20deg;">🕰</div>

<!-- Custom angle -->
<div class="ease-swing" style="--ease-swing-angle: 45deg; --ease-swing-duration: 1.5s;">
  Wide swing
</div>
```

## Important: display: inline-block

`.ease-swing` sets `display: inline-block`. `transform-origin` requires a non-inline element.

## Accessibility

`animation-duration` reduced to `1ms` when `prefers-reduced-motion: reduce` is set.

Closes #11851
