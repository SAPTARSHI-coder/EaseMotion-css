# ease-hang — Hanging Pendulum Swing Animation

An element that hangs from its top edge and gently swings like a pendant, price tag, or ornament. Uses `transform-origin: top center` with a physically-inspired damped pendulum keyframe.

## Classes

| Class               | Description                       |
| ------------------- | --------------------------------- |
| `.ease-hang`        | Default gentle swing (3s, 12°)    |
| `.ease-hang-fast`   | Quick energetic swing (1.2s, 10°) |
| `.ease-hang-slow`   | Very slow lazy swing (6s, 8°)     |
| `.ease-hang-wide`   | Wide arc swing (2s, 28°)          |
| `.ease-hang-once`   | Swing once then settle to rest    |
| `.ease-hang-paused` | Pause animation on hover          |

## CSS Custom Properties

| Token                  | Default       | Description                    |
| ---------------------- | ------------- | ------------------------------ |
| `--ease-hang-duration` | `3s`          | Animation duration             |
| `--ease-hang-angle`    | `12deg`       | Maximum rotation angle         |
| `--ease-hang-origin`   | `top center`  | Transform origin (pivot point) |
| `--ease-hang-easing`   | `ease-in-out` | Timing function                |

## Usage

```html
<!-- Basic hanging tag -->
<div class="ease-hang">Sale!</div>

<!-- Custom angle and speed -->
<div
  class="ease-hang"
  style="--ease-hang-angle: 25deg; --ease-hang-duration: 2s;"
>
  Swing wide
</div>

<!-- Hang from left edge (door hinge effect) -->
<div class="ease-hang" style="--ease-hang-origin: top left;">Door hinge</div>

<!-- Single swing then settle -->
<div class="ease-hang ease-hang-once">Settle</div>

<!-- Pause on hover -->
<div class="ease-hang ease-hang-paused">Hover to pause</div>
```

## Important: display: inline-block

`transform-origin` only works on block or inline-block elements. `.ease-hang` sets `display: inline-block` automatically. If you need a block-level element, add `display: block` or `display: flex` and it will override this.

## Accessibility

Animation is disabled when `prefers-reduced-motion: reduce` is set — the element renders statically.

## Why it fits EaseMotion CSS

Complements existing movement animations (`ease-float`, `ease-bounce`, `ease-shake`) with a physically-inspired pendulum motion. Useful for price tags, notifications, badges, ornaments, and decorative UI elements.

Closes #11914
