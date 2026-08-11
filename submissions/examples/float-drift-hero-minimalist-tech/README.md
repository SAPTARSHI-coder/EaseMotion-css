# Float-Drift Hero Section — Minimalist Tech Layouts

A pure CSS hero section with floating drift animation. Content sits on a clean white card while three geometric shapes gently bob up and down in the background.

## Features

- **Float-drift animation** — three shapes drift vertically and rotate slightly with staggered timing
- **Orb background** — two blurred circles pulse and drift for subtle depth
- **Minimalist card layout** — white card on light gray background with clean borders
- **Pill badge + heading + body** — standard hero content structure
- **Two CTA buttons** — solid primary and outlined secondary with hover lift
- **Fully responsive** — buttons stack vertically on mobile, shapes scale down
- **Reduced-motion accessible** — all animations disabled when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--fdh-bg` | `#f0f0f3` | Page background |
| `--fdh-surface` | `#ffffff` | Hero card fill |
| `--fdh-border` | `#d8d8dd` | Border color |
| `--fdh-text` | `#1a1a26` | Primary text |
| `--fdh-dim` | `#7a7a8c` | Secondary text |
| `--fdh-indigo` | `#4f46e5` | Primary accent (indigo) |
| `--fdh-indigo-light` | `rgba(79,70,229,0.07)` | Accent background tint |
| `--fdh-radius` | `16px` | Hero card border radius |

## How It Works

1. Three shapes use `fdhFloatDrift` keyframes — translating Y and rotating slightly.
2. Each shape has a staggered `animation-delay` for varied drift timing.
3. Background orbs use `fdhOrbDrift` keyframes — translating and scaling subtly.
4. Buttons use `translateY(-1px)` on hover for a micro-lift effect.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to adjust accent colors, drift distance, or card radius.
