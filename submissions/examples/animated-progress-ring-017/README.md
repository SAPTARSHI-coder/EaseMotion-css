
# Animated Progress Ring

A lightweight circular progress indicator with a smooth entrance animation.

## What does it do?

The component provides:

- Circular completion visualization.
- Configurable progress value using a CSS custom property.
- Smooth entrance animation.
- Multiple visual states.
- Responsive sizing.
- `prefers-reduced-motion` support.
- No JavaScript.
- No external libraries or assets.

## How do I use it?

Set the progress value with the `--progress` custom property:

```html
<div
  class="animated-progress-ring"
  style="--progress: 75%;"
  role="img"
  aria-label="75 percent complete"
>
  <div class="animated-progress-ring__inner">
    <strong>75%</strong>
    <span>In progress</span>
  </div>
</div>
```