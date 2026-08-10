# Morph-Glow Stepper — Glassmorphism UI Layouts

A CSS-only stepper where each step dot morphs from a circle to a rounded square and gains a glowing shadow on hover.

## Features

- **Morph effect** — step dots transition from `border-radius: 50%` (circle) to `border-radius: 30%` (squircle) on hover
- **Glow shadow** — the morphed dot emits a soft ambient glow using layered `box-shadow`
- **Scale pop** — the dot scales up slightly on hover for extra emphasis
- **Glassmorphism panels** — step content uses semi-transparent fill with `backdrop-filter: blur(18px)` and subtle borders
- **Vertical connector** — a thin line links all steps via a pseudo-element on the track
- **Staggered entrance** — steps fade in one after another with increasing `animation-delay`
- **Fully responsive** — adapts dot size, connector position, and padding on smaller screens
- **Reduced-motion accessible** — all morph, glow, and hover effects disabled when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--mgs-bg` | `#060a16` | Page background |
| `--mgs-glass` | `rgba(255,255,255,0.05)` | Panel fill |
| `--mgs-border` | `rgba(255,255,255,0.09)` | Panel border |
| `--mgs-blur` | `18px` | Backdrop blur |
| `--mgs-shadow` | `rgba(0,0,0,0.42)` | Panel shadow |
| `--mgs-text` | `#edf1ff` | Primary text |
| `--mgs-dim` | `rgba(237,241,255,0.46)` | Secondary text |
| `--mgs-amber` | `#fbbf24` | Accent colour |
| `--mgs-glow` | `rgba(251,191,36,0.25)` | Glow colour |

## How It Works

1. Each step dot starts as a circle with `border-radius: 50%`.
2. On hover, `border-radius` transitions to `30%` creating a squircle shape.
3. A layered `box-shadow` creates the ambient glow effect.
4. The `transform: scale(1.1)` adds a subtle pop.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to match your theme.
