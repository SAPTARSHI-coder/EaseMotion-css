# Button Shake Invalid

A button that shakes when clicked during an invalid form state. Provides clear visual feedback for validation errors.

## Usage

Add the `btn-shake` class to a `<button>` and apply the `shake` class (via JS) when validation fails.

```html
<button class="btn-shake">Submit</button>
```

```js
button.classList.add('shake');
```

## Custom Properties

| Property                 | Default  | Description              |
| ------------------------ | -------- | ------------------------ |
| `--btn-shake-duration`   | `0.5s`   | Shake animation duration |
| `--btn-shake-bg`         | `#ef4444`| Button background        |
| `--btn-shake-text-color` | `#ffffff`| Button text color        |
| `--btn-shake-color`      | `#991b1b`| Button hover/active color |
| `--btn-shake-radius`     | `8px`    | Button border-radius     |

## Keyframes

The `shake` keyframe animation oscillates the button horizontally using `translateX` with stepped easing to create a rapid back-and-forth motion.
