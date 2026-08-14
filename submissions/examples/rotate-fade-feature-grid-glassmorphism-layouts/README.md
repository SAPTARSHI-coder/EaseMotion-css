# Rotate-Fade Feature Grid — Glassmorphism UI Layouts

A CSS-only feature grid where icons rotate 360 degrees and fade in on hover, wrapped in glassmorphism panels.

## Features

- **Rotate-fade hover effect** — icon wrappers rotate a full 360 degrees and increase opacity on hover using a smooth cubic-bezier transition
- **Alternating rotation** — even-numbered cards rotate in the opposite direction for visual variety
- **Glassmorphism panels** — semi-transparent cards with `backdrop-filter: blur(18px)` and subtle borders
- **Staggered entrance** — cards fade in one after another with increasing `animation-delay`
- **Fully responsive** — collapses from 3-column to 2-column to single column on smaller screens
- **Reduced-motion accessible** — all animations and hover effects disabled when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--rffg-bg` | `#080c1a` | Page background |
| `--rffg-glass` | `rgba(255,255,255,0.05)` | Card fill |
| `--rffg-border` | `rgba(255,255,255,0.09)` | Card border |
| `--rffg-blur` | `18px` | Backdrop blur |
| `--rffg-shadow` | `rgba(0,0,0,0.42)` | Card shadow |
| `--rffg-text` | `#edf1ff` | Primary text |
| `--rffg-dim` | `rgba(237,241,255,0.46)` | Secondary text |
| `--rffg-amber` | `#f59e0b` | Icon accent |
| `--rffg-emerald` | `#34d399` | Badge accent |

## How It Works

1. Each card's icon wrapper starts at `rotate(0deg); opacity: 0.6`.
2. On hover, `rotate(360deg); opacity: 1` is applied with a smooth transition.
3. Even-numbered cards rotate the opposite way with `rotate(-360deg)`.
4. The background of the icon wrapper also shifts to a tinted version on hover.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to match your theme.
