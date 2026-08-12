# CSS Float-Drift Accordion for SaaS Showcase

A pure CSS accordion component tailored for SaaS help centers, FAQ sections, and documentation hubs. Features a smooth grid-template-rows collapse sequence combined with an active floating elevation and subtle `@keyframes` drift effect on the expanded item. No JavaScript required.

## How it works

Utilizes radio inputs (`name="ease-accordion"`) paired with labels to allow single-item expanded selection across the accordion set. When an item becomes `:checked`:

1. The grid container expands smoothly from `0fr` to `1fr` row layout.
2. The card elevates by `-4px` (`translateY`) with a soft glowing box shadow.
3. A continuous `@keyframes ease-float-drift` subtle floating animation activates on the expanded card.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-acc-duration`: Speed of collapse expand transition (`0.35s`)
- `--ease-acc-radius`: Card corner radius (`12px`)
- `--ease-acc-bg`: Default card background color (`#0f172a`)
- `--ease-acc-active-bg`: Active expanded card background (`#1e293b`)
- `--ease-acc-border`: Default border line color (`#334155`)
- `--ease-acc-text`: Primary title text color (`#f8fafc`)
- `--ease-acc-muted-text`: Subtitle & body text color (`#94a3b8`)
- `--ease-acc-accent`: Cyan brand highlight color (`#06b6d4`)
- `--ease-acc-elevation`: Active card upward displacement (`-4px`)

## Accessibility & Performance

- Smooth height transitions driven by CSS Grid (`grid-template-rows`) without fixed heights or JS measurements.
- Complete support for `@media (prefers-reduced-motion: reduce)` which disables the continuous floating keyframe animation and transform shifts for users preferring minimal motion.