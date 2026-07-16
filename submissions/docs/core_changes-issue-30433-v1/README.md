# Scroll Progress Indicator — Issue #30433

A thin reading progress bar fixed at the top of the page that fills as the user scrolls.

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-scroll-progress` | Fixed top progress bar |
| `.ease-scroll-progress-gradient` | Gradient fill (uses `--ease-sp-color-to`) |
| `.ease-scroll-progress-thin` | 2px height |
| `.ease-scroll-progress-thick` | 5px height |
| `.ease-scroll-progress-bottom` | Bottom-aligned instead of top |
| `.ease-scroll-progress-shadow` | Glow shadow under bar |

## CSS Variables

- `--ease-sp-color` (default: primary blue)
- `--ease-sp-color-to` (gradient end, for gradient variant)
- `--ease-sp-height` (default: 3px)
- `--ease-sp-z-index` (default: 9999)

Requires a small JS snippet to update width on scroll (see demo).
