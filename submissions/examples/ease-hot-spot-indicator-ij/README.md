# Hot Spot Indicator — #36730

An attention-grabbing "live" indicator with a continuous ripple pulse animation.

## CSS Custom Properties

| Property           | Default                | Description                     |
|--------------------|------------------------|---------------------------------|
| `--spot-color`     | `#ff4d6d`              | Background of the badge         |
| `--ripple-color`   | `rgba(255,77,109,.45)` | Color of the expanding rings    |
| `--pulse-size`     | `28px`                 | Base size of the pulse rings    |
| `--pulse-duration` | `1.8s`                 | Duration of one pulse cycle     |

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="hot-spot">
  <span class="label">Live</span>
  <span class="ripple"></span>
</div>
```

The `.ripple` element creates two offset expanding rings for a continuous effect.
