# CSS Dark Portfolio Hero

A pure CSS dark-theme portfolio hero section designed for developer portfolios and personal engineer showcases. Features availability status indicators, gradient headlines, call-to-action buttons, social media links, and ambient glowing radial backgrounds. Built without JavaScript dependencies.

## How it works

The layout uses a flexbox column structure (`.ease-hero-container`) centered vertically within a 100vh wrapper. Staggered load-in animations (`@keyframes ease-fade-up`) apply smooth vertical entrances using `cubic-bezier(0.16, 1, 0.3, 1)`. Ambient background lighting (`.ease-glow-orb`) renders hardware-accelerated blurred radial shapes driven by slow floating keyframe paths.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-port-bg`: Main dark backdrop (`#020617`)
- `--ease-port-card-bg`: Secondary surface background (`#0f172a`)
- `--ease-port-border`: Boundary border color (`#1e293b`)
- `--ease-port-text`: Headline text color (`#f8fafc`)
- `--ease-port-muted`: Subtitle and social link color (`#94a3b8`)
- `--ease-port-accent`: Primary sky-blue accent (`#38bdf8`)
- `--ease-port-green`: Availability status color (`#10b981`)
- `--ease-port-purple`: Gradient accent color (`#c084fc`)

## Accessibility & Performance

- Fully accessible using semantic HTML5 landmark tags (`header`, `main`, `nav`, `a`), clear keyboard focus indicators, and SVG icons marked with `aria-hidden="true"`.
- Full support for `@media (prefers-reduced-motion: reduce)` which bypasses staggered entrance animations and background floating motions.