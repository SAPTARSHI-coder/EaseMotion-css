# Expandable Notification Toast

A lightweight notification toast pattern with a smooth slide-and-fade
entrance, automatic dismissal, and an accessible close control.

## What does it do?

The component provides:

- Smooth toast entrance animation.
- Animated dismissal.
- Success, information, and warning states.
- Manual close control.
- Automatic dismissal after five seconds.
- `role="status"` feedback.
- Responsive positioning.
- Reduced-motion support.
- No external libraries or assets.

## How do I use it?

Create a toast using the `motion-toast` class:

```html
<aside class="motion-toast" role="status">
  <div class="motion-toast__icon" aria-hidden="true">✓</div>

  <div class="motion-toast__content">
    <strong>Saved successfully</strong>
    <p>Your changes are now stored.</p>
  </div>

  <button
    class="motion-toast__close"
    type="button"
    aria-label="Dismiss notification"
  >
    ×
  </button>
</aside>
```



