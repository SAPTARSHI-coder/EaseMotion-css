# Animated Toggle Switch

A lightweight animated toggle control using a native checkbox and CSS
transitions.

## What does it do?

The component provides:

- Smooth sliding toggle thumb.
- Animated active and inactive states.
- Native checkbox interaction.
- Keyboard accessibility.
- Visible focus state.
- Subtle hover feedback.
- Responsive layout.
- `prefers-reduced-motion` support.
- No JavaScript.
- No external libraries or assets.

## How do I use it?

Wrap a native checkbox with the toggle track:

```html
<label class="ease-toggle">
  <input type="checkbox">

  <span class="ease-toggle__track" aria-hidden="true">
    <span class="ease-toggle__thumb"></span>
  </span>

  <span class="ease-toggle__content">
    <strong>Enable notifications</strong>
    <small>Receive updates about new activity.</small>
  </span>
</label>
```