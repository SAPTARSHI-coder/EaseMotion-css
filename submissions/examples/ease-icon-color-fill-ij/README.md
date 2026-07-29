# Icon Color Fill (#36739)

A heart icon that morph-fills between an empty and filled color on click.

## CSS Custom Properties

| Property         | Default    | Description                |
|------------------|------------|----------------------------|
| `--icon-size`    | `64px`     | Width and height of icon   |
| `--fill-color`   | `#f38ba8`  | Color when filled          |
| `--empty-color`  | `#585b70`  | Color when empty           |
| `--fill-duration`| `0.8s`     | Transition duration        |

## Usage

```html
<link rel="stylesheet" href="style.css">
<div class="icon-wrap morph-fill" id="myIcon">
  <!-- SVG heart icon -->
</div>
```

Toggle the `.is-filled` class via JavaScript to trigger the fill animation.

```js
myIcon.classList.toggle('is-filled');
```

## Interactive Controls

Color pickers and sliders adjust all CSS custom properties live.
