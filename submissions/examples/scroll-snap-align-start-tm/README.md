# scroll-snap-align-start-tm

## What does this do?
Adds a `.scroll-snap-align-start` utility class that snaps child elements to the start edge of a scroll snap container.

## How is it used?
```html
<div style="scroll-snap-type: x mandatory; overflow-x: scroll; display: flex;">
  <div class="scroll-snap-align-start">Card 1</div>
  <div class="scroll-snap-align-start">Card 2</div>
</div>
```

## Why is it useful?
Start-edge snapping is the most common alignment for horizontal carousels and image galleries, ensuring each item aligns flush to the left edge on scroll. Fills a gap in EaseMotion's scroll utility suite.
