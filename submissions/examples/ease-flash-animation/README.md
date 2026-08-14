# ease-flash — Rapid Visibility Flicker Animation

A rapid opacity flicker using `step-end` timing — like a camera flash, neon sign glitch, or urgent alert indicator. Distinct from `.ease-pulse` (smooth opacity breath) and `.ease-ping` (scale ripple).

## Difference from similar animations

| | `.ease-pulse` | `.ease-ping` | `.ease-flash` |
|--|--------------|-------------|--------------|
| Motion | Smooth opacity breath | Scale ripple | Hard opacity cut |
| Timing | `ease-in-out` | `ease-out` | `step-end` |
| Use | Ambient loading | Notification dot | Urgent alert |

## Classes

| Class | Description |
|-------|-------------|
| `.ease-flash` | 3-flash burst, then stays visible |
| `.ease-flash-once` | Single flash then stays visible |
| `.ease-flash-infinite` | Continuous rapid flicker |
| `.ease-flash-slow` | Slow deliberate blink (infinite) |
| `.ease-flash-dim` | Modifier — dims to 0.2 instead of 0 |

## CSS Custom Properties

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-flash-duration` | `0.6s` | Animation duration |
| `--ease-flash-opacity` | `0` | Opacity at dim state |

## Usage

```html
<!-- Burst flash on trigger -->
<div id="alert" class="ease-flash">Alert!</div>

<!-- Continuous live indicator -->
<span class="ease-flash-infinite">● LIVE</span>

<!-- Notification dot -->
<div class="notif-badge ease-flash-infinite"></div>

<!-- Retrigger on each error -->
<script>
  const el = document.getElementById('alert');
  el.classList.remove('ease-flash');
  void el.offsetWidth; // reflow
  el.classList.add('ease-flash');
</script>

<!-- Dimming flash instead of full hide -->
<div class="ease-flash ease-flash-dim">Subtle flicker</div>
```

## Accessibility

Animation is disabled and element stays at `opacity: 1` when `prefers-reduced-motion: reduce` is set. Important: flashing elements should not flash more than 3 times per second for WCAG compliance — `.ease-flash-infinite` at the default 0.6s duration flashes at ~1.67Hz, within safe limits.

Closes #11856
