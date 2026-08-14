# `ease-swing`

Pendulum swing animation — rotates the element back and forth from `transform-origin: top center`.

Great for notification bells, alert icons, and call-to-action buttons.

## Usage

```html
<div class="ease-swing">🔔</div>
```

## Modifiers

- `.ease-infinite` — loop the animation continuously

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-animation-iterations` | `1` | Number of iterations |

## Accessibility

Respects `prefers-reduced-motion: reduce` — disables the animation.
