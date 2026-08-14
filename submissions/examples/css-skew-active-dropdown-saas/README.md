# CSS Skew-Active Dropdown for SaaS Showcase

A pure CSS workspace/account switcher dropdown designed for modern SaaS showcase interfaces. Features a dynamic 3D `skewY()` transition when opening the dropdown panel, alongside subtler `skewX()` hover feedback on interactive menu items. No JavaScript required.

## How it works

Utilizes the pure CSS checkbox toggle pattern (`#ease-saas-skew-toggle`). When closed, the menu panel is transformed with `translateY(-10px) skewY(-4deg) scale(0.96)` and `opacity: 0`. Checking the checkbox animates the container to `skewY(0deg)` and `scale(1)` via a smooth cubic-bezier easing curve, creating an angled 3D flip-and-settle effect.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-dropdown-duration`: Speed of skew transition (`0.35s`)
- `--ease-dropdown-radius`: Corner radius for dropdown panel (`12px`)
- `--ease-dropdown-bg`: Slate SaaS panel surface color (`#0f172a`)
- `--ease-dropdown-border`: Subtle panel boundary color (`#1e293b`)
- `--ease-dropdown-text`: Primary text color (`#f8fafc`)
- `--ease-dropdown-muted-text`: Subtitle description color (`#94a3b8`)
- `--ease-dropdown-accent`: Primary sky-blue brand color (`#38bdf8`)
- `--ease-dropdown-skew-angle`: Starting vertical skew magnitude (`-4deg`)

## Accessibility & Performance

- Employs hardware-accelerated CSS 2D/3D transforms (`skewY`, `skewX`, `translateY`, `scale`).
- Includes full support for `@media (prefers-reduced-motion: reduce)` which disables skew and scale transitions in favor of clean opacity fades.