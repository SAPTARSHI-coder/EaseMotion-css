# Ease Carousel Focus Outline Fix

## Overview
This submission provides a fix for the `ease-carousel` component focus outline clipping issue (Bug #59742). When the carousel component is placed inside a container with `overflow: hidden` or `overflow: auto`, the standard focus outline gets clipped, leading to a degraded accessibility experience. 

## Solution
The fix involves applying an `outline-offset: -2px` when the component receives `:focus-visible`. This pulls the focus ring inward, ensuring it remains fully visible within the component's bounding box and is not clipped by parent containers.

## Usage
Simply include the updated CSS class on your carousel container. Focus the element using keyboard navigation (`Tab`) to see the corrected focus ring.

```html
<div class="overflow-container" style="overflow: hidden;">
  <div class="ease-carousel" tabindex="0">
    Ease Carousel
  </div>
</div>
```

## Why it fits EaseMotion CSS
Accessibility is a core part of great UI. Ensuring focus states are always clearly visible, regardless of layout constraints like overflow, fits perfectly with EaseMotion's philosophy of providing polished, accessible, and high-quality components.
