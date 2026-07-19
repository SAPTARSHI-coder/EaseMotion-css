# Magnifier Zoom Hover

An image magnifier that follows the cursor, displaying a zoomed portion of the image inside a floating circular lens.

## Features

- Floating lens follows cursor with magnified image content
- Real-time zoom level and lens size controls
- Lens stays clamped within image bounds
- Smooth transitions and customizable styles
- Works with multiple images on the same page

## Usage

```html
<div class="magnifier-container" data-img="path/to/image.jpg" data-zoom="3">
  <img src="path/to/image.jpg" alt="Sample">
  <div class="magnifier-lens"></div>
</div>
```

```css
:root {
  --mzh-duration: 0.2s;
  --mzh-lens-size: 150px;
  --mzh-zoom-level: 3;
  --mzh-border-color: rgba(255, 255, 255, 0.5);
  --mzh-bg: rgba(15, 23, 42, 0.05);
}
```

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--mzh-duration` | `0.2s` | Transition duration for lens effects |
| `--mzh-lens-size` | `150px` | Diameter of the magnifier lens |
| `--mzh-zoom-level` | `3` | Magnification factor |
| `--mzh-border-color` | `rgba(255,255,255,0.5)` | Lens border color |
| `--mzh-bg` | `rgba(15,23,42,0.05)` | Lens background tint |
