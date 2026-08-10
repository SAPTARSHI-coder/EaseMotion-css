# Skew-Active Feature Grid — Glassmorphism UI Layouts

A CSS-only feature grid where cards skew on hover with alternating directions, wrapped in glassmorphism panels.

## Features

- **Skew hover effect** — cards tilt with `skewY(-2deg)` on hover; even-numbered cards tilt the opposite way for visual variety
- **Counter-skew icon** — each card's icon counter-rotates to stay upright while the card tilts
- **Glassmorphism panels** — semi-transparent cards with `backdrop-filter: blur(18px)` and subtle borders
- **Staggered entrance** — cards fade in one after another with increasing `animation-delay`
- **Fully responsive** — collapses from 3-column to 2-column to single column on smaller screens
- **Reduced-motion accessible** — all animations and hover transforms disabled when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--saf-bg` | `#090d1b` | Page background |
| `--saf-glass` | `rgba(255,255,255,0.05)` | Card fill |
| `--saf-glass-border` | `rgba(255,255,255,0.09)` | Card border |
| `--saf-blur` | `18px` | Backdrop blur |
| `--saf-shadow` | `rgba(0,0,0,0.4)` | Card shadow |
| `--saf-text` | `#e8ecf8` | Primary text |
| `--saf-text-dim` | `rgba(232,236,248,0.48)` | Secondary text |
| `--saf-orange` | `#fb923c` | Accent colour |
| `--saf-blue` | `#60a5fa` | Secondary accent |

## How It Works

1. Each card has `transform: skewY(0deg)` by default.
2. On hover, `skewY(-2deg)` is applied with a smooth cubic-bezier transition.
3. Even-numbered cards use `skewY(2deg)` for alternating tilt direction.
4. The icon inside each card counter-rotates with `skewY(2deg)` or `skewY(-2deg)` to remain visually upright.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to match your theme.
