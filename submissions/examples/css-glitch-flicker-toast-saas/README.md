# CSS Glitch-Flicker Toast for SaaS Showcase

A pure CSS security/incident alert toast designed for modern SaaS dashboards and cloud platforms. Features an entrance flicker transition and RGB split pseudo-element glitch effects across the header title upon display or hover. No JavaScript required.

## How it works

Utilizes a pure CSS checkbox toggle pattern (`#ease-saas-glitch-toggle`) to reveal or dismiss the notification. The entrance animation uses `@keyframes ease-glitch-flicker-entrance` to simulate a rapid signal flicker with slight skew transforms. Dual pseudo-elements (`::before` and `::after`) leverage `attr(data-text)` and dynamic `clip-path` keyframes to generate chromatic aberration text glitches.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-toast-duration`: Speed of standard entrance transition (`0.35s`)
- `--ease-toast-radius`: Corner radius for toast container (`12px`)
- `--ease-toast-bg`: Dark surface background color (`#0f172a`)
- `--ease-toast-border`: Card boundary border color (`#1e293b`)
- `--ease-toast-text`: Primary headline text color (`#f8fafc`)
- `--ease-toast-muted-text`: Subtitle description color (`#94a3b8`)
- `--ease-toast-accent`: Primary alert highlight color (`#f43f5e`)
- `--ease-toast-glitch-cyan`: Secondary cyan chromatic split color (`#06b6d4`)
- `--ease-toast-glitch-red`: Secondary red chromatic split color (`#f43f5e`)

## Accessibility & Performance

- Glitch layers use hardware-accelerated `clip-path` and `text-shadow` CSS properties.
- Full support for `@media (prefers-reduced-motion: reduce)` which disables the entrance flicker keyframes and RGB text splitting in favor of clean opacity fades.