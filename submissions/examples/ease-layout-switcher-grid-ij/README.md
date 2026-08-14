# Layout Switcher Grid (#36771)

A grid of items whose column count switches between 2, 3, or 4 columns with an animated reorder transition.

## CSS Variables

| Variable          | Default | Description                        |
|-------------------|---------|------------------------------------|
| `--grid-bg`       | —       | Background of the card container   |
| `--item-bg`       | —       | Background of each grid item       |
| `--switch-duration` | 0.4s   | Duration of the layout transition  |
| `--gap-size`      | —       | Gap between grid items             |

## Behavior

Click the 2×2, 3×3, or 4×4 buttons to switch layouts. The grid's `grid-template-columns` transitions smoothly using a custom cubic-bezier. Each item has a hover lift effect.
