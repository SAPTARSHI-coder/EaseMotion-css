# Scroll Snap Carousel

A horizontal carousel built with CSS `scroll-snap` for native-like snapping behavior.

## Features

- CSS `scroll-snap-type: x mandatory` with `scroll-snap-align: center`
- Dot indicators with active state animation
- Arrow buttons for previous/next navigation
- Auto-play mode with toggle
- Cards scale subtly on interaction

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--ssc-duration` | `0.4s` | Transition duration |
| `--ssc-card-bg` | `#ffffff` | Card background |
| `--ssc-active-dot` | `#6366f1` | Active dot color |
| `--ssc-radius` | `16px` | Card border-radius |
| `--ssc-shadow` | `0 8px 30px rgba(0,0,0,0.12)` | Card box-shadow |

## Usage

Open `demo.html` in any modern browser. Click dots or arrows to navigate. Toggle auto-play with the checkbox.
