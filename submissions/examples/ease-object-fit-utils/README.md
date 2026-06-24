# ease-object-fit utilities

Utility classes for controlling how images and videos resize (`object-fit`) and align (`object-position`) inside their containers.

## Object-fit classes

| Class | CSS Property | Effect |
|-------|--------------|--------|
| `.ease-object-cover` | `object-fit: cover` | Fill the container; crop overflow while preserving aspect ratio |
| `.ease-object-contain` | `object-fit: contain` | Fit the entire image inside the container; may letterbox |
| `.ease-object-fill` | `object-fit: fill` | Stretch to fill width and height exactly |
| `.ease-object-none` | `object-fit: none` | Use the image's intrinsic dimensions |
| `.ease-object-scale-down` | `object-fit: scale-down` | Behaves like `none` or `contain`, whichever is smaller |

## Object-position classes

| Class | CSS Property | Effect |
|-------|--------------|--------|
| `.ease-object-center` | `object-position: center` | Center the image within the container |
| `.ease-object-top` | `object-position: top` | Align to the top edge |
| `.ease-object-bottom` | `object-position: bottom` | Align to the bottom edge |
| `.ease-object-left` | `object-position: left` | Align to the left edge |
| `.ease-object-right` | `object-position: right` | Align to the right edge |

## Usage

```html
<div class="media-frame">
  <img class="ease-object-cover" src="poster.svg" alt="Cover crop">
</div>

<div class="media-frame">
  <img class="ease-object-none ease-object-top" src="hero.svg" alt="Top-aligned">
</div>
```

Pair `.ease-object-none` with a position utility when you need visible alignment control inside a clipped frame.

## Demo notes

The submission demo uses inline SVG `data:` URIs only — no external image files or CDN URLs. This replaces the broken `ease-object-fit` submission that referenced a missing `abstract_art.png` file.
