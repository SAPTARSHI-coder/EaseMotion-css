# Glitch-Flicker Pricing Table — Minimalist Tech Layouts

A pure CSS pricing table with glitch-flicker entrance animation. Three tiered cards (Starter, Pro, Enterprise) flicker into view with a CRT-style effect on a clean light background with scanline overlay.

## Features

- **Glitch-flicker entrance** — cards appear through a rapid opacity flicker sequence mimicking a CRT boot
- **Glitch text effect** — header title periodically shifts with red/cyan text-shadow offset
- **Scanline background** — subtle horizontal scanlines across the entire page
- **Staggered entrance** — each card has a different `animation-delay` (0.1s, 0.2s, 0.3s) for cascading flicker
- **Minimalist tech aesthetic** — light background, monospace font, tilde (~) feature markers
- **Featured card highlight** — Pro card has purple border, shadow, and accent colors
- **Fully responsive** — stacks to single column on mobile, scanlines hidden
- **Reduced-motion accessible** — all animations and glitch effects disabled when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--gfp-bg` | `#f7f7f9` | Page background |
| `--gfp-surface` | `#ffffff` | Card fill |
| `--gfp-border` | `#e2e2e6` | Border color |
| `--gfp-text` | `#1a1a2e` | Primary text |
| `--gfp-text-dim` | `#7a7a8c` | Secondary text |
| `--gfp-accent` | `#6c5ce7` | Primary accent (purple) |
| `--gfp-accent-dim` | `rgba(108,92,231,0.08)` | Accent background tint |
| `--gfp-green` | `#00b894` | Feature marker color |
| `--gfp-radius` | `8px` | Card border radius |
| `--gfp-glitch-1` | `#ff6b6b` | Glitch offset color (red) |
| `--gfp-glitch-2` | `#48dbfb` | Glitch offset color (cyan) |

## How It Works

1. Cards use `gfpFlickerIn` keyframes — rapid opacity jumps from 0 to 1, simulating a CRT flicker.
2. Each card has a staggered `animation-delay` for a cascading entrance.
3. The header title uses `gfpGlitchText` keyframes — periodic red/cyan text-shadow offsets.
4. A repeating gradient creates subtle scanline overlay on the background.
5. On `prefers-reduced-motion: reduce`, all animations are removed and cards display instantly.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to adjust glitch colors, accent, or animation timing.
