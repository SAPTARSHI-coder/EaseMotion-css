# Toast Stack

A stacked toast notification system where toasts spring in from the right, self-dismiss with a draining progress bar, and slide back out.

## How is it used?

Create a toast container and append `.toast` elements with a variant class:

```html
<div class="toast-zone">
  <div class="toast toast-success">
    <span class="toast-icon">✅</span>
    <span class="toast-text">Changes saved</span>
    <span class="toast-bar"></span>
  </div>
</div>
```

Add `.in` on insert to trigger the `toastIn` spring, or `.out` to run the `toastOut` slide. The progress bar drains via `scaleX` on a `4.5s` timeline that matches the auto-dismiss.

## Why is it useful?

Toasts are one of the most common feedback patterns in web apps, yet most implementations bolt on a library. This component shows the full lifecycle — enter spring, auto-dismiss progress, exit slide, stacking, and a manual close button — expressed with a handful of CSS classes and keyframes, matching EaseMotion's class-driven, dependency-free direction.
