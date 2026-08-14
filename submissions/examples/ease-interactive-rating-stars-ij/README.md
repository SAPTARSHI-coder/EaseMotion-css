# Interactive Rating Stars

A star-rating widget with animated fill on hover and click, bounce effect on selection, and a reset button.

## Features

- Hover over stars to preview rating with colour fill
- Click to set a rating — stars fill with active colour and play a bounce animation
- Displays current numeric rating
- Reset button clears the selection
- RTL star ordering for proper hover fill logic
- Fully customizable via CSS custom properties

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--irs-duration` | `0.2s` | Transition duration for star colour and transform |
| `--irs-star-color` | `#334155` | Inactive (unfilled) star colour |
| `--irs-active-color` | `#f59e0b` | Selected / filled star colour |
| `--irs-hover-color` | `#fbbf24` | Hover preview star colour |
| `--irs-star-size` | `2.5rem` | Font size of each star |
| `--irs-gap` | `0.375rem` | Gap between stars |

## Usage

Include `style.css` and `script.js`. Use `irs-star` spans with `data-value` attributes inside `irs-stars`. The direction is set to `rtl` on the container so that hover states fill correctly from left to right.
