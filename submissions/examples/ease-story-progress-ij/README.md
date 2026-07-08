# Story Progress

Instagram-style story progress bars that fill sequentially with auto-advance.

## Features

- Segmented progress bars fill one at a time with linear animation
- Auto-advance to the next story segment after each fill
- Pause on hover, click arrows to skip segments
- Active bar has an added glow/pulse effect

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--sp-duration` | `3s` | Time per segment fill |
| `--sp-bar-bg` | `rgba(255,255,255,0.25)` | Inactive bar background |
| `--sp-fill-color` | `#ffffff` | Default fill color |
| `--sp-active-color` | `#6366f1` | Active segment fill color |
| `--sp-height` | `4px` | Bar height |