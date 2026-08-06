# CSS Rotate-Fade Toast

A pure CSS notification toast designed for gaming hubs and esports dashboards. It features a modern rotate-and-fade entrance effect where the toast container and icon spin into focus upon reveal. No JavaScript required.

## How it works

Leverages a CSS checkbox toggle pattern (`#ease-toast-toggle`) for state management. When activated, the toast transitions from a negative rotation (`-8deg`), scale down, and opacity state to resting position using a custom cubic-bezier timing curve. The badge icon simultaneously performs a complementary counter-rotation entrance.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-toast-duration`: Timing duration for entry transitions (`0.45s`)
- `--ease-toast-radius`: Corner radius for toast container and trigger button (`12px`)
- `--ease-toast-bg`: Dark panel background color (`#12131a`)
- `--ease-toast-border`: Card boundary border color (`#232736`)
- `--ease-toast-text`: Primary headline text color (`#f3f4f6`)
- `--ease-toast-muted-text`: Subtitle description color (`#8b92a5`)
- `--ease-toast-accent`: Primary alert blue (`#3b82f6`)

## Accessibility & Performance

- Uses GPU-accelerated CSS `transform: rotate() scale()` and `opacity` properties for fluid 60fps animations.
- Complete support for `@media (prefers-reduced-motion: reduce)` which disables rotation and scale dynamics for a simple opacity fade.