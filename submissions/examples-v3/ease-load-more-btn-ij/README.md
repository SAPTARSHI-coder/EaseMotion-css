# Load More Button

Button that progressively loads additional items with animated entry and a loading spinner state.

## Features

- Simulated async loading with `setTimeout`
- New items animate in with scale, opacity, and translateY
- Staggered animation delay per item
- Loading spinner replaces button text during load
- All-items-loaded state with disabled button
- Live item count

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--lmb-duration` | 0.35s | Item entry animation duration |
| `--lmb-btn-bg` | #6366f1 | Button background |
| `--lmb-btn-hover` | #4f46e5 | Button hover background |
| `--lmb-item-bg` | #1e293b | Item background |
| `--lmb-spinner-color` | #ffffff | Spinner accent color |
| `--lmb-radius` | 10px | Border radius |

## Usage

Include `style.css` and `demo.html`. The JS manages loading state and appends new `.lmb-item` elements with staggered `animationDelay`. Toggle `.lmb-loading` on the button to show the spinner.
