# Stacked Card Hover Shift

A reusable layered-card interaction where multiple surfaces smoothly shift
apart when the stack is hovered or focused.

## What does it do?

The component provides:

- Layered card presentation.
- Progressive card separation.
- Different movement distances for each layer.
- Subtle front-card elevation.
- Hover interaction.
- Keyboard focus interaction.
- Responsive behavior.
- Reduced-motion support.
- No JavaScript.
- No external libraries or assets.

## How do I use it?

Create a stack containing individually positioned layers:

```html
<a class="ease-layer-stack" href="#">
  <span class="ease-layer-stack__layer ease-layer-stack__layer--rear">
    <span>03</span>
  </span>

  <span class="ease-layer-stack__layer ease-layer-stack__layer--middle">
    <span>02</span>
  </span>

  <span class="ease-layer-stack__layer ease-layer-stack__layer--front">
    <span>01</span>
    <h3>Layered Motion</h3>
  </span>
</a>
```