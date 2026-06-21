# CSS Overscroll Behavior Feature

Submits scroll-boundary suppression utility architectures (`.ease-overscroll-none`, `.ease-overscroll-contain`) under issue #15436.

## Functional Mechanics

- **The Problem:** When a user scrolls inside a modal, a side-panel, or a chat window and hits the bottom, the browser automatically propagates the excess kinetic energy to the parent document. This causes the main website to jitter or scroll unexpectedly, breaking the UX of nested overlays and specialized content widgets.
- **The Solution:** Scroll-chaining suppression. The `.ease-overscroll-none` utility applies `overscroll-behavior: none`. It effectively locks the scroll event within the boundaries of the local component, telling the browser engine to ignore scroll-chaining behavior entirely when the local boundary is reached.



## Usage Layout Structure
```html
<div class="modal-content ease-overscroll-none" style="overflow-y: auto;">
  </div>
```

Closes #15436
