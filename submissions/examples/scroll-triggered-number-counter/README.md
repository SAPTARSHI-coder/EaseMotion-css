# Scroll-Triggered Number Counter

A lightweight animated number counter that begins counting when its metric
enters the viewport.

## What does it do?

The component progressively changes a numeric value from zero to its target
value when the counter becomes visible.

It supports:

- Scroll-triggered animation.
- Configurable target values.
- Configurable animation duration.
- Integer and decimal values.
- Optional suffixes such as `%`, `+`, and `s`.
- One-time animation.
- Reduced-motion support.
- No external libraries or assets.

## How do I use it?

Create a counter with a target value:

```html
<div class="counter">
  <strong
    class="counter__value"
    data-target="98"
  >0</strong>

  <span class="counter__suffix">%</span>
</div>
```