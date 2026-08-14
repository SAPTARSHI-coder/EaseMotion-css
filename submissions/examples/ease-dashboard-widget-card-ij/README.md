# Dashboard Widget Cards

Staggered card entrance animation for dashboard-style UI components.

## Features

- Cards animate in with `scale`, `translateY`, and `opacity` via `@keyframes cardEnter`
- Staggered delays create a ripple effect across the grid
- Replay button re-triggers the entrance sequence
- Fully customizable via CSS custom properties

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--dash-duration` | `0.5s` | Duration of each card's entrance animation |
| `--dash-stagger` | `0.1s` | Delay between successive card animations |
| `--dash-card-bg` | `#1e1e2a` | Card background color |
| `--dash-card-shadow` | `0 4px 24px rgba(0,0,0,0.3)` | Card box shadow |
| `--dash-radius` | `12px` | Card border radius |
| `--dash-text-color` | `#e2e8f0` | Default text color |

## Usage

```html
<link rel="stylesheet" href="style.css">
```

Apply `data-delay` attributes to cards for staggered timing. Click the replay button to restart all entrance animations.
