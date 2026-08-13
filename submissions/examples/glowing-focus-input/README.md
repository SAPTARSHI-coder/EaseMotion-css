# Glowing Focus Input

A lightweight input-field interaction that uses a subtle animated glow to
clearly identify the currently focused form control.

## What does it do?

The component enhances the native focus state with:

- Animated border transition.
- Soft outer glow.
- Subtle focus elevation.
- `:focus-within` label feedback.
- Keyboard-accessible focus indicators.
- Responsive form layout.
- Reduced-motion support.
- No external libraries or assets.

## How do I use it?

Wrap an input with the `glow-field` class:

```html
<label class="glow-field">
  <span>Email address</span>
  <input
    type="email"
    placeholder="you@example.com"
  >
</label>
```