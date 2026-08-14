# Icon Animated Bell (#36737)

A bell icon with a shake-ring animation triggered on hover.

## CSS Custom Properties

| Property            | Default    | Description              |
|---------------------|------------|--------------------------|
| `--bell-color`      | `#f1c40f`  | Fill color of the bell   |
| `--bell-size`       | `64px`     | Width and height of icon |
| `--ring-color`      | `#e74c3c`  | Accent ring color        |
| `--shake-duration`  | `0.5s`     | Duration of shake cycle  |

## Usage

```html
<link rel="stylesheet" href="style.css">
<div class="icon-wrap bell-shake">
  <!-- SVG bell icon -->
</div>
```

Place the SVG (or your own icon) inside `.icon-wrap`. The shake animation plays on `:hover`.

## Interactive Controls

The demo includes color pickers and sliders to adjust all CSS variables in real time.
