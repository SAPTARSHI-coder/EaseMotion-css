# Image Zoom-Rotate Hover

**What does this do?**  
Smoothly scales up and slightly rotates an image within an overflow-hidden container on hover, adding depth and motion to image grids and cards.

**How is it used?**  
Applied to a wrapper card or wrapper div containing an image:
```html
<!-- Scale 12% + rotate -2deg -->
<div class="gallery-card zoom-rotate-left">
  <div class="img-container">
    <img src="your-image.png" alt="...">
  </div>
</div>

<!-- Scale 12% + rotate 2deg -->
<div class="gallery-card zoom-rotate-right">
  <div class="img-container">
    <img src="your-image.png" alt="...">
  </div>
</div>

<!-- Scale 18% + rotate 3.5deg -->
<div class="gallery-card zoom-rotate-deep">
  <div class="img-container">
    <img src="your-image.png" alt="...">
  </div>
</div>
```

**Why is it useful?**  
Standard image zooming is clean but can feel static. Incorporating a very slight rotation (between 2 to 3.5 degrees) mimics parallax motion, making gallery boards, cards, and portfolio headers feel significantly more premium and dynamic. It is hardware-accelerated via `transform` transitions.

---

Submitted by: @Antigravity  
Date: 2026-06-01  
Status: **Pending review**
