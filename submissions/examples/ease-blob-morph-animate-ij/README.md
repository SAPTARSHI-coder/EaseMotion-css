# ease-blob-morph-animate

Organic blob shape morphing animation using CSS `clip-path` and `border-radius` interpolation. The element smoothly morphs through several distinct blob silhouettes in a continuous loop.

## HTML Structure

```html
<div class="ease-blob-morph-animate"></div>
```

## CSS Variables

| Variable         | Default   | Description                                |
|------------------|-----------|--------------------------------------------|
| `--blob-color`   | `#6c5ce7` | Background color of the blob shape         |
| `--blob-size`    | `200px`   | Width and height of the blob element       |
| `--morph-duration` | `5s`    | Duration of one full morphing cycle        |

## Usage

```html
<link rel="stylesheet" href="path/to/style.css" />

<div
  class="ease-blob-morph-animate"
  style="--blob-color: #ff6b6b; --blob-size: 150px; --morph-duration: 3s;"
></div>
```

The animation runs indefinitely (`infinite alternate`). Pause or control playback via `animation-play-state` on the element.
