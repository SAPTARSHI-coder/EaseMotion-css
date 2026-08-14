# Date Picker Calendar

A calendar grid component with animated month transitions using CSS `transform: translateX`.

## Usage

Include `style.css` and the calendar markup. JavaScript controls month navigation and sets the `--dpc-month-offset` CSS variable for the slide animation.

```js
// On prev/next click, set offset before animating
grid.style.setProperty('--dpc-month-offset', '100%');
```

## CSS Variables

| Variable                    | Default  | Description            |
|-----------------------------|----------|------------------------|
| `--dpc-transition-duration` | `0.3s`   | Slide animation speed  |
| `--dpc-accent-color`        | `#6366f1`| Day hover color        |
| `--dpc-cell-size`           | `44px`   | Each cell width/height |

## JavaScript

- Clicking prev/next arrows triggers a slide via `transform: translateX`
- `--dpc-month-offset` is set before each animation cycle

## Browser Support

All modern browsers supporting CSS Grid and custom properties.
