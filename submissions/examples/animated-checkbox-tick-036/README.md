# Animated Checkbox Tick

A reusable custom checkbox with a smooth check-mark reveal when the control
is selected.

## What does it do?

The component provides:

- Animated check-mark reveal.
- Custom checkbox styling.
- Native checkbox semantics.
- Hover interaction.
- Keyboard focus interaction.
- Subtle selection feedback.
- Responsive layout.
- Reduced-motion support.
- No JavaScript.
- No external libraries or assets.

## How do I use it?

Keep a native checkbox and place the visual box immediately after it:

```html
<label class="ease-checkbox">
  <input type="checkbox">
  <span class="ease-checkbox__box" aria-hidden="true"></span>
  <span>Accept terms</span>
</label>
```