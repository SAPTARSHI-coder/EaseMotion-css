# Icon Bounce Notification (#36738)

A notification bell icon with a badge that performs a drop-bounce animation on hover.

## CSS Custom Properties

| Property            | Default    | Description                 |
|---------------------|------------|-----------------------------|
| `--icon-color`      | `#89b4fa`  | Fill color of the bell icon |
| `--badge-color`     | `#f38ba8`  | Background of badge         |
| `--bounce-height`   | `20px`     | Maximum drop distance       |
| `--bounce-duration` | `0.6s`     | Duration of bounce          |

## Usage

```html
<link rel="stylesheet" href="style.css">
<div class="icon-wrap bounce-drop">
  <!-- SVG bell icon -->
  <span class="badge">3</span>
</div>
```

The `.badge` element shows a notification count. The drop-bounce animation plays on `:hover`.

## Interactive Controls

Color pickers and range sliders let you tweak all CSS variables live.
