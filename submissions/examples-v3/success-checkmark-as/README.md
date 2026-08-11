# Animated Success Checkmark

### What does this do?

It confirms a completed action by drawing a circle and then a checkmark inside it, animating the SVG stroke.

### How is it used?

```html
<div class="success" role="status">
  <svg class="success-mark" viewBox="0 0 52 52" aria-hidden="true">
    <circle class="success-circle" cx="26" cy="26" r="24" />
    <path class="success-check" d="M14 27l7 7 16-16" />
  </svg>
  <p>Payment successful</p>
</div>
```

The circle draws first, then the check draws after a short delay, both by animating `stroke-dashoffset` from the full length down to zero.

### Why is it useful?

A drawn checkmark is a satisfying way to confirm a payment, a save, or a signup. This animates the SVG stroke with `stroke-dasharray` and `stroke-dashoffset`, so it needs no JavaScript. The wrapper has a `status` role for assistive tech, and under `prefers-reduced-motion: reduce` the mark is shown fully without drawing.
