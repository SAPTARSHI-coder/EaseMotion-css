# Stacked Card Hover Shift

A reusable stacked-card interaction where layered cards smoothly shift apart
when the stack is hovered or receives keyboard focus.

## What does it do?

The component provides:

- Layered card presentation.
- Smooth card separation.
- Subtle front-card lift.
- Hover interaction.
- Keyboard focus interaction.
- Responsive behavior.
- Reduced-motion support.
- No JavaScript.
- No external libraries or assets.

## How do I use it?

Create a stack with multiple positioned card layers:

```html
<div class="ease-stack-card" tabindex="0">
  <article class="ease-stack-card__layer ease-stack-card__layer--back">
    <span>03</span>
  </article>

  <article class="ease-stack-card__layer ease-stack-card__layer--middle">
    <span>02</span>
  </article>

  <article class="ease-stack-card__layer ease-stack-card__layer--front">
    <h3>Creative Layers</h3>
  </article>
</div>
```