# ease-depth-blur-image-ij

Depth blur image with scroll-driven (slider-based) blur reveal.

## CSS Custom Properties

| Property           | Default                                    | Description              |
|-------------------|--------------------------------------------|--------------------------|
| `--blur-start`     | 20px                                       | Maximum blur value       |
| `--blur-end`       | 0px                                        | Final blur value         |
| `--image-src`      | `url('https://picsum.photos/seed/...')`    | Background image URL     |
| `--reveal-duration`| 1.2s                                       | Transition duration      |

## Usage

```html
<link rel="stylesheet" href="path/to/style.css">

<div class="image-wrapper">
  <img class="blur-image" src="your-image.jpg" alt="Depth blur">
</div>
```

Apply `.revealed` class to `.blur-image` to transition from `--blur-start` to `--blur-end`. Adjust `filter: blur(...)` programmatically for interactive control.
