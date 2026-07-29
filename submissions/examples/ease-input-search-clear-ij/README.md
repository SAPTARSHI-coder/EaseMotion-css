# Search Clear

Search input with an animated clear button that scales in when text is present and fades out on clear.

## Usage

Include `style.css` and add the markup. The clear button visibility is toggled via the `.isc-visible` class.

```html
<div class="isc-field">
  <input type="search" class="isc-input" id="my-search">
  <button class="isc-clear" id="my-clear">✕</button>
</div>
```

## CSS Custom Properties

| Property             | Default   | Description                         |
|----------------------|-----------|-------------------------------------|
| `--isc-duration`     | `0.25s`   | Transition duration                 |
| `--isc-clear-color`  | `#9ca3af` | Clear button default color          |
| `--isc-clear-hover`  | `#374151` | Clear button hover color            |
| `--isc-input-bg`     | `#ffffff` | Input background                    |
| `--isc-radius`       | `8px`     | Input border-radius                 |

## JavaScript API

Toggle the `.isc-visible` class on the clear button based on input value length.

## Browser Support

All modern browsers with CSS custom properties and transitions.
