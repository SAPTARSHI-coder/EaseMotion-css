# ease-image-compare — Before/After Image Comparison Slider

## What does this do?

Creates an interactive before/after image comparison slider using a clip-based approach. Drag or click to reveal the underlying image. Requires minimal JS for mouse/touch interaction.

## How is it used?

```html
<div class="ease-image-compare">
  <div class="ease-image-compare-after">
    <img src="after.jpg" alt="After" />
  </div>
  <div class="ease-image-compare-before" style="clip-path: inset(0 50% 0 0);">
    <img src="before.jpg" alt="Before" />
  </div>
  <div class="ease-image-compare-handle"></div>
</div>
```

### Classes

| Class | Description |
|---|---|
| `.ease-image-compare` | Container |
| `.ease-image-compare-before` | Before image (clipped) |
| `.ease-image-compare-after` | After image (full) |
| `.ease-image-compare-handle` | Draggable divider handle |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-compare-pos` | `50%` | Initial split position |
