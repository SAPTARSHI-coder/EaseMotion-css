# Counter Digit Scroll

An animated number counter where individual digits scroll/roll up like a digit wheel to reach target numbers. Includes Start and Reset controls.

## Usage

```html
<div class="counter" data-target="8742" data-label="Downloads"></div>
```

The `data-target` attribute sets the final number. Digits are automatically padded to 4 places.

## CSS Custom Properties

| Property                   | Default    | Description                   |
|----------------------------|------------|-------------------------------|
| `--counter-digit-duration` | `1200ms`   | Animation duration per digit  |
| `--counter-digit-bg`       | `#1a1a2e`  | Counter card background       |
| `--counter-digit-color`    | `#f0f0ff`  | Digit text color              |
| `--counter-digit-size`     | `3rem`     | Height of each digit slot     |
| `--counter-digit-radius`   | `8px`      | Digit slot border radius      |

## JavaScript Behavior

- Reads `--counter-digit-duration` for the scroll animation timing
- Each digit strip translates vertically via `transform: translateY()` to expose the target digit
- Uses `cubic-bezier(0.25, 0.8, 0.35, 1)` easing for a natural roll-off feel
- Start/Reset buttons replay or reset all counters

## Demo

Open `demo.html` in a browser. Counters animate on load. Use **Start All** to replay or **Reset All** to return to zero.
