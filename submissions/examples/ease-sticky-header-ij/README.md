# Sticky Header

Header that becomes sticky on scroll with smooth height, background, and shadow transitions.

## Features

- `position: sticky` with scroll-driven compact state
- Logo resizes and nav items remain accessible
- Backdrop blur and shadow added on sticky state
- Respects `prefers-reduced-motion`

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--sh-duration` | `0.3s` | Transition speed |
| `--sh-header-bg` | `rgba(15,23,42,0.9)` | Default header background |
| `--sh-sticky-bg` | `rgba(15,23,42,0.98)` | Sticky state background |
| `--sh-shadow` | `0 4px 30px rgba(0,0,0,0.3)` | Sticky state box shadow |
| `--sh-height` | `72px` | Default header height |