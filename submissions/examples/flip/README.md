# ease-flip

3D card flip with front/back faces using `perspective` + `rotateY`. Zero JavaScript required.

## Usage

```html
<div class="ease-flip-container">
  <div class="ease-flip" style="width:200px; height:120px;">
    <div class="ease-flip-front">Front</div>
    <div class="ease-flip-back">Back</div>
  </div>
</div>
```

## Variants

| Class | Description |
|---|---|
| `ease-flip` | Default hover flip (Y axis) |
| `ease-flip-x` | Flip on X axis |
| `ease-flip-click` | Click to flip (toggle `is-flipped`) |
| `ease-flip-fast` | 300ms transition |
| `ease-flip-slow` | 1000ms transition |

## Notes

- Always wrap with `ease-flip-container` for perspective
- `ease-flip-front` and `ease-flip-back` are required children
- For click-to-flip, toggle the `is-flipped` class on the element

## Submission

- **Author:** sudha09-git
- **Issue:** #2257
- **Files:** `style.css`, `demo.html`
