# Masonry Layout Card Spacing Fix

## What does this do?
This contribution corrects a layout collision bug where card components nested directly inside masonry containers had zero vertical spacing, causing them to touch and overlap. It removes a broken `margin-bottom: inherit;` override and replaces it with standard masonry-gap spacing variables.

## How is it used?
Define your masonry column layout enclosing your card elements:

```html
<link rel="stylesheet" href="style.css">

<div class="masonry-hn">
  <div class="card-hn">
    <h3>Card Title</h3>
    <p>Card content...</p>
  </div>
  <div class="card-hn">
    <h3>Card Title 2</h3>
    <p>Card content...</p>
  </div>
</div>
```

The cards will automatically flow into masonry columns while preserving their vertical gap.

## Why is it useful?
It preserves visual alignment and grid spacing integrity. Previously, placing cards inside a masonry grid broke margins because the elements attempted to inherit the container's margin-bottom (which defaults to `0` or is undefined), causing layout collisions.
