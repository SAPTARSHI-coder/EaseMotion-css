# `ease-roll-in` / `ease-roll-out`

Roll entrance and exit animations — elements rotate into view from the left and exit rotating to the right.

## Usage

```html
<div class="ease-roll-in">Entrance</div>
<div class="ease-roll-out">Exit</div>
```

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-speed-medium` | `0.6s` | Animation duration |
| `--ease-ease` | `ease-out` / `ease-in` | Timing function |

## Modifiers

- `.ease-fast` — override duration to `--ease-speed-fast` (0.3s)
- `.ease-slow` — override duration to `--ease-speed-slow` (1s)

## Accessibility

Respects `prefers-reduced-motion: reduce` — disables animation and sets opacity to 1.
