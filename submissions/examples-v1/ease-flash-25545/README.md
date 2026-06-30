# `ease-flash`

Rapid opacity blink animation — alternates between full and zero opacity for attention-grabbing visual signals.

Ideal for notification badges, saving indicators, and attention-seeking UI elements.

## Usage

```html
<div class="ease-flash">⚡</div>
```

## Modifiers

- `.ease-infinite` — loop continuously

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-animation-iterations` | `1` | Number of iterations |

## Accessibility

Respects `prefers-reduced-motion: reduce` — disables the animation.
