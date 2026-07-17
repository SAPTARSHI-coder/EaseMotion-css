# ease-pop

Submission for Issue #3868

## What this adds

A `ease-pop` CSS utility that scales an element from 0 → 1.1 → 1
with a spring overshoot entrance — zero JavaScript required.

## Classes

| Class | Description |
|---|---|
| `ease-pop` | Default spring pop (0 → 1.1 → 1) |
| `ease-pop--subtle` | Gentle overshoot (0 → 1.03 → 1) |
| `ease-pop--hard` | Strong overshoot (0 → 1.25 → 0.95 → 1) |
| `ease-pop--fast` | 0.25s duration |
| `ease-pop--slow` | 0.9s duration |

## Usage

```html
<!-- Pops in -->
<div class="ease-pop">Hello</div>

<!-- Subtle pop -->
<div class="ease-pop ease-pop--subtle">Hello</div>

<!-- Hard overshoot, fast -->
<div class="ease-pop ease-pop--hard ease-pop--fast">Hello</div>
```

## Cubic Bezier Values

| Variant | Curve |
|---|---|
| Default | cubic-bezier(0.34, 1.56, 0.64, 1) |
| Subtle  | cubic-bezier(0.22, 1, 0.36, 1) |
| Hard    | cubic-bezier(0.34, 1.8, 0.64, 1) |

## Accessibility

Respects `prefers-reduced-motion` — falls back to a simple
fade-in with no scale transform.
