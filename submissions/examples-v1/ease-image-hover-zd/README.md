# Ease Image Hover Zd

## What does this do?
An animated image hover effects component showcasing 4 different hover effects (zoom, grayscale-to-color, overlay with text, and border draw) — pure HTML and CSS.

## How is it used?
```html
<!-- Zoom effect -->
<div class="ih-item ih-zoom">
  <img class="ih-img" src="photo.jpg" alt="Description">
</div>

<!-- Grayscale effect -->
<div class="ih-item ih-grayscale">
  <img class="ih-img" src="photo.jpg" alt="Description">
</div>

<!-- Overlay effect (add .ih-overlay inside) -->
<div class="ih-item">
  <img class="ih-img" src="photo.jpg" alt="Description">
  <div class="ih-overlay">
    <div class="ih-overlay-title">Title</div>
    <div class="ih-overlay-desc">Description</div>
  </div>
</div>

<!-- Border draw effect -->
<div class="ih-item ih-border-draw">
  <img class="ih-img" src="photo.jpg" alt="Description">
</div>
```

Effects: ih-zoom, ih-grayscale, ih-border-draw. Omit for overlay effect.

## Why is it useful?
Image hover effects are essential for portfolios, galleries, product showcases, and content cards. This component provides 4 common effects in one lightweight, reusable component.
