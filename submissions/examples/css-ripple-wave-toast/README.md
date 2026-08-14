# CSS Ripple-Wave Toast

A pure CSS notification toast tailored for gaming hubs and esports dashboards. Features expanding concentric ripple waves around the achievement icon that animate when displayed or hovered. No JavaScript required.

## How it works

Utilizes a CSS checkbox toggle pattern (`#ease-toast-toggle`) to handle open/close states smoothly. Concentric ripple rings (`.ease-ripple-wave`) sit behind the badge icon and expand outwards using GPU-accelerated CSS `@keyframes ease-ripple-pulse` with staggered `animation-delay` offsets.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-toast-duration`: Speed of slide/fade toast transitions (`0.4s`)
- `--ease-toast-radius`: Corner radius for toast container and button (`12px`)
- `--ease-toast-bg`: Dark container background color (`#12131a`)
- `--ease-toast-border`: Card outline border color (`#232736`)
- `--ease-toast-text`: Primary headline text color (`#f3f4f6`)
- `--ease-toast-muted-text`: Subtitle description color (`#8b92a5`)
- `--ease-toast-accent`: Primary success status green (`#10b981`)
- `--ease-toast-accent-glow`: Translucent glow shade for badges

## Accessibility & Performance

- Ripples utilize hardware-accelerated `transform: scale()` and `opacity` properties for 60fps performance.
- Full support for `@media (prefers-reduced-motion: reduce)` which automatically hides animated waves and provides direct opacity fades.