# ease-image-render — Image Rendering Utility Classes

## What does this do?

Controls the browser's image scaling algorithm via `image-rendering`. Useful for pixel art, high-DPI displays, and performance optimization.

## How is it used?

```html
<img src="pixel-art.png" class="ease-image-pixel" alt="" />
<img src="photo.jpg" class="ease-image-auto" alt="" />
<img src="graph.svg" class="ease-image-smooth" alt="" />
```

### Classes

| Class | Property | Use Case |
|---|---|---|
| `.ease-image-auto` | `image-rendering: auto` | Default browser behavior |
| `.ease-image-smooth` | `image-rendering: smooth` | Smooth upscaling (modern browsers) |
| `.ease-image-pixel` | `image-rendering: pixelated` | Pixel art, crisp scaling |
| `.ease-image-crisp` | `image-rendering: crisp-edges` | Sharp edges, no anti-aliasing |
