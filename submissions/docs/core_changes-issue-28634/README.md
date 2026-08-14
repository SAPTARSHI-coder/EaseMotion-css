# ease-mask — CSS Mask & Clip-Path Utility Classes

## What does this do?

Provides CSS `mask-image` and `clip-path` utility classes for creating common visual effects: circular crops, polygon shapes, gradient fades, and image masks.

## How is it used?

```html
<img src="photo.jpg" class="ease-clip-circle" alt="Round photo" />
<img src="photo.jpg" class="ease-clip-hexagon" alt="Hex crop" />
<div class="ease-mask-fade-top">Fades out at the top</div>
```

### Clip-Path Classes

| Class | Shape |
|---|---|
| `.ease-clip-circle` | `circle(50%)` — perfect circle |
| `.ease-clip-ellipse` | `ellipse(50% 35%)` — oval |
| `.ease-clip-hexagon` | Hexagon polygon |
| `.ease-clip-triangle` | Equilateral triangle |
| `.ease-clip-diamond` | Rotated square |
| `.ease-clip-chevron` | Chevron/banner shape |
| `.ease-clip-blob` | Organic blob (approx) |

### Mask Classes

| Class | Effect |
|---|---|
| `.ease-mask-fade-top` | Fades to transparent at top |
| `.ease-mask-fade-bottom` | Fades at bottom |
| `.ease-mask-fade-left` | Fades at left |
| `.ease-mask-fade-right` | Fades at right |
| `.ease-mask-fade-all` | Fades on all edges |
| `.ease-mask-circle` | Circular mask via radial gradient |
