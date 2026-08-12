# Modal Slide Opacity Fix (Issue #14062)

## What does this do?
Demonstrates a corrected slide-up modal animation pattern where the closed state explicitly includes `opacity: 0` alongside `transform: translateY(100%)`.

## How is it used?
```html
<div id="m" class="demo-modal-overlay">
  <div class="demo-modal demo-modal-slide">...</div>
</div>
```
Toggle `.is-active` on the overlay to open/close.

## Why is it useful?
The current `.ease-modal-slide` relies solely on the overlay `visibility: hidden` for concealment in the closed state. Adding `opacity: 0` to the slide modal itself prevents any visual flash when overlay transitions and modal transitions are not perfectly synchronized — especially under CPU throttling or rapid toggling.
