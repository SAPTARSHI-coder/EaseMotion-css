# Blur-Entrance Pricing Table — Minimalist Tech Layouts

A pure CSS pricing table with blur-to-sharp entrance animation. Three tiered cards (Starter, Pro, Enterprise) fade in with a deblur effect on a clean light background with monospace typography.

## Features

- **Blur entrance animation** — cards start blurred and fade in with `filter: blur(12px)` transitioning to sharp
- **Staggered entrance** — each card has a different `animation-delay` for cascading reveal
- **Minimalist tech aesthetic** — light background, monospace font, clean borders, subtle dot decorations
- **Featured card highlight** — Pro card has blue border, shadow, and badge
- **Fully responsive** — stacks to single column on screens under 700px
- **Reduced-motion accessible** — all animations disabled, cards shown immediately when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--bpt-bg` | `#fafafa` | Page background |
| `--bpt-surface` | `#ffffff` | Card fill |
| `--bpt-border` | `#e5e7eb` | Border color |
| `--bpt-text` | `#1a1a2e` | Primary text |
| `--bpt-text-dim` | `#6b7280` | Secondary text |
| `--bpt-accent` | `#2563eb` | Primary accent (blue) |
| `--bpt-accent-light` | `rgba(37,99,235,0.08)` | Accent background tint |
| `--bpt-success` | `#10b981` | Feature check color |
| `--bpt-radius` | `10px` | Card border radius |
| `--bpt-blur` | `12px` | Entrance blur amount |
| `--bpt-duration` | `0.6s` | Animation duration |

## How It Works

1. Cards are initially set to `filter: blur(12px)` and `opacity: 0`.
2. The `bptBlurIn` keyframe animates both blur and opacity simultaneously, plus a subtle upward slide.
3. Each card has a staggered `animation-delay` (0.1s, 0.25s, 0.4s) for a cascading entrance.
4. Background decorative dots pulse with `bptDotPulse` keyframes.
5. On `prefers-reduced-motion: reduce`, all animations are removed and cards display instantly.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to adjust blur amount, accent colors, or animation timing.
