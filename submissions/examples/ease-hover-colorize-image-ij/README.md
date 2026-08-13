# hover-colorize-image (#36733)

Hover colorize image from grayscale to full color with an optional overlay tint.

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--image-src` | `url(…)` | URL of the image to display |
| `--grayscale-amount` | `100%` | Initial grayscale filter level |
| `--colorize-duration` | `0.6s` | Transition duration for colorization |
| `--overlay-color` | `rgba(72,219,251,0.15)` | Color overlay applied on hover |

## Usage

```html
<div class="card" style="--image-src: url('photo.jpg'); --grayscale-amount: 90%; --colorize-duration: 1s;">
  <div class="image-wrapper">
    <img src="photo.jpg" alt="">
  </div>
</div>
```

The `--overlay-color` alpha channel controls overlay intensity. Use an rgba or hex with alpha value.
