# Thumbnail Gallery

A responsive image gallery with clickable thumbnails and a crossfading main image viewer.

## Features

- Click thumbnails to load full-size images with zoom/fade transitions
- Arrow navigation buttons and keyboard support (← →)
- Thumbnails scale on hover and show an active border
- Smooth opacity + scale transition on the main image

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--tg-duration` | `0.4s` | Transition duration for gallery animations |
| `--tg-thumb-bg` | `#e0e0e0` | Background color of the main image area |
| `--tg-active-border` | `3px` | Border width on the active thumbnail |
| `--tg-radius` | `12px` | Border radius for main image and thumbnails |
| `--tg-overlay-bg` | `rgba(0,0,0,0.06)` | Overlay background (reserved) |

## Usage

Open `demo.html` in any modern browser. Click a thumbnail or use the arrow buttons / keyboard arrows to navigate.
