# Fix ease-carousel Scroll Snapping

## What does this do?
Adds `scroll-snap-type: x mandatory` to `.ease-carousel__track` and
`scroll-snap-align: start` to each `.ease-carousel__slide` so slides
always snap cleanly to full-width positions.

## How is it used?
```html
<div class="ease-carousel">
  <div class="ease-carousel__track">
    <div class="ease-carousel__slide">Slide 1</div>
    <div class="ease-carousel__slide">Slide 2</div>
  </div>
</div>
```

## Why is it useful?
Without scroll-snap, the carousel stops at arbitrary positions between
slides, showing partial content from two slides simultaneously. Fixes: #35842
