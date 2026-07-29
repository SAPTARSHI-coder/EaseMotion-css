# Bubble Chart Animate

An animated bubble/balloon chart component where data bubbles pulse between growing and shrinking states. Each bubble supports a custom delay for staggered animation and exposes its value as a floating badge.

## HTML Structure

```html
<div class="ease-bubble-chart-animate">
  <div class="bubble" style="--bubble-delay: 0s;" data-value="85">Label</div>
  <div class="bubble" style="--bubble-delay: 0.15s;" data-value="62">Label</div>
</div>
```

The `data-value` attribute (0–100) determines the bubble size. The `--bubble-delay` custom property staggers the animation per bubble.

## CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--bubble-min-size` | `60px` | Minimum bubble diameter (for 0 value) |
| `--bubble-max-size` | `140px` | Maximum bubble diameter (for 100 value) |
| `--anim-duration` | `6s` | Duration of one full pulse cycle |

## Usage

Add `.ease-bubble-chart-animate` to a container and place `.bubble` children inside. Override `--data-value` on each bubble to control its size. Use `class="playing"` or `class="paused"` on the container to control animation state. Each bubble's radial gradient background can be customized directly via `background`.
