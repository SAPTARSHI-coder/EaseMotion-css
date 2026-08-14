# Fade-In Tooltip

A lightweight tooltip that smoothly fades and moves upward into view when
its trigger is hovered or receives keyboard focus.

## What does it do?

The component provides:

- Fade-in animation.
- Subtle upward reveal.
- Hover interaction.
- Keyboard focus interaction.
- Tooltip pointer styling.
- Responsive layout.
- Reduced-motion support.
- No JavaScript.
- No external libraries or assets.

## How do I use it?

Wrap a trigger and tooltip content inside the `ease-tooltip` class:

```html
<div class="ease-tooltip">
  <button
    class="ease-tooltip__trigger"
    type="button"
    aria-describedby="tooltip"
  >
    More information
  </button>

  <span
    class="ease-tooltip__content"
    id="tooltip"
    role="tooltip"
  >
    Additional information appears here.
  </span>
</div>
```