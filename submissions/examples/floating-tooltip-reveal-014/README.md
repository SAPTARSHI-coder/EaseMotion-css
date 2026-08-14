# Floating Tooltip Reveal

A lightweight tooltip interaction that smoothly reveals contextual
information when an interactive element is hovered or focused.

## What does it do?

The component provides:

- Smooth fade-in and upward reveal.
- Pointer hover support.
- Keyboard focus support.
- `role="tooltip"` semantics.
- `aria-describedby` association.
- Subtle trigger elevation.
- Responsive tooltip sizing.
- Reduced-motion support.
- No JavaScript.
- No external libraries or assets.

## How do I use it?

Create an interactive element with the `floating-tooltip` class and associate
the tooltip content with `aria-describedby`:

```html
<button
  class="floating-tooltip"
  type="button"
  aria-describedby="tooltip-example"
>
  <span>More information</span>

  <span
    class="floating-tooltip__content"
    id="tooltip-example"
    role="tooltip"
  >
    Additional contextual information.
  </span>
</button>
```