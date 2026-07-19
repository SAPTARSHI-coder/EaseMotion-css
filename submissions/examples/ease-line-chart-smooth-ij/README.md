# Smooth Line Chart

An animated SVG line chart with stroke-draw animation. Lines draw from left to right and data points scale in as the line reaches them.

## Features

- Multiple datasets with distinct colors
- SVG path uses `stroke-dasharray` / `stroke-dashoffset` for drawing animation
- Data points scale in with staggered delays
- Gradient area fill below each line
- Replay button to restart animation
- Responsive SVG `viewBox` scaling

## Usage

Add an SVG with `.lcs-line` paths and `.lcs-point` circles. Set `data-length` on each path for the dasharray value. Set `data-i` on points for staggered delay. Toggle `.lcs-line-drawn` on lines and `.lcs-point-visible` on points to trigger animation.

Customize via `:root` variables:

```css
--lcs-duration       /* animation speed */
--lcs-line-color     /* primary line color */
--lcs-line-2-color   /* secondary line color */
--lcs-grid-color     /* grid line color */
--lcs-point-color    /* data point color */
--lcs-bg             /* page background */
```
