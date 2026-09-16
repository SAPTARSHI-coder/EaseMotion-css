# CSS Order Status Tracker

A pure CSS multi-step order status tracker component for e-commerce, logistics, and shipping notifications. Features an animated progress line fill sequence alongside pulsating active node indicators. Built without JavaScript dependencies.

## How it works

The tracker leverages semantic ordered lists (`<ol>`) styled as a flexible stepper pipeline. CSS pseudo-elements (`::before` and `::after`) render the background track and active gradient line. `@keyframes ease-line-fill` animates the fill line via GPU-accelerated `transform: scaleX()`, while active steps feature an ambient glowing pulse (`@keyframes ease-node-pulse`). Responsive media queries cleanly convert the layout from a horizontal stepper on desktop to a vertical timeline on mobile viewports.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-track-bg`: Main card interior background (`#0f172a`)
- `--ease-track-card-bg`: Card surface surface background (`#1e293b`)
- `--ease-track-border`: Boundary line color (`#334155`)
- `--ease-track-text`: Headline text color (`#f8fafc`)
- `--ease-track-muted`: Subtitle and timestamp text color (`#94a3b8`)
- `--ease-track-accent`: Active step brand color (`#38bdf8`)
- `--ease-track-complete`: Success emerald color for completed steps (`#10b981`)
- `--ease-track-duration`: Line fill load animation time (`1.5s`)

## Accessibility & Performance

- Fully accessible using semantic list markup (`<ol>`, `<li>`), explicit `aria-label` declarations, and screen-reader-friendly status indicators.
- Full support for `@media (prefers-reduced-motion: reduce)` which disables pulse and line filling animations, immediately rendering active states.