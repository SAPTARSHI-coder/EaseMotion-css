# Rating Distribution Bars

Horizontal bar chart showing rating distribution from 5-star to 1-star. Each bar animates width from 0 to its target percentage on load via CSS transition.

## Features

- Horizontal bars with width transition on load
- Staggered animation delay per bar via `--rdb-i`
- Alternating bar colors (green to red gradient)
- Star label per row
- Overflow hidden container

## Usage

Set `--rdb-pct` (percentage string like `42%`) and `--rdb-i` (index) on each `.rdb-bar`. Add `.rdb-animated` class to the container to trigger the width animation.
