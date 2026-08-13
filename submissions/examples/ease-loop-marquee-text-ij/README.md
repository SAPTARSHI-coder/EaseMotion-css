# Loop Marquee Text

Seamless horizontal scrolling marquee text with infinite loop, pause-on-hover, and direction control.

## Features

- Content scrolls continuously using `translateX` animation
- Duplicated DOM content for seamless wraparound loop
- Pause on hover (`animation-play-state: paused`)
- Speed slider (0.25x – 4x)
- Direction toggle (left / right)
- Responsive text sizing

## Usage

Include `style.css` and `demo.html`. The track content is duplicated via JavaScript on load for a seamless loop.

### Custom Properties

| Property | Default | Description |
|---|---|---|
| `--lmt-duration` | `20s` | Base scroll duration |
| `--lmt-speed` | `1` | Speed multiplier (set via JS slider) |
| `--lmt-text-color` | `#e2e8f0` | Text item color |
| `--lmt-bg` | `#0f172a` | Background color |
| `--lmt-gap` | `4rem` | Gap between text items |
| `--lmt-direction` | `1` | Scroll direction (1 = right, -1 = left) |

### JavaScript

- `speedSlider` – adjusts `--lmt-speed`
- `dirBtn` – toggles `--lmt-direction` between `1` and `-1`
- Content duplication happens automatically on `load`

## Browser Support

All modern browsers. Pure CSS animation with JS for controls and duplication.
