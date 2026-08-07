# CSS Zoom-In Toast for SaaS Showcase

A pure CSS notification toast styled for modern SaaS subscription and billing interfaces. Features a dynamic scale zoom-in entrance transition paired with an elastic cubic-bezier bounce easing curve. No JavaScript required.

## How it works

Utilizes the pure CSS checkbox toggle pattern (`#ease-saas-zoom-toggle`) to handle open/close states. When closed, the card sits at `scale(0.7)` with `opacity: 0`. Checking the toggle animates the card to `scale(1)` using `cubic-bezier(0.34, 1.56, 0.64, 1)` for an intentional slight overshoot/elastic pop effect, while subtle icon scaling emphasizes activation.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-toast-duration`: Speed of zoom transition (`0.4s`)
- `--ease-toast-radius`: Corner radius for container (`12px`)
- `--ease-toast-bg`: Dark surface background color (`#0f172a`)
- `--ease-toast-border`: Border line color (`#1e293b`)
- `--ease-toast-text`: Primary headline text color (`#f8fafc`)
- `--ease-toast-muted-text`: Subtitle description color (`#94a3b8`)
- `--ease-toast-accent`: Purple theme highlight color (`#a855f7`)
- `--ease-toast-zoom-start`: Initial scale ratio before entrance (`0.7`)

## Accessibility & Performance

- Built using GPU-accelerated CSS `transform: scale()` to maintain 60 FPS performance.
- Includes complete `@media (prefers-reduced-motion: reduce)` rules that bypass scaling animations in favor of direct opacity cross-fades.