# Progress Circle Dash

Circular progress indicator using SVG stroke-dashoffset animation. Progress percentage displayed in center via `--pcd-progress` custom property.

## Features

- SVG circle progress ring
- Stroke-dashoffset transition via `--pcd-progress`
- Percentage display in center
- Range slider to adjust progress
- Google Fonts Inter integration

## Usage

Set `--pcd-progress` (0 to 1) on `.pcd-ring`. SVG `stroke-dashoffset` is calculated as `calc(326.7 * (1 - var(--pcd-progress)))` where 326.7 is the circumference (2 × π × 52). Slider controls the value.
