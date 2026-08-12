# Animated Progress Bar (Determinate)

A pure CSS/HTML animated progress bar that smoothly fills from `0%` to a
target percentage on load, with a continuously animated diagonal-stripe
gradient to simulate ongoing activity.

## Files

- `demo.html` — usage examples with several target percentages and color variants
- `style.css` — all styles and animations
- `README.md` — this file

## How it works

The component uses two nested elements:

- **`.progress-track`** — the outer container (the "track"). It holds the
  target percentage as a CSS custom property, `--progress`, set inline.
- **`.progress-fill`** — the inner child element (the "fill"). Its width is
  animated from `0%` to `var(--progress)` via a `@keyframes` rule
  (`fill-progress`). A second, infinitely-looping keyframe animation
  (`stripe-move`) shifts a repeating diagonal-stripe gradient across the
  fill to give it a sense of continuous activity.

## Usage

Set the desired percentage using the `--progress` CSS variable on the
inline `style` attribute of `.progress-track`:

```html
<div class="progress-track" style="--progress: 75%;">
  <div class="progress-fill"></div>
</div>
```

No JavaScript is required — just change the `--progress` value per
instance, and optionally add a label above it.

### Color variants (optional)

Add one of these classes to `.progress-track` to change the fill color:

- `success` — green
- `warning` — amber
- `danger` — red

### Accessibility / reduced motion

Users with `prefers-reduced-motion: reduce` enabled will see the fill jump
straight to its target width instead of animating, while still keeping the
correct final value.

## Notes

- No existing files were modified — this is a strictly additive
  contribution living entirely in
  `submissions/examples/animated-progress-bar-aaniya22/`.
- No JavaScript is used; the fill width and stripe animation are both
  driven by CSS `@keyframes` and the `--progress` custom property.
