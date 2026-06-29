# ease-float — Floating Animation Utility Classes

## What does this do?

Adds gentle floating (bobbing) animations to elements — useful for hero sections, icons, cards, call-to-action buttons, and decorative elements. Pure CSS, no JS required.

## How is it used?

```html
<img src="icon.svg" class="ease-float" alt="" />
<button class="ease-float-hover">Hover to float</button>
<div class="ease-float-slow">Gentle bob</div>
```

### Classes

| Class | Duration | Description |
|---|---|---|
| `.ease-float` | 3s | Gentle up/down float |
| `.ease-float-slow` | 5s | Slow, subtle float |
| `.ease-float-fast` | 1.5s | Quick bob |
| `.ease-float-bounce` | 2s | Bouncier float with ease-out |
| `.ease-float-hover` | 3s | Float only on hover/focus |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-float-distance` | `8px` | Float travel distance |
| `--ease-float-duration` | *(per class)* | Animation duration |

## Accessibility

Respected via `prefers-reduced-motion: reduce` — disables animation.
