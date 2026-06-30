# ease-hover-lift — Hover Ripple Lift Animation

## What does this do?

Combines a subtle upward lift with a center-expanding ripple on hover. Pure CSS — no JS required. Uses `::before` pseudo-element for the ripple and `transform` for the lift.

## How is it used?

```html
<button class="ease-hover-lift">Click me</button>
<a class="ease-hover-lift" href="#">Link</a>
<div class="ease-hover-lift">Any element</div>
```

### Classes

| Class                    | Effect                           |
| ------------------------ | -------------------------------- |
| `.ease-hover-lift`       | Lift + ripple on hover           |
| `.ease-hover-lift-light` | Light ripple (for dark surfaces) |
| `.ease-hover-lift-dark`  | Dark ripple (for light surfaces) |

## Custom Properties

| Property                   | Default                 | Description         |
| -------------------------- | ----------------------- | ------------------- |
| `--ease-lift-distance`     | `-4px`                  | Upward lift amount  |
| `--ease-lift-ripple-color` | `rgba(255,255,255,0.3)` | Ripple color        |
| `--ease-lift-duration`     | `0.3s`                  | Transition duration |
