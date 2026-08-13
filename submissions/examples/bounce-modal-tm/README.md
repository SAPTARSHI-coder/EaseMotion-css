# Bounce-in modal

1. What does this do? A modal that scales in with a soft overshoot, using a single `cubic-bezier` ease.

2. How is it used? Wrap modal content in `<div class="modal-tm" role="dialog" aria-modal="true">`. Add `modal-md-tm` or `modal-lg-tm` for larger widths.

3. Why is it useful? The slight bounce reads as responsive and friendly, while the reduced-motion media query keeps the effect accessible.
