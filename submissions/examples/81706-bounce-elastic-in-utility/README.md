# Bounce Elastic In Utility

This example demonstrates the `ease-anim-bounce-elastic-in` utility requested for EaseMotion CSS. It provides a reusable entrance motion with a short overshoot before the element settles into its final position.

## Implementation

The utility is backed by `@keyframes ease-bounce-elastic-in` and exposes two timing variables:

- `--ease-duration` controls the animation length.
- `--ease-timing` controls the timing curve.

The animated properties are limited to `transform` and `opacity`, and the demo includes a `prefers-reduced-motion` override.

## Usage

```html
<div class="ease-anim-bounce-elastic-in">Content</div>
```

Customize the motion with CSS variables:

```css
.component {
  --ease-duration: 750ms;
  --ease-timing: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## Demo

Open `demo.html` directly in a modern browser. The example has no JavaScript or build dependency.
