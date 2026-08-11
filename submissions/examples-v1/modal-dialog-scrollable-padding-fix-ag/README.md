# Modal Dialog Scrollable Padding Collapse Fix (Issue #14080)

## What does this do?
Adds a pseudo-element (`::after`) to `.ease-modal-body` inside a `.ease-modal-dialog-scrollable` to prevent the bottom padding from collapsing when the user scrolls to the very bottom of the modal content.

## How is it used?
```html
<div class="ease-modal-dialog ease-modal-dialog-scrollable">
  <div class="ease-modal-body">...</div>
</div>
```

## Why is it useful?
In many browser engines (like WebKit/Blink), an element with `overflow-y: auto` will collapse its bottom padding when scrolled completely to the bottom, causing the last line of text to touch the edge of the scroll container. Injecting a block-level pseudo-element ensures the visual space at the bottom is consistently preserved.
