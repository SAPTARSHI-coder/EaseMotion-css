# CSS Ripple-Wave Toast for SaaS Showcase

A pure CSS notification toast styled for modern SaaS dashboards and cloud platforms. Features concentric sky-blue ripple pulse rings around the icon badge that expand when revealed or hovered. No JavaScript required.

## How it works

Utilizes a pure CSS checkbox toggle pattern (`#ease-saas-toast-toggle`) to control visibility. Multi-layered concentric rings (`.ease-ripple-wave`) positioning around the status icon animate outward using GPU-accelerated `@keyframes ease-saas-ripple-pulse` and staggered CSS `animation-delay` properties.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-toast-duration`: Speed of container entrance transitions (`0.4s`)
- `--ease-toast-radius`: Corner radius for toast container (`12px`)
- `--ease-toast-bg`: Dark SaaS surface background (`#0f172a`)
- `--ease-toast-border`: Card boundary border color (`#1e293b`)
- `--ease-toast-text`: Primary text color (`#f8fafc`)
- `--ease-toast-muted-text`: Subtitle description color (`#94a3b8`)
- `--ease-toast-accent`: Primary sky-blue brand color (`#38bdf8`)
- `--ease-toast-accent-glow`: Translucent background tint for status badge

## Accessibility & Performance

- Ripples utilize hardware-accelerated CSS `transform: scale()` and `opacity` properties for fluid 60fps performance.
- Full support for `@media (prefers-reduced-motion: reduce)` which disables keyframe animations in favor of direct opacity fades.