# Animated Notification Toast Stack

### What does this do?

It shows a stack of toast notifications that slide in from the right with a staggered delay, each with a status icon, a title, a message, and a timer bar that depletes.

### How is it used?

```html
<div class="toast-stack" role="status" aria-live="polite">
  <div class="toast is-success">
    <span class="toast-icon" aria-hidden="true"></span>
    <div class="toast-body">
      <strong>Saved</strong>
      <span>Your changes were saved successfully.</span>
    </div>
    <span class="toast-timer" aria-hidden="true"></span>
  </div>
</div>
```

Use `is-success`, `is-error`, or `is-info` on a `.toast` to set its color and icon. Each toast slides in with a per-item delay and its timer bar shrinks to suggest an auto dismiss.

### Why is it useful?

Toasts are a universal feedback pattern. This implementation combines a slide-in entrance with a depleting timer bar using only transforms and a scale animation, with readable class names. Icons are drawn with CSS so the demo is self contained, the stack uses `aria-live="polite"` for assistive tech, and motion is disabled under `prefers-reduced-motion: reduce`.
