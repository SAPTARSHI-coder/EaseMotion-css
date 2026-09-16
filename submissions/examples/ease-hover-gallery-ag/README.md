# Hover-Reveal Image Gallery

An image grid where hovering seamlessly expands the focused image, built
entirely in CSS and HTML — no JavaScript.

## Features
- Flexbox-based layout using `flex-grow` transitions for the expand effect
- Smooth image scale, brightness, and saturation shift on hover
- Caption fades and slides in on the active image
- Fully responsive — items share space proportionally

## Usage
```html
<div class="hover-gallery">
  <div class="hover-gallery-item">
    <img src="your-image.jpg" alt="Description" />
    <div class="hover-gallery-caption">Caption</div>
  </div>
  <!-- repeat for each image -->
</div>
```

## Files
- `demo.html` — standalone demo page (uses picsum.photos placeholder images)
- `style.css` — all styles and transitions
- `README.md` — this file