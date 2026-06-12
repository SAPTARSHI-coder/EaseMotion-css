# ease-tilt

Smooth 3D perspective tilt effect on hover using CSS `perspective` and `rotateX`/`rotateY` transitions. Zero JavaScript required.

## Usage

```html
<div class="ease-tilt-container">
  <div class="ease-tilt">Hover me</div>
</div>
```

## Variants

| Class                 | Description                             |
| --------------------- | --------------------------------------- |
| `ease-tilt-container` | Required parent for perspective context |
| `ease-tilt`           | Default tilt (rotateY left)             |
| `ease-tilt-left`      | Tilt to the left                        |
| `ease-tilt-right`     | Tilt to the right                       |
| `ease-tilt-up`        | Tilt upward                             |
| `ease-tilt-down`      | Tilt downward                           |
| `ease-tilt-subtle`    | 6° rotation                             |
| `ease-tilt-hard`      | 20° rotation                            |
| `ease-tilt-scale`     | Adds scale(1.05) + shadow on hover      |

## Custom Properties

| Property          | Default | Description          |
| ----------------- | ------- | -------------------- |
| `--ease-tilt-deg` | `12deg` | Tilt rotation degree |

## Notes

- Always wrap with `ease-tilt-container` for proper perspective
- Combine direction + intensity + scale freely
- Works on any block element — cards, images, buttons

## Submission

- **Author:** sudha09-git
- **Issue:** #2351
- **Files:** `style.css`, `demo.html`
