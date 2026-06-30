# Card Horizontal Image Column Fix (Issue #14076)

## What does this do?
Demonstrates a correct horizontal card layout where the image column uses `flex: 0 0 160px` to constrain its width, preventing it from overflowing the container.

## How is it used?
```html
<div class="ease-card ease-card-horizontal">
  <div class="ease-img-col">...</div>
  <div class="ease-card-body">...</div>
</div>
```

## Why is it useful?
Without a constrained flex basis on the image column, wide images or lack of boundaries cause the column to fill 100% of the card width on desktop viewports. This pushes the text content completely out of view. By adding a firm constraint to the image column, the text and image align properly side-by-side.
