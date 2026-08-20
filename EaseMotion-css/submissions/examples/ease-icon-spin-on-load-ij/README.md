# Icon Spin on Load (#36741)

A refresh icon that performs an entrance rotation animation when the page loads.

## CSS Custom Properties

| Property           | Default                                      | Description                |
|--------------------|----------------------------------------------|----------------------------|
| `--icon-color`     | `#fab387`                                    | Fill color of the icon     |
| `--icon-size`      | `64px`                                       | Width and height of icon   |
| `--spin-duration`  | `0.8s`                                       | Duration of entrance spin  |
| `--entrance-easing`| `cubic-bezier(0.34, 1.56, 0.64, 1)`         | Easing curve for spin      |

## Usage

```html
<link rel="stylesheet" href="style.css">
<div class="icon-wrap load-spin">
  <!-- SVG refresh icon -->
</div>
```

The `.load-spin` class triggers the entrance animation once. Replay by removing and re-adding the class.

```js
el.classList.remove('load-spin');
void el.offsetWidth; // force reflow
el.classList.add('load-spin');
```

## Interactive Controls

Color pickers, sliders, and an easing selector let you tweak all properties live.
