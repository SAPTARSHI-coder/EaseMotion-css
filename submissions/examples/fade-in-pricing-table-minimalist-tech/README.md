# Fade-In Pricing Table — Minimalist Tech Layouts

A pure CSS pricing table with smooth fade-and-scale entrance animation. Three tiered cards (Solo, Team, Business) fade in with a subtle scale effect on a dot-grid light background.

## Features

- **Fade-in entrance** — cards start transparent and scaled down, fading in with `opacity` and `scale` transition
- **Staggered timing** — each card has a different `animation-delay` (0.06s, 0.16s, 0.26s) for cascading reveal
- **Dot-grid background** — subtle repeating dot pattern at 24px intervals
- **Minimalist styling** — light background, sans-serif font, colored marker bars, rounded card corners
- **Featured card highlight** — Team card has teal border, shadow, flag badge, and accent button
- **Fully responsive** — stacks to single column on mobile
- **Reduced-motion accessible** — all animations disabled, cards shown immediately when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--fip-bg` | `#f2f2f5` | Page background |
| `--fip-surface` | `#ffffff` | Card fill |
| `--fip-border` | `#dcdce0` | Border color |
| `--fip-text` | `#1e1e2a` | Primary text |
| `--fip-dim` | `#6e6e80` | Secondary text |
| `--fip-teal` | `#0d9488` | Primary accent (teal) |
| `--fip-teal-bg` | `rgba(13,148,136,0.06)` | Accent background tint |
| `--fip-radius` | `14px` | Card border radius |

## How It Works

1. Cards are initially set to `opacity: 0` and `scale(0.94)`.
2. The `fipFadeIn` keyframe animates both properties to their final values.
3. Each card has a staggered `animation-delay` for a cascading entrance.
4. The background uses a `radial-gradient` dot pattern for a minimalist texture.
5. On `prefers-reduced-motion: reduce`, all animations are removed and cards display instantly.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to adjust accent colors, border radius, or animation timing.
