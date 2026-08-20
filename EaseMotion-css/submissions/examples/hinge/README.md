# ease-hinge

Hinge drop exit animation using `rotateZ` swing and gravity drop keyframes. Zero JavaScript required.

## Usage

```html
<div class="ease-hinge">Falls like a hinge</div>
```

## Variants

| Class | Description |
|---|---|
| `ease-hinge` | Default hinge drop from top-left pivot |
| `ease-hinge-right` | Hinge drop from top-right pivot |
| `ease-hinge-fast` | 1s animation duration |
| `ease-hinge-slow` | 3.5s animation duration |
| `ease-delay-100` to `ease-delay-500` | Staggered start delays |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `transform-origin` | `top left` | Pivot point of hinge |

## How It Works

1. Element swings forward on the Z axis from the top-left corner like a broken hinge
2. Oscillates back and forth simulating gravity
3. Falls off screen with translateY and fades out via opacity

## Browser Support

Works in all modern browsers. Uses `transform`, `opacity` and `animation` — no experimental APIs required.

## Submission

- **Author:** sudha09-git
- **Issue:** #3880
- **Files:** `style.css`, `demo.html`
