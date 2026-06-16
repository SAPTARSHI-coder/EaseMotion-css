# ease-flip

Pure CSS 3D card flip using `perspective`, `rotateY` and `backface-visibility`. Zero JavaScript required.

## Usage

```html
<div class="ease-flip">
  <div class="ease-flip-inner">
    <div class="ease-flip-front">Front</div>
    <div class="ease-flip-back">Back</div>
  </div>
</div>
```

## Variants

| Class | Description |
|---|---|
| `ease-flip` | Default hover flip on Y axis |
| `ease-flip-x` | Flip on X axis |
| `ease-flip-click` | Click to flip via checkbox hack |
| `ease-flip-fast` | 300ms flip speed |
| `ease-flip-slow` | 1000ms flip speed |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-speed-medium` | `600ms` | Flip transition duration |

## Browser Support

Works in all modern browsers. Uses `backface-visibility` and `transform-style: preserve-3d`.

## Submission

- **Author:** sudha09-git
- **Issue:** #3883
- **Files:** `style.css`, `demo.html`
