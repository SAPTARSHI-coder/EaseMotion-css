# Slide-Up Pricing Table — Glassmorphism UI Layouts

A CSS-only pricing table with three tiered cards that slide up on page load, featuring glassmorphism panels and a highlighted "Most Popular" tier.

## Features

- **Staggered slide-up entrance** — cards animate in one after another with increasing `animation-delay`
- **Glassmorphism cards** — semi-transparent panels with `backdrop-filter: blur(18px)` and subtle borders
- **Featured tier highlight** — middle card gets an accent border, glow shadow, and "Most Popular" badge
- **Hover lift effect** — cards rise up on hover with enhanced shadow
- **Fully responsive** — collapses to single-column layout below 700px
- **Reduced-motion accessible** — all animations and hover transforms disabled when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--sup-bg` | `#070b16` | Page background |
| `--sup-glass` | `rgba(255,255,255,0.05)` | Card fill |
| `--sup-glass-edge` | `rgba(255,255,255,0.1)` | Card border |
| `--sup-blur` | `18px` | Backdrop blur |
| `--sup-glow` | `rgba(0,0,0,0.4)` | Card shadow |
| `--sup-fg` | `#e4eaf8` | Primary text |
| `--sup-fg-dim` | `rgba(228,234,248,0.5)` | Secondary text |
| `--sup-accent` | `#818cf8` | Accent colour |
| `--sup-accent-bright` | `#a5b4fc` | Brighter accent |
| `--sup-border-dim` | `rgba(255,255,255,0.08)` | List divider |

## How It Works

1. Each card starts at `opacity: 0` and `translateY(28px)`.
2. The `supSlideUp` keyframe animates it to full opacity and natural position.
3. Staggered `animation-delay` values (0.1s, 0.22s, 0.34s) create a cascade entrance.
4. The featured card uses `::before` pseudo-element for the "Most Popular" badge.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Adjust the CSS custom properties to match your theme.
