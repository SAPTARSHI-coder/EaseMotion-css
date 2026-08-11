# CSS Slide-Up Toast for SaaS Showcase

A pure CSS notification toast styled for modern SaaS security logs and session monitoring alerts. Features a snappy vertical slide-up transition utilizing GPU-accelerated CSS transforms. No JavaScript required.

## How it works

Utilizes the pure CSS checkbox toggle pattern (`#ease-saas-slide-toggle`) to handle open/close states. When closed, the card sits `24px` lower (`translateY(var(--ease-toast-offset))`) with `opacity: 0`. Checking the toggle smoothly slides the toast up to `translateY(0)` using an exponential deceleration easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`).

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-toast-duration`: Speed of slide-up transition (`0.35s`)
- `--ease-toast-radius`: Corner radius for container (`12px`)
- `--ease-toast-bg`: Dark surface background color (`#0f172a`)
- `--ease-toast-border`: Border line color (`#1e293b`)
- `--ease-toast-text`: Primary headline text color (`#f8fafc`)
- `--ease-toast-muted-text`: Subtitle description color (`#94a3b8`)
- `--ease-toast-accent`: Amber warning theme highlight (`#f59e0b`)
- `--ease-toast-offset`: Vertical starting displacement distance (`24px`)

## Accessibility & Performance

- Animates strictly via `transform: translateY()` and `opacity` to minimize paint overhead.
- Includes complete `@media (prefers-reduced-motion: reduce)` rules that remove vertical movement in favor of direct opacity fades.