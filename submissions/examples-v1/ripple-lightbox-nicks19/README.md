# Ripple Lightbox (Dark Mode Theme)

A sleek, pure CSS lightbox component featuring a massive outward "Ripple" expansion animation. Styled with a premium Dark Mode aesthetic, this modal provides a deeply immersive viewing experience for high-resolution images or portfolios.

## Features

- **Pure CSS Ripple Animation**: Instead of standard opacity fades, this lightbox uses `clip-path: circle()` to literally expand the viewport from the center outwards, mimicking a massive ripple effect native to the GPU.
- **Pure CSS State Management**: Relies entirely on the "Checkbox Hack" (`<input type="checkbox">` and `<label>`) to handle opening and closing without JavaScript.
- **Premium Dark Mode Styling**: Built specifically for dark interfaces. It features deep slate backgrounds (`#0f172a`), heavily blurred overlays (`backdrop-filter: blur(12px)`), and subtle off-white borders (`rgba(255,255,255,0.1)`) to create depth.
- **Staggered Content Reveal**: The inner image container waits for the ripple to partially expand (`transition-delay: 0.2s`) before sliding up and fading in, creating a polished, multi-stage entrance choreography.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML identically to `demo.html`.

## Usage Example

```html
<!-- State Controller -->
<input type="checkbox" id="lightbox-1" class="ease-lightbox-toggle">

<!-- Trigger (Thumbnail) -->
<label for="lightbox-1" class="ease-thumbnail">
  <img src="thumb.jpg" alt="Dark Architecture">
</label>

<!-- The Lightbox Modal -->
<div class="ease-ripple-lightbox">
  
  <!-- Clickable Overlay (Closes Modal) -->
  <label for="lightbox-1" class="ease-lightbox-overlay"></label>
  
  <!-- Modal Content -->
  <div class="ease-lightbox-content">
    <label for="lightbox-1" class="ease-lightbox-close">
      <!-- SVG Close Icon -->
    </label>
    
    <div class="ease-lightbox-image-container">
      <img src="fullsize.jpg" alt="Full Image">
      <div class="ease-lightbox-caption">Minimalist Architecture</div>
    </div>
  </div>
  
</div>
```

## Why it fits EaseMotion CSS

- **Modern CSS Features**: Leveraging `clip-path` for layout transitions is a modern, highly performant technique that breaks away from traditional rectangular modal fades.
- **Immersive Micro-Interactions**: The combination of the dark, blurred backdrop expanding rapidly across the screen creates an immersive "theatrical" feel perfect for photography or design portfolios.
- **Robust Layout**: Setting `pointer-events: none` on the hidden state ensures the `clip-path` doesn't intercept clicks when the modal is technically present but visually hidden (radius 0).
