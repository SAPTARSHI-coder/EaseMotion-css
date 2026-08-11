# Image Compare Slider

## What does this do?

A pure CSS before/after image comparison slider. Users drag a center handle to reveal one image behind another — no JavaScript required.

## How is it used?

```html
<div class="image-compare">
  <!-- Base image (visible when slider is pulled fully left) -->
  <img class="image-compare-before" src="before.jpg" alt="Before">

  <!-- Label on the left -->
  <span class="image-compare-before-label">BEFORE</span>

  <!-- Resizeable overlay (after image) -->
  <div class="image-compare-after-wrap">
    <img class="image-compare-after" src="after.jpg" alt="After">
    <span class="image-compare-after-label">AFTER</span>
  </div>
</div>
```

Open `demo.html` in any modern browser. Drag the center handle left or right. That's it.

## Why is it useful?

Image comparison sliders appear everywhere — portfolio sites, design system docs, photography showcases, and SaaS landing pages. This implementation aligns with EaseMotion's philosophy of delivering interactive UI patterns through pure CSS. The `resize` property drives the interaction, so there's zero JavaScript footprint, making it fast and accessible.

The component includes labels, a vertical divider, a drag-handle indicator, responsive sizing, and dark mode support out of the box.
