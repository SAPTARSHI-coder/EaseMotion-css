# Content Loader Pulse

A skeleton content loader with a shimmering pulse animation to indicate loading state.

## Features

- Mimics article layout with avatar, title line, and text lines
- Shimmer effect slides left-to-right using a gradient and `background-position` animation
- Toggle button switches between skeleton placeholder and final content view
- All animation timing and colors driven by CSS custom properties

## CSS Custom Properties

| Property                  | Default   | Description                   |
| ------------------------- | --------- | ----------------------------- |
| `--loader-duration`       | `1.5s`    | Duration of one shimmer cycle |
| `--loader-base-color`     | `#e5e7eb` | Base skeleton color           |
| `--loader-shimmer-color`  | `#f3f4f6` | Shimmer highlight color       |
| `--loader-radius`         | `8px`     | Border radius for skeleton    |
| `--loader-height`         | `16px`    | Default skeleton line height  |
