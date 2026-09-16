# Slide-In Action Panel

A reusable contextual action panel that slides into view from the side of
the interface.

## What does it do?

The component provides:

- Smooth side-to-side panel entrance.
- Subtle backdrop transition.
- Close button.
- Escape-key dismissal.
- Keyboard focus support.
- Responsive mobile layout.
- Reduced-motion support.
- No external libraries or assets.

## How do I use it?

Create an action panel with the `slide-action-panel` class:

```html
<aside class="slide-action-panel">
  <span class="slide-action-panel__label">QUICK ACTIONS</span>

  <h2>Choose an action</h2>

  <p>
    Access frequently used controls without leaving the current view.
  </p>

  <div class="slide-action-panel__actions">
    <button type="button">Save changes</button>
    <button type="button">Duplicate</button>
  </div>
</aside>
```