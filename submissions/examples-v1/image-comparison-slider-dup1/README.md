# Image Comparison Slider

A component showing two overlapping layers with a draggable divider — sliding it left/right reveals more or less of the "before" layer over the "after" layer. Uses colored placeholder blocks in the demo; swap `.compare-after` and `.compare-before` backgrounds for real images in production.

## Usage
```html
<div class="compare-slider">
  <div class="compare-layer compare-after">After content</div>
  <div class="compare-before-wrap">
    <div class="compare-layer compare-before">Before content</div>
  </div>
  <div class="compare-handle"></div>
</div>
```

Attach the pointer event listeners shown in `demo.html` to the handle to drive the drag interaction.

## How it works
- The `.compare-before-wrap` clips the "before" layer to a percentage width
- Dragging the handle updates that width based on cursor position relative to the slider's bounding box
- Uses Pointer Events (`pointerdown`/`pointermove`/`pointerup`) so it works on both mouse and touch

## Browser support
Pointer Events are supported in all modern browsers, including touch devices.

## Notes
No external libraries required. To use with real images instead of color blocks, replace the `.compare-after`/`.compare-before` background gradients with `background-image` or nested `<img>` tags sized to the container.