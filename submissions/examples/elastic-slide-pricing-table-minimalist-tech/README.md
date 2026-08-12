# Elastic-Slide Pricing Table — Minimalist Tech Layouts

A pure CSS pricing table with bouncy elastic slide-in animation. Three tiered cards (Basic, Team, Scale) slide in from the left with an overshoot easing on a clean light background with monospace typography.

## Features

- **Elastic slide-in animation** — cards enter with `cubic-bezier(0.34, 1.56, 0.64, 1)` for a natural bouncy overshoot
- **Staggered entrance** — each card has a different `animation-delay` (0.08s, 0.2s, 0.32s) for cascading reveal
- **Minimalist tech aesthetic** — light gray background, monospace font, clean borders, checkmark feature list
- **Featured card highlight** — Team card has blue border, shadow, and ribbon badge
- **Button hover scale** — CTA buttons bounce slightly on hover with elastic easing
- **Fully responsive** — stacks to single column on mobile, switches to vertical slide animation
- **Reduced-motion accessible** — all animations disabled, cards shown immediately when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--esp-bg` | `#f5f5f7` | Page background |
| `--esp-surface` | `#ffffff` | Card fill |
| `--esp-border` | `#e0e0e4` | Border color |
| `--esp-text` | `#1d1d1f` | Primary text |
| `--esp-text-dim` | `#86868b` | Secondary text |
| `--esp-accent` | `#0071e3` | Primary accent (blue) |
| `--esp-accent-hover` | `#0077ed` | Accent hover state |
| `--esp-accent-light` | `rgba(0,113,227,0.07)` | Accent background tint |
| `--esp-green` | `#34c759` | Feature check color |
| `--esp-radius` | `12px` | Card border radius |
| `--esp-elastic` | `cubic-bezier(0.34,1.56,0.64,1)` | Elastic easing curve |

## How It Works

1. Cards start with `opacity: 0` and `translateX(-40px) scale(0.95)`.
2. The `espSlideIn` keyframe animates position, scale, and opacity using the elastic cubic-bezier.
3. Each card has a staggered `animation-delay` for a cascading entrance.
4. On mobile, a separate `espSlideUp` keyframe replaces the horizontal slide with a vertical one.
5. CTA buttons use the same elastic easing on hover for a subtle bounce effect.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to adjust accent colors, elastic bounce, or animation timing.
