# `ease-hinge`

Hinge exit animation — element swings from its top-left corner and falls down with a fade-out.

Ideal for dismissing modals, panels, and cards with a dramatic exit.

## Usage

```html
<div class="ease-hinge">Goodbye</div>
```

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-ease` | `ease-in-out` | Timing function |

## Accessibility

Respects `prefers-reduced-motion: reduce` — disables animation and sets `opacity: 1`.
