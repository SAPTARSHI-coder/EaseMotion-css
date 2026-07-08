# Image Lazy Load Blur

Images lazy-load using IntersectionObserver with a blur-up transition effect. Each image starts blurred and transitions to sharp resolution once fully loaded.

## Features

- IntersectionObserver-based lazy loading with 200px root margin
- Blur-up transition from low-res placeholder to sharp image
- Placeholder fades out as the full image loads
- Responsive CSS Grid layout
- Respects `prefers-reduced-motion`

## Usage

Wrap each image in `.ll-image-wrap` with a `.ll-placeholder` div. Set the real image URL in `data-src`:

```html
<div class="ll-image-wrap">
  <div class="ll-placeholder"></div>
  <img class="ll-image" data-src="photo.jpg" alt="Photo" width="800" height="600">
</div>
```

JavaScript observes images and sets `ll-loaded` class when the image has loaded, triggering the CSS transition from `blur(var(--ll-blur-amount))` to `blur(0)`.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ll-duration` | 1.2s | Transition duration for blur and fade |
| `--ll-blur-amount` | 30px | Initial blur radius on unloaded image |
| `--ll-placeholder-color` | #1e293b | Background color of the placeholder area |
| `--ll-radius` | 16px | Border radius of card |
