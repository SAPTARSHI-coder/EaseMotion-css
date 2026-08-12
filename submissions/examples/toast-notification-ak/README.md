# Toast Notification Component

## What does this do?
A styled toast notification component with slide-in/slide-out animations and success/error/warning variants, positioned as a fixed stack in the corner of the screen.

## How is it used?
```html
<div class="toast-container">
  <div class="toast toast--success">
    <span class="toast-icon">✅</span>
    <div class="toast-content">
      <div class="toast-title">Success</div>
      Your changes have been saved.
    </div>
    <button class="toast-close" aria-label="Close">✕</button>
  </div>
</div>
```
To dismiss with animation, toggle a `closing` class on the `.toast` element before removing it from the DOM (e.g. via a small JS snippet listening to the close button, then removing the node after the `toastSlideOut` animation completes).

## Why is it useful?
Toast notifications are one of the most requested UI patterns for feedback (save confirmations, errors, warnings). This provides ready-made variant styling, a smooth slide-in/out animation pair, mobile-responsive positioning, and respects `prefers-reduced-motion` — fitting EaseMotion's animation-first, accessible philosophy while covering a genuinely common UI need.

## CSS Custom Properties
- `--toast-bg`: toast background color (default `#1b1b2f`)
- `--toast-radius`: corner radius (default `10px`)
- `--toast-shadow`: box-shadow (default `0 8px 24px rgba(0, 0, 0, 0.4)`)
- `--transition-speed`: animation duration (default `0.35s`)
