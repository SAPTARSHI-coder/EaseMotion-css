# Directional Bounce Animations

Five directional bounce animation utility classes for entrance effects on different axes.

## Classes

| Class               | Keyframes              | Effect                                |
| ------------------- | ---------------------- | ------------------------------------- |
| `ease-bounce-up`    | `ease-kf-bounce-up`    | Translate up with overshoot           |
| `ease-bounce-down`  | `ease-kf-bounce-down`  | Translate down with overshoot         |
| `ease-bounce-left`  | `ease-kf-bounce-left`  | Translate left with overshoot         |
| `ease-bounce-right` | `ease-kf-bounce-right` | Translate right with overshoot        |
| `ease-bounce-out`   | `ease-kf-bounce-out`   | Scale bounce (grow → shrink → settle) |

## Usage

```html
<div class="ease-bounce-up">Bounce In</div>
<div class="ease-bounce-out">Scale Bounce</div>
```

## Speed Modifiers

- `.ease-fast` — uses `--ease-speed-fast` (0.3s)
- `.ease-slow` — uses `--ease-speed-slow` (1s)

## CSS Custom Properties

| Property              | Default    | Description        |
| --------------------- | ---------- | ------------------ |
| `--ease-speed-medium` | `0.6s`     | Animation duration |
| `--ease-ease`         | `ease-out` | Timing function    |

## Accessibility

Respects `prefers-reduced-motion: reduce` — disables all bounce animations.
