# `ease-light-speed-in` / `ease-light-speed-out`

Fast entrance/exit animations combining skew, translate, and opacity for a "whoosh" effect.

Ideal for hero section headlines, splash elements, and dramatic reveals.

## Usage

```html
<div class="ease-light-speed-in">Whoosh In</div>
<div class="ease-light-speed-out">Whoosh Out</div>
```

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-speed-slow` | `1s` | Light-speed-in duration |
| `--ease-speed-medium` | `0.6s` | Light-speed-out duration |

## Accessibility

Respects `prefers-reduced-motion: reduce` — disables animation and sets `opacity: 1` for both classes.
