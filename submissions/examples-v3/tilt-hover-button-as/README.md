# Premium Catalog Tilt Hover Button

## What does this do?

This component creates a pure CSS-animated product catalog button utilizing an absolute-positioned multi-quadrant matrix to achieve real-time 3D tilt mechanics and dynamically shifting specular glint layers with zero JavaScript overhead.

---

## How is it used?

Wrap the button trigger in a perspective-enabled layout wrapper flanked by invisible directional grid detection zones, allowing clean structural HTML patterns to drive adjacent sibling transforms.

```html
<div class="tilt-button-wrapper">
  <div class="tilt-zone top-left"></div>
  <div class="tilt-zone top-right"></div>
  <div class="tilt-zone bottom-left"></div>
  <div class="tilt-zone bottom-right"></div>

  <button class="tilt-btn">
    <span class="btn-text">ADD TO BAG</span>
    <span class="btn-glint"></span>
  </button>
</div>
```

### Exposed Global Parameters

Developers can customize the animation behavior and sizing through CSS custom properties defined on the `:root` layer.

| Variable | Description | Default |
|----------|-------------|---------|
| `--tilt-duration` | Controls rotation transition speed. | `350ms` |
| `--tilt-easing` | Defines the animation easing curve. | `cubic-bezier(0.25, 1, 0.5, 1)` |
| `--tilt-scale` | Scales the button on directional hover. | `1.04` |
| `--tilt-angle-x` | Controls the X-axis tilt angle. | Customizable |
| `--tilt-angle-y` | Controls the Y-axis tilt angle. | Customizable |

---

## Why is it useful?

This component aligns with EaseMotion's philosophy by delivering premium interactive micro-animations entirely with CSS. It leverages hardware-accelerated 3D transforms (`transform-style: preserve-3d`) to provide smooth, high-performance visual effects without JavaScript, minimizing layout recalculations and ensuring excellent rendering performance.