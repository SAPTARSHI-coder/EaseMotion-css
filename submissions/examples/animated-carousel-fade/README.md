# ease-carousel-fade

Crossfade transition between carousel/testimonial slides.

## Usage

```html
<div class="ease-carousel">
  <div class="ease-carousel-slide active">Slide 1</div>
  <div class="ease-carousel-slide">Slide 2</div>
</div>
```

Cycle the `active` class between slides via JS (see `demo.html` for a simple `setInterval` example).

## Notes

- The active slide uses `position: relative` to establish the container's height; inactive slides stack via `position: absolute`.
- Fixed-height containers avoid layout jump if slide content lengths differ — set an explicit `height` on `.ease-carousel`.

## Browser support

All modern browsers.