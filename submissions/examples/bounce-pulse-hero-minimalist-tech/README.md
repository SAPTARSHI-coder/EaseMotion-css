# Bounce-Pulse Hero Section — Minimalist Tech Layouts

A pure CSS hero section with bouncing pulse dots and a clean status badge. Three emerald dots bounce in sequence above the content, and a small status badge pulses gently at the bottom.

## Features

- **Bounce-pulse dots** — three dots bounce vertically with staggered timing and opacity pulse
- **Status badge** — a small pill with a pulsing green dot and "All systems operational" text
- **Minimalist card layout** — white card on light gray background with rounded corners
- **Two CTA buttons** — solid emerald primary and ghost secondary with hover lift
- **Fully responsive** — buttons stack vertically on mobile
- **Reduced-motion accessible** — all animations disabled, elements shown statically when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--bph-bg` | `#f5f5f8` | Page background |
| `--bph-surface` | `#ffffff` | Hero card fill |
| `--bph-border` | `#dcdce1` | Border color |
| `--bph-text` | `#1a1a26` | Primary text |
| `--bph-dim` | `#79798c` | Secondary text |
| `--bph-emerald` | `#059669` | Primary accent (emerald) |
| `--bph-emerald-soft` | `rgba(5,150,105,0.07)` | Accent background tint |
| `--bph-radius` | `16px` | Hero card border radius |

## How It Works

1. Three dots use `bphBouncePulse` keyframes — translating Y, scaling, and fading opacity.
2. Each dot has a staggered `animation-delay` (0s, 0.15s, 0.3s) for a wave effect.
3. The badge dot uses `bphBadgePulse` keyframes — a slower opacity cycle.
4. Buttons use `translateY(-1px)` on hover for a micro-lift.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to adjust accent color, dot size, or animation timing.
