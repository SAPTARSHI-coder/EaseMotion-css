# 3D Cover Flow Carousel

A 3D cover-flow style carousel with perspective transform. The active slide sits centered and prominent while surrounding slides recede with rotation and depth.

## Features

- 3D perspective arrangement of slides
- Center slide scaled up with full opacity
- Side slides rotated and pushed back in Z-space
- Previous / Next navigation buttons
- Fully customizable via CSS custom properties

## Usage

```html
<div class="carousel-wrapper">
  <button class="carousel-btn carousel-btn--prev">&#8249;</button>
  <div class="carousel-stage">
    <div class="carousel-slide" data-index="0">...</div>
    <div class="carousel-slide" data-index="1">...</div>
  </div>
  <button class="carousel-btn carousel-btn--next">&#8250;</button>
</div>
```

## CSS Custom Properties

| Property           | Default                    | Description                     |
| ------------------ | -------------------------- | ------------------------------- |
| `--c3d-duration`   | `0.5s`                     | Slide transition duration       |
| `--c3d-slide-width`| `280px`                    | Width of each slide             |
| `--c3d-bg`         | `#1a1a2e`                  | Page background color           |
| `--c3d-btn-bg`     | `rgba(255,255,255,0.15)`   | Navigation button background    |
