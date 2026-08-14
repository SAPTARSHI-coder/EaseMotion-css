# Zoom-In Feature Grid — Glassmorphism UI Layouts

A CSS-only feature grid where cards scale up on hover and reveal hidden detail text, wrapped in glassmorphism panels.

## Features

- **Zoom-in hover effect** — cards scale to `1.06` on hover with a smooth cubic-bezier transition
- **Reveal detail text** — hidden description text expands via `max-height` and `opacity` transition on hover
- **Glassmorphism panels** — semi-transparent cards with `backdrop-filter: blur(20px)` and subtle borders
- **Staggered entrance** — cards fade in one after another with increasing `animation-delay`
- **Fully responsive** — collapses from 3-column to 2-column to single column on smaller screens
- **Reduced-motion accessible** — all animations and hover effects disabled when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--zifg-bg` | `#080c18` | Page background |
| `--zifg-glass` | `rgba(255,255,255,0.05)` | Card fill |
| `--zifg-border` | `rgba(255,255,255,0.09)` | Card border |
| `--zifg-blur` | `20px` | Backdrop blur |
| `--zifg-shadow` | `rgba(0,0,0,0.4)` | Card shadow |
| `--zifg-text` | `#e8ecf8` | Primary text |
| `--zifg-dim` | `rgba(232,236,248,0.48)` | Secondary text |
| `--zifg-cyan` | `#22d3ee` | Primary accent |
| `--zifg-purple` | `#c084fc` | Secondary accent |

## How It Works

1. Each card has an inner panel with `scale(1)` by default.
2. On hover, `scale(1.06)` is applied with a smooth cubic-bezier transition.
3. The detail text starts at `max-height: 0; opacity: 0` and expands to full height on hover.
4. The `.zifg-tile` wrapper uses `overflow: hidden` and `border-radius` to clip the zoomed content cleanly.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to match your theme.
