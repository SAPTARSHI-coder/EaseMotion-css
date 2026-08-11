# CSS Skew-Active Toast for SaaS Showcase

A pure CSS notification toast designed for modern SaaS API gateways, webhook logs, and developer consoles. Features a dynamic geometric shearing sequence that un-skews from an initial `-6deg` angular offset into square alignment upon reveal. No JavaScript required.

## How it works

Utilizes the pure CSS checkbox toggle pattern (`#ease-saas-skew-toggle`) to handle open/close states. When hidden, the notification container holds `transform: skewY(-6deg) translateY(16px) scale(0.96)` with `opacity: 0`. Checking the toggle smoothly snaps the element to `skewY(0deg)` and `scale(1)` using a snappy cubic-bezier deceleration curve (`cubic-bezier(0.16, 1, 0.3, 1)`).

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-toast-duration`: Speed of skew transition (`0.4s`)
- `--ease-toast-radius`: Corner radius for container (`12px`)
- `--ease-toast-bg`: Dark surface background color (`#0f172a`)
- `--ease-toast-border`: Border line color (`#1e293b`)
- `--ease-toast-text`: Primary headline text color (`#f8fafc`)
- `--ease-toast-muted-text`: Subtitle description color (`#94a3b8`)
- `--ease-toast-accent`: Pink theme highlight color (`#ec4899`)
- `--ease-toast-skew-angle`: Angular offset at hidden state (`-6deg`)

## Accessibility & Performance

- Leverages hardware-accelerated 2D CSS transforms (`skewY`, `translateY`, `scale`).
- Includes complete `@media (prefers-reduced-motion: reduce)` rules that bypass geometric shearing in favor of direct opacity cross-fades.