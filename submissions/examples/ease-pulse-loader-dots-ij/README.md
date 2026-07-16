# Pulse Loader Dots

A loading dots component with sequential pulse/bounce animation. Three dots scale and fade in staggered rhythm with configurable theme, size, and speed.

## Features

- Three dots with staggered `pld-bounce` keyframe animation
- Scale + opacity pulse per dot via `--pld-i` for stagger index
- Multiple color themes (purple, blue, green, coral)
- Size variants (sm, md, lg)
- Interactive speed slider
- Animated ellipsis text label
- Customizable via `:root` CSS custom properties

## Usage

Add `.pld-dot` elements inside `.pld-loader`. Each dot uses `--pld-i` (0–2) for staggered `animation-delay`. Set `data-theme`, `data-size` attributes on `.pld-loader` for variants.

### Custom Properties

| Property | Default | Description |
|---|---|---|
| `--pld-duration` | `1.0s` | Animation cycle duration |
| `--pld-dot-color` | `#334155` | Resting dot color |
| `--pld-active-color` | `#8b5cf6` | Peak pulse color |
| `--pld-size` | `14px` | Dot diameter |
| `--pld-gap` | `0.6rem` | Gap between dots |
