# Skeleton Screen

A skeleton loading placeholder with a shimmer animation that transitions into real content.

## Features

- Shimmer gradient sweep animation across skeleton blocks
- Multiple skeleton shapes: avatar (circle), lines, blocks, thumbnails
- Toggle between skeleton and real content with a fade transition
- Pure CSS animation, no external dependencies

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--ss-duration` | `1.6s` | Shimmer animation duration |
| `--ss-shimmer-base` | `#e8e8f0` | Base shimmer color |
| `--ss-shimmer-highlight` | `#f5f5ff` | Highlight shimmer sweep |
| `--ss-block-color` | `#dcdce8` | Static skeleton block color |
| `--ss-radius` | `10px` | Border radius |

## Usage

Open `demo.html`. The skeleton displays by default. Toggle the checkbox to reveal the real content with a crossfade.
