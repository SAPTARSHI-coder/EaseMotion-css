# CSS Shimmer-Sweep Dropdown for SaaS Showcase

A pure CSS dropdown selector designed for modern SaaS pricing, billing, and subscription management interfaces. Features a refined sky-blue shimmer sweep animation across the trigger and menu container when toggled or hovered. No JavaScript required.

## How it works

Built using the pure CSS checkbox toggle technique (`#ease-saas-shimmer-toggle`). A diagonal linear-gradient pseudo-element (`::after`) moves across the trigger button and menu container via a keyframed translation (`@keyframes ease-shimmer-sweep`), giving a polished metallic shine effect upon interaction.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-dropdown-duration`: Speed of slide and state transitions (`0.35s`)
- `--ease-dropdown-radius`: Corner radius for components (`12px`)
- `--ease-dropdown-bg`: Dark SaaS panel background color (`#0f172a`)
- `--ease-dropdown-border`: Subtle boundary border color (`#1e293b`)
- `--ease-dropdown-text`: Primary headline text color (`#f8fafc`)
- `--ease-dropdown-muted-text`: Secondary subtitle text color (`#94a3b8`)
- `--ease-dropdown-accent`: Primary sky-blue brand color (`#38bdf8`)
- `--ease-dropdown-shimmer`: Custom linear gradient value for the light sweep pass

## Accessibility & Performance

- Leverages GPU-accelerated CSS keyframe translations for high-frame-rate performance.
- Full support for `@media (prefers-reduced-motion: reduce)` which disables the sweep keyframe sequence and slide transforms in favor of direct opacity fades.