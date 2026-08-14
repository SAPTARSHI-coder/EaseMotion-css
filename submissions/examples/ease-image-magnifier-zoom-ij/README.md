# Image Magnifier Zoom

Hover over an image to view a magnified circular lens that follows the cursor, revealing fine details at a configurable zoom level.

## Features

- Circular magnifier lens follows cursor/touch
- Adjustable zoom level via slider (1.5x–5x)
- Smooth lens opacity transition on enter/leave
- CSS custom properties for full customization
- Respects `prefers-reduced-motion`

## Usage

```html
<div class="mz-wrapper" id="mzWrapper">
  <img src="photo.jpg" class="mz-image" id="mzImage" alt="Photo">
  <div class="mz-lens" id="mzLens"></div>
</div>
```

JavaScript sets the lens background from the image source and updates `background-position` on `mousemove`. The lens position is driven by `--mz-x` and `--mz-y` custom properties.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--mz-duration` | 0.25s | Lens fade transition duration |
| `--mz-lens-size` | 160px | Diameter of the magnifier lens |
| `--mz-zoom-level` | 2.5 | Magnification factor |
| `--mz-border-color` | rgba(255,255,255,0.6) | Lens ring border color |
| `--mz-lens-bg` | rgba(15,23,42,0.1) | Lens background tint |
