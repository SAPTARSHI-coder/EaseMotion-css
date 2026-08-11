# ease-blur-motion-transition

Motion blur transition effect. Assign this class to any element that changes position or state — it applies a smooth `filter: blur()` transition alongside transform and background transitions, simulating directional motion blur.

## HTML Structure

```html
<div class="ease-blur-motion-transition" style="--blur-amount: 6px;">
  <!-- moving element -->
</div>
```

## CSS Variables

| Variable               | Default     | Description                                       |
|------------------------|-------------|---------------------------------------------------|
| `--blur-amount`        | `8px`       | Peak blur radius during the transition            |
| `--transition-duration` | `0.6s`    | Duration of the movement/animation transition     |
| `--blur-color`         | `#a29bfe`   | Background color used during the transition       |

## Usage

```html
<link rel="stylesheet" href="path/to/style.css" />

<div
  class="ease-blur-motion-transition"
  style="--blur-amount: 10px; --transition-duration: 0.4s; --blur-color: #fd79a8;"
>
  Moving content
</div>
```

To trigger the effect, toggle a class or property (e.g., `transform: translateX(100px)`) on the element. The CSS transition will animate `transform`, `filter`, `background`, and `opacity` over `--transition-duration`.
