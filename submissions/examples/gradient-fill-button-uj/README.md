# Hover Color Gradient Fill

## What does this do?

It produces a background slide animation where an elegant gradient smoothly sweeps across a button on hover.

## How is it used?

Apply the `gradient-fill-button-uj` class to your button or link elements:

```html
<button class="gradient-fill-button-uj">
  Explore More
</button>
```

Customize the transition properties directly inside your CSS using variables:
- `--gradient-fill-start`: Starting stop color of the hover gradient.
- `--gradient-fill-end`: Ending stop color of the hover gradient.
- `--gradient-base-bg`: Default non-hover background color of the button (defaults to `#1e293b`).
- `--gradient-text-color`: Default text color.
- `--gradient-text-hover-color`: Text color on hover.
- `--gradient-border-color`: Default border line color.
- `--gradient-fill-duration`: Slide animation speed (defaults to `0.4s`).

## Why is this useful?

This micro-interaction brings a premium call-to-action hover effect to landing pages and dashboard headers without the need for heavy JS libraries or canvas rendering. By manipulating `background-position` properties over a scaled linear-gradient, it performs smoothly, avoids reflow calculations, and resolves preferences for reduced motion properly by disabling transitions.
