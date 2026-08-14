# ease-block-reveal-stagger

Staggered block reveal animation. Direct children of the container appear sequentially with a clip-path slit-scan reveal and a subtle scale-up entrance. Each child's animation delay is a multiple of `--stagger-delay` based on its index.

## HTML Structure

```html
<div class="ease-block-reveal-stagger">
  <span>Item 1</span>
  <span>Item 2</span>
  <!-- up to 8 children with automatic staggering -->
</div>
```

## CSS Variables

| Variable           | Default     | Description                                      |
|--------------------|-------------|--------------------------------------------------|
| `--block-color`    | `#e17055`   | Background color for each child block            |
| `--reveal-duration` | `0.6s`    | Duration of the reveal animation on each child   |
| `--stagger-delay`  | `0.1s`      | Delay offset between each child's animation start |

## Usage

```html
<link rel="stylesheet" href="path/to/style.css" />

<div
  class="ease-block-reveal-stagger"
  style="--block-color: #0984e3; --reveal-duration: 0.4s; --stagger-delay: 0.08s;"
>
  <div>1</div><div>2</div><div>3</div><div>4</div>
</div>
```

The animation plays once on load (`both` fill mode retains final state). Supports up to 8 staggered children. Reset via re-triggering the animation.
