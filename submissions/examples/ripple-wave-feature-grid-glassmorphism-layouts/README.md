# Ripple-Wave Feature Grid — Glassmorphism UI Layouts

A CSS-only feature grid where a circular ripple wave expands from the centre of each card on hover, wrapped in glassmorphism panels.

## Features

- **Ripple wave hover effect** — a circular pseudo-element expands from the card's centre on hover using `width` and `height` transitions with a cubic-bezier curve
- **Icon scale** — the icon scales up slightly on hover for extra feedback
- **Glassmorphism panels** — semi-transparent cards with `backdrop-filter: blur(18px)` and subtle borders
- **Staggered entrance** — cards fade in one after another with increasing `animation-delay`
- **Fully responsive** — collapses from 3-column to 2-column to single column on smaller screens
- **Reduced-motion accessible** — all animations, transitions, and hover effects disabled when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--rwfg-bg` | `#070a18` | Page background |
| `--rwfg-glass` | `rgba(255,255,255,0.05)` | Card fill |
| `--rwfg-border` | `rgba(255,255,255,0.09)` | Card border |
| `--rwfg-blur` | `18px` | Backdrop blur |
| `--rwfg-shadow` | `rgba(0,0,0,0.42)` | Card shadow |
| `--rwfg-text` | `#eef2ff` | Primary text |
| `--rwfg-dim` | `rgba(238,242,255,0.46)` | Secondary text |
| `--rwfg-blue` | `#60a5fa` | Icon accent |
| `--rwfg-blue-soft` | `rgba(96,165,250,0.15)` | Ripple colour |
| `--rwfg-violet` | `#a78bfa` | Title gradient |

## How It Works

1. Each card has a `::before` pseudo-element positioned at its centre with `width: 0; height: 0`.
2. On hover, the pseudo-element expands to `320px × 320px`, creating a circular ripple.
3. The transition uses `cubic-bezier(0.22, 1, 0.36, 1)` for a natural ease-out feel.
4. Content sits above the ripple using `z-index: 1` on child elements.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to match your theme.
