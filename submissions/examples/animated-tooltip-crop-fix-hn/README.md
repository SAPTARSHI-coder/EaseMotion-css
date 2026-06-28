# Tooltip Mobile Responsive Layout Fix

## What does this do?
This contribution corrects a layout bug where default tooltips (which position at the top by default when no position attribute is specified) did not execute the responsive fallback to bottom positioning on mobile screens. It extends the responsive media query triggers to target default `:not([data-position])` tooltips.

## How is it used?
Configure tooltips with or without explicit positions:

```html
<link rel="stylesheet" href="style.css">

<!-- Explicit top tooltip -->
<button class="tooltip-hn" data-tooltip="Tooltip Text" data-position="top">Button</button>

<!-- Default top tooltip -->
<button class="tooltip-hn" data-tooltip="Tooltip Text">Button</button>
```

On desktop layouts, both render at the top. On viewports `<= 640px`, both will automatically swap to bottom positioning.

## Why is it useful?
It prevents tooltips from cropping off-screen on mobile devices. Prior to this fix, developers using default tooltips faced hidden or cropped tooltips on narrow viewports because only explicitly declared `data-position="top"` tooltips were flipped to the bottom.
