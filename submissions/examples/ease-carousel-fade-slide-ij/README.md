# Carousel Fade Slide

A CSS-only carousel with cross-fade slide transitions, using hidden radio buttons for state management and pure CSS for the fade effect.

## HTML Structure

```html
<div class="ease-carousel-fade-slide">
  <div class="carousel-container">
    <div class="carousel-track">
      <input type="radio" name="carousel" id="slide1" checked>
      <input type="radio" name="carousel" id="slide2">
      ...
      <div class="carousel-slide" data-index="0">...</div>
      <div class="carousel-slide" data-index="1">...</div>
      ...
      <div class="carousel-nav">
        <label for="slide1"></label>
        <label for="slide2"></label>
        ...
      </div>
    </div>
  </div>
</div>
```

Checked radio buttons control which slide is visible via CSS sibling selectors.

## CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--slide-width` | `600px` | Width of the carousel container |
| `--slide-height` | `350px` | Height of the carousel container |
| `--fade-duration` | `0.6s` | Duration of the cross-fade transition |
| `--transition-timing` | `ease-in-out` | Timing function for the fade |
