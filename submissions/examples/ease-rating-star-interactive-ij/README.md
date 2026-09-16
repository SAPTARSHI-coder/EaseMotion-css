# Interactive Star Rating (`ease-rating-star-interactive-ij`)

Clickable star rating with hover preview, scale animation, and half-star support. Part of the EaseMotion CSS submissions.

## Features

- Full and half-star ratings (0.5 increments)
- Scale animation on hover and click
- Hover preview resets when cursor leaves
- Keyboard accessible with Enter / Space
- ARIA radiogroup with `aria-checked` state
- Live numeric rating display

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--rsi-duration` | `0.25s` | Transition duration for color and transform |
| `--rsi-star-color` | `#cbd5e1` | Empty star color |
| `--rsi-active-color` | `#f59e0b` | Selected star color (amber) |
| `--rsi-hover-color` | `#fbbf24` | Hover preview color |
| `--rsi-size` | `2.5rem` | Font size of each star |

## Usage

Open `demo.html` in any modern browser. Hover over stars to preview, click to set a rating.
