# ease-fade-out-right — Fade Out While Moving Right

Exit animation that fades an element to opacity 0 while translating it right. The mirror of `.ease-fade-out-left` and exit counterpart to `.ease-slide-in-right`. Completes the horizontal fade-out direction set.

## Classes

| Class | Distance | Description |
|-------|----------|-------------|
| `.ease-fade-out-right` | 32px | Default exit animation |
| `.ease-fade-out-right` + `.ease-fade-out-right-sm` | 16px | Subtle exit |
| `.ease-fade-out-right` + `.ease-fade-out-right-lg` | 64px | Dramatic exit |
| `.ease-fade-in-left` | 32px | Complementary enter animation |

## CSS Custom Properties

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-fade-out-right-distance` | `32px` | Translation distance |
| `--ease-fade-out-right-duration` | `--ease-speed-medium` | Animation duration |
| `--ease-fade-out-right-easing` | `--ease-ease` | Timing function |

## Usage

```html
<!-- Basic exit -->
<div class="ease-fade-out-right">Exits right</div>

<!-- Swipe-right to complete pattern -->
<div id="task">
  <button onclick="
    const el = document.getElementById('task');
    el.classList.add('ease-fade-out-right');
    el.addEventListener('animationend', () => el.remove(), { once: true });
  ">Complete</button>
</div>

<!-- Page transition pair -->
<div class="ease-fade-out-right">Old page</div>
<div class="ease-fade-in-left">New page</div>
```

## Direction family (complete set)

| Direction | Enter | Exit |
|-----------|-------|------|
| Left | `.ease-slide-in-left` | `.ease-fade-out-left` |
| Right | `.ease-slide-in-right` | `.ease-fade-out-right` ← this |
| Left (fade) | `.ease-fade-in-left` ← included | — |
| Right (fade) | `.ease-fade-in-right` | — |

## Accessibility

`animation-duration` reduced to `1ms` when `prefers-reduced-motion: reduce` is set.

Closes #11833
