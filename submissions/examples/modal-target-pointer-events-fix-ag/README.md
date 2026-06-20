# Modal :target Pointer Events Fix (Issue #14066)

## What does this do?
Demonstrates the correct `transition-delay` technique for `visibility` on a `:target` modal overlay, ensuring `pointer-events: none` is active during the entire close animation with zero blocking window.

## How is it used?
```html
<a href="#myModal">Open</a>
<div id="myModal" class="demo-modal-overlay">
  <div class="demo-modal">...</div>
</div>
```

## Why is it useful?
By using `transition: visibility 0s linear 0.25s` (delayed by the close duration) vs `transition: visibility 0s linear 0s` (immediate on open), the overlay is immediately non-interactive on open and stays non-interactive during the entire close fade, eliminating the pointer-events blocking window.
