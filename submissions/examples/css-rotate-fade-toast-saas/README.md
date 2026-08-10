# CSS Rotate-Fade Toast for SaaS Showcase

A pure CSS status toast designed for SaaS cloud platforms and admin dashboards. Features a 3D `rotateX()` flip combined with a scale and fade-in sequence when triggered, paired with a full rotation spin on the status icon badge. No JavaScript required.

## How it works

Utilizes the pure CSS checkbox toggle pattern (`#ease-saas-rotate-toggle`) to reveal or hide the toast. When closed, the card sits at `transform: rotateX(-30deg) translateY(-12px) scale(0.95)` with `opacity: 0`. Checking the checkbox transitions the element to `rotateX(0deg)` and `scale(1)` over a smooth `cubic-bezier(0.16, 1, 0.3, 1)` curve while spinning the icon badge 360 degrees.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-toast-duration`: Speed of 3D rotate-fade entrance (`0.45s`)
- `--ease-toast-radius`: Corner radius for toast container (`12px`)
- `--ease-toast-bg`: Dark surface background color (`#0f172a`)
- `--ease-toast-border`: Boundary border color (`#1e293b`)
- `--ease-toast-text`: Primary headline text color (`#f8fafc`)
- `--ease-toast-muted-text`: Subtitle description color (`#94a3b8`)
- `--ease-toast-accent`: Success emerald highlight color (`#10b981`)

## Accessibility & Performance

- Leverages hardware-accelerated 3D CSS transforms (`rotateX`, `translateY`, `scale`, `rotate`).
- Full support for `@media (prefers-reduced-motion: reduce)` which disables 3D rotation, scaling, and icon spinning in favor of clean opacity fades.