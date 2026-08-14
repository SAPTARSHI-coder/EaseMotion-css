# CSS Blur-Entrance Toast for SaaS Showcase

A pure CSS notification toast designed for modern SaaS release logs and admin notifications. Features a "sharpen into focus" entrance transition that smoothly resolves from a blurred, scaled-up initial state down to zero blur and crisp positioning. No JavaScript required.

## How it works

Utilizes the pure CSS checkbox toggle pattern (`#ease-saas-blur-toggle`) to control visibility. When hidden, the notification card holds `filter: blur(10px)`, `opacity: 0`, and `transform: translateY(10px) scale(1.03)`. Checking the toggle animates `filter`, `transform`, and `opacity` to resting baseline values (`blur(0)` and `scale(1)`), creating a camera-focus entrance effect.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-toast-duration`: Speed of blur-to-focus animation (`0.4s`)
- `--ease-toast-radius`: Corner radius for container (`12px`)
- `--ease-toast-bg`: Dark surface background color (`#0f172a`)
- `--ease-toast-border`: Card boundary border color (`#1e293b`)
- `--ease-toast-text`: Primary headline text color (`#f8fafc`)
- `--ease-toast-muted-text`: Subtitle description color (`#94a3b8`)
- `--ease-toast-accent`: Primary sky-blue brand color (`#38bdf8`)
- `--ease-toast-blur`: Starting blur magnitude (`10px`)

## Accessibility & Performance

- Blur threshold is constrained to a performant 10px limit to avoid browser paint delays.
- Full support for `@media (prefers-reduced-motion: reduce)` which disables `filter` and `transform` animations in favor of direct opacity fades.