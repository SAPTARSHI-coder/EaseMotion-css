# Stat Counter

Animated statistics counter that counts up on scroll reveal with smooth easing.

## Features

- Count-up animation triggered by IntersectionObserver on scroll
- Supports decimal values and comma formatting
- Cubic ease-out stepping via `requestAnimationFrame`
- Hover accent highlight on each stat

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--sc-duration` | `2s` | Total count-up animation duration |
| `--sc-number-color` | `#f8fafc` | Number text color |
| `--sc-label-color` | `#94a3b8` | Label text color |
| `--sc-accent` | `#6366f1` | Accent color on hover |
| `--sc-size` | `3.5rem` | Number font size |