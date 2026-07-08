# Icon Rotating Gear (#36740)

A gear icon that spins continuously with a speed boost on hover.

## CSS Custom Properties

| Property       | Default    | Description              |
|----------------|------------|--------------------------|
| `--gear-color` | `#a6e3a1`  | Fill color of gear teeth |
| `--gear-size`  | `64px`     | Width and height of icon |
| `--spin-speed` | `3s`       | Duration per full spin   |
| `--spoke-color`| `#1e1e2e`  | Color of center hub      |

## Usage

```html
<link rel="stylesheet" href="style.css">
<div class="icon-wrap gear-spin">
  <!-- SVG gear icon -->
</div>
```

The gear rotates at `--spin-speed` speed. Hovering halves the duration for a speed-up effect.

## Interactive Controls

Color pickers and range sliders adjust all CSS variables live.
