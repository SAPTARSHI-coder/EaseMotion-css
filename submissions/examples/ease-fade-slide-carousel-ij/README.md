# Fade Slide Carousel

A fade slide carousel with crossfade transitions and dot navigation — pure CSS + JS.

## Features
- Crossfade transition between slides
- Dot navigation for manual selection
- Auto-play with configurable interval
- Fully customizable via CSS custom properties

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--carousel-width` | 600px | Width of the carousel |
| `--carousel-height` | 340px | Height of the carousel |
| `--fade-duration` | 0.8s | Duration of the crossfade transition |
| `--dot-color` | #6366f1 | Color of the active navigation dot |

## Usage
```html
<div class="carousel" style="--carousel-width: 600px; --carousel-height: 340px; --fade-duration: 0.8s; --dot-color: #6366f1;">
  <div class="carousel-track">
    <div class="carousel-slide active">Slide 1</div>
    <div class="carousel-slide">Slide 2</div>
    <div class="carousel-slide">Slide 3</div>
  </div>
  <nav class="carousel-dots"></nav>
</div>
```

## Browser Support
- Chrome 49+, Firefox 31+, Safari 9+

## Tech Stack
- HTML + CSS + JavaScript
