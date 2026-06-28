# `ease-jello`

Gelatin-like jello animation — stretches and squishes the element independently on X and Y axes using `scaleX` / `scaleY`.

Great for attention-grabbing UI elements, notification badges, and playful interactions.

## Usage

```html
<div class="ease-jello">Jello!</div>
```

## Modifiers

- `.ease-infinite` — loop continuously

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-animation-iterations` | `1` | Number of iterations |

## Accessibility

Respects `prefers-reduced-motion: reduce` — disables the animation.
