# Enlarge on Click Image

Click-to-zoom image component with smooth scale transition and overlay. Uses a spring-like cubic-bezier for the enlarge animation.

## Features

- Smooth zoom transition on click
- Dark overlay backdrop
- Keyboard dismiss (Escape)
- Configurable zoom scale and duration
- Responsive card grid layout

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="eci-card" onclick="enlargeImage(this)">
  <div class="eci-img" style="--image-size: 180px;">
    <div class="eci-placeholder" style="background: #6366f1;">
      <!-- Your image or placeholder -->
    </div>
  </div>
  <span class="eci-caption">Image Caption</span>
</div>

<div class="eci-overlay" id="eciOverlay" onclick="closeEnlarged()">
  <div class="eci-enlarged" id="eciEnlarged">
    <button class="eci-close" onclick="closeEnlarged()">&times;</button>
  </div>
</div>
```

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--image-size` | `180px` | Thumbnail image size |
| `--overlay-bg` | `rgba(0,0,0,0.85)` | Overlay background color |
| `--zoom-scale` | `2.5` | Enlarged image scale factor |
| `--zoom-duration` | `0.4s` | Zoom transition duration |
