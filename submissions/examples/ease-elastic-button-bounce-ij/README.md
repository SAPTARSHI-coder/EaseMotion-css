# Ease Elastic Button Bounce

## What does this do?
A button with a rubber-band press-and-bounce animation. On click, the button squashes down, stretches up past its resting position, then settles with an elastic overshoot. Uses a cubic-bezier spring curve for a natural bounce feel. Includes solid, outline, and ghost variants.

## How is it used?
```html
<button class="ease-elastic-btn" data-bounce>
  Click Me
</button>
```
Add the `is-bouncing` class on click to trigger the animation. Use `ease-elastic-btn--sm` / `--lg` for sizes, `--outline` / `--ghost` for variants. Customize colors and bounce parameters via CSS vars.

## CSS Custom Properties
| Prop | Default | Description |
|------|---------|-------------|
| `--btn-bg` | `#6366f1` | Button background color |
| `--btn-color` | `#ffffff` | Button text color |
| `--bounce-height` | `8px` | How high the button bounces up |
| `--press-duration` | `0.6s` | Duration of the full bounce animation |

## Why is it useful?
Bouncy buttons add a playful, tactile feel to UI interactions. The elastic bounce provides satisfying feedback on clicks, making the interface feel more responsive and engaging. This is especially effective for call-to-action buttons, submit buttons, and interactive controls where delight matters.
