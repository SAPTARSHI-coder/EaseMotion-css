# Image Reveal on Scroll

Images reveal with a smooth clip-path and sliding overlay animation as the user scrolls. Each image is wrapped in a container that triggers the reveal via `IntersectionObserver`.

## Features

- Scroll-triggered reveal using `IntersectionObserver`
- Clip-path inset animation on the image
- Sliding colored overlay for a dual-layer reveal effect
- Staggered delays for sequential reveals
- Fully responsive

## CSS Custom Properties

| Property              | Default   | Description                         |
|-----------------------|-----------|-------------------------------------|
| `--rev-duration`      | `1.2s`    | Duration of the reveal animation    |
| `--rev-stagger`       | `0.2s`    | Delay between each item's animation |
| `--rev-clip-color`    | `#e0e7ff` | Color of the sliding overlay        |
| `--rev-radius`        | `12px`    | Border radius of the container      |

## Usage

```html
<div class="reveal-container" style="--rev-delay: 0.2s;">
  <div class="reveal-overlay"></div>
  <img src="your-image.jpg" alt="" loading="lazy">
</div>
```

Add the `visible` class to trigger the reveal.
