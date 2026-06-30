# Carousel/Slider Component

Lightweight carousel with CSS scroll-snap, auto-play, navigation buttons, and dot indicators.

## Files

- `style.css` — Carousel component styles
- `script.js` — Auto-play, nav buttons, IntersectionObserver
- `demo.html` — Live demo

## Usage

```html
<div class="ease-carousel-container">
  <div class="ease-carousel">
    <div class="ease-carousel-item" style="background:#6c63ff;">Slide 1</div>
    <div class="ease-carousel-item" style="background:#8b5cf6;">Slide 2</div>
  </div>
  <button class="ease-carousel-btn ease-carousel-btn-prev">‹</button>
  <button class="ease-carousel-btn ease-carousel-btn-next">›</button>
  <div class="ease-carousel-indicators">
    <button class="ease-carousel-indicator"></button>
    <button class="ease-carousel-indicator"></button>
  </div>
</div>
<script src="script.js"></script>
```

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-carousel-container` | Wrapper for positioning |
| `.ease-carousel` | Scroll-snap track |
| `.ease-carousel-item` | Slide (100% width) |
| `.ease-carousel-vertical` | Vertical orientation |
| `.ease-carousel-btn` | Nav button |
| `.ease-carousel-btn-prev` / `-next` | Direction |
| `.ease-carousel-indicators` | Dot container |
| `.ease-carousel-indicator` | Single dot |
| `.ease-carousel-indicator-active` | Active dot |
| `.ease-carousel-caption` | Text overlay |

## JS

- Auto-play interval: 4000ms
- Pauses on user interaction
- Resumes when carousel re-enters viewport (IntersectionObserver)
- Tracks active slide via scroll position
