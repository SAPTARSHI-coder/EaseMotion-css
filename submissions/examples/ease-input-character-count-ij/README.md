# Input Character Count

Animated character counter for text inputs with color-coded feedback as the user approaches the maximum length.

## Usage

Include `style.css` and add the markup to your page. The counter updates automatically via the included JavaScript.

```html
<input type="text" class="icc-input" maxlength="100" id="my-input">
<span class="icc-counter" id="my-counter">0</span>
```

## CSS Custom Properties

| Property              | Default   | Description                       |
|-----------------------|-----------|-----------------------------------|
| `--icc-duration`      | `0.3s`    | Transition duration               |
| `--icc-count-color`   | `#374151` | Default counter text color        |
| `--icc-warning-color` | `#f59e0b` | Color when approaching limit      |
| `--icc-over-color`    | `#ef4444` | Color when limit is exceeded      |
| `--icc-input-bg`      | `#ffffff` | Input background                  |
| `--icc-radius`        | `8px`     | Input border-radius               |

## JavaScript API

Add an `input` event listener on the input element and call `updateCount()` to keep the counter in sync.

## Browser Support

Chrome, Firefox, Safari, Edge — any modern browser supporting CSS custom properties and `@keyframes`.
